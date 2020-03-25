import React from "react";

// Components
import { ICard } from "../card-list/card-list";

import "./card.css";

export const Card = ({ id, name, email }: ICard) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h2 key={id}>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
