"use client";
import AuthContext from "@/app/context/AuthContext";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";

const Calendar = () => {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [eventToRegister, setEventToRegister] = useState(null);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  useEffect(() => {
    // Fetch event data from API
    fetch("http://localhost:4000/events/")
      .then((response) => response.json())
      .then((data) => setEvents(data.events));
  }, []);

  const getDaysInMonth = (year, month) => {
    const date = new Date(year, month, 1);
    const days = [];

    // Add previous month's blank days until first day of current month
    const firstDayIndex = date.getDay();
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(null);
    }

    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const daysInMonth = getDaysInMonth(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  const handleClick = (event) => {
    setSelectedEvent(event);
  };

  const handleMonthChange = (direction) => {
    setCurrentDate(
      new Date(currentDate.setMonth(currentDate.getMonth() + direction))
    );
  };

  const handleParticipation = (eventId) => {
    setEventToRegister(eventId);
    setShowModal(true);
  };

  const confirmParticipation = () => {
    fetch(`http://localhost:4000/events/${eventToRegister}/participate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: user._id }),
    }).then((response) => {
      if (response.ok) {
        const updatedEvents = events.map((event) =>
          event._id === eventToRegister
            ? { ...event, participations: [...event.participations, user._id] }
            : event
        );
        setEvents(updatedEvents);

        setShowModal(false);
        setEventToRegister(null);
        setShowSuccessDialog(true);
        setSelectedEvent(null);

        setTimeout(() => {
          setShowSuccessDialog(false);
        }, 3000);
      } else {
        alert("Failed to register.");
      }
    });
  };

  const isPastDate = (date) => {
    const today = new Date();
    return new Date(date).setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0);
  };

  const openMeeting = (url) => {
    window.open(url, "_blank");
  };

  // Function to generate random gradient styles
  const getRandomGradient = () => {
    const colors = [
      "bg-red-100",
      "bg-green-100",
      "bg-blue-100",
      "bg-yellow-100",
      "bg-gray-100",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="flex">
      {/* Calendar */}
      <div className="p-4 bg-white shadow-md w-4/5 rounded-lg">
        {/* Month navigation */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => handleMonthChange(-1)}
            className="py-2 px-4 bg-blue-500 rounded text-white"
          >
            Previous
          </button>
          <h2 className="text-2xl font-bold text-center">
            {currentDate.toLocaleString("default", { month: "long" })}{" "}
            {currentDate.getFullYear()}
          </h2>
          <button
            onClick={() => handleMonthChange(1)}
            className="py-2 px-4 bg-blue-500 rounded text-white"
          >
            Next
          </button>
        </div>

        {/* Days of the Week */}
        <div className="grid grid-cols-7 gap-2 mb-2 text-center font-bold">
          {[
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ].map((day) => (
            <div key={day} className="p-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Dates */}
        <div className="grid grid-cols-7 gap-2">
          {daysInMonth.map((day, index) => {
            const eventForDay =
              day &&
              events?.find(
                (event) =>
                  new Date(event.date).toDateString() === day.toDateString()
              );

            return (
              <div
                key={index}
                className={`p-4 border rounded-md aspect-square relative ${
                  eventForDay
                    ? `bg-gradient-to-r ${getRandomGradient()} text-gray-500  cursor-pointer`
                    : ""
                }`}
                onClick={() => day && eventForDay && handleClick(eventForDay)}
              >
                {day && (
                  <>
                    <p className="absolute top-2 left-2 text-gray-500 text-xs ">
                      {day.getDate()}
                    </p>
                    {eventForDay && (
                      <p className="absolute inset-0 flex justify-center items-center text-sm  text-gray-600  text-center">
                        {eventForDay.name}
                      </p>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Event details sidebar */}
      <div className="w-1/5 p-4 bg-white shadow-md ml-4 rounded-lg">
        {selectedEvent ? (
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2 className="text-lg font-bold mb-2">
                {new Date(selectedEvent.date).toLocaleDateString("default", {
                  month: "long",
                  day: "numeric",
                  weekday: "long",
                })}
              </h2>
              <h3 className="text-lg font-bold mb-2">{selectedEvent.name}</h3>

              {selectedEvent.imageUrl && (
                <Image
                  src={`http://localhost:4000/${selectedEvent.imageUrl}`}
                  alt={selectedEvent.name}
                  className="my-4 w-full object-cover rounded-md"
                  layout="responsive"
                  width={600}
                  height={400}
                />
              )}

              <p className="font-bold">Time:</p>
              <p>{selectedEvent.time}</p>
              <p className="font-bold mt-4">Description:</p>
              <p className="text-justify text-sm">
                {selectedEvent.description}
              </p>
              <p className="font-bold mt-4">Participations:</p>
              <p className="text-justify">
                {selectedEvent.participations.length}
              </p>

              {isPastDate(selectedEvent.date) ? (
                <button
                  className="mt-4 p-2 bg-gray-300 text-white rounded cursor-not-allowed"
                  disabled
                >
                  Event Passed
                </button>
              ) : selectedEvent.participations.includes(user._id) ? (
                selectedEvent.meetingUrl ? (
                  <button
                    className="mt-4 p-2 bg-green-500 text-white rounded"
                    onClick={() => openMeeting(selectedEvent.meetingUrl)}
                  >
                    Join Now
                  </button>
                ) : (
                  <button
                    className="mt-4 p-2 bg-gray-300 text-white rounded cursor-not-allowed"
                    disabled
                  >
                    Already Participated
                  </button>
                )
              ) : (
                <button
                  className="mt-4 p-2 bg-blue-500 text-white rounded"
                  onClick={() => handleParticipation(selectedEvent._id)}
                >
                  Register Now
                </button>
              )}
            </div>
          </div>
        ) : (
          <p>Select an event to see details</p>
        )}
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-xl mb-4">Confirm Registration</h2>
            <p>Do you want to register for this event?</p>
            <div className="mt-6 flex justify-end">
              <button
                className="mr-4 p-2 bg-gray-300 text-gray-700 rounded"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="p-2 bg-blue-500 text-white rounded"
                onClick={confirmParticipation}
              >
                Yes, Register
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Dialog */}
      {showSuccessDialog && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-xl">Registration Successful!</h2>
            <p>Your participation has been confirmed.</p>
            <div className="mt-6 flex justify-end">
              <button
                className="p-2 bg-blue-500 text-white rounded"
                onClick={() => {
                  setSelectedEvent(null); // Reset selectedEvent to null
                  location.reload(); // Reload the page
                }}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
