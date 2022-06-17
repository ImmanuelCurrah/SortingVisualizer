import { useState } from "react";
import Bar from "../components/Bar";

export default function SelectionSort() {
  const [displayGraph, setDisplayGraph] = useState(false);
  const [input, setInput] = useState("");
  const [warning, setWarning] = useState("opacity-0");
  const [confirm, setConfirm] = useState("hidden");
  const [firstButton, setFirstButton] = useState("opacity-1");
  const [data, setData] = useState([1]);
  // eslint-disable-next-line
  const [toggleSort, setToggleSort] = useState(false);
  const [loop, setLoop] = useState(0);
  const [done, setDone] = useState("");
  const [checkIfSortedArray, setCheckIfSortedArray] = useState([]);
  const [whatJustHappened, setWhatJustHappened] = useState("an unsorted array");

  const arr = input.replace(/\s/g, "").split(",");

  const createGraph = () => {
    console.log(arr);
    setData(arr);
    setConfirm("opacity-1");
    setFirstButton("hidden");
  };

  const createGraph2 = () => {
    setData(arr);
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

  // const selectionSort = (data) => {
  //   for (let i = 0; i < data.length; i++) {
  //     let lowest = i;
  //     for (let j = i + 1; j < data.length; j++) {
  //       if (+data[j] < +data[lowest]) {
  //         lowest = j;
  //       }
  //     }
  //     let temp = data[i];
  //     data[i] = data[lowest];
  //     data[lowest] = temp;
  //   }
  //   setToggleSort((prevToggle) => !prevToggle);
  // };

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
          <p>{whatJustHappened}</p>
          <button
            className={`bg-black text-white p-2 m-4 ${done}`}
            onClick={() => {
              let lowest = loop;
              for (let j = loop + 1; j < data.length; j++) {
                if (+data[j] < +data[lowest]) {
                  lowest = j;
                }
              }
              console.log(`current: ${data[loop]}, lowest:${data[lowest]}`);
              setWhatJustHappened(
                `${data[loop]} checked with all the numbers traded places with ${data[lowest]}`
              );
              let temp = data[loop];
              data[loop] = data[lowest];
              data[lowest] = temp;
              setCheckIfSortedArray(data);
              console.log(checkIfSortedArray);
              setToggleSort((prevToggle) => !prevToggle);
              setLoop((prevState) => prevState + 1);
            }}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
}
