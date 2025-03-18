import React from "react";

function ReviewForm() {
  return (
    <div className="h-screen flex items-center justify-center lg:px-0">
      <div className="max-w-screen-md w-full bg-white border shadow-lg rounded-lg flex overflow-hidden">
        {/* Left Side (Blue Section) */}
        <div className="hidden md:flex w-1/3 bg-blue-900 items-center justify-center p-6">
          <h1 className="text-3xl font-bold text-white">Review</h1>
        </div>

        {/* Right Side (Form Section) */}
        <div className="w-full md:w-2/3 p-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900">Leave a Review</h2>
            <p className="text-gray-500 text-sm mt-1">
              Rate your customer or provider
            </p>
          </div>

          <div className="mt-6">
            <textarea
              className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write your review..."
            ></textarea>
          </div>

          {/* Rating Stars */}
          <div className="flex justify-center mt-4">
            <div className="rating space-x-2">
              <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
            </div>
          </div>

          {/* Submit Button */}
          <button className="mt-6 w-full bg-blue-900 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Send Review
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;
