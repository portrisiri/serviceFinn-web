import React from "react";

function ProviderStep3() {
  return (
    <div>
      <div>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="bg-white w-[80%] max-w-5xl flex h-[600px] rounded-lg shadow-lg overflow-hidden">
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
                  <li className="step step-primary text-blue-500">Bank</li>
                  <li className="step text-gray-400">Review</li>
                </ul>
              </div>

              <div className=" w-3/4">
                <label className="fieldset-label text-sm mt-2">Bank Name</label>
                <input
                  type="text"
                  name="bankName"
                  placeholder="Enter your Bank name"
                  className="input input-bordered w-full mb-2"
                />

                <label className="fieldset-label text-sm mt-2">
                  Bank Account
                </label>
                <input
                  type="text"
                  name="bankAccount"
                  placeholder="Enter your Bank account"
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

export default ProviderStep3;
