import React, { useContext } from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { Context_data } from "@/context/context";
import { DeleteCartProduct } from "@/actions/cartaction";
// import { useCartContext } from '../context/cart_context';

const CartItem = ({ cartItem }) => {
  const {
    message,
    setMessage,
    Userinfo,
    setUserinfo,
    setCartlistinfo,
    cartlistinfo,
  } = useContext(Context_data);
  // const {removeFromCart} = useCartContext();

  return (
    <CartItemWrapper className="grid">
      <div className="cart-item-img">
        {/* <img src={cartItem.image} alt={cartItem.course_name} /> */}
      </div>
      <div className="cart-item-info">
        <p className="fw-7 fs-15">{cartItem.title}</p>
        <span className="cart-item-creator fs-13 opacity-09">By creator</span>
        <div className="fw-7 text-purple">{cartItem.price}</div>
        <div className="cart-item-category bg-orange fs-12 d-inline-block text-capitalize text-white fw-7">
          category
        </div>
        <br />
        <button
          type="button"
          className="remove-btn fs-13 text-dark fw-6"
          onClick={
            () => {
              console.log("delete trigger");
              const email = Userinfo?.email;
              const title = cartItem?.title;
              DeleteCartProduct(email, title).then((data) => {
                if (data.success) {
                  console.log(data.data);
                  localStorage.setItem("userdata", JSON.stringify(data.data));
                  setUserinfo(data.data);
                }
              });
            }

            // setCartlistinfo((prevItems) =>
            //   prevItems.filter(
            //     (item) => item.coursename !== cartItem.coursename
            //   )
            // )
          }
        >
          Remove{" "}
          <span>
            <FaTrashAlt />
          </span>
        </button>
      </div>
    </CartItemWrapper>
  );
};

const CartItemWrapper = styled.div`
  grid-template-columns: 110px auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;

  .cart-item-img {
    width: 100px;
    height: 100px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .cart-item-category {
    padding: 0px 10px;
    border-radius: 6px;
  }
  .remove-btn {
    margin-top: 16px;
    transition: var(--transition);
    &:hover {
      color: var(--clr-purple);
    }
  }
`;

export default CartItem;
