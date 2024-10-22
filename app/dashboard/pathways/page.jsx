'use client';


// Dummy job data
const jobs = [
  {
    title: 'Software Engineer',
    imageUrl: 'https://media.terratern.com/blog/exploring_devops_jobs_in_germany___benefits_essential_skills_salary_and_more_1717147756.webp',
    category: 'Engineering',
    location: 'Remote',
    description: 'Develop and maintain software applications.',
    postedBy: 'Tech Corp',
    link: 'https://www.linkedin.com',
  },
  {
    title: 'Product Manager',
    imageUrl: 'https://infycletechnologies.com/wp-content/uploads/2022/07/DevOps-Job-As-Fresher-blog.jpg',
    category: 'Management',
    location: 'New York, NY',
    description: 'Lead product development and strategy.',
    postedBy: 'Business Inc.',
    link: 'https://www.linkedin.com',
  },
  {
    title: 'UX Designer',
    imageUrl: 'https://i.ytimg.com/vi/kPdbmrmb5-0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCFTUFU6HaD9z4RPkRAe9fm2talPw',
    category: 'Design',
    location: 'San Francisco, CA',
    description: 'Design user-friendly interfaces and experiences.',
    postedBy: 'Creative Solutions',
    link: 'https://www.linkedin.com',
  },
  {
    title: 'Data Scientist',
    imageUrl: 'https://factohr.com/wp-content/themes/factohr-theme/images/new/job-description/devops-engineer-job-description/devops-engineer-job-description.webp',
    category: 'Data Science',
    location: 'Austin, TX',
    description: 'Analyze and interpret complex data.',
    postedBy: 'Data Co.',
    link: 'https://www.linkedin.com',
  },
  {
    title: 'Marketing Specialist',
    imageUrl: 'https://factohr.com/wp-content/themes/factohr-theme/images/new/job-description/devops-engineer-job-description/devops-engineer-job-description.webp',
    category: 'Marketing',
    location: 'Los Angeles, CA',
    description: 'Develop marketing strategies and campaigns.',
    postedBy: 'Marketing Agency',
    link: 'https://www.linkedin.com',
  },
  {
    title: 'Sales Executive',
    imageUrl: 'https://infycletechnologies.com/wp-content/uploads/2022/07/DevOps-Job-As-Fresher-blog.jpg',
    category: 'Sales',
    location: 'Chicago, IL',
    description: 'Drive sales and manage client relationships.',
    postedBy: 'Sales Group',
    link: 'https://www.linkedin.com',
  },
  {
    title: 'DevOps Engineer',
    imageUrl: 'https://infycletechnologies.com/wp-content/uploads/2022/07/DevOps-Job-As-Fresher-blog.jpg',
    category: 'Engineering',
    location: 'Seattle, WA',
    description: 'Implement and manage CI/CD pipelines.',
    postedBy: 'Tech Innovations',
    link: 'https://www.linkedin.com',
  },
  {
    title: 'System Administrator',
    imageUrl: 'https://infycletechnologies.com/wp-content/uploads/2022/07/DevOps-Job-As-Fresher-blog.jpg',
    category: 'IT',
    location: 'Miami, FL',
    description: 'Manage and support IT systems and networks.',
    postedBy: 'IT Services',
    link: 'https://www.linkedin.com',
  },
  {
    title: 'Content Writer',
    imageUrl: 'https://infycletechnologies.com/wp-content/uploads/2022/07/DevOps-Job-As-Fresher-blog.jpg',
    category: 'Writing',
    location: 'Remote',
    description: 'Create and edit content for various platforms.',
    postedBy: 'Content Creators',
    link: 'https://www.linkedin.com',
  },
  {
    title: 'QA Engineer',
    imageUrl: 'https://infycletechnologies.com/wp-content/uploads/2022/07/DevOps-Job-As-Fresher-blog.jpg',
    category: 'Quality Assurance',
    location: 'Boston, MA',
    description: 'Test and ensure software quality.',
    postedBy: 'QA Team',
    link: 'https://www.linkedin.com',
  },
];

const Pathways = () => {
  return (
    <div className="container mx-auto p-5 bg-gray-100">
      <div className="flex justify-between mb-4 max-w-[800px] mx-auto">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Post a Job</button>
        <div className="flex">
          <input type="text" placeholder="Search..." className="border p-2 rounded" />
          <select className="border p-2 rounded ml-2">
            <option>Filter by Category</option>
            <option>Engineering</option>
            <option>Management</option>
            <option>Design</option>
            <option>Data Science</option>
            <option>Marketing</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 max-w-[800px] mx-auto">
        {jobs.map((job, index) => (
          <div key={index} className="bg-white border rounded-lg shadow p-4 flex max-h-[800px]">
            <img
              src={job.imageUrl}
              alt={job.title}
              className="w-[40%] h-auto object-cover rounded-l-lg"
            />
            <div className="flex-grow p-4">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-gray-600">{job.category}</p>
              <p className="text-gray-600">{job.location}</p>
              <p className="mt-2">{job.description}</p>
              <p className="text-gray-500 mt-2">Posted by: {job.postedBy}</p>
              <div className="mt-4">
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Apply
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pathways;
