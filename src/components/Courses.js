import React from "react";

const Courses = props => {
  return (
      <div className="flex-grid">
        {props.courses.map(course => {
          return (
            <div className="col" key={course.id}>
              <p>{course.title}</p>
              <img className="course" alt="course preview" src={course.image} />
              <p>{course.description}</p>
              {course.pro ? <p>Pro</p> : null}
            </div>
          );
        })}
      </div>
  );
};

export default Courses;
