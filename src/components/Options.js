import React from "react";
import Option from "./Option";

const Options = (props) => {
  return (
    <div>
      {props.options.length == 0 && (
        <p className="widget__message">Add an Option to get Started :D</p>
      )}
      {props.options.map((option, index) => {
        return <Option key={option} count={index + 1} optionText={option} />;
      })}
    </div>
  );
};

export default Options;
