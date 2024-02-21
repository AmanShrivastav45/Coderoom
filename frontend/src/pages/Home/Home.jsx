import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../fonts/stylesheet.css";
import { TypeAnimation } from "react-type-animation";
import Contest from "../../images/Contestt.png"
import { GridBackgroundDemo } from "../../ui/bg";

export default function Home() {
  return (

    <div className="mx-auto w-full max-w-8xl mt-10">
          <GridBackgroundDemo/>
      <div className="bg-gradient-to-r from-amber-300 to-cyan-300 h-[720px] flex flex-col items-center justify-center">
        <h1 className="Apercu-Bold text-[#10162f] text-[180px] overflow-hidden">
          CODEROOM
        </h1>
        <TypeAnimation
          sequence={[
            "Learn. Practice. Compete.",
            2000,
            "Build Your Tech Career.",
            2000, // wait 1s before replacing "Mice" with "Hamsters"
          ]}
          wrapper="span"
          speed={10}
          style={{
            fontFamily: "Apercu Mono",
            fontSize: "2em",
            display: "inline-block",
            textAlign: "center",
          }}
          repeat={Infinity}
        />
      </div>
      <div className="bg-[#10162f] h-[680px] flex flex-col items-center justify-center p-10">
        <div className="h-[120px] w-full">
          <h1 className="Apercu-Medium text-4xl overflow-hidden mb-6 text-white text-center">
            <p className="text-xl Apercu-Mono mb-2">Start learning from</p>
            Popular Resources
          </h1>
        </div>
        <div className="h-[380px] w-full flex align-center justify-center gap-5">
          <div className="h-[320px] w-[280px] rounded-[5px] bg-[#eafdc6]">
            <div className="h-[40px] w-full pl-4 pt-2 flex align-center Apercu-Mono text-sm">
              Beginner Friendly
            </div>
            <div className="pl-4 pt-2 h-[230px] w-full bg-white text-xl Apercu-Bold">
              Data Structures and Algorithms
              <p className="text-base mt-2 Apercu-Regular pr-2">
                DSA is an important aspect of any programming language. Every
                language has its own data structures and its way of handling
                different types of algorithms.
              </p>
            </div>
            <div className="h-[50px] pl-4 bg-white flex align-center justify-start">
              <button
                type="submit"
                class="w-[90px] h-8  text-white overflow-hidden Apercu-Medium text-sm bg-blue-700 hover:bg-blue-800   rounded-lg  px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Checkout
              </button>
            </div>
          </div>
          <div className="h-[320px] w-[280px] rounded-[5px] bg-[#eafdc6]">
            <div className="h-[40px] w-full pl-4 pt-2 flex align-center Apercu-Mono text-sm">
              Beginner Friendly
            </div>
            <div className="pl-4 pt-2 h-[230px] w-full bg-white text-xl Apercu-Bold">
              Data Structures and Algorithms
              <p className="text-base mt-2 Apercu-Regular pr-2">
                DSA is an important aspect of any programming language. Every
                language has its own data structures and its way of handling
                different types of algorithms.
              </p>
            </div>
            <div className="h-[50px] pl-4 bg-white flex align-center justify-start">
              <button
                type="submit"
                class="w-[90px] h-8  text-white overflow-hidden Apercu-Medium text-sm bg-blue-700 hover:bg-blue-800   rounded-lg  px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Checkout
              </button>
            </div>
          </div>
          <div className="h-[320px] w-[280px] rounded-[5px] bg-[#eafdc6]">
            <div className="h-[40px] w-full pl-4 pt-2 flex align-center Apercu-Mono text-sm">
              Beginner Friendly
            </div>
            <div className="pl-4 pt-2 h-[230px] w-full bg-white text-xl Apercu-Bold">
              Data Structures and Algorithms
              <p className="text-base mt-2 Apercu-Regular pr-2">
                DSA is an important aspect of any programming language. Every
                language has its own data structures and its way of handling
                different types of algorithms.
              </p>
            </div>
            <div className="h-[50px] pl-4 bg-white flex align-center justify-start">
              <button
                type="submit"
                class="w-[90px] h-8  text-white overflow-hidden Apercu-Medium text-sm bg-blue-700 hover:bg-blue-800   rounded-lg  px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Checkout
              </button>
            </div>
          </div>
          <div className="h-[320px] w-[280px] rounded-[5px] bg-[#eafdc6]">
            <div className="h-[40px] w-full pl-4 pt-2 flex align-center Apercu-Mono text-sm">
              Beginner Friendly
            </div>
            <div className="pl-4 pt-2 h-[230px] w-full bg-white text-xl Apercu-Bold">
              Data Structures and Algorithms
              <p className="text-base mt-2 Apercu-Regular pr-2">
                DSA is an important aspect of any programming language. Every
                language has its own data structures and its way of handling
                different types of algorithms.
              </p>
            </div>
            <div className="h-[50px] pl-4 bg-white flex align-center justify-start">
              <button
                type="submit"
                class="w-[90px] h-8  text-white overflow-hidden Apercu-Medium text-sm bg-blue-700 hover:bg-blue-800   rounded-lg  px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
        <button
          type="submit"
          class="w-[120px] text-white overflow-hidden mb-10 Apercu-Medium text-base bg-blue-700 hover:bg-blue-800   rounded-lg  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Explore
        </button>
      </div>
      <div className="bg-[#ffd930] h-[620px] flex items-center justify-center px-40">
        <div className=" px-10 h-[100%] w-[50%] flex justify-center items-end flex-col">
          <h1 className="Apercu-Bold text-[#10162f] text-5xl text-left overflow-hidden pl-20">
            Not sure where to start?
            <p className="overflow-hidden text-left text-xl Apercu-Regular mt-4">
              Checkout our roadmaps.
              <br /> Step by step guides and paths to learn different tools or
              technologies.
            </p>
            <button
              type="submit"
              class="w-[120px] text-white Apercu-Medium text-base bg-blue-700 hover:bg-blue-800   rounded-lg  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Roadmaps
            </button>
          </h1>
        </div>
        <div className="pl-6 h-[100%] w-[50%] flex items-center justify-start">
          <ol class="relative border-s border-gray-200 dark:border-gray-700">
            <li class="mb-6 ms-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-2 text-base Apercu-Medium leading-none text-[#10162f] dark:text-[#10162f]">
                Week 1
              </time>
              <h3 class="text-lg Apercu-Bold text-[#10162f]">
                Introduction to C++
              </h3>
              <p class="text-base Apercu-Medium text-[#10162f] ">
                Arithmetic Operators, Logical Operators, Loops for/while,
                Bitwise Operators
              </p>
            </li>
            <li class="mb-6 ms-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-2 text-base Apercu-Medium leading-none text-[#10162f] dark:text-[#10162f]">
                Week 2
              </time>
              <h3 class="text-lg Apercu-Bold text-[#10162f]">
                Functions and Data Types
              </h3>
              <p class="text-base Apercu-Medium text-[#10162f] ">
                Operator functions, Lambda functions, Dynamic typing, Static
                typing
              </p>
            </li>
            <li class="mb-6 ms-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-2 text-base Apercu-Medium leading-none text-[#10162f] dark:text-[#10162f]">
                Week 3
              </time>
              <h3 class="text-lg Apercu-Bold text-[#10162f]">
                Pointers and References
              </h3>
              <p class="text-base Apercu-Medium text-[#10162f] ">
                Raw Pointers, Smart Pointers, References and Memory Models,
                Lifetime of Objects.
              </p>
            </li>
            <li class="mb-6 ms-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-2 text-base Apercu-Medium leading-none text-[#10162f] dark:text-[#10162f]">
                Week 4
              </time>
              <h3 class="text-lg Apercu-Bold text-[#10162f]">
                Object Oriented Programming
              </h3>
              <p class="text-base Apercu-Medium text-[#10162f] ">
                Structure and Classes, Static Polymorphism, Dynamic
                Polymorphism,<br></br>Multiple Inheritance, Diamond Inheritance.
              </p>
            </li>
          </ol>
        </div>
      </div>
      {/* Third Box */}
      <div className=" bg-[#10162f] h-[620px] flex items-center justify-center px-40">
        
        <div className="pr-20 h-[100%] w-[50%] flex items-center justify-end ">
          <img src={Contest} className="border-solid border-white border-4 rounded-md h-[360px]"/>
        </div>
        <div className=" px-10 h-[100%] w-[50%] flex justify-center items-start flex-col">
          <h1 className="Apercu-Bold text-[#ffffff] text-5xl text-left overflow-hidden ">
            Compete with your peers.
            <p className="overflow-hidden text-left text-xl Apercu-Regular mt-4">
              Checkout for the contests and know where you stand.
              <br /> Daily contests are held to boost your experiences.
            </p>
            <button
              type="submit"
              class="w-[120px] text-white Apercu-Medium text-base bg-[blue-700] hover:bg-blue-800   rounded-lg  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Contests
            </button>
          </h1>
        </div>
      </div>
    </div>
  );
}

{
  /* <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link> */
}
