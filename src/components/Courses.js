import React from "react";

const Courses = props => {
  return (
    <div className="flex-grid">
      {props.courses.map(course => {
        return (
          <div className="col" key={course.id}>
            <p>{course.title}</p>
            <p>Tags: {course.tags.sort().join(", ")}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Courses;
