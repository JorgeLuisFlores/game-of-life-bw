import React, { useState } from "react";
import { Dropdown, Button } from "semantic-ui-react";
import Presets from "../components/Game/Presets.jsx";

import {
  colorOptions,
  gridSizeOptions,
  generationSpeed,
} from "../components/files/settings.jsx";

import { presetOptions } from "../components/files/presets.jsx";

const Settings = (props) => {
  const { load, isPlaying } = props;

  const [settings, setSettings] = useState({
    preset: "cross",
    colorStyle: "default",
    gridSize: 70,
    generationSpeed: 100,
  });

  const onLoad = () => {
    return load(settings);
  };

  return (
    <div className="controls">
      <Button as="div" labelPosition="left" width="5px">
        <Dropdown
          placeholder="Select a preset"
          options={presetOptions}
          selection
          className="label"
          disabled={isPlaying}
          value={settings.preset}
          onChange={(e, { value }) => {
            setSettings({ ...settings, preset: `${value}` });
          }}
        />
        <Dropdown
          placeholder="Color Theme"
          options={colorOptions}
          selection
          className="label"
          disabled={isPlaying}
          value={settings.colorStyle}
          onChange={(e, { value }) => {
            setSettings({ ...settings, colorStyle: `${value}` });
          }}
        />
        <Dropdown
          placeholder="Grid Size"
          options={gridSizeOptions}
          selection
          className="label_grid"
          disabled={isPlaying}
          value={settings.gridSize}
          onChange={(e, { value }) => {
            setSettings({ ...settings, gridSize: value });
          }}
        />
        <Dropdown
          placeholder="Generation Speed"
          options={generationSpeed}
          selection
          className="label_grid"
          disabled={isPlaying}
          value={settings.generationSpeed}
          onChange={(e, { value }) => {
            setSettings({ ...settings, generationSpeed: value });
          }}
        />
        <Button content="Load" onClick={onLoad} disabled={isPlaying} />
      </Button>
    </div>
  );
};

export default Settings;