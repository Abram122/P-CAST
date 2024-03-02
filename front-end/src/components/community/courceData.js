import React, { useState } from "react";

const Sidebar = ({ courses, onCourseSelection }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="toggler" onClick={toggleOpen}>
        <h5>Current Course ({courses.length})</h5>
        <i
          className={
            isOpen ? "fi fi-rr-angle-small-up" : "fi fi-rr-angle-small-down"
          }
        ></i>
      </button>
      {isOpen && (
        <ul>
          {courses.map((course) => (
            <li key={course.id} onClick={() => onCourseSelection(course)}>
              <div className="box">
                <span
                  className={`course-color-indicator ${course.code}`}
                ></span>
              </div>
              <input
                type="checkbox"
                id={`course-${course.id}`}
                name={`course-${course.id}`}
                value={course.id}
                onChange={() => onCourseSelection(course)}
              />
              <label>{course.name}</label>
              <div className="box">1</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
