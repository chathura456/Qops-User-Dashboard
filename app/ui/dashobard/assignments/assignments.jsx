const Assignments = () => {
  // Dummy data for the assignments
  const assignments = [
    { id: 1, courseName: 'Docker Basics', chapter: 'Chapter 1', assignmentName: 'Install Docker', duration: '2 hours', startDate: '2024-10-01', status: 'ongoing' },
    { id: 2, courseName: 'Kubernetes Essentials', chapter: 'Chapter 2', assignmentName: 'Deploy App', duration: '3 hours', startDate: '2024-09-15', status: 'pending' },
    { id: 3, courseName: 'CI/CD with Jenkins', chapter: 'Chapter 3', assignmentName: 'Create Pipeline', duration: '4 hours', startDate: '2024-10-05', status: 'ongoing' },
    { id: 4, courseName: 'AWS for DevOps', chapter: 'Chapter 1', assignmentName: 'Setup EC2', duration: '5 hours', startDate: '2024-09-20', status: 'pending' },
    { id: 5, courseName: 'Ansible Automation', chapter: 'Chapter 2', assignmentName: 'Write Playbook', duration: '1.5 hours', startDate: '2024-10-03', status: 'ongoing' },
    { id: 6, courseName: 'Terraform Fundamentals', chapter: 'Chapter 3', assignmentName: 'Provision Infrastructure', duration: '3 hours', startDate: '2024-09-25', status: 'pending' },
    { id: 7, courseName: 'Monitoring with Prometheus', chapter: 'Chapter 4', assignmentName: 'Setup Alerts', duration: '2 hours', startDate: '2024-10-07', status: 'ongoing' },
    { id: 8, courseName: 'Logging with ELK Stack', chapter: 'Chapter 2', assignmentName: 'Setup ELK', duration: '4 hours', startDate: '2024-09-18', status: 'pending' },
    { id: 9, courseName: 'Azure DevOps Basics', chapter: 'Chapter 5', assignmentName: 'Create Pipeline', duration: '2.5 hours', startDate: '2024-10-09', status: 'ongoing' },
    { id: 10, courseName: 'CI with GitLab', chapter: 'Chapter 3', assignmentName: 'Create CI/CD', duration: '3 hours', startDate: '2024-09-30', status: 'pending' },
  ];

  return (
    <div className="bg-white p-5 rounded-lg shadow-md w-full">
      <h1 className="text-lg font-bold mb-4">Assignments</h1>

      {/* Scrollable table for assignments, showing 3 rows at once */}
      <div className="max-h-60 overflow-y-auto">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="flex justify-between items-center p-4 mb-2 bg-gray-100 rounded-lg">
            <div className="w-1/3">
              {assignment.courseName}
              <div className="text-sm text-gray-600">{assignment.chapter}</div> {/* Chapter name in smaller text */}
            </div>
            <div className="w-1/4">{assignment.assignmentName}</div>
            <div className="w-1/4">{assignment.duration}</div>
            <div className="w-1/4">{assignment.startDate}</div> {/* New column for course start date */}
            <div className={`font-semibold ${assignment.status === 'ongoing' ? 'text-green-500' : 'text-orange-500'}`}>
              {assignment.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
