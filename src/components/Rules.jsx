import React from "react";

const Rules = () => {
  return (
    <div className="description-container">
      <h2>GAME OF LIFE</h2>
      <h3>wikipedia: </h3>{" "}
      <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
        Game of Life
      </a>
      <div className="rules-equation">
        <p className="rules-p">
          A generic equation for defining a living cell can be written as: R=(E
          <sub>l</sub>,E
          <sub>u</sub>
          ,F<sub>l</sub>,F<sub>u</sub>)
        </p>
        <span>Where:</span>
        <p className="rules-p">
          <ul className="generic">
            <li>
              E<sub>l</sub>&#x2264; E &#8804;<sub>u</sub> = Rules for a LIVING
              cell to stay ALIVE
            </li>
            <li>
              F<sub>l</sub>&#x2264; F &#8804;<sub>u</sub> = Rules for a DEAD
              cell to become ALIVE
            </li>
            <br />
            <li>
              E<sub>l</sub> & F<sub>l</sub>= Lower limit
            </li>
            <li>
              E<sub>u</sub> & F<sub>u</sub> = Upper Limit
            </li>
          </ul>
        </p>
      </div>
      <p className="rules-p">
        The universe of the Game of Life is an infinite, two-dimensional
        orthogonal grid of square cells, each of which is in one of two possible
        states, alive or dead, (populated or unpopulated, respectively). Every
        cell interacts with its eight neighbours, which are the cells that are
        horizontally, vertically, or diagonally adjacent. At each step in time,
        the following transitions occur:
      </p>
      <ol className="rules-list">
        <li>
          Any live cell with fewer than E<sub>l</sub> live neighbours dies
          (underpopulation).
        </li>
        <li>
          Any live cell within E<sub>l</sub> or E<sub>u</sub> live neighbours
          lives on to the next generation.
        </li>
        <li>
          Any live cell with more than E<sub>u</sub> live neighbours dies, as if
          by overpopulation.
        </li>
        <li>
          Any dead cell within F<sub>l</sub> and F<sub>u</sub> live neighbours
          becomes a live cell, as if by reproduction.
        </li>
      </ol>
      <p className="rules-p">
        Conway's Game of Life follows the R=(2333) rules, which compare the
        behavior of the automaton to real life and can be condensed into the
        following:
      </p>
      <ol className="rules-list">
        <li>Any live cell with two or three live neighbours survives.</li>
        <li>Any dead cell with three live neighbours becomes a live cell.</li>
        <li>
          All other live cells die in the next generation. Similarly, all other
          dead cells stay dead.
        </li>
      </ol>
      <p className="rules-p">
        The initial pattern constitutes the seed of the system. The first
        generation is created by applying the above rules simultaneously to
        every cell in the seed; births and deaths occur simultaneously, and the
        discrete moment at which this happens is sometimes called a tick. Each
        generation is a pure function of the preceding one. The rules continue
        to be applied repeatedly to create further generations.
      </p>
    </div>
  );
};

export default Rules;