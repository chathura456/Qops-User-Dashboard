"use client";
import Image from 'next/image';
import Link from 'next/link'; // Import Next.js Link
import { useState } from 'react';
import { MdArrowBack, MdArrowForward, MdStar } from 'react-icons/md';

const RightBar = () => {
  // State to handle date range navigation
  const [startDate, setStartDate] = useState(new Date());

  // Dummy data for levels
  const levels = [
    { id: 1, name: 'Starter', completed: true },
    { id: 2, name: 'Explorer', completed: true },
    { id: 3, name: 'Archiver', completed: false },
    { id: 4, name: 'Specialist', completed: false },
    { id: 5, name: 'Guru', completed: false },
  ];

  // Dummy data for upcoming events
  const events = [
    {
      id: 1,
      name: 'DevOps Conference',
      date: '29 oct 2024',
      image: 'https://www.thedevopsconference.com/hs-fs/hubfs/The%20DEVOPS%20Conference/tdoc-scandinavia-2023/tdoc-copenhagen-2023/Carousel%20photos%20-%20venue/tdoc%20cph%202023.jpeg',
    },
    {
      id: 2,
      name: 'Agile Workshop',
      date: '30 Oct 2024',
      image: 'https://calendar.boussiasevents.gr/wp-content/uploads/2023/03/840x560-4.jpg',
    },
    {
      id: 3,
      name: 'Hackathon',
      date: '05 Oct 2024',
      image: 'https://www.kreativdistrikt.com/wp-content/uploads/2024/02/The-Art-of-Successful-Hackathon-Management.webp',
    },
  ];

  // Function to change the range of dates
  const changeDateRange = (direction) => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(startDate.getDate() + direction * 6); // Change by 6 days
    setStartDate(newStartDate);
  };

  // Function to get 6 dates starting from the current startDate
  const getDatesForCurrentRange = () => {
    const dates = [];
    for (let i = 0; i < 5; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const dates = getDatesForCurrentRange();

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full">
      {/* Mini Calendar Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold">{startDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
          <div className="flex space-x-3">
            <button onClick={() => changeDateRange(-1)} className="p-1">
              <MdArrowBack className="text-black" />
            </button>
            <button onClick={() => changeDateRange(1)} className="p-1">
              <MdArrowForward className="text-black" />
            </button>
          </div>
        </div>
        <div className="flex justify-between space-x-1">
          {dates.map((date) => (
            <div
              key={date.getDate()}
              className={`flex flex-col items-center justify-center w-full aspect-square border border-gray-300 rounded ${
                date.toDateString() === new Date().toDateString() ? 'bg-blue-200' : ''
              }`}
            >
              <div className="text-sm font-bold">{date.getDate()}</div>
              <div className="text-xs">{date.toLocaleString('default', { weekday: 'short' })}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Levels Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold">Levels</h2>
          <Link href="dashboard/achievements" className="text-gray-500">See All</Link>
        </div>
        {levels.map((level) => (
          <div key={level.id} className="mb-4 bg-gray-100 p-2 rounded-lg flex items-center">
            <h3 className="text-xl font-bold">{level.id}</h3>
            <div className="border-l border-gray-400 mx-4 h-8" /> {/* Vertical Divider */}
            <div className="flex flex-col">
              <p className="text-base">{level.name}</p>
              <div className="flex">
                {level.completed ? (
                  <div className="flex space-x-1">
                    <MdStar className="text-yellow-500" />
                    <MdStar className="text-yellow-500" />
                    <MdStar className="text-yellow-500" />
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">Not Completed</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Events Section */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold">Upcoming Events</h2>
          <Link href="dashboard/calender" className="text-gray-500">See All</Link>
        </div>
        {events.map((event) => (
          
          <div key={event.id}>
          <Link href="/dashboard/calender">
          <div className='flex items-center mb-4 p-2'>
          <Image src={event.image} alt={event.name} width={100} height={70} className="mr-4 rounded" />
            <div>
              <h3 className="font-semibold">{event.name}</h3>
              <p className='text-sm'>{event.date}</p>
            </div>
          </div>
           
            </Link>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default RightBar;
