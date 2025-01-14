import React, { useState } from "react";

const title = "React";
const welcome = {
  greeting: "Hey",
  title: "React JS 2025",
};

function getTitle(title) {
  return title;
}

//Primitives

let num = 250;
let str = "Piyush";
let bool = false;
let un;
let z = null;

//Non-Primitives

let mycar = new Object();

mycar.name = "Swift";
mycar.model = "Dezire";
mycar.year = "2022";

//array

let myArray = [2024, " Nexon", " Tata"];

const framework = [
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
const articles = [
  {
    title: "Vue.js",
    url: "https://vuejs.org/",
    author: "Evan You",
    num_comments: 3,
    points: 8,
    objectID: 3,
  },
  {
    title: "Angular",
    url: "https://angular.io/",
    author: "Google",
    num_comments: 5,
    points: 7,
    objectID: 4,
  },
  {
    title: "Svelte",
    url: "https://svelte.dev/",
    author: "Rich Harris",
    num_comments: 6,
    points: 9,
    objectID: 5,
  },
];

const List = (props) => {
  console.log("List Render");
  return (
    <>
      <ul>
        {props.list.map((ele) => (
          <Item key={ele.objectID} ele={ele} />
        ))}
      </ul>
    </>
  );
};

const Item = (props) => (
  <li>
    <span>
      <a href={props.ele.url}>{props.ele.title}</a>
    </span>
    <span>{props.ele.author}</span>
    <span>{props.ele.num_comments}</span>
    <span>{props.ele.points}</span>
  </li>
);

const greetingObj = { greeting: "Hello greeting obj more readable" };

const Welcome = (props) => {
  console.log("Welcome Renders");
  return (
    <>
      <h1 style={{ color: "salmon" }}>{props.text.greeting}</h1>
    </>
  );
};

const App = () => {
  console.log("App Renders");
  return (
    <>
      <div>
        <div>Primitives - {`${num} - ${str} - ${bool} - ${un} - ${z} `}</div>
        <div>
          Non-primivites - {`${mycar.name} - ${mycar.model} - ${mycar.year} `}
          Array - {myArray}
        </div>
        <h1>Hello - {title}</h1>
        <div>
          <h2>
            {welcome.greeting} = {welcome.title}
          </h2>
        </div>
        <p>Title of the story- {getTitle("Flamingo")}</p>
      </div>
      <hr />
      <Search />
      <List list={framework} />
      <List list={articles} />
      <Welcome text={greetingObj} />
    </>
  );
};

const Search = () => {
  console.log("Search Renders");
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <label htmlFor="Search">Search</label>
      <input type="text" id="search" onChange={handleChange} />
      <p>
        Default text - <strong> {searchTerm}</strong>{" "}
      </p>
    </>
  );
};

export default App;
