import { useEffect, useRef, useState } from "react";

function UploadWidget({ onUpload }) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dpivobpj8", // Replace with your cloud name
        uploadPreset: "Document-ID-upload", // Replace with your upload preset
        cropping: true,
      },
      (error, result) => {
        if (error) {
          return alert("Upload error");
        }
        if (!error && result && result.event === "success") {
          console.log("Upload successful:", result.info);
          onUpload(result.info.secure_url); // Call the onUpload function with the URL
        }
      }
    );
  }, [onUpload]); // Add onUpload as a dependency

  return (
    <button
      className="btn btn-xs bg-blue-400 hover:bg-blue-500 text-white"
      onClick={() => widgetRef.current.open()}
    >
      Upload Document
    </button>
  );
}

export default UploadWidget;