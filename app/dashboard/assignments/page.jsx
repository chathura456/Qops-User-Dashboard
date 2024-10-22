"use client";

import { useState } from "react";

const Assignments = () => {
  // Updated assignments data related to the courses
  const assignments = [
    { id: 1, courseName: "Kubernetes for Beginners", chapter: "Chapter 1", assignmentName: "Setup Kubernetes", duration: "2 hours", startDate: "2024-10-01", status: "ongoing" },
    { id: 2, courseName: "Containerization with Docker", chapter: "Chapter 2", assignmentName: "Install Docker", duration: "3 hours", startDate: "2024-09-15", status: "pending" },
    { id: 3, courseName: "Kubernetes for Beginners", chapter: "Chapter 3", assignmentName: "Deploy a Pod", duration: "4 hours", startDate: "2024-10-05", status: "ongoing" },
    { id: 4, courseName: "Containerization with Docker", chapter: "Chapter 1", assignmentName: "Build a Container", duration: "5 hours", startDate: "2024-09-20", status: "pending" },
    { id: 5, courseName: "CI/CD with Jenkins", chapter: "Chapter 4", assignmentName: "Create Jenkins Pipeline", duration: "3 hours", startDate: "2024-09-30", status: "ongoing" },
    { id: 6, courseName: "Kubernetes for Beginners", chapter: "Chapter 4", assignmentName: "Manage Cluster Nodes", duration: "2.5 hours", startDate: "2024-09-25", status: "pending" },
    { id: 7, courseName: "Containerization with Docker", chapter: "Chapter 3", assignmentName: "Optimize Docker Image", duration: "2 hours", startDate: "2024-10-10", status: "ongoing" },
    { id: 8, courseName: "CI/CD with Jenkins", chapter: "Chapter 2", assignmentName: "Install Jenkins", duration: "1.5 hours", startDate: "2024-09-28", status: "pending" },
];

  const [activeTab, setActiveTab] = useState("all");

  // Filter assignments based on the selected tab
  const filteredAssignments = () => {
    switch (activeTab) {
      case "ongoing":
        return assignments.filter((assignment) => assignment.status === "ongoing");
      case "pending":
        return assignments.filter((assignment) => assignment.status === "pending");
      case "completed":
        return assignments.filter((assignment) => assignment.status === "completed"); // Assuming completed status
      default:
        return assignments; // All assignments
    }
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md w-full">

      {/* Tabs for filtering assignments */}
      <div className="mb-4 flex space-x-4">
        <button
          onClick={() => setActiveTab("all")}
          className={`py-2 px-4 rounded-lg ${activeTab === "all" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          All
        </button>
        <button
          onClick={() => setActiveTab("ongoing")}
          className={`py-2 px-4 rounded-lg ${activeTab === "ongoing" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          Ongoing
        </button>
        <button
          onClick={() => setActiveTab("pending")}
          className={`py-2 px-4 rounded-lg ${activeTab === "pending" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          Pending
        </button>
        <button
          onClick={() => setActiveTab("completed")}
          className={`py-2 px-4 rounded-lg ${activeTab === "completed" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          Completed
        </button>
      </div>

      {/* Scrollable table for assignments */}
      <div className="min-h-96 overflow-y-auto">
        {filteredAssignments().map((assignment) => (
          <div key={assignment.id} className="flex justify-between items-center p-4 mb-2 bg-gray-100 rounded-lg">
            <div className="w-1/3">
              {assignment.courseName}
              <div className="text-sm text-gray-600">{assignment.chapter}</div>
            </div>
            <div className="w-1/4">{assignment.assignmentName}</div>
            <div className="w-1/4">{assignment.duration}</div>
            <div className="w-1/4">{assignment.startDate}</div>
            <div className={`font-semibold ${assignment.status === 'ongoing' ? 'text-green-500' : assignment.status === 'pending' ? 'text-orange-500' : 'text-gray-500'}`}>
              {assignment.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
