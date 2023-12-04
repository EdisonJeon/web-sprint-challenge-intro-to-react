import React from "react";

function Character(props) {
  console.log("Character component has fired.");
  const { planets, person, toggle, onClick } = props;
  const homePlanet = planets.find((planet) => planet.id === person.homeworld);

  return (
    <div className="character-card" onClick={() => onClick(person.id)}>
      <h3 className="character-name">{person.name}</h3>
      <p style={{ display: toggle[person.id] ? 'block' : 'none' }}>
        Planet:
        <span className="character-planet"> {homePlanet.name}</span>
      </p>
    </div>
  );
}

export default Character;

/* p === planet:
  span === {name of planet}
*/
