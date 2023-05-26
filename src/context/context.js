import { createContext, useEffect, useState } from "react";

export const Context_data = createContext(null);

function Context({ children }) {
  const [message, setMessage] = useState("newmsg");
  const [Userinfo, setUserinfo] = useState(null);
  const [cartlistinfo, setCartlistinfo] = useState([]);

  // useEffect(() => {
  //   // localStorage.removeItem("userdata");
  //   const userData = JSON.parse(localStorage.getItem("userdata"));

  //   console.log(userData);

  //   if (userData) {
  //     setUserinfo(userData);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("userdata", JSON.stringify(Userinfo));
  //   // console.log(cartlistinfo);
  // }, [Userinfo]);

  useEffect(() => {
    console.log("newtrigger");
    // localStorage.removeItem("userdata");
    const userData = JSON.parse(localStorage.getItem("userdata"));
    const cartItemsData = JSON.parse(localStorage.getItem("cartdata"));

    if (userData) {
      setUserinfo(userData);
    }

    if (cartItemsData) {
      setCartlistinfo(cartItemsData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userdata", JSON.stringify(Userinfo));
    localStorage.setItem("cartdata", JSON.stringify(cartlistinfo));
    // console.log(cartlistinfo);
  }, [Userinfo, cartlistinfo]);

  return (
    <Context_data.Provider
      value={{
        message,
        setMessage,
        Userinfo,
        setUserinfo,
        cartlistinfo,
        setCartlistinfo,
      }}
    >
      {children}
    </Context_data.Provider>
  );
}

export default Context;
