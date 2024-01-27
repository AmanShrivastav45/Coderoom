import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../fonts/stylesheet.css";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-8xl mt-10">
      <div className="bg-[#fff0e5] h-[720px] flex items-center justify-center">
        <div className=" px-10 h-[100%] w-[50%] flex justify-center items-center flex-col">
          <h1 className="Apercu-Bold text-[#10162f] text-8xl overflow-hidden">
            CODEROOM
          </h1>
          <TypeAnimation
            sequence={[
              "Prepare for interviews.",
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              "Prepare for aptitude.",
              2000,
              "We produce food for Guinea Pigs",
              2000,
              "We produce food for Chinchillas",
              2000,
            ]}
            wrapper="span"
            speed={10}
            style={{
              fontFamily: "Apercu Mono",
              fontSize: "2em",
              display: "inline-block",
              textAlign: "right",
            }}
            repeat={Infinity}
          />
        </div>
        <div className="bg-green-500 px-10 h-[100%] w-[50%] "></div>
      </div>
      <div className="bg-[#10162f] h-[720px] flex items-center justify-center">
        <div className="bg-green-500 px-10 h-[100%] w-[50%] "></div>
        <div className=" px-10 h-[100%] w-[50%] flex justify-center items-center flex-col">
          <h1 className="Apercu-Bold text-[#10162f] text-8xl overflow-hidden">
            CODEROOM
          </h1>
        </div>
      </div>
      <div className="bg-[#fffd30] h-[720px] flex items-center justify-center">
        <div className=" px-10 h-[100%] w-[50%] flex justify-center items-center flex-col">
          <h1 className="Apercu-Bold text-[#10162f] text-8xl overflow-hidden">
            CODEROOM
          </h1>
        </div>
        <div className="bg-green-500 px-10 h-[100%] w-[50%] "></div>
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
