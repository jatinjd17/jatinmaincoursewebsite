import React, { useContext } from "react";
import styled from "styled-components";
import courses from "../utils/data";
import { AuthContext } from "../context/authcontext";
import { Context_data } from "../context/context";
import StarRating from "../components/StarRating";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { AddtoCart } from "@/actions/cartaction";

function Courses(props) {
  const {
    id,
    image,
    course_name,
    creator,
    actual_price,
    discounted_price,
    rating_count,
    rating_star,
    category,
  } = props;
  const router = useRouter();
  const {
    message,
    setMessage,
    Userinfo,
    setUserinfo,
    setCartlistinfo,
    cartlistinfo,
  } = useContext(Context_data);

  // const arr = fromDb || [];

  //   const Card = (data) => {
  //     return (
  //       <CourseCard>
  //         <div>
  //           <div class="item-img">
  //             {/* <img src={data.image} alt={data.course_name} /> */}
  //             <Image
  //               // loader={GraphCMSImageLoader}
  //               src={data.image}
  //               width={400}
  //               height={400}
  //             />
  //           </div>
  //           <div class="item-body">
  //             <h5 class="item-name">{data.course_name}</h5>
  //             <span class="item-creator">{data.creator}</span>
  //             <div class="item-rating flex">
  //               <span class="rating-star-val">{data.rating_star}</span>
  //               <StarRating rating_star={data.rating_star} />
  //               <span class="rating-count">({data.rating_count})</span>
  //             </div>
  //             <div class="item-price">
  //               <span class="item-price-new">${data.discounted_price}</span>
  //               <span class="item-price-old">${data.actual_price}</span>
  //             </div>
  //           </div>
  //           <div class="item-btns flex">
  //             <div class="item-btn see-details-btn">
  //               {/* <Link href={`/courses/${data.id}`} class="item-btn see-details-btn"> */}
  //               See details
  //               {/* </Link> */}
  //             </div>
  //             <div
  //               // to="/cart"
  //               class="item-btn add-to-cart-btn"
  //               onClick={() =>
  //                 addToCart(
  //                   id,
  //                   image,
  //                   course_name,
  //                   creator,
  //                   discounted_price,
  //                   category
  //                 )
  //               }
  //             >
  //               Add to cart
  //             </div>
  //           </div>
  //         </div>
  //       </CourseCard>
  //     );
  //   };
  return (
    <CourseCard>
      <div className="item-img">
        <Image src={image} width={200} height={200} />
      </div>
      <div className="item-body">
        <h5 className="item-name">{course_name}</h5>
        <span className="item-creator">{creator}</span>
        <div className="item-rating flex">
          <span className="rating-star-val">{rating_star}</span>
          <StarRating rating_star={rating_star} />
          <span className="rating-count">({rating_count})</span>
        </div>
        <div className="item-price">
          <span className="item-price-new">${discounted_price}</span>
          <span className="item-price-old">${actual_price}</span>
        </div>
      </div>
      <div className="item-btns flex">
        <Link href={`/singlecourse/${id}`} className="item-btn see-details-btn">
          See details
        </Link>
        {/* {cartlistinfo.includes('jane')} */}
        {/* {cartlistinfo.filter((e) => e?.coursename === course_name).length > */}
        {Userinfo?.cartcourses?.filter((e) => e?.title === course_name).length >
        0 ? (
          <div>Added To Cart</div>
        ) : (
          <div
            // href="/cartpage"
            className="item-btn add-to-cart-btn"
            onClick={() => {
              const coursedata = {
                title: course_name,
                price: discounted_price,
              };
              const email = Userinfo.email;
              AddtoCart(email, coursedata)
                .then((data) => {
                  console.log(data);
                  if (data.success) {
                    localStorage.setItem("userdata", JSON.stringify(data.data));
                    setUserinfo(data.data);
                  }
                })
                .catch((e) => {
                  console.log(e);
                });
              // setCartlistinfo([
              //   ...cartlistinfo,
              //   {
              //     coursename: course_name,
              //     price: discounted_price,
              //   },
              // ]);

              // localStorage.setItem("cartdata", data);
            }}
          >
            Add to cart
          </div>
        )}
      </div>
    </CourseCard>
    // <CourseCard>
    //   <div>
    //     <div class="item-img">
    //       {/* <img src={data.image} alt={data.course_name} /> */}
    //       <Image
    //         // loader={GraphCMSImageLoader}
    //         src={data.image}
    //         width={400}
    //         height={400}
    //       />
    //     </div>
    //     <div class="item-body">
    //       <h5 class="item-name">{data.course_name}</h5>
    //       <span class="item-creator">{data.creator}</span>
    //       <div class="item-rating flex">
    //         <span class="rating-star-val">{data.rating_star}</span>
    //         <StarRating rating_star={data.rating_star} />
    //         <span class="rating-count">({data.rating_count})</span>
    //       </div>
    //       <div class="item-price">
    //         <span class="item-price-new">${data.discounted_price}</span>
    //         <span class="item-price-old">${data.actual_price}</span>
    //       </div>
    //     </div>
    //     <div class="item-btns flex">
    //       <div class="item-btn see-details-btn">
    //         {/* <Link href={`/courses/${data.id}`} class="item-btn see-details-btn"> */}
    //         See details
    //         {/* </Link> */}
    //       </div>
    //       <div
    //         // to="/cart"
    //         class="item-btn add-to-cart-btn"
    //         onClick={() =>
    //           addToCart(
    //             id,
    //             image,
    //             course_name,
    //             creator,
    //             discounted_price,
    //             category
    //           )
    //         }
    //       >
    //         Add to cart
    //       </div>
    //     </div>
    //   </div>
    // </CourseCard>
    // <div>
    //   <div
    //     onClick={() => {
    //       setUserinfo(null);
    //     }}
    //   >
    //     Logout
    //   </div>
    //   <div class="flex flex-wrap">{courses.map((i) => Card(i))}</div>
    // </div>
  );
}

