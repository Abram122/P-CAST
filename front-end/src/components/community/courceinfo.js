import React from "react";

const CourseInfo = ({ selectedCourses }) => {
  return (
    <main className="course-info">
      <h2>Course Info</h2>
      <ul>
        {selectedCourses.map((course) => (
          <li key={course.id}>
            {course.name}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default CourseInfo;