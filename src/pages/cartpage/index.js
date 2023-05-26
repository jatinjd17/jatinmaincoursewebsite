import React, { useContext } from "react";
// import { useCartContext } from "../context/cart_context";
import styled from "styled-components";
import CartItem from "../../components/CartItem";
import { MdClear } from "react-icons/md";
import { Context_data } from "@/context/context";
import Navbar from "@/components/Navbar";
import { DeleteAllCartProduct } from "@/actions/cartaction";
import { checkout } from "../forstripe/checkout";

const CartPage = () => {
  const {
    message,
    setMessage,
    Userinfo,
    setUserinfo,
    cartlistinfo,
    setCartlistinfo,
  } = useContext(Context_data);

  // const sum = cartlistinfo?.reduce((accumulator, object) => {
  //   return accumulator + object.price;
  // }, 0);
  const sum = Userinfo?.cartcourses?.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 0);

  let newdata = [];

  const GetPriceApi = () => {
    console.log("gggggggg");
    Userinfo?.cartcourses?.map((course) => {
      console.log(course.price_api);
      const daa = {
        price: course.price_api,
        quantity: 1,
      };
      newdata.push(daa);
    });
  };

  //   const {
  //     cart: cartItems,
  //     total_items,
  //     total_amount,
  //     clearCart,
  //   } = useCartContext();

  //   if (cartItems.length < 1) {
  //     return (
  //       <NotFoundWrapper>
  //         <div className="container">No items found in the cart.</div>
  //       </NotFoundWrapper>
  //     );
  //   }

  return (
    <div>
      <Navbar />
      <CartWrapper>
        {Userinfo ? GetPriceApi() : null}
        <div className="container">
          <div className="cart-pg-title">
            <h3>Shopping Cart</h3>
          </div>
          <div className="cart-grid grid">
            {/* card grid left */}
            <div className="cart-grid-left">
              <div className="flex flex-wrap flex-between">
                <div className="cart-count-info">
                  <span className="fw-7 fs-18">{/* {total_items} */}</span>{" "}
                  Course in Cart
                </div>
                <button
                  type="button"
                  className="cart-clear-btn flex fs-15 fw-6 text"
                  onClick={
                    () => {
                      const email = Userinfo?.email;
                      DeleteAllCartProduct(email).then((data) => {
                        if (data.success) {
                          localStorage.setItem(
                            "userdata",
                            JSON.stringify(data.data)
                          );
                          setUserinfo(data.data);
                        }
                      });
                    }
                    // {
                    //   setCartlistinfo([]);
                    // }
                  }
                >
                  <MdClear className="text-pink" />
                  <span className="d-inline-block text-pink">Clear All</span>
                </button>
              </div>
              <div className="cart-items-list grid">
                {/* <CartItem /> */}
                {/* {cartlistinfo.map((cartinfo) => {
                  return <CartItem cartItem={cartinfo} />;
                })} */}
                {Userinfo?.cartcourses?.map((cartinfo) => {
                  return <CartItem cartItem={cartinfo} />;
                })}
                {/* <CartItemist /> */}
              </div>
              {/* <div className="cart-items-list grid">
              {cartItems.map((cartItem) => {
                return <CartItem key={cartItem.courseID} cartItem={cartItem} />;
              })}
            </div> */}
            </div>
            {/* end of grid left */}
            {/* cart grid right */}
            <div className="cart-grid-right">
              <div className="cart-total">
                <span className="d-block fs-18 fw-6">Total:</span>
                <div className="cart-total-value fw-8">
                  {sum?.toFixed(2)}
                  {/* ${total_amount.toFixed(2)} */}
                </div>
                <button
                  type="button"
                  className="checkout-btn bg-purple text-white fw-6"
                  onClick={() => {
                    checkout({
                      lineItems: newdata,
                    });
                  }}
                >
                  Checkout
                </button>
              </div>
            </div>
            {/* end of cart grid right */}
          </div>
        </div>
      </CartWrapper>
    </div>
  );
};

const NotFoundWrapper = styled.div`
  padding: 30px 0;
  font-weight: 600;
`;

const CartWrapper = styled.div`
  padding: 30px 0;
  .card-pg-title {
    padding: 20px 0 6px 0;
  }
  .cart-grid {
    row-gap: 40px;
    .cart-grid-left {
      margin-bottom: 30px;
    }

    .cart-clear-btn {
      span {
        margin-left: 6px;
      }
    }

    .cart-items-list {
      margin-top: 20px;
      row-gap: 12px;
    }
    .cart-total-value {
      font-size: 34px;
    }
    .checkout-btn {
      padding: 14px 28px;
      letter-spacing: 1px;
      margin-top: 12px;
      transition: var(--transition);

      &:hover {
        background-color: var(--clr-dark);
      }
    }
    .cart-total {
      padding-bottom: 50px;
    }

    @media screen and (min-width: 992px) {
      grid-template-columns: 70% 30%;
      column-gap: 32px;
    }
  }
`;

export default CartPage;
