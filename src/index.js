import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
    // 1. This is the data that we are going to map.
  const data = [
    {
      name: "Joshua",
      hobbies: ["js", "beer"],
      email: "joshkap2015@gmail.com"
    },
    {
      name: "Peter",
      hobbies: ["js", "cats"],
      email: "petl@gmail.com"
    },
    {
      name: "Ida",
      hobbies: ["sprints", "dogs"],
      email: "idw@gmail.com"
    }
  ];
  const teachers = data.map(teacher => {
    return (
      <Teacher
        name={teacher.name}
        hobbies={teacher.hobbies}
        email={teacher.email}
      />
    );
  });
  return (
    <div id="App">
      <header>Header</header>
      {teachers}
      <footer>Footer</footer>
    </div>
  );
}

// We are creating the Teacher component in which we will map the arrrays contents to.
function Teacher(props) {
  return (
    <article>
      <header>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
      </header>
      <h3>
        {props.hobbies[0]} {props.hobbies[1]}
      </h3>
    </article>
  );    
}

//JSX, we are mixing javascript and HTML --!!
ReactDOM.render(<App />, document.getElementById("root"));
