import React from "react";
import "./styles.css";
import user from "./user.json";
import TodoList from "./TodoList.jsx";
import RenderName from "./Name.jsx";
import { TodoListClass } from "./TodoListClass.jsx";
import { RenderNameClass } from "./NameClass.jsx";
import TodoListItem from "./TodoListItem.js";
import TodoListItemClass from "./TodoListItem.js";

function App() {
  // const myCustomLabel = (
  //   <label htmlFor="inputId" style={{ marginRight: "2rem" }}>
  //     Mylabel
  //   </label>
  // );
  // return (
  //   <>
  //     {myCustomLabel}
  //     <input id="inputId" type="number" defaultValue={3} />
  //     <h1>{JSON.stringify(user)}</h1>
  //   </>
  // );
  return (
    <div>
      <h1>Todo List</h1>
      <TodoList />
      <RenderName>
        <span>child</span>
      </RenderName>
      <TodoListClass />
      <RenderNameClass />
      <TodoListItemClass isComplete={false}>Todo 1</TodoListItemClass>
    </div>
  );
}

export default App;
