import CourseList from "@/components/CourseList";
import Navbar from "@/components/Navbar";
import Tabs from "@/components/Tabs";
import Courses from "@/components/courses";
import { Context_data } from "@/context/context";
import React, { useContext } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import Main from "@/components/main";

if (typeof window !== "undefined") {
  NProgress.configure({ showSpinner: true });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  Router.events.on("routeChangeError", () => {
    NProgress.done();
  });
}

function Index() {
  //   return <Courses />;
  //   return <Tabs />;
  const { Userinfo, setUserinfo, setCartlistinfo, cartlistinfo } =
    useContext(Context_data);
  return (
    <div>
      <div>{JSON.stringify(Userinfo)}</div>
      {/* <div>{JSON.stringify(Userinfo?.cartcourses.length)}</div> */}
      <Navbar />
      <Main />
      <CourseList />
      {/* <div>
          <video autoPlay loop style={{ width: "500px", height: "500px" }}>
            <source src="../../assets/1.mp4" />
          </video>
        </div> */}
    </div>
  );
}

export default Index;
