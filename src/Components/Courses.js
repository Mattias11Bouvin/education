import React from "react";
import { Link } from "react-router-dom";

function Courses({ courses }) {
  return (
    <div className="container">
      {courses.map((course) => (
        <div key={course.id} className={`course-block ${course.id}-block`}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <Link to={`/coursedetails/${course.id}`}>
            <button className="btn">Read more</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Courses;
