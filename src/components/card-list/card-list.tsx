import React from "react";

import { Card } from "../card/card";

import "./card-list.css";

export interface ICard {
  id: number;
  name: string;
  email: string;
}

interface ICardList {
  monsters: ICard[];
}

export const CardList = (props: ICardList) => {
  return (
    <div className="card-list">
      {props.monsters.map(({ id, name, email }: ICard) => (
        <Card key={id} id={id} name={name} email={email} />
      ))}
    </div>
  );
};
