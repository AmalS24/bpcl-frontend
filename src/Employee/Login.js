import React from "react";
import avatar from "../assets/avatar.svg";
import { useState } from "react";
import axios from "axios";
import api from "../Api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [accessToken, setAccessToken] = useState();
  const [data, setData] = useState({});
  const nav = useNavigate()

  const getData = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setData((data) => ({
      ...data,
      [id]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post(api.userLogin, data)
      .then((res) => {
        if (res.status === 200) {
          const { userId, token } = res.data;
          console.log(userId, token);
          nav('/user')
        } else {
          alert("Failed to Login");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[340px]  relative h-auto bg-white  rounded-lg shadow-xl">
        <div className="h-auto w-full p-6 flex flex-col items-center justify-center  ">
          <img className="w-32 " src={avatar} alt="avatar" />
          <p className="font-semibold mb-6 text-3xl">SIGN IN</p>
          <div className="w-full space-y-4">
            <input
              onChange={getData}
              id="userName"
              type="text"
              autoFocus="autofocus"
              placeholder="USER ID"
              className="w-full border-[2px] text-lg 
                        border-gray-500 bg-transparent rounded-md p-2"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  document.getElementById("password").focus();
                }
              }}
            />
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  document.getElementById("sign-in-btn").click();
                }
              }}
              onChange={getData}
              id="password"
              type="password"
              placeholder="PASSWORD"
              className="w-full border-[2px] text-lg 
                        border-gray-500 bg-transparent rounded-md  p-2"
            />
          </div>
          <button
            onClick={handleLogin}
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
