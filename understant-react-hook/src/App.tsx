import { useState } from "react";
import "./App.css";

function App() {
  // MARK: Basic useState
  const [count, setCount] = useState(0);

  const [step, setStep] = useState(0);

  const onTapIncrement = () => {
    setCount((prev) => prev + 1);
    setStep((prev) => prev + 1);
  };

  const onTapDicrement = () => {
    setCount((prev) => prev - 1);
    setStep((prev) => prev - 1);
  };

  const onTapIncrementTwice = () => {
    setCount((prev) => prev + 2);
    setStep((prev) => prev + 2);
  };

  // MARK: Array useState
  const [counters, setCounters] = useState([
    {
      id: 1,
      value: 0,
    },
  ]);

  const addCounters = () => {
    setCounters((prev) => {
      if (prev.length === 0) {
        return [{ id: 1, value: 0 }];
      }
      return [
        ...prev,
        {
          id: prev[prev.length - 1].id + 1,
          value: prev[prev.length - 1].value + 1,
        },
      ];
    });
  };

  const removeCounters = () => {
    setCounters((prev) => {
      if (prev.length === 0) {
        alert("Already empty!");
        return prev;
      }
      return prev.slice(0, -1);
    });
  };

  const updateValueCounter = (id: number) => {
    setCounters(
      counters.map((counter) =>
        counter.id === id ? { ...counter, value: counter.value + 1 } : counter
      )
    );
  };

  return (
    <div className="app-container">
      {/* MARK: Basic useState */}
      <div className="grid grid-cols-1 bg-amber-500 gap-5 p-4">
        <div className="flex justify-center gap-4">
          <h1>Count: {count}</h1>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => onTapDicrement()}
          >
            -
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => onTapIncrement()}
          >
            +
          </button>
        </div>
        <div>
          <input
            type="number"
            className="border-2 border-black"
            value={step}
            onChange={(e) => {
              const newStep = parseInt(e.target.value);
              setStep(newStep);
              setCount(newStep);
            }}
          />
        </div>
        <div>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => onTapIncrementTwice()}
          >
            {count}
          </button>
        </div>
      </div>
      {/* MARK: Array useState */}
      <div className="grid grid-cols-1 justify-center bg-red-500 gap-5 p-4">
        <div className="flex justify-start items-center gap-4">
          <h3>Array and object</h3>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => addCounters()}
          >
            addCounters
          </button>

          <button
            className="bg-black text-white px-4 py-2 rounded"
            onClick={() => removeCounters()}
          >
            remove
          </button>
        </div>
        <table className="min-w-[300px] border-collapse border border-gray-300 shadow-md rounded">
          <thead className="bg-blue-200 text-black">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left ">
                ID
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {counters.map((counter) => (
              <tr key={counter.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  {counter.id}
                </td>
                <td
                  className="border border-gray-300 px-4 py-2 cursor-pointer"
                  onClick={() => updateValueCounter(counter.id)}
                >
                  {counter.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
