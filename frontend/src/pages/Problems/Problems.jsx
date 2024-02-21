import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../fonts/stylesheet.css";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@material-tailwind/react";

export default function Problems() {
  return (
    <div className="mx-auto w-full max-w-8xl mt-10">
      <div className="bg-[#10162f] w-full h-[1080px] flex flex-col items-center justify-start">
        <div className="flex w-full gap-4 items-center justify-center m-4 mt-12">
          <Link
            to="/login"
            className="Apercu-Medium text-black border-solid border-2 transition duration-200 ease-in-out border-[#10162f]  hover:text-black bg-[#fff0e5] hover:bg-[#fffd30] rounded-md text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Arrays
          </Link>
          <Link
            to="/login"
            className="Apercu-Medium text-black border-solid border-2 transition duration-200 ease-in-out border-[#10162f]  hover:text-black bg-[#fff0e5] hover:bg-[#fffd30] rounded-md text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Strings
          </Link>
          <Link
            to="/login"
            className="Apercu-Medium text-black border-solid border-2 transition duration-200 ease-in-out border-[#10162f]  hover:text-black bg-[#fff0e5] hover:bg-[#fffd30] rounded-md text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Bit Manipulation
          </Link>
          <Link
            to="/login"
            className="Apercu-Medium text-black border-solid border-2 transition duration-200 ease-in-out border-[#10162f]  hover:text-black bg-[#fff0e5] hover:bg-[#fffd30] rounded-md text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Linked Lists
          </Link>
          <Link
            to="/login"
            className="Apercu-Medium text-black border-solid border-2 transition duration-200 ease-in-out border-[#10162f]  hover:text-black bg-[#fff0e5] hover:bg-[#fffd30] rounded-md text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Sorting
          </Link>
          <Link
            to="/login"
            className="Apercu-Medium text-black border-solid border-2 transition duration-200 ease-in-out border-[#10162f]  hover:text-black bg-[#fff0e5] hover:bg-[#fffd30] rounded-md text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Binary Trees
          </Link>
          <Link
            to="/login"
            className="Apercu-Medium text-black border-solid border-2 transition duration-200 ease-in-out border-[#10162f]  hover:text-black bg-[#fff0e5] hover:bg-[#fffd30] rounded-md text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Stacks
          </Link>
          
          <Link
            to="/login"
            className="Apercu-Medium text-black border-solid border-2 transition duration-200 ease-in-out border-[#10162f]  hover:text-black bg-[#fff0e5] hover:bg-[#fffd30] rounded-md text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Dynamic Programming
          </Link>
          
        </div>
        <div className="flex w-full gap-4 items-center justify-center mb-8 ">
          <Link
            to="/login"
            className="Apercu-Medium text-black border-solid border-2 transition duration-200 ease-in-out border-[#10162f]  hover:text-black bg-[#fff0e5] hover:bg-[#fffd30] rounded-md text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Queues
          </Link>
          <Link
            to="/login"
            className="Apercu-Medium text-black border-solid border-2 transition duration-200 ease-in-out border-[#10162f]  hover:text-black bg-[#fff0e5] hover:bg-[#fffd30] rounded-md text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            SQL
          </Link>
          <Link
            to="/login"
            className="Apercu-Medium text-black border-solid border-2 transition duration-200 ease-in-out border-[#10162f]  hover:text-black bg-[#fff0e5] hover:bg-[#fffd30] rounded-md text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Searching
          </Link>
          <Link
            to="/login"
            className="Apercu-Medium text-black border-solid border-2 transition duration-200 ease-in-out border-[#10162f]  hover:text-black bg-[#fff0e5] hover:bg-[#fffd30] rounded-md text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Two Pointers
          </Link>
          <Link
            to="/login"
            className="Apercu-Medium text-black border-solid border-2 transition duration-200 ease-in-out border-[#10162f]  hover:text-black bg-[#fff0e5] hover:bg-[#fffd30] rounded-md text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Implementation
          </Link>
          <Link
            to="/login"
            className="Apercu-Medium text-black border-solid border-2 transition duration-200 ease-in-out border-[#10162f]  hover:text-black bg-[#fff0e5] hover:bg-[#fffd30] rounded-md text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Maths
          </Link>
          <Link
            to="/login"
            className="Apercu-Medium text-black border-solid border-2 transition duration-200 ease-in-out border-[#10162f]  hover:text-black bg-[#fff0e5] hover:bg-[#fffd30] rounded-md text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Stacks
          </Link>
          <Link
            to="/login"
            className="Apercu-Medium text-black border-solid border-2 transition duration-200 ease-in-out border-[#10162f]  hover:text-black bg-[#fff0e5] hover:bg-[#fffd30] rounded-md text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Tries
          </Link>
          <Link
            to="/login"
            className="Apercu-Medium text-black border-solid border-2 transition duration-200 ease-in-out border-[#10162f]  hover:text-black bg-[#fff0e5] hover:bg-[#fffd30] rounded-md text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Binary Search Trees
          </Link>
          
        </div>
        <div class="relative overflow-x-auto w-[60%] shadow-md sm:rounded-lg">
          <table class="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="Apercu-Medium text-base h-12 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Problems
                </th>
                <th scope="col" class="px-6 py-3">
                  Tags
                </th>
                <th scope="col" class="px-6 py-3">
                  Difficulty
                </th>
                <th scope="col" class="px-6 py-3">
                  Solution
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white Apercu-Regular"
                >
                  Search Insert Position
                </th>
                <td class="px-6 py-4 Apercu-Regular">Linked Lists</td>
                <td class="px-6 py-4 Apercu-Regular">Easy</td>
                <td class="px-6 py-4 Apercu-Regular">Link</td>
              </tr>
              <tr class="bg-white border-b Apercu-Regular dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white Apercu-Regular"
                >
                  Letter Combinations of a Phone Number
                </th>
                <td class="px-6 py-4 Apercu-Regular">Arrays, Bitwise</td>
                <td class="px-6 py-4 Apercu-Regular">Medium</td>
                <td class="px-6 py-4 Apercu-Regular">Link</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white Apercu-Regular"
                >
                  Median of Two Sorted Arrays
                </th>
                <td class="px-6 py-4 Apercu-Regular">Arrays, Implementation</td>
                <td class="px-6 py-4 Apercu-Regular">Hard</td>
                <td class="px-6 py-4 Apercu-Regular">Link</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white Apercu-Regular"
                >
                  Search Insert Position
                </th>
                <td class="px-6 py-4 Apercu-Regular">Linked Lists</td>
                <td class="px-6 py-4 Apercu-Regular">Easy</td>
                <td class="px-6 py-4 Apercu-Regular">Link</td>
              </tr>
              <tr class="bg-white border-b Apercu-Regular dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white Apercu-Regular"
                >
                  Letter Combinations of a Phone Number
                </th>
                <td class="px-6 py-4 Apercu-Regular">Arrays, Bitwise</td>
                <td class="px-6 py-4 Apercu-Regular">Medium</td>
                <td class="px-6 py-4 Apercu-Regular">Link</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white Apercu-Regular"
                >
                  Median of Two Sorted Arrays
                </th>
                <td class="px-6 py-4 Apercu-Regular">Arrays, Implementation</td>
                <td class="px-6 py-4 Apercu-Regular">Hard</td>
                <td class="px-6 py-4 Apercu-Regular">Link</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white Apercu-Regular"
                >
                  Search Insert Position
                </th>
                <td class="px-6 py-4 Apercu-Regular">Linked Lists</td>
                <td class="px-6 py-4 Apercu-Regular">Easy</td>
                <td class="px-6 py-4 Apercu-Regular">Link</td>
              </tr>
              <tr class="bg-white border-b Apercu-Regular dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white Apercu-Regular"
                >
                  Letter Combinations of a Phone Number
                </th>
                <td class="px-6 py-4 Apercu-Regular">Arrays, Bitwise</td>
                <td class="px-6 py-4 Apercu-Regular">Medium</td>
                <td class="px-6 py-4 Apercu-Regular">Link</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white Apercu-Regular"
                >
                  Median of Two Sorted Arrays
                </th>
                <td class="px-6 py-4 Apercu-Regular">Arrays, Implementation</td>
                <td class="px-6 py-4 Apercu-Regular">Hard</td>
                <td class="px-6 py-4 Apercu-Regular">Link</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white Apercu-Regular"
                >
                  Search Insert Position
                </th>
                <td class="px-6 py-4 Apercu-Regular">Linked Lists</td>
                <td class="px-6 py-4 Apercu-Regular">Easy</td>
                <td class="px-6 py-4 Apercu-Regular">Link</td>
              </tr>
              <tr class="bg-white border-b Apercu-Regular dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white Apercu-Regular"
                >
                  Letter Combinations of a Phone Number
                </th>
                <td class="px-6 py-4 Apercu-Regular">Arrays, Bitwise</td>
                <td class="px-6 py-4 Apercu-Regular">Medium</td>
                <td class="px-6 py-4 Apercu-Regular">Link</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white Apercu-Regular"
                >
                  Median of Two Sorted Arrays
                </th>
                <td class="px-6 py-4 Apercu-Regular">Arrays, Implementation</td>
                <td class="px-6 py-4 Apercu-Regular">Hard</td>
                <td class="px-6 py-4 Apercu-Regular">Link</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
