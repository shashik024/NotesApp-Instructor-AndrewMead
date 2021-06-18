import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handelAddOption = this.handelAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }
  handelAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handelAddOptions(option);
    this.setState(() => {
      return {
        error,
      };
    });
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handelAddOption}>
          <input
            className="add-option-input"
            placeholder="option"
            name="option"
            type="text"
          ></input>
          <button className="big-button small-button">Add Option</button>
        </form>
      </div>
    );
  }
}
