import React from "react";

const Home = () => {
  return (
    <div className="description-container">
      <h2>Welcome to my Game of Life Simulator</h2>
      <p>
        This is a personal project that is designed to implement John Conway's
        Game of Life. The Game of Life is represented by a world (a 2D or 3D
        grid), that is populated by living or dead cells, and each cell lives or
        dies based on conditions. Living cells are represented by an "on" state
        (typically highlighted, filled in, or colored cells), and dead cells are
        represented by a "dead" state.
      </p>
      <span>This app was made with the power of:</span>
      <ul>
        <li>React</li>
        <li>Javascript</li>
        <li>SCSS/CSS</li>
        <li>Three.js</li>
        <li>Systemic-UI-React</li>
      </ul>
    </div>
  );
};

export default Home;