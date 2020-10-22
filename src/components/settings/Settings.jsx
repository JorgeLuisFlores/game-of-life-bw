import React, { useState } from "react";
import { Dropdown, Button } from "semantic-ui-react";

import { generationSpeed } from "../files/settings.jsx";

import "./styles3D.scss";

const Settings = (props) => {
  const { isPlaying, load, valIn, preset } = props;

  const [settings, setSettings] = useState({
    preset: valIn[0],
    colorStyle: valIn[1],
    gridSize: valIn[2],
    generationSpeed: valIn[3],
  });

  const onLoad = () => {
    return load(settings);
  };

  return (
    <div className="settings">
      <div className="settings-sect">
        <div className="settings-cont">
          <label>Preset Patterns: </label>
          <Dropdown
            id="preset"
            placeholder="Select a preset"
            options={preset.presets}
            selection
            className="label_setting"
            disabled={isPlaying}
            value={settings.preset}
            onChange={(e, { value }) => {
              setSettings({ ...settings, preset: `${value}` });
            }}
          />
        </div>
        <div className="settings-cont">
          <label>Color Styling: </label>
          <Dropdown
            id="colorStyle"
            placeholder="Color Theme"
            options={preset.colors}
            selection
            className="label_setting"
            disabled={isPlaying}
            value={settings.colorStyle}
            onChange={(e, { value }) => {
              setSettings({ ...settings, colorStyle: `${value}` });
            }}
          />

        </div>
        <div className="settings-cont">
          <label>Grid Size: </label>
          <Dropdown
            id="gridSize"
            placeholder="Grid Size"
            options={preset.grid}
            selection
            className="label_setting"
            disabled={isPlaying}
            value={settings.gridSize}
            onChange={(e, { value }) => {
              setSettings({ ...settings, gridSize: value });
            }}
          />
        </div>
        <div className="settings-cont">
          <label>Generation Speed: </label>
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

export default Settings;