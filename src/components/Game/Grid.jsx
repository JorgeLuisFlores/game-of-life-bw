import React from "react";
import { changeArray } from "../files/game.jsx";
import UseStyling from "./UseStyling.jsx";
import { setGrid } from "../settings/Functions.jsx";

const Grid = (props) => {
  const { world, onChange, colorStyle } = props;

  const changeCell = (cell, x, y) => {
    const row = changeArray(world[y], x, cell ? 0 : 1);
    const newWorld = changeArray(world, y, row);
    onChange(newWorld);
  };

  const renderCell = (cell, x, y) => {
    return (
      <div
        key={x}
        className={`cell`}
        style={{
          backgroundColor: cell
            ? setGrid(colorStyle)[0]
            : setGrid(colorStyle)[1],
        }}
        onMouseDown={() => changeCell(cell, x, y)}
      />
    );
  };

  const renderRow = (row, y) => (
    <div className="row" key={y}>
      {row.map((cell, x) => renderCell(cell, x, y))}
    </div>
  );

  return <div className="grid">{world.map((row, y) => renderRow(row, y))}</div>;
};

export default Grid;