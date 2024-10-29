"use client"
import AuthContext from '@/app/context/AuthContext';
import Image from 'next/image';
import { useContext } from 'react';
import avatar from '/public/avatar.jpg';

const Achievements = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-4 space-y-4">
      {/* Top Container */}
      <div className="flex items-center bg-white p-4 rounded-lg shadow-md space-x-4">
        <Image src={avatar} alt="User" className="w-16 h-16 rounded-full" />
        <div>
          <h2 className="text-xl font-semibold">{user ? (user.username) : 'Guest'}</h2>
          <div className="text-gray-600">4 Badges Earned | 350 Points Earned</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        {/* Left Section */}
        <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
          {/* Announcement */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Announcement</h2>
            <div className="bg-blue-100 p-3 rounded-lg flex items-center">
              <p className="text-sm">Hiya! Nothing exciting, but staying steady.</p>
              <span className="ml-auto text-yellow-500">⭐</span>
            </div>
          </div>

          {/* Points & Levels */}
          <div mt-4>
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h3 className="font-semibold">Points & Levels</h3>
              <div className="flex space-x-4">
                <span>Badges</span>
                <span>Action Index</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="font-semibold">Level</div>
              <div className="font-semibold">Progress</div>
              <div className="font-semibold">Points</div>
            </div>

            {/* Level Rows with Starter Progress */}
            {['Starter', 'Explorer', 'Achiever', 'Specialist', 'Guru'].map((level, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 items-center py-2 h-16">
                <div className={`text-white rounded-md px-2 py-1 ${
                  index === 0 ? 'bg-green-400' : 
                  index === 1 ? 'bg-pink-400' : 
                  index === 2 ? 'bg-blue-400' : 
                  index === 3 ? 'bg-yellow-400' : 
                  'bg-purple-400'}`}>
                  {level}
                </div>
                <div className="bg-gray-100 rounded-lg h-8 relative">
                  {level === 'Starter' && (
                    <div
  className="bg-green-300 h-full rounded-lg text-center text-white text-sm flex items-center justify-center"
  style={{ width: '67%' }}
>
  67%
</div>

                  )}
                </div>
                <div className="bg-gray-100 rounded-lg h-8 flex items-center justify-center">
                  {level === 'Starter' ? '350' : ''}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3 space-y-4">
          {/* Overview */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Overview</h3>
            <div className="text-sm mt-2">
              <div className="flex justify-between border-b py-2">
                <span>Total Completed Courses</span>
                <span className="text-green-500 text-bold">1</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Total Pending Courses</span>
                <span className="text-orange-500">3</span>
              </div>
            </div>
            <div className="mt-4 bg-blue-50 p-3 rounded-lg text-center">
              <p>Come to leaderboard</p>
              <span className="text-yellow-500">🏆</span>
            </div>
          </div>

          {/* Premium DevOps Courses */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Unlock the premium 👑</h3>
            <div className="mt-2 space-y-2">
              {[
                { title: 'Docker Fundamentals', chapters: 8 },
                { title: 'Kubernetes Essentials', chapters: 10 },
                { title: 'CI/CD with Jenkins', chapters: 12 },
              ].map((course, idx) => (
                <div key={idx} className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
                  <div>
                    <p className="font-semibold">{course.title}</p>
                    <p className="text-sm text-gray-500">Chapters {course.chapters}</p>
                  </div>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-lg">Start</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
