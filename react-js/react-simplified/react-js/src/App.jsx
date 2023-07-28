import { useMemo, useState } from "react";
import { Counter } from "./Counter.jsx";

function App() {
  const [name, setName] = useState("Abbey");
  const [age, setAge] = useState(26);
  const handleClick = () => {
    setName("Sally");
    setAge((age) => age + 1);
    setAge((age) => age + 1);
  };
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1 onMouseDown={handleClick}>
        HI {name} {age}
      </h1>
      <Counter />
    </>
  );
}

export default App;
