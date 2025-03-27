import { useEffect, useRef, useState } from "react";

function UploadWidget({ onUpload,setValue }) {
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
          const fileUrl = result.info.secure_url;
          onUpload("fileUrl", fileUrl);
        }
      }
    );
  }, []); // Add onUpload as a dependency

  return (
    <button
      className="btn btn-xs bg-blue-400 hover:bg-blue-500 text-white"
      onClick={(e) => {
        e.preventDefault()
        widgetRef.current.open()}}
    >
      Upload Document
    </button>
  );
}

export default UploadWidget;