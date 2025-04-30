import React from "react";
import "./PushButton.css";

function PushButton({
  label = "Push me",
  color = "hsl(345deg 100% 47%)",
  onClick,
}) {
  const frontStyle = {
    background: color,
  };

  return (
    <button className="pushable" onClick={onClick}>
      <span className="shadow"></span>
      <span className="edge"></span>
      <span className="front" style={frontStyle}>
        {label}
      </span>
    </button>
  );
}

export default PushButton;
