import { Disclosure } from "@headlessui/react";

const FAQ = () => {
  const data = [
    {
      id: 1,
      question: "What is DevOps?",
      answer: "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops).",
    },
    {
      id: 2,
      question: "Why is DevOps important?",
      answer: "DevOps improves collaboration between teams, increases deployment frequency, and reduces time to market.",
    },
    {
      id: 3,
      question: "What tools are commonly used in DevOps?",
      answer: "Popular tools include Docker, Jenkins, Kubernetes, and Git.",
    },
    {
      id: 4,
      question: "How can I get started with DevOps?",
      answer: "Begin by learning about version control, continuous integration, and infrastructure as code.",
    },
  ];

  return (
    <div className="py-5 bg-white">
      <div className="container flex flex-col items-center justify-center w-full p-8 mx-auto mt-4 text-center">
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-black">
          Frequently Asked Questions
        </h2>
        <p className="max-w-2xl py-4 text-lg leading-normal text-black">
          Address common inquiries to empower our learners and support their journey in mastering DevOps.
        </p>
      </div>

      <div className="container p-0 mx-auto">
        <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
          <div>
            {data.map((item) => (
              <div className="mb-5" key={item.id}>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-black rounded-lg bg-gray-100 hover:bg-gray-200 focus:outline-none"
                        type="button">
                        <span>{item.question}</span>
                        <svg
                          className={`w-5 h-5 text-black ${!open ? "transform rotate-180" : ""}`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                            clipRule="evenodd"></path>
                        </svg>
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-black">
                        {item.answer}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
