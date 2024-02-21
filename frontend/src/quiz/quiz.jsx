import React, { useState, useEffect } from "react";
import "../../src/index.css";
import "../fonts/stylesheet.css";

const QuestionGrid = ({ totalQuestions }) => {
  return (
    <div className="grid grid-cols-5 gap-6 ">
      {Array.from({ length: totalQuestions }, (_, index) => (
        <button
          key={index + 1}
          className="border-solid border border-black text-[#2a2a2a] h-[50px] w-[50px] grid place-items-center  rounded  Apercu-Medium text-base "
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

const QuizOption = ({ option }) => (
  <button className="w-full min-h-[70px] mb-4 rounded border border-black text-left pl-4 Apercu-Regular text-xl focus:bg-green-400 py-2">
    <span className="mr-2">{option.label}:</span>
    {option.text}
  </button>
);

const Quiz = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  let Question =
    "A train can travel 50% faster than a car. Both start from point A at the same time and reach point B 75 kms away from A at the same time. On the way, however, the train lost about 12.5 minutes while stopping at the stations. The speed of the car is:";
  let QuestionNo = 56;
  let option1 =
    "A train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a caA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carrA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a carA train can travel 50% faster than a car";
  let option2 = "110kmph";
  let option3 = "120kmph";
  let option4 = "130kmph";

  const options = [
    { label: "A", text: option1 },
    { label: "B", text: option2 },
    { label: "C", text: option3 },
    { label: "D", text: option4 },
  ];
  const unattempted = 48;
  const attempted = 52;
  const review = 7;
  const total = 100;
  const username = "Aman Shrivastav";
  return (
    <div className="w-full h-screen flex items-center justify-center px-16 py-4">
      <div className="h-full w-[75%] overflow-hidden">
        <div className="w-full overflow-hidden Apercu-Bold pl-2 text-2xl text-right flex justify-between items-center">
          Nimcet 2022 Official Paper
          <button className="h-12 Apercu-Medium overflow-hidden text-black border-solid border transition duration-200 ease-in-out border-[#10162f]  hover:text-white bg-[white] hover:bg-[#10162f] rounded text-base px-4 lg:px-5 py-2 lg:py-2.5  focus:outline-none">
            Mark for Review
          </button>
        </div>
        <div className="h-[28%] mt-4 border-black border w-full mb-4 pb-2 px-4 rounded Apercu-Regular text-xl">
          <div className="sticky top-0 h-12 w-full bg-[#fff0e5] pt-3 pb-2 Apercu-Bold">
            Question No: {QuestionNo}
          </div>
          <div>{Question}</div>
        </div>
        {/* Options Box */}
        <div className="h-[57%] border-black border w-full rounded mb-4 pb-2 px-4">
          <div className="sticky top-0 h-12 Apercu-Bold text-xl w-full bg-[#fff0e5] mb-2 pt-3 pb-2 Apercu-Bold">
            Select any one option below:
          </div>
          {options.map((option, index) => (
            <QuizOption key={index} option={option} />
          ))}
        </div>
        <div className="flex justify-between align-center ">
          <button className="h-12 Apercu-Medium overflow-hidden text-black border-solid border transition duration-200 ease-in-out border-[#10162f]  hover:text-white bg-[white] hover:bg-[#10162f] rounded text-base px-4 lg:px-5 py-2 lg:py-2.5  focus:outline-none">
            Previous
          </button>
          <button className="h-12 Apercu-Medium overflow-hidden text-black border-solid border transition duration-200 ease-in-out border-[#10162f]  hover:text-white bg-[white] hover:bg-[#10162f] rounded text-base px-4 lg:px-5 py-2 lg:py-2.5  focus:outline-none">
            Save & Next
          </button>
        </div>
      </div>
      <div className="h-full w-[25%] ml-4 overflow-hidden">
        <div className="h-12 display-time Apercu-Pro-Mono text-xl text-right flex justify-end items-center">
          Time Left:{" "}
          {currentTime.toLocaleTimeString("en-US", { hour12: false })}
        </div>
        <div className="border border-black h-[28%] rounded mt-4 mb-4">
          <div className="sticky top-0 h-12 w-full bg-[#fff0e5] pt-2 pb-2 text-center border-b border-black Apercu-Bold mb-4 text-xl px-4">
            Username: {username}
          </div>
          <div className="h-[180px] w-full flex justify-center items-start gap-2">
            <div className="h-full  w-[45%] pl-4">
              <div className="flex justify-start align-center mb-4">
                <div className="border-solid border border-black text-[#2a2a2a] h-[40px]  w-[40px] grid place-items-center  rounded  Apercu-Medium text-base ">
                  {total}
                </div>
                <span className="Apercu-Medium text-base py-2 ml-2">
                  Total Questions
                </span>
              </div>
              <div className="flex justify-start align-center mb-4">
                <div className="border-solid border border-black text-[#2a2a2a] h-[40px]  w-[40px] grid place-items-center  rounded  Apercu-Medium text-base ">
                  {total}
                </div>
                <span className="Apercu-Medium text-base py-2 ml-2">
                  Marked to review
                </span>
              </div>
              <div className="flex justify-start align-center mb-4">
                <div className="border-solid border border-black text-[#2a2a2a] h-[40px]  w-[40px] grid place-items-center  rounded  Apercu-Medium text-base ">
                  {total}
                </div>
                <span className="Apercu-Medium text-base py-2 ml-2">
                  Not visited
                </span>
              </div>
            </div>
            
            <div className="h-full w-[45%] ">
              <div className="flex justify-start align-center mb-4">
                <div className="border-solid border bg-green-500 border-black text-[#2a2a2a] h-[40px]  w-[40px] grid place-items-center  rounded  Apercu-Medium text-base ">
                  {total}
                </div>
                <span className="Apercu-Medium text-base py-2 ml-2">
                  Attempted
                </span>
              </div>
              <div className="flex justify-start align-center mb-4">
                <div className="border-solid border bg-red-400 border-black text-[#2a2a2a] h-[40px]  w-[40px] grid place-items-center  rounded  Apercu-Medium text-base ">
                  {total}
                </div>
                <span className="Apercu-Medium text-base py-2 ml-2">
                  Unattempted
                </span>
              </div>
              
            </div>
          </div>
        </div>
        <div className="h-[57%] overflow-auto rounded p-6 mb-4 border-solid border border-black ">
          <QuestionGrid totalQuestions={total} />
        </div>
        <button className="h-12 w-full Apercu-Medium overflow-hidden text-black border-solid border transition duration-200 ease-in-out border-[#10162f]  hover:text-white bg-[white] hover:bg-[#10162f] rounded text-base px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none">
          Submit Test
        </button>
      </div>
    </div>
  );
};

export default Quiz;
