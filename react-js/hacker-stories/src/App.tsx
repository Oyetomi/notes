import React, { useEffect, useState } from "react";
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

  const useStorageState = (
    key: string,
    initialState: string
  ): [string, (newValue: string) => void] => {
    const [value, setValue] = useState(
      localStorage.getItem(key) || initialState
    );
    useEffect(() => {
      localStorage.setItem("value", value);
    }, [value, key]);
    return [value, setValue];
  };

  const [searchTerm, setSearchTerm] = useStorageState("search", "React");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <InputWithLabel
        id="search"
        label="Search"
        value={searchTerm}
        onInputChange={handleSearch}
      />
      <hr />
      <List list={searchedStories} />
    </div>
  );
};

type ItemProps = {
  item: storiesProp;
};

const Item: React.FC<ItemProps> = ({ item }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
);

type ListProps = {
  list: storiesProp[];
};

const List: React.FC<ListProps> = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

type InputWithLabelProps = {
  id: string;
  label: string;
  value: string;
  type?: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  id,
  label,
  value,
  type = "text",
  onInputChange,
}) => (
  <>
    <label htmlFor={id}>{label}</label>
    &nbsp;
    <input id={id} type={type} value={value} onChange={onInputChange} />
  </>
);

export default App;
