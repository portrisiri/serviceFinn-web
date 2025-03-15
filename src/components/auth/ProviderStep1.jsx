import React from "react";

function ProviderStep1() {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white w-[80%] max-w-5xl flex h-[800px] rounded-lg shadow-lg overflow-hidden">
          {/* ฝั่งซ้าย */}
          <div className="flex flex-1 justify-center items-center ">
            <h2 className="text-[50px] font-bold">Sign up today!</h2>
          </div>

          {/* ฝั่งขวา */}
          <div className="flex flex-col flex-1 justify-center items-center">
            <div className="  flex items-start justify-start">
              {/* <p className="text-[24px] font-bold mb-4   ">Create Account</p> */}
              <ul className="steps  mb-6">
                <li className="step step-primary text-blue-500">Info</li>
                <li className="step text-gray-400">Authenticate</li>
                <li className="step text-gray-400">Bank</li>
                <li className="step text-gray-400">Review</li>
              </ul>
            </div>
            <div className="flex gap-4 justify-between mb-4 w-3/4">
              {/* Google */}
              <button className="btn bg-white text-black border-[#e5e5e5]">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>

              {/* Line */}
              <button className="btn bg-white text-black border-[#e5e5e5]">
                <svg
                  className="h-[16px]"
                  viewBox="0 0 377.764 377.764"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#3ACE01"
                      d="M77.315 0h223.133c42.523 0 77.315 34.792 77.315 77.315v223.133c0 42.523-34.792 77.315-77.315 77.315H77.315C34.792 377.764 0 342.972 0 300.448V77.315C0 34.792 34.792 0 77.315 0z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#FFF"
                      d="M188.515 62.576c76.543 0 138.593 49.687 138.593 110.979 0 21.409-7.576 41.398-20.691 58.351-.649.965-1.497 2.031-2.566 3.209l-.081.088c-4.48 5.36-9.525 10.392-15.072 15.037-38.326 35.425-101.41 77.601-109.736 71.094-7.238-5.656 11.921-33.321-10.183-37.925-1.542-.177-3.08-.367-4.605-.583l-.029-.002v-.002c-64.921-9.223-114.222-54.634-114.222-109.267-.002-61.292 62.049-110.979 138.592-110.979z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#3ACE01"
                      d="M108.103 208.954h27.952c3.976 0 7.228-3.253 7.228-7.229v-.603c0-3.976-3.252-7.228-7.228-7.228h-20.121v-45.779c0-3.976-3.252-7.228-7.228-7.228h-.603c-3.976 0-7.228 3.252-7.228 7.228v53.609c0 3.977 3.252 7.23 7.228 7.23zm173.205-33.603v-.603c0-3.976-3.253-7.228-7.229-7.228h-20.12v-11.445h20.12c3.976 0 7.229-3.252 7.229-7.228v-.603c0-3.976-3.253-7.228-7.229-7.228h-27.952c-3.976 0-7.228 3.252-7.228 7.228v53.609c0 3.976 3.252 7.229 7.228 7.229h27.952c3.976 0 7.229-3.253 7.229-7.229v-.603c0-3.976-3.253-7.228-7.229-7.228h-20.12v-11.445h20.12c3.976.002 7.229-3.251 7.229-7.226zm-53.755 31.448l.002-.003a7.207 7.207 0 0 0 2.09-5.07v-53.609c0-3.976-3.252-7.228-7.229-7.228h-.603c-3.976 0-7.228 3.252-7.228 7.228v31.469l-26.126-35.042c-1.248-2.179-3.598-3.655-6.276-3.655h-.603c-3.976 0-7.229 3.252-7.229 7.228v53.609c0 3.976 3.252 7.229 7.229 7.229h.603c3.976 0 7.228-3.253 7.228-7.229v-32.058l26.314 35.941c.162.252.339.494.53.724l.001.002c.723.986 1.712 1.662 2.814 2.075.847.35 1.773.544 2.742.544h.603a7.162 7.162 0 0 0 3.377-.844c.723-.344 1.332-.788 1.761-1.311zm-71.208 2.155h.603c3.976 0 7.228-3.253 7.228-7.229v-53.609c0-3.976-3.252-7.228-7.228-7.228h-.603c-3.976 0-7.229 3.252-7.229 7.228v53.609c0 3.976 3.253 7.229 7.229 7.229z"
                    ></path>
                  </g>
                </svg>
                Login with LINE
              </button>
            </div>
            <div className="flex items-start justify-center">or</div>
            <div className=" w-3/4">
              <label className="fieldset-label text-sm mt-2">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your First name"
                className="input input-bordered w-full mb-2"
              />

              <label className="fieldset-label text-sm mt-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your Last name"
                className="input input-bordered w-full mb-2"
              />

              <label className="fieldset-label text-sm mt-2">
                E-mail Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="input input-bordered w-full mb-2"
              />

              <label className="fieldset-label text-sm mt-2">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Enter your Phone number"
                className="input input-bordered w-full mb-2"
              />

              <label className="fieldset-label text-sm mt-2">Password</label>
              <input
                type="text"
                name="Password"
                placeholder="Enter your Password"
                className="input input-bordered w-full mb-2"
              />

              <label className="fieldset-label text-sm mt-2">
                Confirm Password
              </label>
              <input
                type="text"
                name="ConfirnPassword"
                placeholder="Confirm Password"
                className="input input-bordered w-full mb-2"
              />
              <div className="flex gap-2">
                <p className="fieldset-label text-sm mt-2">
                  Already have an account ?
                </p>
                <p className="text-sm mt-2">Log In</p>
              </div>
              <button className="btn btn-primary w-full mt-4">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProviderStep1;
