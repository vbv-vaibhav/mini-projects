import React, { useState, useEffect } from "react";

const App = () => {
  const [logging, setLogging] = useState(true);
  const [loggedValue, setLoggedValue] = useState("");

  return (
    <>
      <div className="grid grid-cols-2">
        <div className="bg-green-100 h-screen flex flex-col justify-center">
          <div className="text-center m-7">
            <div className="text-5xl font-medium p-4">Visual Key Logger</div>
          </div>
          <div className="text-center">
            <button
              onClick={() => setLogging(!logging)}
              className="p-4 m-2 bg-slate-400 rounded-lg font-medium"
            >
              {logging ? "Stop Logging" : "Start Logging"}
            </button>
          </div>
        </div>
        <div className="bg-red-100 h-screen flex flex-col justify-center">
          <div className="flex justify-center">
            <div className="bg-slate-300 w-1/2 text-center text-4xl p-5">
              {loggedValue}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
