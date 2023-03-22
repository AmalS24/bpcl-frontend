import React from 'react'

const Login = () => {
  return (
    <div className='w-screen min-h-auto h-screen overflow-y-hidden flex items-center bg-slate-200'>
        <div className="w-[640px]  h-[460px] absolute z-10 right-20 bg-white rounded-[3px] shadow-md"></div>
        <div className="absolute -left-32 z-20 w-8/12 transform -skew-x-[10deg] overflow-hidden h-full bg-red-300">
            <img src="https://img.freepik.com/free-photo/medium-shot-health-workers-with-masks_23-2148894844.jpg?w=900&t=st=1679467208~exp=1679467808~hmac=1c26413243664bd8af3a548c1c852c9f29f8663ddc27ba4d7f0109b504d28d64" alt="login-banner " className=" relative -left-1/2 w-full transform -scale-x-100 skew-x-[10deg] h-full"/>
        </div>
    </div>
  )
}

export default Login