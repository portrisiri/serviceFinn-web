import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Loader, Loader2 } from "lucide-react";

function ReviewForm() {

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [selectedImages, setSelectedImages] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMore, setViewMore] = useState(false); // To toggle view more images

  const submitReview = async (data) => {
    setLoading(true);
    try {
      const resp = await axios.post('http://localhost:4289/reviews', { ...data });

      if (!resp.data.success) {
        setSubmitted(true);
        // alert('Your review contains content that violates our guidelines.')
        return setTimeout(() => setSubmitted(false), 4500);
      }
      // alert('Review Successful');
    } catch (error) {
      console.error("Error submitting review:", error);
    } finally {
      setLoading(false);
    }
  };

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    event.target.value = "";
  };

  function deleteHandler(event, image) {
    event.stopPropagation(); // Prevent modal from opening
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    submitReview(data);
  };

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1
    );
  };

  const toggleViewMore = () => {
    setViewMore(!viewMore);
  };

  return (
    <div className="mt-22 h-screen w-220 flex items-center justify-center lg:px-0">
      <div className="relative w-full bg-white border shadow-lg rounded-lg flex overflow-hidden">
        {/* Close Button */}
        <button
          className="btn btn-circle absolute top-3 right-5 text-gray-600 hover:text-gray-800 text-3xl font-bold p-0 w-10 h-10 flex items-center justify-center"
        >
          <div className="absolute bottom-1 flex items-center justify-center">
            &times;
          </div>
        </button>

        {/* Left Side (Blue Section) */}
        <div className="hidden md:flex w-1/3 bg-blue-900 items-center justify-center p-6">
          <h1 className="text-3xl font-bold text-white">Review</h1>
        </div>

        {/* Right Side (Form Section) */}
        <div className="w-full md:w-2/3 p-6">
          {/* Hardcoded Provider Information */}
          <div className="flex items-center gap-4 mb-6 border-b pb-4">
            <img
              src="/emily.webp"
              alt="Emily Wongsa"
              className="w-14 h-14 rounded-full border"
            />
            <div>
              <h3 className="text-lg font-semibold text-blue-900">Emily Wongsa</h3>
              <p className="text-gray-500 text-sm">You're reviewing this provider</p>
              <p className="text-gray-600 text-sm font-medium">
                Service: Professional Chilcare Service
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-blue-900">Rate your provider</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Rating Stars */}
            <div className="flex justify-center mt-4">
              <div className="rating space-x-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <input
                    key={num}
                    type="radio"
                    name="rating"
                    className="mask mask-star-2 bg-orange-400"
                    onClick={() => setValue("rating", num)}
                  />
                ))}
              </div>
            </div>

            {/* Review Input */}
            <div className="mt-6">
              <textarea
                {...register("review", { required: "Review is required" })}
                className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Write your review..."
              ></textarea>
              {errors.review && (
                <p className="text-red-500 text-sm">{errors.review.message}</p>
              )}
            </div>

            <section>
              <label className="btn text-white bg-blue-400 rounded-2xl hover:bg-blue-500 ">
                + Add Images
                <br />
                <input
                  className="hidden"
                  type="file"
                  name="images"
                  onChange={onSelectFile}
                  multiple
                  accept="image/png , image/jpeg, image/webp"
                />
              </label>
              <br />

              <div className="mt-2 flex flex-row flex-wrap items-center">
                {selectedImages.slice(0, 2).map((image, index) => (
                  <div
                    key={image}
                    className="relative group my-1 mx-4"
                    onClick={() => openModal(index)}
                  >
                    <img
                      src={image}
                      width="150"
                      // height="50"
                      alt="upload"
                      className="rounded-lg cursor-pointer"
                    />
                    {
                      <button
                        className="absolute btn btn-sm btn-circle top-2 right-2 bg-gray-800 text-white p-1 rounded-full text-xs opacity-60 hover:opacity-80"
                        onClick={(event) => deleteHandler(event, image)} // Pass event and image
                      >
                        X
                      </button>

                    }
                  </div>
                ))}
                {selectedImages.length > 2 && !viewMore && (
                  <button
                    type="button"
                    className="mt-2 text-blue-500 cursor-pointer "
                    onClick={() => openModal(1)}
                  >
                    View More
                  </button>
                )}
              </div>

              {/* Show remaining images when "View More" is clicked */}
              {viewMore && (
                <div className="mt-2 flex flex-row flex-wrap items-center">
                  {selectedImages.slice(2).map((image, index) => (
                    <div
                      key={image}
                      className="relative group my-1 mx-4"
                      onClick={() => openModal(index + 2)} // Start the index from 2 for additional images
                    >
                      <img
                        src={image}
                        width="200"
                        height="180"
                        alt="upload"
                        className="rounded-lg cursor-pointer"
                      />
                      {hoveredImage === image && (
                        <button
                          className="absolute btn btn-sm btn-circle top-2 right-2 bg-gray-800 text-white p-1 rounded-full text-xs opacity-60 hover:opacity-80"
                          onClick={() => deleteHandler(image)}
                        >
                          X
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>

            {submitted && (
              <p className="text-red-600 text-center mt-4">
                Your review contains content that violates our guidelines.
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className={`flex justify-center gap-4 items-center mt-6 w-full text-white py-3 rounded-lg text-lg font-semiboldtransition   
                ${loading ? "bg-blue-400 " : "cursor-pointer bg-blue-600 hover:bg-blue-800"}`}
              disabled={loading ? true : false}
            >
              {loading ? (
                <>
                  Reviewing Your Submission...
                  <span className="loading loading-dots loading-sm"></span>
                </>
              ) : (
                
                "Send Review"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-4xl w-full">
            {/* Image Index Text */}
            <div className="absolute 
             p-2 rounded-2xl opacity-80
            top-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold">
              <p className="text-black" >{currentImageIndex + 1} of {selectedImages.length}</p>
            </div>

            {/* Close Button */}
            <button
              className="btn btn-circle absolute bg-gray-300 top-3 right-5 text-gray-600 hover:text-gray-800 text-3xl font-bold p-0 w-10 h-10 flex items-center justify-center"
              onClick={closeModal}
            >
              <div className="absolute bottom-1 flex items-center justify-center">
                &times;
              </div>
            </button>

            {/* Image Container */}
            <div className=" mt-10 flex justify-center items-center mb-4">
              <img
                src={selectedImages[currentImageIndex]}
                alt="Large view"
                className="max-h-110 h-110 object-contain rounded-lg"
              />
            </div>


            {/* Navigation Buttons */}
            <div className="flex justify-between mt-4">
              <button
                onClick={prevImage}
                className="bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-lg w-full md:w-auto"
              >
                Previous
              </button>
              <button
                onClick={nextImage}
                className="bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-lg w-full md:w-auto"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}


    </div>
  );
}

export default ReviewForm;
