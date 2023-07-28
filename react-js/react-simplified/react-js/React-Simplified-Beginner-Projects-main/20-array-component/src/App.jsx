import { useState } from "react";

const INITIAL_VALUE = ["A", "B", "C"];

function App() {
  const [array, setArray] = useState(INITIAL_VALUE);
  const [value, setValue] = useState("");
  const removeFirstElement = () => {
    setArray((currentArray) => {
      return currentArray.slice(1);
    });
  };

  const removeSpecificLetter = (letter) => {
    setArray((currentArray) => {
      return currentArray.filter((element) => element !== letter);
    });
  };

  const addLetterToStart = (letter) => {
    setArray((currentArray) => {
      return [letter, ...currentArray];
    });
  };

  const addLetterToEnd = (letter) => {
    setArray((currentArray) => {
      return [...currentArray, letter];
    });
  };

  const clearArray = () => {
    setArray((currentArray) => {
      return [];
    });
  };

  const resetArray = () => {
    setArray(INITIAL_VALUE);
  };

  const updateAToH = () => {
    setArray((currentArray) => {
      return currentArray.map((element) => {
        if (element === "A") {
          return "H";
        }
        return element;
      });
    });
  };

  const addLetterAtIndex = (letter, index) => {
    setArray((currentArray) => {
      return [
        ...currentArray.slice(0, index),
        letter,
        ...currentArray.slice(index),
      ];
    });
  };

  return (
    <div>
      <button onClick={removeFirstElement}>Remove First Element</button>
      <button onClick={() => removeSpecificLetter("B")}>Remove All B's</button>
      <button onClick={() => addLetterToStart("B")}>Add to start</button>
      <button onClick={() => addLetterToEnd("Z")}>Add to end</button>
      <button onClick={clearArray}>Clear the array</button>
      <button onClick={resetArray}>Reset the array</button>
      <button onClick={updateAToH}>update A to H</button>
      <button onClick={() => addLetterAtIndex("c", 2)}>Add C at 2</button>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => addLetterToStart(value)}>
        Add Value To Array
      </button>
      <br />
      {array.join(", ")}
    </div>
  );
}

export default App;
