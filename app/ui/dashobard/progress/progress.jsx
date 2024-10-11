
const Progress = () => {
  // Dummy data for the courses and progress
  const courses = [
    { id: 1, courseName: 'Docker Basics', chapterName: 'Chapter 3: Containers', progress: 60 },
    { id: 2, courseName: 'Kubernetes Essentials', chapterName: 'Chapter 2: Pods & Services', progress: 45 },
    { id: 3, courseName: 'CI/CD with Jenkins', chapterName: 'Chapter 4: Pipelines', progress: 80 },
    { id: 4, courseName: 'AWS for DevOps', chapterName: 'Chapter 5: EC2 & VPC', progress: 70 },
    { id: 5, courseName: 'Ansible Automation', chapterName: 'Chapter 1: Introduction', progress: 25 },
    { id: 6, courseName: 'Terraform Fundamentals', chapterName: 'Chapter 6: Modules', progress: 90 },
    { id: 7, courseName: 'Monitoring with Prometheus', chapterName: 'Chapter 2: Metrics', progress: 40 },
    { id: 8, courseName: 'Logging with ELK Stack', chapterName: 'Chapter 3: Logstash', progress: 55 },
    { id: 9, courseName: 'Azure DevOps Basics', chapterName: 'Chapter 4: Pipelines & Releases', progress: 65 },
    { id: 10, courseName: 'CI with GitLab', chapterName: 'Chapter 2: GitLab Runners', progress: 50 },
  ];

  return (
    <div className="bg-white p-5 rounded-lg shadow-md w-full">
      <h1 className="text-lg font-bold mb-4">Completion Progress</h1>

      {/* Scrollable courses list, displaying only 4 at once */}
      <div className="max-h-80 overflow-y-auto">
        {courses.map((course) => (
          <div key={course.id} className="bg-gray-100 p-4 rounded-md flex justify-between items-center mb-2">
            <div>
              <p className="font-semibold">{course.courseName}</p>
              <p className="text-sm text-gray-600">{course.chapterName}</p>
            </div>
            <div className="w-1/3">
              {/* Linear progress bar */}
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                  <div
                    style={{ width: `${course.progress}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  ></div>
                </div>
                <p className="text-sm text-gray-600 text-right mt-1">{course.progress}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