const CourseCard = styled.div`
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
  display: flex;
  flex-direction: column;
  .item-body {
    margin: 14px 0;
    padding: 4px 18px;

    .item-name {
      font-size: 15px;
      line-height: 1.4;
      font-weight: 800;
    }
    .item-creator {
      font-size: 12.5px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.6);
    }
    .rating-star-val {
      margin-bottom: 5px;
      font-size: 14px;
      font-weight: 800;
      color: #b4690e;
      margin-right: 6px;
    }
    .rating-count {
      font-size: 12.5px;
      margin-left: 3px;
      font-weight: 500;
      opacity: 0.8;
    }
    .item-price-new {
      font-weight: 700;
      font-size: 15px;
    }
    .item-price-old {
      opacity: 0.8;
      font-weight: 500;
      text-decoration: line-through;
      font-size: 15px;
      margin-left: 8px;
    }
  }

  .item-btns {
    justify-self: flex-start;
    padding: 4px 8px 30px 18px;
    margin-top: auto;
    .item-btn {
      font-size: 15px;
      display: inline-block;
      padding: 6px 16px;
      font-weight: 700;
      transition: var(--transition);
      white-space: nowrap;

      &.see-details-btn {
        background-color: transparent;
        border: 1px solid var(--clr-black);
        margin-right: 5px;

        &:hover {
          background-color: rgba(0, 0, 0, 0.9);
          color: var(--clr-white);
        }
      }

      &.add-to-cart-btn {
        background: rgba(0, 0, 0, 0.9);
        color: var(--clr-white);
        border: 1px solid rgba(0, 0, 0, 0.9);

        &:hover {
          background-color: transparent;
          color: rgba(0, 0, 0, 0.9);
        }
      }
    }
  }
`;

// const CourseCard = styled.div`
//   margin-right: 20px;
//   width: 280px;
//   margin-bottom: 20px;
//   border: 1px solid rgba(0, 0, 0, 0.1);
//   box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
//   display: flex;
//   flex-direction: column;
//   .item-body {
//     margin: 14px 0;
//     padding: 4px 18px;

//     .item-name {
//       font-size: 15px;
//       line-height: 1.4;
//       font-weight: 800;
//     }
//     .item-creator {
//       font-size: 12.5px;
//       font-weight: 500;
//       color: rgba(0, 0, 0, 0.6);
//     }
//     .rating-star-val {
//       margin-bottom: 5px;
//       font-size: 14px;
//       font-weight: 800;
//       color: #b4690e;
//       margin-right: 6px;
//     }
//     .rating-count {
//       font-size: 12.5px;
//       margin-left: 3px;
//       font-weight: 500;
//       opacity: 0.8;
//     }
//     .item-price-new {
//       font-weight: 700;
//       font-size: 15px;
//     }
//     .item-price-old {
//       opacity: 0.8;
//       font-weight: 500;
//       text-decoration: line-through;
//       font-size: 15px;
//       margin-left: 8px;
//     }
//   }

//   .item-btns {
//     justify-self: flex-start;
//     padding: 4px 8px 30px 18px;
//     margin-top: auto;
//     .item-btn {
//       font-size: 15px;
//       display: inline-block;
//       padding: 6px 16px;
//       font-weight: 700;
//       transition: var(--transition);
//       white-space: nowrap;

//       &.see-details-btn {
//         background-color: transparent;
//         border: 1px solid var(--clr-black);
//         margin-right: 5px;

//         &:hover {
//           background-color: rgba(0, 0, 0, 0.9);
//           color: var(--clr-white);
//         }
//       }

//       &.add-to-cart-btn {
//         background: rgba(0, 0, 0, 0.9);
//         color: var(--clr-white);
//         border: 1px solid rgba(0, 0, 0, 0.9);

//         &:hover {
//           background-color: transparent;
//           color: rgba(0, 0, 0, 0.9);
//         }
//       }
//     }
//   }
// `;

export default Courses;
