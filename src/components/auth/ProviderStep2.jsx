import React from "react";

function ProviderStep2() {
  return (
    <div>
      <div>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="bg-white w-[80%] max-w-5xl flex h-[900px] rounded-lg shadow-lg overflow-hidden">
            {/* ฝั่งซ้าย */}
            <div className="flex flex-1 justify-center items-center ">
              <h2 className="text-[50px] font-bold">Sign up today!</h2>
            </div>

            {/* ฝั่งขวา */}
            <div className="flex flex-col flex-1 justify-center items-center">
              <div className="  flex items-start justify-start">
                {/* <p className="text-[24px] font-bold mb-4   ">Create Account</p> */}
                <ul className="steps  mb-6">
                  <li className="step step-primary text-blue-500">Register</li>
                  <li className="step step-primary text-blue-500">
                    Authenticate
                  </li>
                  <li className="step text-gray-400">Bank</li>
                  <li className="step text-gray-400">Review</li>
                </ul>
              </div>

              <div className=" w-3/4">
                <label className="fieldset-label text-sm mt-2">
                  Personal / Company
                </label>
                <select defaultValue="Pick a color" className="select w-full">
                  {/* <option disabled={true}>Pick a color</option> */}
                  <option>Personal</option>
                  <option>Company</option>
                </select>

                <label className="fieldset-label text-sm mt-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Enter your Company name"
                  className="input input-bordered w-full mb-2"
                />

                <label className="fieldset-label text-sm mt-2">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your Address"
                  className="input input-bordered w-full mb-2"
                />

                <label className="fieldset-label text-sm mt-2">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter your City"
                  className="input input-bordered w-full mb-2"
                />

                <label className="fieldset-label text-sm mt-2">Password</label>
                <input
                  type="text"
                  name="District"
                  placeholder="Enter your District"
                  className="input input-bordered w-full mb-2"
                />

                <label className="fieldset-label text-sm mt-2">Zipcode</label>
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Enter your Zipcode"
                  className="input input-bordered w-full mb-2"
                />

                <label className="fieldset-label text-sm mt-2">Quanlification / Company verification</label>
                <input
                  type="text"
                  name="quanlify"
                  placeholder="Upload Photo"
                  className="input input-bordered w-full mb-2"
                />

                <label className="fieldset-label text-sm mt-2 ">Skill</label>
                <select defaultValue="Please Select" className="select w-full">
                  <option disabled={true}>skill</option>
                  <option>Caring</option>
                  <option>Cleaning</option>
                  <option>Laundry</option>
                  <option>Food & Transport</option>
                  <option>Fixing</option>
                  <option>Pet care</option>
                  <option>Gardening</option>
                </select>

                <label className="fieldset-label text-sm mt-2">
                  Identification Number
                </label>
                <input
                  type="text"
                  name="identifyNumber"
                  placeholder="Enter your Identification Number"
                  className="input input-bordered w-full mb-2"
                />
                <label className="fieldset-label text-sm mt-2">
                  Identification Photo
                </label>
                <input
                  type="text"
                  name="identityNumber"
                  placeholder="Upload Photo"
                  className="input input-bordered w-full mb-2"
                />


                <button className="btn btn-primary w-full mt-4">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProviderStep2;
