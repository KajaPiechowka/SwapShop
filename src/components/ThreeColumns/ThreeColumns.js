import React from 'react';
import Column from './Column';
import columnsContent from './columnsContent';

const ThreeColumns = () => (
  <div className="container three-columns">
    {columnsContent.map(({ id, number, title, text }) => (
      <Column key={id} number={number} title={title} text={text} />
    ))}
  </div>
);

export default ThreeColumns;
