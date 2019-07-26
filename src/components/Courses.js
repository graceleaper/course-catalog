import React from "react";

const Courses = props => {
  return (
      <div className="flex-grid">
        {props.courses.map(course => {
          return (
            <div className="col" key={course.id}>
            <img className="course" alt="course preview" src={course.image} />
              <h3>{course.title}</h3>
              <p className="description">{course.description}</p>
              {course.pro ? <p className="pro">Pro</p> : null}
            </div>
          );
        })}
      </div>
  );
};

export default Courses;
