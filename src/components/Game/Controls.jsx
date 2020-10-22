import React from "react";
import { Button } from "semantic-ui-react";

const Controls = (props) => {
  return (
    <div>
      <div className="controls">
        <Button
          content="Shuffle"
          icon="random"
          labelPosition="right"
          onClick={props.shuffle}
          disabled={props.playing}
        />
        <Button
          content="Clear"
          icon="redo"
          labelPosition="right"
          onClick={props.clear}
        />
        <Button
          content="Next"
          icon="right arrow"
          labelPosition="right"
          onClick={props.next}
        />
        {!props.isPlaying ? (
          <Button content="Play" icon="redo" onClick={props.play} />
        ) : (
          <Button content="Stop" icon="redo" onClick={props.stop} />
        )}
      </div>
    </div>
  );
};

export default Controls;