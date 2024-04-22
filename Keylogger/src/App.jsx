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
        <div className="bg-slate-100 h-screen flex flex-col justify-center">
          <div className="text-center m-10">
            <div className="text-5xl font-medium m-4 hover:scale-105 duration-300">
              Visual Key Logger
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={logging ? remLogFunc : logFunc}
              className="p-4 bg-blue-500 rounded-lg hover:scale-105 duration-300 hover:shadow-md hover:shadow-blue-950"
            >
              {logging ? "Stop Logging" : "Start Logging"}
            </button>
          </div>
        </div>
        <div className="h-screen flex flex-col justify-center">
          <div className="flex justify-center flex-col items-center">
            <div className="">
              <div className="font-medium text-2xl p-2 text-center">
                Keystrokes
              </div>
              <div className="bg-slate-300 text-center text-4xl p-5 mb-8 h-[70px] w-[200px] rounded-xl hover:shadow-md hover:shadow-slate-500 duration-300">
                {loggedValue[loggedValue.length - 1]}
              </div>
            </div>

            <div className="font-medium text-2xl p-2 text-center">
              Resulting String
            </div>
            <div className="bg-slate-300 w-1/2 text-center text-2xl p-5 min-h-[75px] min-w-[600px] rounded-xl hover:shadow-md hover:shadow-slate-500 duration-300">
              {loggedValue.join(", ")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
