import React, { useState } from "react";
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
  const [searchTerm, setSearchTerm] = useState("React");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
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

type SearchProps = {
  search: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<SearchProps> = ({ onSearch, search }) => {
  return (
    <>
      <label htmlFor="search">Search:</label>
      <input
        id="search"
        type="text"
        value={search}
        placeholder="Search.."
        onChange={onSearch}
      />
    </>
  );
};

export default App;
