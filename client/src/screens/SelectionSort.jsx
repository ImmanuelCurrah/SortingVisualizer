import { useState, useEffect } from "react";
import Bar from "../components/Bar";

export default function SelectionSort() {
  const [displayGraph, setDisplayGraph] = useState(false);
  const [input, setInput] = useState("");
  const [warning, setWarning] = useState("opacity-0");
  const [confirm, setConfirm] = useState("hidden");
  const [firstButton, setFirstButton] = useState("opacity-1");
  const [data, setData] = useState([]);

  const arr = input.split(",");

  const createGraph = () => {
    setData(arr);
    setConfirm("opacity-1");
    setFirstButton("hidden");
  };

  const createGraph2 = () => {
    setData(arr);
    console.log(data);
    setDisplayGraph(true);
  };

  const check = (e) => {
    if (e.target.value.match(/[A-Za-z]/g)) {
      setWarning("opacity-1");
      setFirstButton("opacity-0");
    } else {
      setWarning("opacity-0");
      setFirstButton("opacity-1");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-emerald-500 h-screen">
      {!displayGraph && (
        <div className="m-12">
          <h2>Selection Sort</h2>
          <p>give us some numbers to work with with a comma in between :)</p>
          <input
            type="text"
            className="w-96 h-12 mt-12"
            onChange={(e) => {
              setInput(e.target.value);
              check(e);
            }}
          />
          <p className={`${warning} text-red-700`}>please enter only numbers</p>
          <button
            className={`bg-black text-white p-2 ${firstButton}`}
            onClick={createGraph}
          >
            make graph
          </button>
          <button
            className={`${confirm} bg-black text-white p-2`}
            onClick={createGraph2}
          >
            Confirm
          </button>
        </div>
      )}
      {displayGraph && (
        <>
          <div className="flex flex-row items-end">
            {data.map((item, i) => {
              return (
                <div key={i} className="m-2">
                  <Bar number={+item} />
                </div>
              );
            })}
          </div>
          <button className="bg-black text-white p-2 m-4">Sort</button>
        </>
      )}
    </div>
  );
}
