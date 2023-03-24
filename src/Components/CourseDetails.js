import React from "react";
import { useParams } from "react-router-dom";

function CourseDetails(props) {
  const { courseId } = useParams();

  // Find the course that matches the courseId in the URL
  const course = props.courses.find((course) => course.id === courseId);

  // Render the course details
  return (
    <div className="coursedetails">
      <h2>Course details for {course.title}</h2>
      <p>{course.description}</p>
      <p>{course.information}</p>
    </div>
  );
}

export default CourseDetails;
