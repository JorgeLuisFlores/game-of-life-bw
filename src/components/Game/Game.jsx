import React, { useState, useEffect } from "react";
import Controls from "./Controls.jsx";
import Grid from "./Grid.jsx";
import Presets from "./Presets.jsx";
import { loadPreset } from "../files/presets.jsx";
import { GEN_TIME, createWorld, nextGen } from "../files/game.jsx";
import { Header } from "semantic-ui-react";


const Game = () => {
  const [state, setState] = useState({
    world: loadPreset("line"),
    generation: 0,
    playing: false,
  });

  const changeState = (world, nextGen) => {
    setState({
      world: world,
      generation: nextGen,
    });
  };

  const onChange = (world) => changeState(world, state.generation + 1);

  const onClear = () => changeState(createWorld(), 0);

  const onPlay = () => {
    setState({ playing: true });
    const interval = setInterval(() => onNext(), GEN_TIME);
  };

  const onStop = () => {
    setState({ playing: false });
    clearInterval(this.interval);
  };

  const onNext = () => onChange(nextGen(state.world));

  return (
    <div className="game">
      <Grid world={state.world} onChange={onChange} />
      <p>Generation: {state.generation}</p>
      <Controls
        clear={onClear}
        playing={state.playing}
        play={onPlay}
        stop={onStop}
      />
      <Presets />
    </div>
  );
};

export default Game;