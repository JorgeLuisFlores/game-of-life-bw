import React from "react";
import { Button } from "semantic-ui-react";

const Controls3D = (props) => {
  const { isPlaying, play, next, stop, reset, clear, shuffle } = props;
  return (
    <div>
      <div className="controls">
        <Button
          content="Shuffle"
          icon="random"
          labelPosition="right"
          onClick={shuffle}
          disabled={isPlaying}
        />
        <Button
          content="Clear"
          icon="redo"
          labelPosition="right"
          onClick={clear}
        />
        <Button
          content="Reset"
          icon="redo"
          labelPosition="right"
          onClick={reset}
        />
        <Button
          content="Next"
          icon="right arrow"
          labelPosition="right"
          onClick={next}
        />
        {!isPlaying ? (
          <Button content="Play" icon="play" onClick={play} />
        ) : (
          <Button content="Stop" icon="stop" onClick={stop} />
        )}
      </div>
    </div>
  );
};

export default Controls3D;