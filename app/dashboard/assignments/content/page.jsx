"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Tasks = () => {
  const router = useRouter();

  const [currentTab, setCurrentTab] = useState(0);
  const [task1Score, setTask1Score] = useState(null);
  const [task2Score, setTask2Score] = useState(null);
  const [task1Answers, setTask1Answers] = useState({});
  const [task2Order, setTask2Order] = useState(["Build", "Test", "Deploy", "Code", "Monitor"]); // Initial unordered steps

  const task1CorrectAnswers = {
    question1: "Continuous Integration",
    question2: "Infrastructure as Code",
    question3: "Automated Testing"
  };

  const task2CorrectOrder = ["Code", "Build", "Test", "Deploy", "Monitor"];

  const handleTask1Submit = () => {
    let score = 0;
    Object.keys(task1CorrectAnswers).forEach((key) => {
      if (task1Answers[key] === task1CorrectAnswers[key]) {
        score += 50; // Each question is worth 50 points
      }
    });
    setTask1Score(score);
    setCurrentTab(1); // Move to next tab after completing Task 1
  };

  const handleTask2Submit = () => {
    let score = 0;
    task2Order.forEach((step, index) => {
      if (step === task2CorrectOrder[index]) {
        score += 30; // Each correct step is worth 30 points
      }
    });
    setTask2Score(score);

    if (score === 150) {
      localStorage.setItem("assignment", "completed");
    }
    setCurrentTab(2); // Move to final tab after completing Task 2
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg space-y-8">
      <h1 className="text-2xl font-semibold">Tasks</h1>

      {/* Tab Navigation */}
      <div className="flex space-x-4">
        <button
          disabled={currentTab !== 0}
          onClick={() => setCurrentTab(0)}
          className={`py-2 px-4 rounded-lg ${currentTab === 0 ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"}`}
        >
          Task 1
        </button>
        <button
          disabled={currentTab !== 1}
          onClick={() => setCurrentTab(1)}
          className={`py-2 px-4 rounded-lg ${currentTab === 1 ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"}`}
        >
          Task 2
        </button>
        <button
          disabled={currentTab !== 2}
          onClick={() => setCurrentTab(2)}
          className={`py-2 px-4 rounded-lg ${currentTab === 2 ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"}`}
        >
          Complete the Course
        </button>
      </div>

      {/* Task Content */}
      {currentTab === 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Task 1: Multiple Choice Quiz (150 Points)</h2>
          <p>Answer the following questions:</p>
          <div>
            <label>
              1. What is a key practice in DevOps for merging code changes frequently?
              <div>
                {["Continuous Integration", "Continuous Delivery", "Continuous Deployment"].map((option) => (
                  <label key={option} className="block">
                    <input
                      type="radio"
                      name="question1"
                      value={option}
                      checked={task1Answers.question1 === option}
                      onChange={(e) => setTask1Answers({ ...task1Answers, question1: e.target.value })}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </label>
          </div>
          <div>
            <label>
              2. Which concept involves managing infrastructure through code?
              <div>
                {["Infrastructure as Code", "Configuration Management", "Cloud Computing"].map((option) => (
                  <label key={option} className="block">
                    <input
                      type="radio"
                      name="question2"
                      value={option}
                      checked={task1Answers.question2 === option}
                      onChange={(e) => setTask1Answers({ ...task1Answers, question2: e.target.value })}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </label>
          </div>
          <div>
            <label>
              3. Which testing approach is commonly automated in DevOps?
              <div>
                {["Unit Testing", "Load Testing", "Automated Testing"].map((option) => (
                  <label key={option} className="block">
                    <input
                      type="radio"
                      name="question3"
                      value={option}
                      checked={task1Answers.question3 === option}
                      onChange={(e) => setTask1Answers({ ...task1Answers, question3: e.target.value })}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </label>
          </div>
          <button
            onClick={handleTask1Submit}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Submit Task 1
          </button>
          {task1Score !== null && (
            <p className="mt-2 font-semibold">Your score for Task 1: {task1Score}/150</p>
          )}
        </div>
      )}

      {currentTab === 1 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Task 2: Arrange DevOps Steps (150 Points)</h2>
          <p>Drag and drop to arrange the steps in the correct DevOps workflow order:</p>
          <ul className="list-none space-y-2">
            {task2Order.map((step, index) => (
              <li key={index} className="border p-2 rounded bg-gray-200 cursor-pointer">
                {step}
              </li>
            ))}
          </ul>
          <button
            onClick={() => setTask2Order([...task2Order.reverse()])} // Mock drag-and-drop by reversing order
            className="mt-4 bg-gray-500 text-white py-1 px-3 rounded-lg"
          >
            Reverse Order (for demonstration)
          </button>
          <button
            onClick={handleTask2Submit}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Submit Task 2
          </button>
          {task2Score !== null && (
            <p className="mt-2 font-semibold">Your score for Task 2: {task2Score}/150</p>
          )}
        </div>
      )}

      {currentTab === 2 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Complete the Course</h2>
          <p>Congratulations! You have completed all tasks.</p>
          <button
            onClick={() => router.push("/dashboard/assignments")}
            className="bg-green-500 text-white py-2 px-4 rounded-lg"
          >
            Finish
          </button>
        </div>
      )}
    </div>
  );
};

export default Tasks;
