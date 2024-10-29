"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Assignments = () => {
  const router = useRouter();

  // Sample assignments data with two completed assignments for "Containerization with Docker"
  const assignments = [
    { id: 1, courseName: "DevOps for Beginners", chapter: "Chapter 1", duration: "2 hours", startDate: "2024-10-01", points: 150 },
    { id: 2, courseName: "Containerization with Docker", chapter: "Chapter 2", duration: "3 hours", startDate: "2024-09-15", status: "completed", points: 200 },
    { id: 3, courseName: "Containerization with Docker", chapter: "Chapter 3", duration: "2.5 hours", startDate: "2024-09-20", status: "completed", points: 150 }
  ];

  const [activeTab, setActiveTab] = useState("all");
  const [displayedAssignments, setDisplayedAssignments] = useState([]);

  useEffect(() => {
    const devOpsStatus = localStorage.getItem("assignment");

    const updatedAssignments = assignments.map((assignment) => {
      if (assignment.courseName === "DevOps for Beginners" && devOpsStatus) {
        assignment.status = devOpsStatus;
      }
      return assignment;
    });

    setDisplayedAssignments(
      updatedAssignments.filter((assignment) => 
        assignment.courseName !== "DevOps for Beginners" || devOpsStatus
      )
    );
  }, []);

  const filteredAssignments = () => {
    switch (activeTab) {
      case "ongoing":
        return displayedAssignments.filter((assignment) => assignment.status === "ongoing");
      case "pending":
        return displayedAssignments.filter((assignment) => assignment.status === "pending");
      case "completed":
        return displayedAssignments.filter((assignment) => assignment.status === "completed");
      default:
        return displayedAssignments;
    }
  };

  const handleActionClick = (assignment) => {
    if (assignment.status === "pending" || assignment.status === "ongoing") {
      router.push("/dashboard/assignments/content");
    } else if (assignment.status === "completed") {
      router.push(`/dashboard/achievements`);
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
            <div className="w-1/4">
              {assignment.courseName}
              <div className="text-sm text-gray-600">{assignment.chapter}</div>
            </div>
            <div className="w-1/6">{assignment.duration}</div>
            <div className="w-1/6">{assignment.startDate}</div>
            <div className="w-1/6">
              {assignment.status === "completed" ? (
                <span className="text-blue-600 font-semibold">{`Points: ${assignment.points}`}</span>
              ) : (
                <span className="text-gray-500">-</span>
              )}
            </div>
            <div className="w-1/6 font-semibold text-gray-700">
              {assignment.status ? (
                <span className={`${assignment.status === "completed" ? "text-green-500" : assignment.status === "ongoing" ? "text-blue-500" : "text-orange-500"}`}>
                  {assignment.status}
                </span>
              ) : (
                "-"
              )}
            </div>
            <div className="w-1/6">
              <button
                onClick={() => handleActionClick(assignment)}
                className={`py-1 px-3 rounded-lg ${
                  assignment.status === "completed" ? "bg-gray-300 text-gray-700" :
                  assignment.status === "ongoing" ? "bg-blue-500 text-white" : "bg-orange-500 text-white"
                }`}
              >
                {assignment.status === "completed" ? "View" : assignment.status === "ongoing" ? "Continue" : "Start"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
