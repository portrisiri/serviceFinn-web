import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "@clerk/clerk-react";
import axios from 'axios';
import { useNavigate } from "react-router-dom"; // Correct import for React Router v6
import MapCurrentLocation from "../../components/common/MapCurrentLocation";
import UploadWidget from "../../components/common/UploadWidget";

function ProviderRegister() {
  const { user, isLoaded } = useUser();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const widgetRef = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  useEffect(() => {
    if (isLoaded && user) {
      setFormData({
        ...formData,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.primaryEmailAddress?.emailAddress || '',
        phoneNumber: user.primaryPhoneNumber?.phoneNumber || '',
        clerkID: user.id
      });
    }
  }, [user, isLoaded]);

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleRegisterProvider = async () => {
    try {
      const payload = {
        clerkID: formData.clerkID,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        skill: formData.skill,
        latitude: formData.latitude,
        longitude: formData.longitude,
        companyName: formData.companyName,
        accountType: formData.accountType,
        phone: formData.phoneNumber,
        address: formData.fullAddress,
        bankName: formData.bankName,
        bankAccount: formData.accountNumber,
        identificationPhoto: formData.identificationPhoto,
        identificationNumber: formData.identificationNumber,
        accountHolderName: formData.accountHolderName,
        promptpayId: formData.promptpayId,
        paymentMethod: formData.paymentMethod,
      };

      console.log("PAYOAD:", payload);

      const response = await axios.post('http://localhost:4289/auth/registerProvider', payload);
      console.log('Registration successful:', response.data);
      navigate("/provider"); // Redirect on success
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error (e.g., show error message)
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <ProviderStep1
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onNext={handleNext}
            setValue={setValue}
          />
        );
        case 2:
          return (
            <ProviderStep2
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              onNext={handleNext}
              onPrev={handlePrev}
              setFormData={setFormData} // Pass setFormData
              formData={formData} // Pass formData
            />
          );
      case 3:
        return (
          <ProviderStep3
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        );
      case 4:
        return (
          <ProviderStep4
            formData={formData}
            onPrev={handlePrev}
            onRegister={handleRegisterProvider}
          />
        );
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
}

function ProviderStep1({ register, handleSubmit, errors, onNext, setValue }) {
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

  const handleUpload = (url) => {
    setUploadedImageUrl(url);
    setValue("identificationPhoto", url);
  };

  const handleFormSubmit = (data) => {
    onNext(data);
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white w-[80%] max-w-5xl flex h-[600px] rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-1 justify-center items-center ">
            <h2 className="text-[50px] font-bold">Sign up today!</h2>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center">
            <div className="flex items-start justify-start">
              <ul className="steps mb-6">
                <li className="step step-primary text-blue-500">Information</li>
                <li className="step text-gray-400">Location</li>
                <li className="step text-gray-400">Bank Account</li>
                <li className="step text-gray-400">Review</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit(handleFormSubmit)} className="w-3/4">
              <label className="fieldset-label text-sm mt-2">
                Identification Number
              </label>
              <input
                type="text"
                {...register("identificationNumber", {
                  required: "Identification number is required",
                })}
                placeholder="Enter your Identification Number"
                className={`input input-bordered w-full mb-2 ${
                  errors.identificationNumber ? "input-error" : ""
                }`}
              />
              {errors.identificationNumber && (
                <p className="text-red-500">
                  {errors.identificationNumber.message}
                </p>
              )}

              <label className="fieldset-label text-sm mt-2">
                Identification Photo
              </label>

              <UploadWidget onUpload={handleUpload} />

              {uploadedImageUrl && (
                <div className="mt-2">
                  <img
                    src={uploadedImageUrl}
                    alt="Uploaded Thumbnail"
                    className="w-32 h-32 object-cover rounded"
                  />
                </div>
              )}

              <input type="hidden" {...register("identificationPhoto")} />

              <label className="fieldset-label text-sm mt-4 "> Job Category </label>
              <select
                {...register("skill", { required: "Skill is required" })}
                defaultValue="skill"
                className="select w-full"
              >
                <option disabled={true}>Select Job Category </option>
                <option>Caring</option>
                <option>Cleaning</option>
                <option>Laundry</option>
                <option>Food & Transport</option>
                <option>Fixing</option>
                <option>Pet care</option>
                <option>Gardening</option>
              </select>
              {errors.skill && (
                <p className="text-red-500">{errors.skill.message}</p>
              )}

              <button type="submit" className="btn btn-primary w-full mt-4">
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProviderStep2({
  register,
  handleSubmit,
  errors,
  onNext,
  onPrev,
  setFormData, // Add setFormData to props
  formData, // Add formData to props
}) {
  const [currentAddress, setCurrentAddress] = useState(null);
  const [currentLat, setCurrentLat] = useState(null);
  const [currentLng, setCurrentLng] = useState(null);

  const handleAddressChange = (data) => {
    setCurrentAddress(data.address);
    setCurrentLat(data.lat);
    setCurrentLng(data.lng);
    setFormData({ // Update parent formData immediately
      ...formData,
      fullAddress: data.address,
      latitude: data.lat,
      longitude: data.lng,
    });
    console.log("latitude,longitude", data.lat,data.lng)
  };

  const onSubmit = () => {
    onNext();
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white w-[80%] max-w-5xl flex justify-center items-center h-[600px] rounded-lg shadow-lg overflow-hidden">
          <div className="w-[400px] h-[400px] flex flex-1 justify-center items-center">
            <div className="w-[90%] h-[400px] rounded-2xl shadow-lg ml-6">
              <MapCurrentLocation onAddressChange={handleAddressChange} 
              className="rounded-xl"/>
              <p className="font-extralight text-xs mt-2"> Tips: Hold the red pin and adjust to your location.</p>
            </div>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center">
            <div className="  flex items-start justify-start">
              <ul className="steps  mb-6">
                <li className="step step-primary text-blue-500">Information</li>
                <li className="step step-primary text-blue-500">
                  Location
                </li>
                <li className="step text-gray-400">Bank Account</li>
                <li className="step text-gray-400">Review</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}className="w-3/4">
              <label className="fieldset-label text-sm mt-2">Address</label>
              <p>{currentAddress || "Loading address information. . ."}</p>
              <div className="flex">
              <button
                type="button"
                onClick={onPrev}
                className="btn btn-secondary w-1/2 mt-4 mr-2"
              >
                Previous
              </button>

              <button type="submit" className="btn btn-primary w-1/2 mt-4">
                Next
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProviderStep3({ register, handleSubmit, errors, onNext, onPrev }) {
  const [paymentMethod, setPaymentMethod] = React.useState('bank'); // Default to bank transfer

  const thaiBanks = [
    { value: 'bbl', label: 'Bangkok Bank (BBL)', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Bangkok_Bank_logo.svg/1200px-Bangkok_Bank_logo.svg.png' },
    { value: 'ktb', label: 'Krung Thai Bank (KTB)', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/KTB_logo.svg/1200px-KTB_logo.svg.png' },
    { value: 'scb', label: 'Siam Commercial Bank (SCB)', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Siam_Commercial_Bank_logo.svg/1200px-Siam_Commercial_Bank_logo.svg.png' },
    { value: 'kbank', label: 'Kasikornbank (KBank)', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Kasikornbank_logo.svg/1200px-Kasikornbank_logo.svg.png' },
    { value: 'bay', label: 'Bank of Ayudhya (BAY)', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Bank_of_Ayudhya_logo.svg/1200px-Bank_of_Ayudhya_logo.svg.png' },
    { value: 'tmb', label: 'TMBThanachart Bank (TTB)', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/TMBThanachart_Bank_logo.svg/1200px-TMBThanachart_Bank_logo.svg.png' },
    { value: 'gsb', label: 'Government Savings Bank (GSB)', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Government_Savings_Bank_logo.svg/1200px-Government_Savings_Bank_logo.svg.png' },
    { value: 'cimb', label: 'CIMB Thai Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/CIMB_Thai_Bank_logo.svg/1200px-CIMB_Thai_Bank_logo.svg.png' },
  ];

  const onSubmit = (data) => {
    onNext({ ...data, paymentMethod });
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white w-[80%] max-w-5xl flex h-[600px] rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-1 justify-center items-center ">
            <h2 className="text-[45px] font-bold ml-4">Receiving Account</h2>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center">
            <div className="  flex items-start justify-start">
              <ul className="steps  mb-6">
                <li className="step step-primary text-blue-500">Information</li>
                <li className="step step-primary text-blue-500">
                  Location
                </li>
                <li className="step step-primary text-blue-500">Bank Account</li>
                <li className="step text-gray-400">Review</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="w-3/4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Receiving Method
                </label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="bank">Bank Transfer</option>
                  <option value="promptpay">PromptPay</option>
                </select>
              </div>

              {paymentMethod === 'bank' && (
                <>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Bank Name
                    </label>
                    <select
                      {...register('bankName', { required: 'Bank name is required' })}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="">Select Bank</option>
                      {thaiBanks.map((bank) => (
                        <option key={bank.value} value={bank.value}>
                          {bank.label}
                        </option>
                      ))}
                    </select>
                    {errors.bankName && (
                      <p className="text-red-500 text-xs italic">
                        {errors.bankName.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Account Number
                    </label>
                    <input
                      {...register('accountNumber', { required: 'Account number is required' })}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                    />
                    {errors.accountNumber && (
                      <p className="text-red-500 text-xs italic">
                        {errors.accountNumber.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Account Holder Name
                    </label>
                    <input
                      {...register('accountHolderName', { required: 'Account holder name is required' })}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                    />
                    {errors.accountHolderName && (
                      <p className="text-red-500 text-xs italic">
                        {errors.accountHolderName.message}
                      </p>
                    )}
                  </div>
                </>
              )}

              {paymentMethod === 'promptpay' && (
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    PromptPay ID (Phone Number/ID)
                  </label>
                  <input
                    {...register('promptpayId', { required: 'PromptPay ID is required' })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  />
                  {errors.promptpayId && (
                    <p className="text-red-500 text-xs italic">
                      {errors.promptpayId.message}
                    </p>
                  )}
                </div>
              )}

              <div className="flex">
                <button
                  type="button"
                  onClick={onPrev}
                  className="btn btn-secondary w-1/2 mt-4 mr-2"
                >
                  Previous
                </button>
                <button type="submit" className="btn btn-primary w-1/2 mt-4">
                  Next
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProviderStep4({ formData, onPrev, onRegister }) {
  const { firstName, lastName, email, phoneNumber: phone, skill, fullAddress, bankName, accountNumber } = formData;
  console.log(formData);

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white w-[80%] max-w-5xl flex h-[600px] rounded-lg shadow-lg ">
          <div className="flex flex-1 justify-center items-center ">
            <h2 className="text-[50px] font-bold">Review</h2>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center">
            <div className="  flex items-start justify-start">
              <ul className="steps  mb-6">
                <li className="step step-primary text-blue-500"> Information </li>
                <li className="step step-primary text-blue-500">Location</li>
                <li className="step step-primary text-blue-500">Bank Account</li>
                <li className="step step-primary text-blue-500">Review</li>
              </ul>
            </div>

            <div className="w-3/4">
              <div className="">
                <div className="overflow-x-auto h-[400px] overflow-y-scroll">
                  <table className="table table-zebra">
                    <tbody>
                      <tr>
                        <th>Name</th>
                        <td>
                          {firstName} {lastName}
                        </td>
                      </tr>
                      <tr>
                        <th>E-mail</th>
                        <td>{email}</td>
                      </tr>
                      <tr>
                        <th>Phone No.</th>
                        <td>{phone}</td>
                      </tr>
                      <tr>
                        <th>Job Category</th>
                        <td>{skill}</td>
                      </tr>
                      <tr>
                        <th>Service Area</th>
                        <td>{fullAddress}</td>
                      </tr>
                      <tr>
                        <th>Receiving Account:</th>
                        <td>{bankName}</td>
                      </tr>
                      <tr>
                        <th>Account NO.</th>
                        <td>{accountNumber}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex">
                <button
                  type="button"
                  onClick={onPrev}
                  className="btn btn-secondary w-1/2 mt-4 mr-2"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={onRegister}
                  className="btn btn-primary w-1/2 mt-4"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProviderRegister;