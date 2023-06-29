import {
  useState,
  useEffect,
  useCallback,
  MouseEvent,
  KeyboardEvent,
  useMemo,
  useRef,
} from "react";
import "./App.css";

interface User {
  id: string;
  number: string;
}

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => (n < 2 ? n : fib(n - 1) + fib(n - 2));

const myNum: number = 37;

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);
  useEffect(() => {
    console.log("mounting");
    console.log("users:", users);
    return () => console.log("unmounting");
  }, [users]);
  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => setCount((prev) => prev + 2),
    []
  );
  const result = useMemo(() => fib(myNum), [myNum]);
  return (
    <div className="App">
      <h1>{count}</h1>
      <h2>{result}</h2>
      <button onClick={addTwo}>Add</button>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default App;
