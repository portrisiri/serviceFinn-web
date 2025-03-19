import axios from "axios";
import { useUser, useAuth } from "@clerk/clerk-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function UserRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { getToken, isSigndIn } = useAuth()
  const user = useUser();
  
  // console.log(user)
  // console.log(user.user.firstName)
  
  const navigate = useNavigate();
  
  // useEffect(() => {
  //   if (user?.user) {
  //     if (user.user.firstName) {
  //       setValue("firstName", user.user.firstName);
  //     }
  //     if (user.user.lastName) {
  //       setValue("lastName", user.user.lastName);
  //     }
  //     if (user.user.primaryEmailAddress?.emailAddress) {
  //       setValue("email", user.user.primaryEmailAddress.emailAddress);
  //     }
  //     if (user.user.primaryPhoneNumber?.phoneNumber) {
  //       setValue("phone", user.user.primaryPhoneNumber.phoneNumber);
  //     }
  //   }
  // }, [user,setValue]);
  
  const onSubmit = async (data) => {
    try {
      console.log(data)
      
      if (!user) {
        console.error("User not authenticated.");
        return;
      }
      
      const clerkID = user.user.id; // Get Clerk user ID
      const token = await getToken(); // Get Clerk auth token
      const profilePicture = user.user.imageUrl
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      
      const response = await axios.post(
        "http://localhost:4289/auth/registerUser", // Replace with your API endpoint
        {
          ...data,
          clerkID: clerkID,
          profilePicture: profilePicture,
        },
        { headers }
      );
      console.log("API Response:", response.data);
      user.user.reload()
      
       navigate("/user/profile"); // redirect to home page or another page.
    } catch (error) {
      console.error("API Error:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="bg-yellow-400">
        <p className="text-xl font-bold"> Reconfirm your information to complete registration! </p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-3/4">
        {/* ... (rest of the form remains the same) */}
        <label className="fieldset-label text-sm mt-2">
          First Name
        </label>
        <input
          type="text"
          {...register("firstName", {
            required: "First name is required",
          })}
          placeholder="Enter your First name"
          className={`input input-bordered w-full mb-2 ${
            errors.firstName ? "input-error" : ""
          }`}
        />
        {errors.firstName && (
          <p className="text-red-500 text-xs">
            {errors.firstName.message}
          </p>
        )}

        <label className="fieldset-label text-sm mt-2">Last Name</label>
        <input
          type="text"
          {...register("lastName", {
            required: "Last name is required",
          })}
          placeholder="Enter your Last name"
          className={`input input-bordered w-full mb-2 ${
            errors.lastName ? "input-error" : ""
          }`}
        />
        {errors.lastName && (
          <p className="text-red-500 text-xs">
            {errors.lastName.message}
          </p>
        )}

        <label className="fieldset-label text-sm mt-2">
          E-mail Address
        </label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          placeholder="Enter your Email"
          className={`input input-bordered w-full mb-2 ${
            errors.email ? "input-error" : ""
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs">{errors.email.message}</p>
        )}

        <label className="fieldset-label text-sm mt-2">
          Phone Number
        </label>
        <input
          type="text"
          {...register("phone", {
            required: "Phone number is required",
          })}
          placeholder="Enter your Phone number"
          className={`input input-bordered w-full mb-2 ${
            errors.phone ? "input-error" : ""
          }`}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs">{errors.phone.message}</p>
        )}

        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserRegister;