import React from "react";

const Pcard = ({ item }) => {
  return (
    <div className="card">
      <card>
        <cardHeader>
          <h1>{item.name}</h1>
        </cardHeader>
        <cardBody>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
          />
          <h4>Type:{item.type}</h4>
          <h4>EXP:{item.base_experience}</h4>
        </cardBody>
      </card>
    </div>
  );
};

export default Pcard;
