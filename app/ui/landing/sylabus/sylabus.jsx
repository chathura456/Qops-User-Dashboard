import { Disclosure } from "@headlessui/react";

const Sylabus = () => {
  const lessons = [
    {
      id: 1,
      title: "Introduction to DevOps",
      content: "Understand the fundamentals of DevOps, its importance, and its core principles. Learn about the DevOps lifecycle and its impact on software development.",
      quiz: "Quiz 1",
    },
    {
      id: 2,
      title: "Version Control Systems",
      content: "Learn about Git, branching strategies, and version control best practices. Understand how to collaborate using repositories and manage code changes effectively.",
      quiz: "Quiz 2",
    },
    {
      id: 3,
      title: "Continuous Integration and Continuous Deployment (CI/CD)",
      content: "Explore CI/CD pipelines, automated testing, and deployment strategies. Learn how to set up a CI/CD pipeline using popular tools like Jenkins and GitHub Actions.",
      quiz: "Quiz 3",
    },
    {
      id: 4,
      title: "Infrastructure as Code (IaC)",
      content: "Understand the concept of Infrastructure as Code and its tools like Terraform and Ansible. Learn how to automate infrastructure provisioning and management.",
      quiz: "Quiz 4",
    },
    {
      id: 5,
      title: "Monitoring and Logging",
      content: "Learn the importance of monitoring applications and infrastructure. Explore tools like Prometheus, Grafana, and ELK stack for logging and monitoring.",
      quiz: "Quiz 5",
    },
    {
      id: 6,
      title: "Containerization and Orchestration",
      content: "Explore Docker for containerization and Kubernetes for orchestration. Understand how to deploy and manage containerized applications effectively.",
      quiz: "Quiz 6",
    },
    {
      id: 7,
      title: "DevOps Best Practices",
      content: "Learn about best practices in DevOps, including collaboration, communication, and continuous improvement. Understand how to foster a DevOps culture in your organization.",
      quiz: "Quiz 7",
    },
  ];
  

  return (
    <div className="bg-white">
          <div className="bg-white max-w-6xl mx-auto p-6 rounded-lg">
      <h1 className="text-3xl font-bold text-center">Syllabus</h1>
      <div className="mt-8">
        {lessons.map((lesson) => (
          <Disclosure key={lesson.id} className="mb-4">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-lg font-medium text-left text-black bg-gray-100 hover:bg-gray-200  focus:outline-none">
                  <span>{lesson.title}</span>
                  <svg
                    className={`w-5 h-5 text-black ${open ? "transform rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-black">
                  <p>{lesson.content}</p>
                  <p className="mt-2 font-semibold">{lesson.quiz}</p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
      <div className="flex justify-center mt-5">
  <button className="bg-blue-600 text-white py-2 px-10 font-bold hover:bg-blue-700 transition w-1/4">
    Start
  </button>
</div>

    </div>
    </div>

  );
};

export default Sylabus;
