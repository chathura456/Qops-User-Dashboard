const Announcements = () => {
  return (
    <div className="bg-custom-white p-5 rounded-lg shadow-md"> {/* Rounded border for the main container */}
      <h1 className="text-lg font-bold mb-4">Announcements</h1>
      
      <div className="bg-blue-100 p-4 rounded-md flex justify-between items-center"> {/* Light blue background for subheading */}
        <h2 className="text-sm font-semibold">
          Hello Swetha, your live session is about to start!
        </h2>
        <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-600">
          View
        </button> {/* "View" button aligned to the right */}
      </div>
    </div>
  );
};

export default Announcements;
