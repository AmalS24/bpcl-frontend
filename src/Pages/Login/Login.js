import React from 'react'

const Login = () => {
  return (
    <div className='w-screen min-h-auto h-screen overflow-y-hidden flex items-center bg-slate-200'>
        <div className="flex w-[640px] justify-end pt-8 pr-24 h-[460px] absolute z-10 right-20 bg-white rounded-[3px] shadow-md">
        
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight md:text-[30px] break-all text-[#0E0D46]">
                  Welcome To Mediclaim
              </h1>
              <form class="space-y-4 md:space-y-6" action="/">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-red-500 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#0E0D46] focus:border-[#0E0D46] block w-full p-2.5  " placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#0E0D46] focus:border-[#0E0D46] block w-full p-2.5" required=""/>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#0E0D46] dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-[#0E0D46] dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#0E0D46] dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-[#0E0D46] dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Admin</label>
                          </div>
                      </div>
                      <a href="/" class="text-sm font-medium text-[#0E0D46] hover:underline dark:text-[#0E0D46]">Contact us?</a>
                  </div>
                  <button type="submit" class="w-full text-white bg-[#0E0D46] hover:bg-[#0E0D46] focus:ring-4 focus:outline-none focus:ring-[#0E0D46] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#0E0D46] dark:hover:bg-[#0E0D46] dark:focus:ring-[#0E0D46]">Sign in</button>
                  
              </form>
          </div>

        </div>
        <div className="absolute -left-32 z-20 transform w-8/12 -skew-x-[10deg] overflow-hidden h-full ">
            <img src="https://img.freepik.com/free-photo/medium-shot-health-workers-with-masks_23-2148894844.jpg?w=900&t=st=1679467208~exp=1679467808~hmac=1c26413243664bd8af3a548c1c852c9f29f8663ddc27ba4d7f0109b504d28d64" alt="login-banner " className=" relative object-cover w-[200%] transform -scale-x-100 skew-x-[10deg] h-full"/>
        </div>
    </div>
  )
}

export default Login