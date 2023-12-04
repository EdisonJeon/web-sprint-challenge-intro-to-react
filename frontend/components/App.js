import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./Character";

const urlPlanets = "http://localhost:9009/api/planets";
const urlPeople = "http://localhost:9009/api/people";

function App() {
  console.log("App Component has fired.");
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [toggle, setToggle] = useState({});

  useEffect(() => {
    axios
      .all([urlPlanets, urlPeople].map((path) => axios.get(path)))
      .then((res) => {
        setPlanets(res[0].data);
        setPeople(res[1].data);
      })
      .catch((err) => console.error("Request failed with error --> ", err));

    return () => {
      console.log(
        "here for future reference, useEffect structures have a cleanup function as so"
      );
    };
  }, []);

  const onClick = (id) => {
    setToggle({ ...toggle, [id]: !toggle[id] });
  };

  return (
    <div>
      <h2>Star Wars Characters</h2>
      {people.map((person) => {
        return (
          <Character
            key={person.id}
            person={person}
            planets={planets}
            toggle={toggle}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
}

export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== "undefined" && module.exports) module.exports = App;
