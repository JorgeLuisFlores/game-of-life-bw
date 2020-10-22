import React, { useState } from "react";
import ThreePointVis from "./ThreePointVis.jsx";
import Controls3D from "./Controls3D.jsx";
import Rules from "../settings/Rules.jsx";

import { createWorld, nextGen, randomFill } from "../files/game3D.jsx";
import { loadPreset } from "../files/presets3D.jsx";

import "./styles3D.scss";

export const Game3D = (props) => {
  const [state3D, setState3D] = useState({
    world3D: loadPreset("plane"),
    generation: 0,
    isPlaying: false,
    colorStyle: "default",
  });

  const changeState = (props) => {
    const { world3D, generation } = props;
    setState3D({ ...state3D, world3D: world3D, generation: generation });
  };

  const onChange = (world) => {
    changeState({ world3D: world, generation: state3D.generation + 1 });
  };

  const onPlay = () => {
    setState3D({ ...state3D, isPlaying: true });
  };

  const onNext = () => {
    onChange(nextGen(state3D.world3D));
  };

  const onStop = () => {
    setState3D({ ...state3D, isPlaying: false });
    clearInterval();
  };

  const onSettingStyle = (settings, rules) => {
    const { colorStyle, gridSize, preset, generationSpeed } = settings;
    setState3D({
      ...state3D,
      world3D: loadPreset(`${preset}`),
      generation: generationSpeed,
      colorStyle: `${colorStyle}`,
    });
  };

  const onShuffle = () => {
    changeState({ world3D: randomFill(state3D.world3D), generation: 0 });
  };

  const onClear = () => {
    changeState({ world3D: createWorld(), generation: 0 });
  };

  const onSubmit = (props) => {
    props.preventDefault();
  };
  const onChangeRules = (id, val) => {
    setRules({
      ...rules,
      [id]: parseInt(val),
    });
  };

  return (
    <div className="container-3D">
      <Rules
        onSubmit={onSubmit}
        onChangeRules={onChangeRules}
        rules={rules}
        setRules={setRules}
      />
      <div className="vis-container">
        <ThreePointVis world={state3D.world3D} />
      </div>
      <Controls3D
        isPlaying={state3D.isPlaying}
        play={onPlay}
        next={onNext}
        stop={onStop}
        shuffle={onShuffle}
        clear={onClear}
      />
    </div>
  );
};