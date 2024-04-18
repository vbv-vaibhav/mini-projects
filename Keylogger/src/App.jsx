import React from "react";

const App = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="bg-green-100 h-screen flex flex-col justify-center">
          <div className="text-center m-7">
            <div className="text-5xl font-medium p-4">Visual Key Logger</div>
          </div>
          <div className="text-center">
            <button className="p-4 m-2 bg-slate-400 rounded-lg font-medium">
              Start Logging
            </button>
          </div>
          <div className="text-center">
            <button className="p-4 m-2 bg-slate-400 rounded-lg font-medium">
              Stop Logging
            </button>
          </div>
        </div>
        <div className="bg-red-100 h-screen flex flex-col justify-center">
          <div className="flex justify-center">
            <div className="bg-slate-300 w-1/2 text-center text-4xl p-5">
              New div
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
