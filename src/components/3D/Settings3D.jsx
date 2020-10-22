import React, { useState } from "react";
import { Dropdown, Button } from "semantic-ui-react";

import {
  colorOptions,
  grid3DSizeOptions,
  generationSpeed,
} from "../files/settings.jsx";
import { presetOptions } from "../files/presets3D.jsx";

import "./styles3D.scss";

const Settings3D = (props) => {
  const { isPlaying, styleChange, valIn } = props;

  const [settings, setSettings] = useState({
    preset: valIn[0],
    colorStyle: valIn[1],
    gridSize: valIn[2],
    generationSpeed: valIn[3],
  });

  const onLoad = () => {
    return styleChange(settings);
  };

  return (
    <div className="settings" id="setting-right">
      <div className="settings-sect">
        <Dropdown
          id="preset"
          placeholder="Select a preset"
          options={presetOptions}
          selection
          className="label_setting"
          disabled={isPlaying}
          value={settings.preset}
          onChange={(e, { value }) => {
            setSettings({ ...settings, preset: `${value}` });
          }}
        />
        <Dropdown
          id="colorStyle"
          placeholder="Color Theme"
          options={colorOptions}
          selection
          className="label_setting"
          disabled={isPlaying}
          value={settings.colorStyle}
          onChange={(e, { value }) => {
            setSettings({ ...settings, colorStyle: `${value}` });
          }}
        />
      </div>
      <div className="settings-sect">
        <Dropdown
          id="gridSize"
          placeholder="Grid Size"
          options={grid3DSizeOptions}
          selection
          className="label_setting"
          disabled={isPlaying}
          value={settings.gridSize}
          onChange={(e, { value }) => {
            setSettings({ ...settings, gridSize: value });
          }}
        />
        <Dropdown
          id="generationSpeed"
          placeholder="Generation Speed"
          options={generationSpeed}
          selection
          className="label_setting"
          disabled={isPlaying}
          value={settings.generationSpeed}
          onChange={(e, { value }) => {
            setSettings({ ...settings, generationSpeed: value });
          }}
        />
      </div>
      <Button
        id="setting-load"
        content="Load"
        onClick={onLoad}
        disabled={isPlaying}
      />
    </div>
  );
};

export default Settings3D;