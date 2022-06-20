import { useState } from "react";
import Bar from "../components/Bar";

export default function BubbleSort() {
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
  // eslint-disable-next-line
  const [whatJustHappened, setWhatJustHappened] = useState([]);
  const [resetButton, setResetButton] = useState("hidden");

  const arr = input.replace(/\s/g, "").split(",");
  let timeline = 0;

  const createGraph = () => {
    console.log(arr);
    setData(arr);
    setConfirm("opacity-1");
    setFirstButton("hidden");
  };

  const createGraph2 = () => {
    setData(arr);
    setLoop(arr.length);
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

  const isArraySorted = (array) =>
    array
      .slice(0) // clone array
      .sort((a, b) => a - b) // sort it
      .every((el, i) => el === array[i]);

  // const optimalBubbleSort = (arr) => {
  //   let noSwaps;
  //   for (let i = arr.length; i > 0; i--) {
  //     noSwaps = true;
  //     for (let j = 0; j < i - 1; j++) {
  //       if (arr[j] > arr[j + 1]) {
  //         let temp = arr[j];
  //         arr[j] = arr[j + 1];
  //         arr[j + 1] = temp;
  //         noSwaps = false;
  //       }
  //     }
  //     if (noSwaps) break;
  //   }
  //   return arr;
  // };

  return (
    <div className="flex flex-col items-center justify-center bg-emerald-500 h-screen">
      {!displayGraph && (
        <div className="m-12">
          <h2>Bubble Sort</h2>
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
          <div className="overflow-auto h-52">
            {whatJustHappened.map((desc, i) => {
              return (
                <div className="m-2" key={i}>
                  <p>{desc}</p>
                  <div>.........</div>
                </div>
              );
            })}
          </div>

          <button
            className={`bg-black text-white p-2 m-4 ${done}`}
            onClick={() => {
              for (let j = 0; j < loop - 1; j++) {
                if (+data[j] > +data[j + 1]) {
                  let temp = data[j];
                  data[j] = data[j + 1];
                  data[j + 1] = temp;
                  timeline++;
                  console.log(timeline);
                  whatJustHappened.push(
                    `${data[j + 1]} looked one number ahead and saw that ${
                      data[j]
                    } was smaller so it moved ahead of ${
                      data[j]
                    }, timeline: ${timeline}`
                  );
                }
              }
              setToggleSort((prevToggle) => !prevToggle);
              setLoop((prevState) => prevState - 1);
              if (isArraySorted(data)) {
                setDone("hidden");
                whatJustHappened.push("now its sorted!");
                setResetButton("");
              }
            }}
          >
            Next
          </button>
          <button
            className={`bg-black text-white p-2 m-4 ${resetButton}`}
            onClick={() => {
              window.location.reload(false);
            }}
          >
            Reset
          </button>
        </>
      )}
    </div>
  );
}
