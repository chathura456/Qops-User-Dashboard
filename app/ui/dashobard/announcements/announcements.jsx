
"use client"
import AuthContext from '@/app/context/AuthContext';
import { capitalize } from '@mui/material';
import Link from 'next/link';
import { useContext } from 'react';

const Announcements = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-custom-white p-5 rounded-lg shadow-md"> {/* Rounded border for the main container */}
      <h1 className="text-lg font-bold mb-4">Announcements</h1>
      
      <div className="bg-blue-100 p-4 rounded-md flex justify-between items-center"> {/* Light blue background for subheading */}
        <h2 className="text-sm font-semibold">
          Hello  {user ? capitalize(user.username) : 'Guest'}, your completed the starter level!
        </h2>
        <Link href="/dashboard/achievements" className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-600">
          View
        </Link> {/* "View" button aligned to the right */}
      </div>
    </div>
  );
};

export default Announcements;
