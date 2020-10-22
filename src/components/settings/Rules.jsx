import React from "react";

const Rules = (props) => {
  const { onSubmit, onChangeRules, rules, setRules, isPlaying } = props;
  return (
    <form className="settings" onSubmit={onSubmit}>
      <div className="rules-sect">
        <label>El: </label>
        <input
          id="El"
          type="number"
          className="rule_input"
          value={rules.El}
          min="0"
          max={`${rules.Eu}`}
          onChange={(e, value) => onChangeRules(e.target.id, e.target.value)}
        />
        <label>Eu: </label>
        <input
          id="Eu"
          type="number"
          className="rule_input"
          value={rules.Eu}
          min={`${rules.El}`}
          max="26"
          onChange={(e, value) => onChangeRules(e.target.id, e.target.value)}
        />
        <label>Fl: </label>
        <input
          id="Fl"
          type="number"
          className="rule_input"
          value={rules.Fl}
          min="0"
          max={`${rules.Fu}`}
          onChange={(e, value) => onChangeRules(e.target.id, e.target.value)}
        />
        <label>Fu: </label>
        <input
          id="Fu"
          type="number"
          className="rule_input"
          value={rules.Fu}
          min={`${rules.Fl}`}
          max="26"
          onChange={(e, value) => onChangeRules(e.target.id, e.target.value)}
        />
      </div>

    </form>
  );
};

export default Rules;