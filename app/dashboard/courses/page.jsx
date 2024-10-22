"use client";

import { useEffect, useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("http://localhost:4000/courses");
      const data = await response.json();
      setCourses(data.courses);
    };

    fetchCourses();
  }, []);

  // Filter courses based on the active tab
  const filteredCourses = () => {
    switch (activeTab) {
      case "ongoing":
        return courses.filter(course => course.status === "ongoing"); // Assuming 'status' exists
      case "completed":
        return courses.filter(course => course.status === "completed"); // Assuming 'status' exists
      default:
        return courses; // All courses
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      
      {/* Tabs for course categories */}
      <div className="mb-4 flex space-x-4">
        <button
          onClick={() => setActiveTab("all")}
          className={`py-2 px-4 rounded-lg ${activeTab === "all" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          All Courses (6)
        </button>
        <button
          onClick={() => setActiveTab("ongoing")}
          className={`py-2 px-4 rounded-lg ${activeTab === "ongoing" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          Ongoing (2)
        </button>
        <button
          onClick={() => setActiveTab("completed")}
          className={`py-2 px-4 rounded-lg ${activeTab === "completed" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          Completed (1)
        </button>
      </div>

      {/* Display filtered courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
        {filteredCourses().map((course) => (
          <div
            key={course._id}
            className="relative border rounded-lg overflow-hidden bg-white shadow-md"
          >
            <img
              src={`http://localhost:4000/${course.imageUrl}`}
              alt={course.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-semibold">{course.name}</h2>
                  <p className="text-sm text-gray-600">{course.lecName}</p>
                </div>
                <img
                  src={`http://localhost:4000/${course.lectureImage}`}
                  alt={course.lecName}
                  className="w-16 h-16 object-cover rounded-full border-2 border-white"
                />
              </div>
              <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
