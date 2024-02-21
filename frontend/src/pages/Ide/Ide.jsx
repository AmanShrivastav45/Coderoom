import React from "react";
import ReactDOM from "react-dom";
import Editor from "@monaco-editor/react";
import "../../fonts/stylesheet.css";

const palette =
  "#include <iostream>\nusing namespace std;\n\nint main(){\n    //your code goes here\n  return 0;\n}";
function Ide() {
  return (
    <>
      <div className="h-[150px]  w-screen bg-transparent flex">
        <div className="flex w-[1280px] h-full items-end justify-end">
          <select
            label="Select Language"
            className="h-8 text-xl Apercu-Medium outline-none border-solid border border-[#2a2a2a] pl-2 rounded-[5px]  w-[180px] mb-6"
          >
            <option selected>C++ gcc17</option>
            <option>Java</option>
            <option>Python</option>
            <option>Javascript</option>
          </select>
        </div>
        <div className="flex w-[600px] h-full items-end justify-end">
          <button className="h-8 text-xl transition duration-200 ease-in-out  hover:text-white bg-[white] hover:bg-[#10162f] Apercu-Regular outline-none border-solid border border-[#2a2a2a] rounded-[5px]  w-[80px] mb-6 mr-4">
            Clear
          </button>
          <button className="h-8 text-xl transition duration-200 ease-in-out bg-[#10162f] text-white hover:bg-[#242962]  Apercu-Regular outline-none border-solid border border-[#2a2a2a] rounded-[5px]  w-[80px] mb-6 mr-2">
            Run
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between h-[720px] ">
        <div className="h-full w-[1280px] pl-10 caret-white">
          <Editor
            height="720px"
            theme="vs-dark"
            defaultLanguage="cpp"
            defaultValue={palette}
            options={{
              roundedSelection: false,
              scrollBeyondLastLine: false,
              fontSize: "20px",
              paddingTop: "5px",
            }}
          />
        </div>
        <div className="h-full w-[600px] pr-8">
          <textarea
            className=" w-full h-[300px] caret-black pl-6 pt-4 text-white text-xl Apercu-Light mb-4 bg-[#1e1e1e] resize-none outline-none rounded-[5px]"
            placeholder="Enter your standard input here"
          ></textarea>
          <div className=" w-full h-[400px] pl-6 pt-4 text-white text-xl Apercu-Regular bg-[#1e1e1e] resize-none outline-none rounded-[5px]"></div>
        </div>
      </div>
    </>
  );
}

export default Ide;
// className="h-full w-[1280px] bg-green-300"
