import React from 'react';

import { withData } from "../hoc-helpers";
import SwapiService from "../../services/swapi-service";

import "./item-list.scss";

const ItemList = props => {

  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map(item => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)}>
        { label }
      </li>
    );
  });

  return (
    <ul className="item-list list-group">
      { items }
    </ul>
  );
};

const { getAllPerson } = new SwapiService();

export default withData(ItemList, getAllPerson);