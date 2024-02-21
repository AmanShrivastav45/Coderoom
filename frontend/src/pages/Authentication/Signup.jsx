import React from "react";
import '../../fonts/stylesheet.css'
import {Link} from 'react-router-dom'

function Signup() {
  return (
    <div className="bg-[#10162f] w-full h-screen flex items-center  justify-center">
      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" action="#">
          <h5 class="text-3xl text-center Apercu-Bold text-gray-900 dark:text-white">
            Sign in to Coderoom
          </h5>
          <div>
            <label
              for="email"
              class="block mb text-base Apercu-Regular text-gray-900 dark:text-white"
            >
              Enter your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 focus:outline-none Apercu-Light text-gray-900 text-base rounded-lg focus:none block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              for="email"
              class="block mb text-base Apercu-Regular text-gray-900 dark:text-white"
            >
              Enter your username
            </label>
            <input
              type="text"
              name="text"
              id="text"
              class="bg-gray-50 focus:outline-none Apercu-Light text-gray-900 text-base rounded-lg focus:none block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Username123"
              required
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 Apercu-Regular text-base text-gray-900 dark:text-white"
            >
              Enter your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 focus:outline-none Apercu-Medium text-xl text-gray-900 rounded-lg  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 Apercu-Regular text-base text-gray-900 dark:text-white"
            >
              Confirm your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 focus:outline-none Apercu-Medium text-xl text-gray-900 rounded-lg  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          
          <button
            type="submit"
            class="w-full text-white Apercu-Medium text-base bg-blue-700 hover:bg-blue-800   rounded-lg  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create an account
          </button>
          <div class="Apercu-Medium text-base text-gray-500 dark:text-gray-300">
            Already registered?{" "}
            <Link
              to="/login"
              class="text-blue-700 hover:underline dark:text-blue-500"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Signup;
