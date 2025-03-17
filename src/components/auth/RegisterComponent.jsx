import UserRegister from "./UserRegister";

const RegisterComponent = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white w-[80%] max-w-5xl flex h-[600px] rounded-lg shadow-lg overflow-hidden">
          {/* ฝั่งซ้าย */}
          <div className="flex flex-1 justify-center items-center ">
            <h2 className="text-[50px] font-bold">Sign up today!</h2>
          </div>

          {/* ฝั่งขวา */}
          <div className="flex flex-col flex-1 justify-center items-center">
            <p className="text-lg font-semibold mb-4 text-center">
              What would you like to apply for?
            </p>
            <div className="flex justify-center gap-4">
              <button className="btn w-[160px]">Customer</button>
              <button className="btn w-[160px]">Provider</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
