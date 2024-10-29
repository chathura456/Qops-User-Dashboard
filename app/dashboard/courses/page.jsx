"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all"); // New state for category filter
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:4000/courses");
        const data = await response.json();
        const coursesData = data.courses || data;
        
        // Assign the first course as "ongoing" and the second as "completed" for starter courses
        if (coursesData[0]) coursesData[0].status = "ongoing";
        if (coursesData[1]) coursesData[1].status = "completed";
        
        setCourses(coursesData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching courses:", err);
        setError("Failed to load courses.");
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Filter courses based on the active tab and category filter
  const filteredCourses = () => {
    return courses.filter((course) => {
      const matchesTab = 
        activeTab === "all" ||
        (activeTab === "ongoing" && course.status === "ongoing") ||
        (activeTab === "completed" && course.status === "completed");

      const matchesCategory = 
        categoryFilter === "all" || course.category === categoryFilter;

      return matchesTab && matchesCategory;
    });
  };

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {/* Tabs for course statuses */}
      <div className="mb-4 flex space-x-4">
        <button
          onClick={() => setActiveTab("all")}
          className={`py-2 px-4 rounded-lg ${activeTab === "all" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          All Courses
        </button>
        <button
          onClick={() => setActiveTab("ongoing")}
          className={`py-2 px-4 rounded-lg ${activeTab === "ongoing" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          Ongoing
        </button>
        <button
          onClick={() => setActiveTab("completed")}
          className={`py-2 px-4 rounded-lg ${activeTab === "completed" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          Completed
        </button>
      </div>

      {/* Dropdown for category filter */}
      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700">Filter by Category:</label>
        <select
          id="category"
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full p-2 border rounded"
          value={categoryFilter}
        >
          <option value="all">All Categories</option>
          <option value="starter">Starter</option>
          <option value="explorer">Explorer</option>
          <option value="achiever">Achiever</option>
          <option value="specialist">Specialist</option>
          <option value="guru">Guru</option>
        </select>
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
                  {course.category !== "starter" && (
                    <span className="text-red-500 font-bold">Locked</span>
                  )}
                </div>
                <img
                  src={`http://localhost:4000/${course.lectureImage}`}
                  alt={course.lecName}
                  className="w-16 h-16 object-cover rounded-full border-2 border-white"
                />
              </div>
              {course.category === "starter" ? (
                <Link href="/dashboard/courses/chapters" className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                  Enroll Now
                </Link>
              ) : (
                <button className="w-full mt-4 bg-gray-300 text-gray-500 py-2 rounded-lg cursor-not-allowed">
                  Locked
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
