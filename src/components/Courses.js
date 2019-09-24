import React from "react";
// import fetchAuthorData from "../fetchAuthorData";

const Courses = props => {
  // console.log(fetchAuthorData())

  const allCourses = props.courses.map(course => {
    return (
      <div className="col" key={course.id}>
      <img className="course" alt="course preview" src={course.image} />
        <h3>{course.title}</h3>
        <p className="description">{course.description}</p>
        {course.pro ? <p className="pro">Pro</p> : null}
      </div>
    );
  })

  return (
      <div className="flex-grid">
      {allCourses}
      </div>
  );
};

export default Courses;
