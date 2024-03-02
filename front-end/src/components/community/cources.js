import React, { useState } from "react";
import Sidebar from "./courceData";
import CourseInfo from "./courceinfo";
import Footer from "./footer";

function Cources() {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleCourseSelection = (course) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter((c) => c !== course));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  return (
    <div className="app-container">
      <Sidebar
        courses={courseData}
        onCourseSelection={handleCourseSelection}
      />
      {/* <CourseInfo selectedCourses={selectedCourses} /> */}
      {/* <Footer numSelected={selectedCourses.length} totalCourses={courseData.length} /> */}
    </div>
  );
}

const courseData = [
  { id: 1, name: "Bootstrap", code: "one" },
  { id: 2, name: "React js", code: "two" },
  { id: 3, name: "Node js", code: "three" }
];

export default Cources;