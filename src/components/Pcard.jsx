import React, { useState } from "react";

const Pcard = ({ item }) => {
  const [count, setCount] = useState(0);
  const [hide, setHide] = useState(false);
  const toggleClass = () => {
    setHide(!hide);
  };

  const countHandlerPlus = () => {
    if (count > 9) {
      return 0;
    }
    setCount((prev) => prev + 1);
  };
  const countHandlerMinus = () => {
    if (count < 1) {
      toggleClass();
    }
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <div className={hide ? "hide" : "show"} id="card">
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
          <footer>
            <span onClick={countHandlerMinus} className="minus">
              -
            </span>
            <span>{count}</span>
            <span onClick={countHandlerPlus} className="plus">
              +
            </span>
          </footer>
        </card>
      </div>
    </div>
  );
};

export default Pcard;
