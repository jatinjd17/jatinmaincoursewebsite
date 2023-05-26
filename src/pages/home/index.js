import React, { useContext } from "react";
import styled from "styled-components";
import courses from "../../utils/data";
import { AuthContext } from "../../context/authcontext";
import { Context_data } from "../../context/context";
import StarRating from "../../components/StarRating";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

function Index() {
  const router = useRouter();
  const { message, setMessage, Userinfo, setUserinfo } =
    useContext(Context_data);

  const Card = (data) => {
    return (
      // <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2">
      //   <a href="#">
      //     <img
      //       class="p-8 rounded-t-lg"
      //       src="src/assets/images/data_science_4.jpg"
      //       alt="product image"
      //     />
      //   </a>
      //   <div class="px-5 pb-5">
      //     <a href="#">
      //       <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
      //         Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
      //       </h5>
      //     </a>
      //     <div class="flex items-center mt-2.5 mb-5">
      //       <svg
      //         aria-hidden="true"
      //         class="w-5 h-5 text-yellow-300"
      //         fill="currentColor"
      //         viewBox="0 0 20 20"
      //         xmlns="http://www.w3.org/2000/svg"
      //       >
      //         <title>First star</title>
      //         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      //       </svg>
      //       <svg
      //         aria-hidden="true"
      //         class="w-5 h-5 text-yellow-300"
      //         fill="currentColor"
      //         viewBox="0 0 20 20"
      //         xmlns="http://www.w3.org/2000/svg"
      //       >
      //         <title>Second star</title>
      //         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      //       </svg>
      //       <svg
      //         aria-hidden="true"
      //         class="w-5 h-5 text-yellow-300"
      //         fill="currentColor"
      //         viewBox="0 0 20 20"
      //         xmlns="http://www.w3.org/2000/svg"
      //       >
      //         <title>Third star</title>
      //         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      //       </svg>
      //       <svg
      //         aria-hidden="true"
      //         class="w-5 h-5 text-yellow-300"
      //         fill="currentColor"
      //         viewBox="0 0 20 20"
      //         xmlns="http://www.w3.org/2000/svg"
      //       >
      //         <title>Fourth star</title>
      //         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      //       </svg>
      //       <svg
      //         aria-hidden="true"
      //         class="w-5 h-5 text-yellow-300"
      //         fill="currentColor"
      //         viewBox="0 0 20 20"
      //         xmlns="http://www.w3.org/2000/svg"
      //       >
      //         <title>Fifth star</title>
      //         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      //       </svg>
      //       <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
      //         5.0
      //       </span>
      //     </div>
      //     <div class="flex items-center justify-between">
      //       <span class="text-3xl font-bold text-gray-900 dark:text-white">
      //         $599
      //       </span>
      //       <a
      //         onClick={() => {
      //           console.log(message);
      //           Userinfo != null
      //             ? router.push("/cartpage")
      //             : router.push("/login");
      //         }}
      //         // href="#"
      //         class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      //       >
      //         Add to cart
      //       </a>
      //     </div>
      //     <div class="flex items-center justify-between">
      //       <span class="text-3xl font-bold text-gray-900 dark:text-white">
      //         $599
      //       </span>
      //       <a
      //         onClick={() => {
      //           setUserinfo("jatinuserdata");
      //           // console.log(message);
      //           // Userinfo != null
      //           //   ? router.push("/cartpage")
      //           //   : router.push("/login");
      //         }}
      //         // href="#"
      //         class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      //       >
      //         Add to cart
      //       </a>
      //     </div>
      //   </div>
      //   {/* <button
      //     onClick={() => {
      //       console.log(message);
      //     }}
      //     title="New button"
      //   /> */}
      // </div>
      <CourseCard>
        <div>
          <div class="item-img">
            {/* <img src={data.image} alt={data.course_name} /> */}
            <Image
              // loader={GraphCMSImageLoader}
              src={data.image}
              width={400}
              height={400}
            />
          </div>
          <div class="item-body">
            <h5 class="item-name">{data.course_name}</h5>
            <span class="item-creator">{data.creator}</span>
            <div class="item-rating flex">
              <span class="rating-star-val">{data.rating_star}</span>
              <StarRating rating_star={data.rating_star} />
              <span class="rating-count">({data.rating_count})</span>
            </div>
            <div class="item-price">
              <span class="item-price-new">${data.discounted_price}</span>
              <span class="item-price-old">${data.actual_price}</span>
            </div>
          </div>
          <div class="item-btns flex">
            <div class="item-btn see-details-btn">
              <Link
                href={`/singlecourse/${data.id}`}
                class="item-btn see-details-btn"
              >
                See details
              </Link>
            </div>
            <div
              // to="/cart"
              class="item-btn add-to-cart-btn"
              onClick={() =>
                addToCart(
                  id,
                  image,
                  course_name,
                  creator,
                  discounted_price,
                  category
                )
              }
            >
              Add to cart
            </div>
          </div>
        </div>
      </CourseCard>
    );
  };
  return (
    <div>
      <div
        onClick={() => {
          setUserinfo(null);
        }}
      >
        Logout
      </div>
      <div class="flex flex-wrap">{courses.map((i) => Card(i))}</div>
    </div>
  );
}

const CourseCard = styled.div`
  margin-right: 20px;
  width: 280px;
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

export default Index;
