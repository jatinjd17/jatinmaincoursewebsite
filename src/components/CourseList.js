import React from "react";
import styled from "styled-components";
import Tabs from "./Tabs";
// import { useCoursesContext } from "../context/courses_context";

const CourseList = () => {
  // const { courses } = useCoursesContext();

  return (
    <CoursesListWrapper>
      <div className="container">
        <div className="courses-list-top">
          <h1 class="font-extrabold text-5xl">A broad selection of courses</h1>
          <p>
            Choose from 204,000 online video courses with new additions
            publihsed every month
          </p>
        </div>

        <Tabs />
      </div>
    </CoursesListWrapper>
  );
};

const CoursesListWrapper = styled.div`
  padding: 40px 0;
  .courses-list-top p {
    font-size: 1.8rem;
  }
`;

export default CourseList;
