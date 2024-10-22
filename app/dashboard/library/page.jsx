"use client";
import { useEffect, useState } from "react";
import ReactStars from "react-stars";

const Library = () => {
  const [libraries, setLibraries] = useState([]);
  const [sortBy, setSortBy] = useState("alphabetical");
  const [selectedLibrary, setSelectedLibrary] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviewedBy, setReviewedBy] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const fetchLibraries = async () => {
      const response = await fetch("http://localhost:4000/library");
      const data = await response.json();
      setLibraries(data.libraries);
    };

    fetchLibraries();
  }, []);

  const handleSort = (criteria) => {
    let sortedLibraries;
    if (criteria === "alphabetical") {
      sortedLibraries = [...libraries].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else if (criteria === "date") {
      sortedLibraries = [...libraries].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (criteria === "rating") {
      sortedLibraries = [...libraries].sort(
        (a, b) => (b.ratings.length || 0) - (a.ratings.length || 0)
      );
    }
    setLibraries(sortedLibraries);
  };

  const openDialog = (library) => {
    setSelectedLibrary(library);
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
    setSelectedLibrary(null);
  };

  const submitRating = async () => {
    const payload = {
      rating,
      review,
      reviewedBy,
    };

    const response = await fetch(
      `http://localhost:4000/library/rate/${selectedLibrary._id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (response.ok) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        closeDialog();
      }, 2000);
    }
  };

  return (
    <div className="container bg-white mx-auto p-4">

      {/* Sort by dropdown */}
      <div className="mb-4">
        <label htmlFor="sort" className="font-bold mr-2">
          Sort by:
        </label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
            handleSort(e.target.value);
          }}
          className="p-2 border rounded"
        >
          <option value="alphabetical">Alphabetical</option>
          <option value="date">Date</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {/* Display library cards */}
      <div className="grid grid-cols-4 gap-4">
        {libraries.map((library) => (
          <div
            key={library._id}
            className="border rounded-lg p-4 shadow-md cursor-pointer"
            onClick={() => openDialog(library)}
          >
            <img
              src={`http://localhost:4000/${library.imageUrl.replace(
                /\\/g,
                "/"
              )}`}
              alt={library.name}
              className="w-full h-auto aspect-[2/3] object-cover mb-2"
            />
            <h2 className="text-lg font-bold">{library.name}</h2>
          </div>
        ))}
      </div>

      {/* Dialog Box */}
      {showDialog && selectedLibrary && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg max-w-lg w-full relative h-2/3 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">{selectedLibrary.name}</h2>
      <p className="mb-2">
        <strong>Author:</strong> {selectedLibrary.author}
      </p>
      <p className="mb-2">
        <strong>Description:</strong> {selectedLibrary.description}
      </p>
      <p className="mb-2">
        <strong>Published Date:</strong>{" "}
        {new Date(selectedLibrary.createdAt).toLocaleDateString()}
      </p>
      <a
        href={selectedLibrary.docUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-blue-500 px-4 py-2 rounded-full inline-block mb-4 hover:bg-blue-600 transition"
      >
        View PDF
      </a>

      {/* Divider */}
      <hr className="my-4 border-t-2" />

      {/* Ratings Section */}
      <div className="mb-4">
        <h3 className="font-bold mb-2">Ratings & Reviews:</h3>

        {/* Average Rating at the Top */}
        {selectedLibrary.ratings.length > 0 && (
          <div className="mb-4">
            <ReactStars
              count={5}
              size={24}
              value={
                selectedLibrary.ratings.reduce(
                  (acc, rating) => acc + rating.rating,
                  0
                ) / selectedLibrary.ratings.length
              }
              edit={false}
              color2={"#ffd700"}
            />
            <p>
              {(
                selectedLibrary.ratings.reduce(
                  (acc, rating) => acc + rating.rating,
                  0
                ) / selectedLibrary.ratings.length
              ).toFixed(1)}{" "}
              ({selectedLibrary.ratings.length} reviews)
            </p>
          </div>
        )}

        

        {/* Add Rating */}
        <div className="mt-4">
          <ReactStars
            count={5}
            size={30}
            half={false}
            value={rating}
            onChange={(newRating) => setRating(newRating)}
            color2={"#ffd700"}
          />
          <input
            type="text"
            placeholder="Enter your name"
            className="border p-2 rounded w-full mt-2"
            value={reviewedBy}
            onChange={(e) => setReviewedBy(e.target.value)}
          />
          <textarea
            placeholder="Write your review"
            className="border p-2 rounded w-full mt-2"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <button
            onClick={submitRating}
            className="bg-blue-500 text-white p-2 rounded mt-2 w-full hover:bg-blue-600 transition"
          >
            Submit Review
          </button>
        </div>

        {/* Individual Reviews */}
        {selectedLibrary.ratings.length > 0 ? (
          <div className="mt-4">
            <h3 className="font-bold mb-2">Reviews:</h3>
            {selectedLibrary.ratings.map((rating, index) => (
              <div key={index} className="mt-4 border-t pt-2">
                <div className="flex items-center mb-2">
                  <ReactStars
                    count={5}
                    size={20}
                    value={rating.rating}
                    edit={false}
                    color2={"#ffd700"}
                  />
                  <p className="ml-2 text-sm">{rating.reviewedBy}</p>
                </div>
                <p>"{rating.review}"</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No ratings yet</p>
        )}
      </div>

      <button
        onClick={closeDialog}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        &times;
      </button>
    </div>
  </div>
)}


      {/* Success Dialog Box */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-green-500 text-white p-4 rounded-lg">
            <h2 className="text-lg">Rating Submitted Successfully!</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Library;
