import React from "react";

const Action = (props) => {
  return (
    <div>
      <button
        className="big-button"
        disabled={props.hasOption}
        onClick={props.handelOptionChoice}
      >
        What should i do !!!
      </button>
      <div className="header-widget">
        <h3 className="header-widget__title">Your Options</h3>
        <button
          className="button button--link"
          onClick={props.handelDeleteOptions}
        >
          Remove all Options ?
        </button>
      </div>
    </div>
  );
};

export default Action;
