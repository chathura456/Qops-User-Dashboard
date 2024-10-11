import Image from 'next/image';
import avatar1 from "/public/avatars/avatar1.jpg";
import avatar2 from "/public/avatars/avatar2.jpg";
import avatar3 from "/public/avatars/avatar3.jpg";
import avatar4 from "/public/avatars/avatar4.jpg";
import avatar5 from "/public/avatars/avatar5.jpg";

const Leaderboard = () => {
  const data = [
    { id: 1, name: 'John Doe', score: 1200, profilePic: avatar1 },
    { id: 2, name: 'Jane Smith', score: 1150, profilePic: avatar2 },
    { id: 3, name: 'Emily Johnson', score: 1100, profilePic: avatar3 },
    { id: 4, name: 'Michael Brown', score: 1050, profilePic: avatar4 },
    { id: 5, name: 'David Wilson', score: 1000, profilePic: avatar5 },
    { id: 6, name: 'Chris Lee', score: 950, profilePic: avatar1 },
    { id: 7, name: 'Sarah Parker', score: 900, profilePic: avatar2 },
    { id: 8, name: 'Paul Davis', score: 850, profilePic: avatar3 },
    { id: 9, name: 'Laura Martinez', score: 800, profilePic: avatar4 },
    { id: 10, name: 'Mark Anderson', score: 750, profilePic: avatar5 },
  ];

  return (
    <div className="bg-white p-5 rounded-lg shadow-md w-full">
      <h1 className="text-lg font-bold mb-4">Leaderboard</h1>
      
      {/* Scrollable list for all users, displaying 4 at a time */}
      <div className="max-h-80 overflow-y-auto">
        {data.map((user, index) => (
          <div
            key={user.id}
            className={`flex items-center p-4 rounded-md mb-2 ${
              index === 0 ? 'bg-red-100' : index === 1 ? 'bg-green-100' : 
              index === 2 ? 'bg-blue-100' : index === 3 ? 'bg-yellow-100' : 'bg-gray-100'
            }`}
          >
            <Image src={user.profilePic} alt={user.name} width={48} height={48} className="rounded-full mr-4" />
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-600">Score: {user.score}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
