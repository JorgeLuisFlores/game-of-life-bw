import React, { useState } from "react";
import { Dropdown, Button } from "semantic-ui-react";

import { presetOptions } from "../files/presets.jsx";

const Presets = (props) => {
  const { load, isPlaying } = props;

  const [preset, setPreset] = useState("line");

  const onLoad = () => {
    return preset ? load(preset) : null;
  };

  return (
    <div className="controls">
      <Button as="div" labelPosition="left">
        <Dropdown
          placeholder="Select a preset"
          options={presetOptions}
          selection
          className="label"
          disabled={isPlaying}
          value={preset}
          onChange={(e, { value }) => {
            setPreset(`${value}`);
          }}
        />
        <Button content="Load" onClick={onLoad} disabled={isPlaying} />
      </Button>
    </div>
  );
};

export default Presets;