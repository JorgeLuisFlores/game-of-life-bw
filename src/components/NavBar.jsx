import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";

import { Header, Button } from "semantic-ui-react";

const Navbar = () => {
  const [dimension, setDimension] = useState(true);

  const onDimension = () => {
    setDimension(!dimension);
  };
  return (
    <div className="navbar">
      <Header as="h2" textAlign="center" className="title">
        Game Of Life
      </Header>
      <div className="button-div">
        <Link to={"/"}>
          <Button content="Home" icon="redo" onClick={onDimension} />
        </Link>
        <Link to={"/2D"}>
          <Button content="2D" icon="redo" onClick={onDimension} />
        </Link>
        <Link to={"/3D"}>
          <Button content="3D" icon="redo" onClick={onDimension} />
        </Link>
        <Link to={"/rules"}>
          <Button content="Rules" icon="redo" onClick={onDimension} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;