import React from "react";
import avatar from "../assets/avatar.svg";

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[340px]  relative h-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        <div className="h-auto w-full p-6 flex flex-col items-center justify-center dark:text-white ">
          <img className="w-32 " src={avatar} alt="avatar" />
          <p className="font-semibold mb-6 text-3xl">SIGN IN</p>
          <div className="w-full space-y-4">
            <input
              maxlength="5"
              type="text"
              placeholder="USER ID"
              className="w-full border-[2px] text-lg dark:focus:outline-white
                        border-gray-500 bg-transparent rounded-md uppercase p-2"
            />
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  document.getElementById("sign-in-btn").click();
                }
              }}
              type="password"
              placeholder="PASSWORD"
              className="w-full border-[2px] text-lg dark:focus:outline-white
                        border-gray-500 bg-transparent rounded-md  p-2"
            />
          </div>
          <button
            onClick={() => alert("hai")}
            id="sign-in-btn"
            className="bg-sky-500 hover:bg-sky-600 text-lg my-5 text-white font-semibold  w-auto h-auto p-2 px-3 rounded-lg"
          >
            Sign In
          </button>
          <p className="text-[17px]">Forgot password?</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
