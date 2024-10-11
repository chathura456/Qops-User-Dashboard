import Image from 'next/image';
import { MdAssessment, MdAssignment, MdWork } from 'react-icons/md';
import pricing from '/public/pricing.png';

const Pricing = () => {
  return (
    <div className="flex items-center justify-center bg-white dark:bg-gray-900 text-white p-8">
      <div className="w-1/2 flex items-center justify-center">
        <Image 
          src={pricing} // Replace with the actual image path
          alt="Pricing"
          className="h-auto" // Keep the image size unchanged
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center ml-8"> {/* Added left margin for spacing */}
        <h1 className="text-3xl font-bold mb-4">Unlock Additional Features with a Paid Plan</h1>
        
        <div className="flex items-center mb-6">
          <MdWork className="text-white mr-2" size={30} />
          <div>
            <h2 className="text-xl font-semibold text-white">Practice Projects</h2>
            <p className="text-gray-300">
              Guided projects that help you solidify the skills and concepts you're learning.
            </p>
          </div>
        </div>

        <div className="flex items-center mb-6">
          <MdAssessment className="text-white mr-2" size={30} />
          <div>
            <h2 className="text-xl font-semibold text-white">Assessments</h2>
            <p className="text-gray-300">
              Auto-graded quizzes and immediate feedback help you reinforce your skills as you learn.
            </p>
          </div>
        </div>

        <div className="flex items-center mb-6">
          <MdAssignment className="text-white mr-2" size={30} />
          <div>
            <h2 className="text-xl font-semibold text-white">Certificate of Completion</h2>
            <p className="text-gray-300">
              Earn a document to prove you've completed a course or path that you can share with your network.
            </p>
          </div>
        </div>
        
        {/* See All Prices Button */}
        <div className="flex justify-center mt-6"> {/* Centering the button */}
          <button className="w-1/2 bg-yellow-500 text-black font-bold py-2 px-4 rounded hover:bg-yellow-600">
            See All Prices
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
