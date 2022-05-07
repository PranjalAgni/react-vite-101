import React, { useEffect } from "react";

const Button = (props) => {
  const handleClick = (event) => {
    event.preventDefault();
    props.onClickCallback();
  };

  useEffect(() => {
    console.log("Component is mounted");
  }, []);

  useEffect(() => {
    console.log("Is this updating...");
  }, [props.countHistory]);

  return (
    <div>
      <button onClick={handleClick}>{props.buttonText}</button>
    </div>
  );
};

export default React.memo(Button);
