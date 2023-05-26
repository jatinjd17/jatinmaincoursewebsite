import React, { useContext } from "react";
import styled from "styled-components";
import { MdMenu, MdShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { Context_data } from "@/context/context";
import { IconContext } from "react-icons";
import { useRouter } from "next/router";
// import { useSidebarContext } from '../context/sidebar_context';
// import { useCartContext } from '../context/cart_context';

const Navbar = () => {
  const router = useRouter();
  const {
    message,
    setMessage,
    Userinfo,
    setUserinfo,
    setCartlistinfo,
    cartlistinfo,
  } = useContext(Context_data);
  // const {total_items} = useCartContext();
  // const {openSidebar} = useSidebarContext();

  const onClickProfileIcon = () => {
    let value = localStorage.getItem("userdata");
    console.log(value);
    if (value == "null") {
      // setUserinfo(value);
      // <Link href={`/profile`} className="item-btn see-details-btn"></Link>;
      router.push("/login");
    } else {
      router.push("/profile");
    }
    console.log(value);
  };

  return (
    <NavbarWrapper className="bg-white flex">
      <div className="container w-100">
        <div className="brand-and-toggler flex flex-between w-100">
          <Link
            href="/example"
            className="navbar-brand text-uppercase ls-1 fw-8"
          >
            <span>c</span>oursean
          </Link>

          <div className="navbar-btns flex">
            <Link href="/cartpage" className="cart-btn">
              <MdShoppingCart />
              <span className="item-count-badge">
                {/* {cartlistinfo.length} */}
                {Userinfo?.cartcourses.length}
                {/* {total_items} */}
              </span>
            </Link>
            {/* <button
              type="button"
              className="sidebar-open-btn"
              // onClick={() => openSidebar()}
            >
              <MdMenu />
            </button> */}
            <IconContext.Provider
              value={{
                color: "orange",
                size: "1.8em",
                className: "global-class-name",
              }}
            >
              <button
                type="button"
                onClick={() => onClickProfileIcon()}

                // className="sidebar-open-btn"
                // onClick={() => openSidebar()}
              >
                <CgProfile />
              </button>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.nav`
  height: 80px;
  box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px,
    rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;

  .navbar-brand {
    font-size: 23px;
    span {
      color: var(--clr-orange);
    }
  }
  .cart-btn {
    margin-right: 18px;
    font-size: 23px;
    position: relative;
    .item-count-badge {
      background-color: var(--clr-orange);
      position: absolute;
      right: -10px;
      top: -10px;
      font-size: 12px;
      font-weight: 700;
      display: block;
      width: 23px;
      height: 23px;
      color: var(--clr-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .sidebar-open-btn {
    transition: all 300ms ease-in-out;
    &:hover {
      opacity: 0.7;
    }
  }
`;

export default Navbar;
