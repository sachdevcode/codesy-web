// import React from "react";
import { FaCaretRight } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const ReuseButton = (props) => {
  return (
    <a>
      <span>{props.text}</span>
      {props.text.includes("visit") ? <FaExternalLinkAlt /> : <FaCaretRight />}
    </a>
  );
};

export default ReuseButton;
