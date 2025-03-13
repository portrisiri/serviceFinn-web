import React from "react";

function ProviderStep4() {
  return (
    <div>
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
                  <li className="step step-primary text-blue-500">Register</li>
                  <li className="step step-primary text-blue-500">
                    Authenticate
                  </li>
                  <li className="step step-primary text-blue-500">Bank</li>
                  <li className="step step-primary text-blue-500">Review</li>
                </ul>
              </div>

              <div className=" w-3/4">
                <div className="">
                  <div className="overflow-x-auto">
                    <table className="table table-zebra">
                      <tbody>
                        <tr>
                          <th>First name</th>
                          <td>Cy Ganderton</td>
                        </tr>

                        <tr>
                          <th>Last name</th>
                          <td>Hart Hagerty</td>
                        </tr>

                        <tr>
                          <th>E-mail</th>
                          <td>Brice Swyre</td>
                        </tr>

                        <tr>
                          <th>Phone</th>
                          <td>Brice Swyre</td>
                        </tr>

                        <tr>
                          <th>Company name</th>
                          <td>Brice Swyre</td>
                        </tr>

                        <tr>
                          <th>Address</th>
                          <td>Brice Swyre</td>
                        </tr>

                        <tr>
                          <th>Quanlification</th>
                          <td>Brice Swyre</td>
                        </tr>

                        <tr>
                          <th>Skill</th>
                          <td>Brice Swyre</td>
                        </tr>

                        <tr>
                          <th>Identify number</th>
                          <td>Brice Swyre</td>
                        </tr>

                        <tr>
                          <th>Identify Photo</th>
                          <td>Brice Swyre</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <button className="btn btn-primary w-full mt-4">
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

export default ProviderStep4;
