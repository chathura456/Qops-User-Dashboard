import { MdAssessment, MdInsertDriveFile, MdOutlineAssignment, MdOutlineDescription, MdStar, MdStarHalf, MdTimer, MdVideoLibrary } from "react-icons/md";

const Courses = () => {
  return (
    <div className="bg-[#ffffff] text-black min-h-screen py-8">
      {/* Main container */}
      <div className="max-w-6xl mx-auto p-6 rounded-lg">
        <div className="grid grid-cols-2 gap-8">
          {/* First column: Course details */}
          <div>
            {/* Free course label */}
            <span className="inline-block bg-black text-white px-2 py-1 text-xs font-bold uppercase">Free Course</span>
            {/* Course title */}
            <h1 className="text-4xl font-bold mt-4">Learn How to Start with DevOps</h1>
            {/* Course description */}
            <p className="text-gray-500 text-justify mt-2 pr-8">
              This course will teach you the essentials of DevOps, including CI/CD, automation, Docker, Kubernetes, and more.
              You’ll gain hands-on experience with tools for managing infrastructure and automating cloud-native deployments.
            </p>
            {/* Rating */}
            <div className="mt-4 flex items-center">
            <span className="ml-2 text-black-500 text-md font-bold mr-1">4.5</span>
              <MdStar className="text-yellow-500 text-xl" />
              <MdStar className="text-yellow-500 text-xl" />
              <MdStar className="text-yellow-500 text-xl" />
              <MdStar className="text-yellow-500 text-xl" />
              <MdStarHalf className="text-yellow-500 text-xl" />
              <span className="ml-2 text-gray-500 text-sm">(6,708 ratings)</span>
            </div>
          </div>

          {/* Second column: This course includes */}
          <div className="bg-gray-50 p-6 rounded-lg h-auto">
            <h3 className="font-bold text-lg">This course includes</h3>
            <ul className="mt-4 text-gray-700 space-y-4">
              <li className="flex items-center border-b-2 border-gray-300 pb-4">
                <MdVideoLibrary className="mr-2 text-black-500 text-xl" /> Video lectures on CI/CD pipelines
              </li>
              <li className="flex items-center border-b-2 border-gray-300 pb-4">
                <MdInsertDriveFile className="mr-2 text-black-500 text-xl" /> Hands-on Docker/Kubernetes labs
              </li>
              <li className="flex items-center border-b-2 border-gray-300 pb-4">
                <MdOutlineDescription className="mr-2 text-black-500 text-xl" /> Course materials and resources
              </li>
            </ul>
          </div>
        </div>

        {/* New row: Start button and Learners Info */}
        <div className="mt-8 flex items-center">
          <button className="bg-blue-600 text-white py-2 px-10 font-bold hover:bg-blue-700 transition w-1/4">
            Start
          </button>
          <div className="ml-6 text-gray-500 text-sm">466,834 learners enrolled</div>
        </div>
      </div>

      {/* Course Info Section */}
      <div className="max-w-6xl mx-auto mt-8 p-6 bg-[#f9fcff] shadow-lg rounded-lg">
        <div className="grid grid-cols-3 gap-4">
          {/* Skill Level */}
          <div className="flex items-center">
            <MdAssessment className="text-black-500 text-3xl" />
            <div className="ml-4">
              <h4 className="text-gray-500">Skill Level</h4>
              <p className="font-bold text-lg">Beginner</p>
            </div>
          </div>
          {/* Time to Complete */}
          <div className="flex items-center">
            <MdTimer className="text-black-500 text-3xl" />
            <div className="ml-4">
              <h4 className="text-gray-500">Time to Complete</h4>
              <p className="font-bold text-lg">2 hours</p>
            </div>
          </div>
          {/* Prerequisites */}
          <div className="flex items-center">
            <MdOutlineAssignment className="text-black-500 text-3xl" />
            <div className="ml-4">
              <h4 className="text-gray-500">Prerequisites</h4>
              <p className="font-bold text-lg">None</p>
            </div>
          </div>
        </div>
      </div>

      {/* About and Skills Section */}
      <div className="max-w-6xl mx-auto mt-8 p-6  rounded-lg">
        <div className="grid grid-cols-2 gap-8">
          {/* About this Course */}
          <div>
            <h3 className="font-bold text-lg">About this course</h3>
            <p className="mt-2 text-gray-600 leading-relaxed text-justify">
              This course will introduce you to the core concepts of DevOps, including continuous integration and 
              continuous delivery (CI/CD), infrastructure as code, container orchestration with Kubernetes, and more. 
              You will learn about version control (Git), automating pipelines, and deploying applications to the cloud 
              with AWS or Azure. 
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed text-justify">
              With real-world examples and practical exercises, you'll understand how DevOps is transforming the way teams 
              build, test, and deliver software. By the end of this course, you'll have the foundational skills needed to 
              jumpstart your career in DevOps.
            </p>
          </div>

          {/* Skills You'll Gain */}
          <div className="ml-5">
            <h3 className="font-bold text-lg">Skills you'll gain</h3>
            <ul className="mt-2 space-y-2 text-gray-600 leading-relaxed">
              <li>✔ Version Control (Git)</li>
              <li>✔ Continuous Integration/Continuous Delivery (CI/CD)</li>
              <li>✔ Docker and Kubernetes basics</li>
              <li>✔ Cloud deployments with AWS and Azure</li>
              <li>✔ Infrastructure as Code (IaC) using Terraform</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
