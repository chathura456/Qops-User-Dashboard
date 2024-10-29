"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Chapters = () => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [completedChapters, setCompletedChapters] = useState([false, false, false]);
  const router = useRouter();

  const chaptersContent = [
    {
      title: "Chapter 1: Introduction to DevOps",
      content: `
        In this chapter, we'll explore what DevOps is and why it's essential in modern software development.
        You'll learn the basic concepts of DevOps, including the combination of development and operations,
        continuous integration, and the benefits DevOps brings to a team.
      `,
      videoUrl: "https://drive.google.com/file/d/1D5Ic7CqKRCPnBghYIKxQJ7_XeiYmwYKg/preview"
    },
    {
      title: "Chapter 2: DevOps Tools and Technologies",
      content: `
        This chapter introduces you to core DevOps tools, including version control with Git, automation with Jenkins,
        and containerization with Docker. We'll discuss how these tools fit into the DevOps lifecycle and aid in 
        creating a streamlined pipeline from development to deployment.
      `,
      videoUrl: "https://drive.google.com/file/d/1syGVX2wv_LA2JOz_7FrbTuRGXWxIBctb/preview"
    },
    {
      title: "Chapter 3: Building a DevOps Culture",
      content: `
        DevOps isn't just about tools; it's about fostering a collaborative culture. In this chapter, we'll dive into
        key cultural aspects of DevOps, including breaking down silos, encouraging feedback loops, and implementing a 
        shift-left strategy. Additionally, we'll cover the importance of continuous learning, metrics, and measuring 
        success in DevOps transformations. Case studies from well-known organizations will be included to illustrate 
        how DevOps culture has transformed their workflows.
      `,
      imageUrl: "https://i0.wp.com/mia-platform.eu/wp-content/uploads/img-pagina-5.jpg" // Replace with actual image URL
    }
  ];

  const goToNextChapter = () => {
    if (currentChapter < chaptersContent.length) {
      const updatedChapters = [...completedChapters];
      updatedChapters[currentChapter] = true;
      setCompletedChapters(updatedChapters);
      setCurrentChapter((prev) => prev + 1);
    }
  };

  const handleSkip = () => {
    localStorage.setItem("assignment", "pending");
    router.push("/dashboard");
  };

  const handleContinue = () => {
    localStorage.setItem("assignment", "pending");
    router.push("/dashboard/assignments");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-xl font-semibold mb-4">DevOps for Beginners</h1>
      
      <div className="flex space-x-4 mb-8">
        {["Chapter 1", "Chapter 2", "Chapter 3", "Assignment"].map((tab, index) => (
          <button
            key={index}
            disabled={tab === "Assignment" && !completedChapters.every(Boolean)}
            onClick={() => setCurrentChapter(index)}
            className={`py-2 px-4 rounded-lg ${
              currentChapter === index ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            } ${tab === "Assignment" && !completedChapters.every(Boolean) ? "cursor-not-allowed" : ""}`}
          >
            {tab} {completedChapters[index] && tab !== "Assignment" && "✔"}
          </button>
        ))}
      </div>

      {/* Display content for the selected chapter or assignment */}
      <div className="mb-4">
        {currentChapter < chaptersContent.length ? (
          <div>
            <h2 className="text-lg font-semibold mb-2">{chaptersContent[currentChapter].title}</h2>
            <p className="text-gray-700 mb-4">{chaptersContent[currentChapter].content}</p>
            
            {/* Display video or image based on chapter */}
            {chaptersContent[currentChapter].videoUrl ? (
              <div className="relative mb-4" style={{ paddingTop: "66.67%" }}> {/* 3:2 Aspect Ratio */}
                <iframe
                  src={chaptersContent[currentChapter].videoUrl}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay"
                  title="Chapter Video"
                ></iframe>
              </div>
            ) : (
              <div className="relative mb-4" style={{ paddingTop: "66.67%" }}> {/* 3:2 Aspect Ratio */}
                <img
                  src={chaptersContent[currentChapter].imageUrl}
                  alt="DevOps Culture"
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                />
              </div>
            )}
            
            <button
              onClick={goToNextChapter}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              {currentChapter < chaptersContent.length - 1 ? "Next Chapter" : "Go to Assignment"}
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-lg font-semibold mb-2">Assignment</h2>
            <p className="text-gray-700 mb-4">This assignment will test your understanding of the DevOps fundamentals covered in the course.</p>
            <div className="flex space-x-4">
              <button onClick={handleSkip} className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400">
                Skip
              </button>
              <button onClick={handleContinue} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                Continue
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chapters;
