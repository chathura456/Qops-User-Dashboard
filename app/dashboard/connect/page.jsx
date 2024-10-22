"use client";
import { useState } from "react";
import { MdBookmark, MdComment, MdThumbUp } from "react-icons/md";

const Forum = () => {
  const [activeMainTab, setActiveMainTab] = useState("Questions"); // Main tab state
  const [expandedQuestions, setExpandedQuestions] = useState({}); // Track expanded top questions
  const [showAllAnswers, setShowAllAnswers] = useState({}); // Track expanded answers in all questions
  const [showComments, setShowComments] = useState(null);

  const topQuestions = [
    {
      question: "What are the best DevOps tools for CI/CD?",
      tags: ["CI/CD", "Jenkins", "DevOps"],
      answers: [
        {
          answer: "Jenkins is widely used for CI/CD in DevOps pipelines.",
          answeredBy: "Alice",
        },
        {
          answer: "GitLab CI is also a popular tool for CI/CD.",
          answeredBy: "Bob",
        },
      ],
    },
    {
      question: "How do I manage secrets in DevOps pipelines?",
      tags: ["Security", "Secrets", "DevOps"],
      answers: [
        {
          answer:
            "Tools like HashiCorp Vault and AWS Secrets Manager are great for managing secrets.",
          answeredBy: "John",
        },
        {
          answer:
            "You can also use Kubernetes Secrets to store sensitive information.",
          answeredBy: "Sarah",
        },
      ],
    },
    {
      question: "What is the role of Docker in DevOps?",
      tags: ["Docker", "Containers", "DevOps"],
      answers: [
        {
          answer:
            "Docker allows you to containerize applications for consistency across environments.",
          answeredBy: "Michael",
        },
      ],
    },
    {
      question: "How can I implement monitoring in DevOps?",
      tags: ["Monitoring", "Prometheus", "DevOps"],
      answers: [
        {
          answer:
            "Prometheus and Grafana are popular tools for monitoring in DevOps.",
          answeredBy: "Linda",
        },
        {
          answer:
            "You can also integrate monitoring with cloud services like AWS CloudWatch.",
          answeredBy: "Tom",
        },
      ],
    },
    {
      question:
        "What is Infrastructure as Code (IaC) and how does it help in DevOps?",
      tags: ["IaC", "Terraform", "DevOps"],
      answers: [
        {
          answer:
            "Infrastructure as Code allows you to automate infrastructure provisioning with tools like Terraform.",
          answeredBy: "Emma",
        },
      ],
    },
    {
      question: "How can I optimize CI pipelines for faster builds?",
      tags: ["CI/CD", "Optimization", "DevOps"],
      answers: [
        {
          answer:
            "Use caching in your pipelines and parallelize tasks to speed up builds.",
          answeredBy: "Chris",
        },
        {
          answer:
            "Make sure to only run tests relevant to code changes to save time.",
          answeredBy: "David",
        },
      ],
    },
  ];

  const allQuestions = [
    {
      question: "How does container orchestration work in Kubernetes?",
      tags: ["Kubernetes", "Containers", "DevOps"],
      answers: [
        {
          answer:
            "Kubernetes automates deployment, scaling, and management of containerized apps.",
          answeredBy: "John",
        },
      ],
    },
    {
      question:
        "What are the benefits of using Terraform for infrastructure management?",
      tags: ["Terraform", "IaC", "DevOps"],
      answers: [
        {
          answer:
            "Terraform allows for declarative infrastructure provisioning and multi-cloud support.",
          answeredBy: "Sarah",
        },
      ],
    },
    {
      question: "How do I implement security scanning in CI/CD pipelines?",
      tags: ["Security", "CI/CD", "DevOps"],
      answers: [
        {
          answer:
            "You can integrate tools like SonarQube or Snyk for security scanning in CI/CD pipelines.",
          answeredBy: "Michael",
        },
      ],
    },
    {
      question: "What is the difference between Docker and Podman?",
      tags: ["Docker", "Podman", "Containers"],
      answers: [
        {
          answer:
            "Podman is a daemonless container engine, while Docker relies on a daemon.",
          answeredBy: "Tom",
        },
      ],
    },
    {
      question: "How does GitOps improve DevOps workflows?",
      tags: ["GitOps", "DevOps", "Automation"],
      answers: [
        {
          answer:
            "GitOps ensures that infrastructure changes are versioned and auditable, improving DevOps workflows.",
          answeredBy: "Emma",
        },
      ],
    },
    {
      question: "How do you manage multi-cloud environments in DevOps?",
      tags: ["Multi-cloud", "DevOps", "Cloud"],
      answers: [
        {
          answer:
            "Tools like Terraform and Kubernetes help manage resources across multiple cloud providers.",
          answeredBy: "Chris",
        },
      ],
    },
    {
      question: "What are the best practices for managing CI/CD pipelines?",
      tags: ["CI/CD", "Best Practices", "DevOps"],
      answers: [
        {
          answer:
            "Use automation tools, version control, and parallel testing to manage CI/CD pipelines effectively.",
          answeredBy: "David",
        },
      ],
    },
    {
      question: "How does AWS Lambda fit into DevOps workflows?",
      tags: ["AWS Lambda", "Serverless", "DevOps"],
      answers: [
        {
          answer:
            "AWS Lambda can be used for automating tasks without managing servers, fitting well into DevOps workflows.",
          answeredBy: "Alice",
        },
      ],
    },
    {
      question:
        "What are the challenges of scaling DevOps practices across teams?",
      tags: ["Scaling", "Challenges", "DevOps"],
      answers: [
        {
          answer:
            "Standardizing tools and workflows across teams is one of the main challenges when scaling DevOps.",
          answeredBy: "Bob",
        },
      ],
    },
  ];

  const discussions = [
    {
      name: "Alice",
      imageUrl:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/64/e9c91436254d768b5ddb328579b536/DevOps_PC_Image_Final.png",
      description: "Just finished setting up Jenkins for our CI pipeline!",
      postedBy: "Alice",
      likes: 5,
      comments: [{ comment: "Great work!", answeredBy: "Bob" }],
    },
    {
      name: "John",
      imageUrl:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/49/0a3d1264604771a8781659a8f7ef12/test_image-01.png",
      description:
        "Deployed my first containerized app on Kubernetes. The orchestration is fantastic!",
      postedBy: "John",
      likes: 8,
      comments: [
        {
          comment: "Kubernetes is indeed a game changer!",
          answeredBy: "Sarah",
        },
      ],
    },
    {
      name: "Sarah",
      imageUrl:
        "https://devtron.ai/blog/content/images/2024/01/DevOps-Platform.png",
      description:
        "Exploring Terraform for managing multi-cloud infrastructure. The flexibility is amazing!",
      postedBy: "Sarah",
      likes: 10,
      comments: [
        {
          comment: "Terraform's IaC capabilities are unmatched.",
          answeredBy: "Michael",
        },
      ],
    },
    {
      name: "Michael",
      imageUrl:
        "https://devtron.ai/blog/content/images/2024/01/DevOps-Platform.png",
      description:
        "Started implementing Prometheus for monitoring in our DevOps pipeline. Metrics everywhere!",
      postedBy: "Michael",
      likes: 4,
      comments: [
        {
          comment: "Prometheus works great with Grafana for visualizations.",
          answeredBy: "Chris",
        },
      ],
    },
    {
      name: "Emma",
      imageUrl:
        "https://devtron.ai/blog/content/images/2024/01/DevOps-Platform.png",
      description:
        "CI pipeline optimization: Caching and parallel tasks are the way to go!",
      postedBy: "Emma",
      likes: 7,
      comments: [
        {
          comment: "Totally agree! It speeds up our builds significantly.",
          answeredBy: "David",
        },
      ],
    },
    {
      name: "Chris",
      imageUrl:
        "https://devtron.ai/blog/content/images/2024/01/DevOps-Platform.png",
      description:
        "Exploring GitOps for infrastructure management. Version control is key!",
      postedBy: "Chris",
      likes: 6,
      comments: [
        {
          comment: "GitOps brings a whole new level of automation to DevOps.",
          answeredBy: "Tom",
        },
      ],
    },
    {
      name: "David",
      imageUrl:
        "https://devtron.ai/blog/content/images/2024/01/DevOps-Platform.png",
      description:
        "Running SonarQube in our CI pipeline for security scanning. Results look promising!",
      postedBy: "David",
      likes: 3,
      comments: [
        {
          comment: "Security scanning is a must for CI/CD pipelines.",
          answeredBy: "Alice",
        },
      ],
    },
    {
      name: "Tom",
      imageUrl:
        "https://devtron.ai/blog/content/images/2024/01/DevOps-Platform.png",
      description:
        "Just migrated our app from Docker to Podman. Loving the daemonless architecture!",
      postedBy: "Tom",
      likes: 2,
      comments: [
        {
          comment: "Podman is definitely a great alternative to Docker.",
          answeredBy: "John",
        },
      ],
    },
    {
      name: "Linda",
      imageUrl:
        "https://devtron.ai/blog/content/images/2024/01/DevOps-Platform.png",
      description:
        "Setup Prometheus for Kubernetes monitoring. Seamless integration!",
      postedBy: "Linda",
      likes: 9,
      comments: [
        {
          comment: "Kubernetes + Prometheus = DevOps power combo!",
          answeredBy: "Michael",
        },
      ],
    },
    {
      name: "Bob",
      imageUrl:
        "https://devtron.ai/blog/content/images/2024/01/DevOps-Platform.png",
      description:
        "Working on automating deployments with AWS Lambda. Serverless is the future!",
      postedBy: "Bob",
      likes: 11,
      comments: [
        {
          comment: "Lambda works great for automating without servers.",
          answeredBy: "Emma",
        },
      ],
    },
  ];

  // Toggle expand/collapse for top questions
  const toggleTopQuestion = (index) => {
    setExpandedQuestions((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // Toggle show all answers for all questions
  const toggleAllAnswers = (index) => {
    setShowAllAnswers((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="container mx-auto p-4 bg-gray-200">
      {/* Main Tabs (Questions/Discussions) */}
      <div className="flex mb-6">
        <div className="flex-1 flex flex-col items-center">
          <div
            onClick={() => setActiveMainTab("Questions")}
            className={`py-2 cursor-pointer ${
              activeMainTab === "Questions" ? "font-bold" : "text-gray-600"
            }`}
          >
            Community Buzz
          </div>
          <div
            className={`h-1 w-full ${
              activeMainTab === "Questions" ? "bg-blue-500" : "bg-gray-300"
            } transition-all`}
            style={{ height: activeMainTab === "Questions" ? "3px" : "1px" }}
          />
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div
            onClick={() => setActiveMainTab("Discussions")}
            className={`py-2 cursor-pointer ${
              activeMainTab === "Discussions" ? "font-bold" : "text-gray-600"
            }`}
          >
            Discussions
          </div>
          <div
            className={`h-1 w-full ${
              activeMainTab === "Discussions" ? "bg-blue-500" : "bg-gray-300"
            } transition-all`}
            style={{ height: activeMainTab === "Discussions" ? "3px" : "1px" }}
          />
        </div>
      </div>

      {/* Tab Content */}
      {activeMainTab === "Questions" ? (
        <div className="grid grid-cols-3 gap-6">
          {/* Top Questions (in container, collapsible, reduced width) */}
          <div className="col-span-1 p-6 bg-white rounded-lg shadow-md border border-gray-300">
            <h2 className="text-xl font-bold mb-4">Top Questions</h2>
            {topQuestions.map((question, index) => (
              <div key={index} className="mb-4 p-4 rounded-md bg-gray-100">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleTopQuestion(index)}
                >
                  <h3 className="font-semibold text-lg">{question.question}</h3>
                  <span>{expandedQuestions[index] ? "-" : "+"}</span>
                </div>
                {expandedQuestions[index] && (
                  <div className="mt-2">
                    {question.answers.map((answer, i) => (
                      <p key={i} className="text-gray-700">
                        <strong>{answer.answeredBy}:</strong> {answer.answer}
                      </p>
                    ))}
                    <div className="flex gap-2 mt-2">
                      {question.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-200 rounded-full text-xs text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* All Questions (larger container, with "See All Answers") */}
          <div className="col-span-2 p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">All Questions</h2>
              <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
                Ask Question
              </button>
            </div>
            {allQuestions.map((question, index) => (
              <div key={index} className="mb-6 border-b pb-4">
                <h3 className="font-semibold text-lg">{question.question}</h3>
                <div className="mt-2">
                  {question.answers
                    .slice(
                      0,
                      showAllAnswers[index] ? question.answers.length : 1
                    )
                    .map((answer, i) => (
                      <p key={i} className="text-gray-700">
                        <strong>{answer.answeredBy}:</strong> {answer.answer}
                      </p>
                    ))}
                </div>

                <div className="flex gap-2 mt-2">
                  {question.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-200 rounded-full text-xs text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-2 text-blue-500 text-sm mr-4 border border-blue-500 py-1 px-3 rounded-md">
                  Add Answer
                </button>
                {question.answers.length > 0 && (
                  <button
                    onClick={() => toggleAllAnswers(index)}
                    className="text-gray-300 text-sm"
                  >
                    {showAllAnswers[index] ? "See Less" : "See All Answers"}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-6 bg-white rounded-lg shadow-md">
          {/* Discussions (One per row) */}

<div className="flex items-center justify-between max-w-[800px] mx-auto mb-4">
  <button className="py-2 mr-3 px-4 bg-blue-500 text-white rounded-lg">
    Explore
  </button>
  <button className="py-2 px-4 mr-3 bg-gray-200 text-gray-700 rounded-lg">
    My Discussions
  </button>
  <button className="py-2 px-4 mr-3 bg-gray-200 text-gray-700 rounded-lg">
    My Collections
  </button>
  <input
    type="text"
    placeholder="Search by name..."
    className="border border-gray-300 rounded-lg px-3 py-2 flex-grow ml-2" // Added flex-grow and margin-left for spacing
  />
</div>



          <div className="grid grid-cols-1 gap-4">
            {discussions.map((discussion, index) => (
              <div
                key={index}
                className="p-4 bg-gray-100 rounded-lg shadow-md mx-auto" // Center the card
                style={{ maxWidth: "800px", width: "100%" }} // Set max width for uniformity
              >
                <div className="flex flex-col">
                  {/* Post Image Container with Aspect Ratio */}
                  <div
                    className="relative w-full"
                    style={{ paddingBottom: "66.67%" }}
                  >
                    {" "}
                    {/* 3:2 aspect ratio */}
                    <img
                      src={discussion.imageUrl}
                      alt={discussion.name}
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" // Full width and height
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="font-semibold">{discussion.name}</h3>
                    <p className="text-gray-700">{discussion.description}</p>
                    {/* <div className="mt-2 text-sm text-gray-500">
                      <strong>Posted by:</strong> {discussion.postedBy}
                    </div> */}
                    
                    <div className="flex gap-2 mt-2">
  <button className="flex items-center px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-600">
    <MdThumbUp className="mr-1" /> Like ({discussion.likes})
  </button>
  <button
    className="flex items-center px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-600"
    onClick={() =>
      setShowComments(showComments === index ? null : index)
    } // Toggle comments
  >
    <MdComment className="mr-1" /> Comment ({discussion.comments.length})
  </button>
  <button className="flex items-center px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-600">
    <MdBookmark className="mr-1" /> Add to Collection
  </button>
</div>


                    {/* Show comments if the comment button is clicked */}
                    {showComments === index && (
                      <div className="mt-2">
                        {discussion.comments.map((comment, i) => (
                          <span
                            key={i}
                            className="block px-2 py-1 bg-gray-200 rounded-full text-xs text-gray-600 mt-1"
                          >
                            {comment.answeredBy}: {comment.comment}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Forum;
