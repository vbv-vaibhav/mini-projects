import React, { useEffect, useState } from "react";

const App = () => {
  const [logging, setLogging] = useState(false);
  const [loggedValue, setLoggedValue] = useState([]);

  const logFunc = () => {
    setLogging(true);
    document.addEventListener("keydown", keydown);
  };

  const remLogFunc = () => {
    setLogging(false);
    document.removeEventListener("keydown", keydown);
  };

  const keydown = (e) => {
    setLoggedValue((prevValues) => [...prevValues, e.key]);
  };

  useEffect(() => {
    if (logging) {
      document.addEventListener("keydown", keydown);
    } else {
      document.removeEventListener("keydown", keydown);
    }

    return () => {
      document.removeEventListener("keydown", keydown);
    };
  }, [logging]);

  return (
    <>
      <div className="grid grid-cols-2">
        <div className="bg-green-100 h-screen flex flex-col justify-center">
          <div className="text-center m-7">
            <div className="text-5xl font-medium p-4">Visual Key Logger</div>
          </div>
          <div className="text-center">
            <button
              onClick={logging ? remLogFunc : logFunc}
              className="p-4 m-2 bg-slate-400 rounded-lg font-medium"
            >
              {logging ? "Stop Logging" : "Start Logging"}
            </button>
          </div>
        </div>
        <div className="bg-red-100 h-screen flex flex-col justify-center">
          <div className="flex justify-center flex-col items-center">
            <div className="bg-slate-300 text-center text-4xl p-5 my-8 h-[70px] w-[70px] rounded-xl">
              {loggedValue[loggedValue.length - 1]}
            </div>
            <div className="bg-slate-300 w-1/2 text-center text-4xl p-5 min-h-[100px] my-4">
              {loggedValue.join(", ")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

//Styling
//Implement single key press style
//Add a full string element
//Add a copy button
