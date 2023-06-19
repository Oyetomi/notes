import React from "react";
import "./App.css";

type storiesProp = {
  title: string;
  url: string;
  author: string;
  num_comments: number;
  points: number;
  objectID: number;
};

const App = () => {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search />
      <hr />
      <List list={stories} />
    </div>
  );
};

type ListProps = {
  list: storiesProp[];
};

const List: React.FC<ListProps> = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
        </li>
      ))}
    </ul>
  );
};

const Search = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
  };
  return (
    <>
      <label htmlFor="search">Search:</label>
      <input
        id="search"
        type="text"
        placeholder="Search.."
        onChange={handleChange}
      />
    </>
  );
};

export default App;
