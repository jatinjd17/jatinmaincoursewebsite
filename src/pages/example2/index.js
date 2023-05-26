import CourseList from "@/components/CourseList";
import Navbar from "@/components/Navbar";
import Tabs from "@/components/Tabs";
import Courses from "@/components/courses";
import { Context_data } from "@/context/context";
import React, { useContext } from "react";

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
