import React from "react";

import "./search-box.css";

interface ISearchBox {
  placeHolder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBox = (props: ISearchBox) => (
  <input
    className="search"
    type="search"
    name="search"
    id="search"
    placeholder={props.placeHolder}
    onChange={props.handleChange}
  />
);
