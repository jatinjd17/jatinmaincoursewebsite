import React, { useContext } from "react";
import { useRouter } from "next/router";
import { Context_data } from "@/context/context";

function Profile() {
  const router = useRouter();
  const { Userinfo, setUserinfo, setCartlistinfo, cartlistinfo } =
    useContext(Context_data);
  const onClickLogout = () => {
    setUserinfo(null);
    localStorage.removeItem("userdata");
    router.push("/example");
  };
  return (
    <div>
      <div>Profile</div>
      <div>{Userinfo?.email}</div>
      <div
        onClick={() => {
          onClickLogout();
        }}
      >
        Logout
      </div>
    </div>
  );
}

export default Profile;
