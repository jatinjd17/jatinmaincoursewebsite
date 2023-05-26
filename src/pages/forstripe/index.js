import React, { useContext, useEffect } from "react";
import { checkout } from "../../components/checkout";
import { Context_data } from "@/context/context";

function Stripee() {
  const {
    message,
    setMessage,
    Userinfo,
    setUserinfo,
    setCartlistinfo,
    cartlistinfo,
  } = useContext(Context_data);

  const data = [
    {
      price: "price_1NBuu1SHWTcfSpltD3NDJE5H",
      quantity: 1,
    },
    {
      price: "price_1NBwQMSHWTcfSpltMFWV7XG4",
      quantity: 1,
    },
  ];

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

  useEffect(() => {
    // GetPriceApi();
  }, []);

  return (
    <div>
      {Userinfo ? GetPriceApi() : null}
      Stripee
      <button
        onClick={() => {
          checkout({
            lineItems: newdata,
          });
        }}
      >
        BUY!
      </button>
      <button onClick={() => console.log(newdata)}>getdata</button>
    </div>
  );
}

export default Stripee;
