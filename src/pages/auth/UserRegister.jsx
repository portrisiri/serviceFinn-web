import React, { useState } from "react";
import axios from "axios";
import { useUser, useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapCurrentLocation from "../../components/common/MapCurrentLocation";


function UserRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { getToken, isSigndIn } = useAuth();
  const user = useUser();
  const navigate = useNavigate();

  const [currentAddress, setCurrentAddress] = useState(null);
  const [currentLat, setCurrentLat] = useState(null);
  const [currentLng, setCurrentLng] = useState(null);

  const handleAddressChange = (data) => {
    setCurrentAddress(data.address);
    setCurrentLat(data.lat);
    setCurrentLng(data.lng);
  };

  const onSubmit = async (data) => {
    try {
      console.log("Form Data:", data);
      console.log("Current Address:", currentAddress);
      console.log("Latitude:", currentLat);
      console.log("Longitude:", currentLng);
  
      if (!user || !user.user) { // Check if user and user.user exist
        console.error("User not authenticated or user data not available.");
        return;
      }
  
      const clerkID = user.user.id;
      const token = await getToken();
      const profilePicture = user.user.imageUrl;
      const firstName = user.user.firstName;
      const lastName = user.user.lastName;
      const email = user.user.primaryEmailAddress?.emailAddress;
      const phone = user.user.primaryPhoneNumber?.phoneNumber;
  
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
  
      const response = await axios.post(
        "http://localhost:4289/auth/registerUser",
        {
          ...data,
          clerkID: clerkID,
          profilePicture: profilePicture,
          address: currentAddress,
          latitude: currentLat,
          longitude: currentLng,
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
        },
        { headers }
      );
  
      console.log("API Response:", response.data);
      user.user.reload();
      navigate("/user/profile");
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white w-[1200px] h-[700px] flex flex-col rounded-lg shadow-lg overflow-hidden items-center">
          <h2 className="text-3xl font-bold p-10">Select your default Location</h2>

          <div className="w-[80%] h-[400px]">
            <MapCurrentLocation onAddressChange={handleAddressChange} />
          </div>

          <div className="p-4 mt-2 mb-2">
            <p>Current Address:</p>
            <p>{currentAddress}</p>
          </div>
          <button
            className="btn btn-primary hover:bg-pink-500 hover:text-white"
            onClick={handleSubmit(onSubmit)}
          >
            Confirm Location and Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;