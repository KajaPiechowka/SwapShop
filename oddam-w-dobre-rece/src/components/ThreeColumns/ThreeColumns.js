import React from "react";
import Column from "./Column";

const columnsContent = [
  {
    number: 10,
    title: "ODDANYCH WORKÓW",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.",
  },
  {
    number: 5,
    title: "WSPARTYCH ORGANIZACJI",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.",
  },
  {
    number: 7,
    title: "ZORGANIZOWANYCH ZBIÓREK",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.",
  },
];

const ThreeColumns = () => {
  return (
    <div class="container three-columns">
      {columnsContent.map(({ number, title, text }, index) => (
        <Column key={index} number={number} title={title} text={text} />
      ))}
    </div>
  );
};

export default ThreeColumns;
