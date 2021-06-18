import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Form from "./Form";
import OptionModal from "./optionModal";
import Action from "./Action";
import Options from "./Options";

// console.log("Appjs is running");

class Taskit extends React.Component {
  state = {
    options: [],
    selectOption: undefined,
  };

  handelOptionChoice = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectOption: option,
    }));
  };

  handelDeleteOptions = () => {
    this.setState(() => {
      return {
        options: [],
      };
    });
  };

  wipeoutOptionDialog = () => {
    this.setState(() => ({
      selectOption: false,
    }));
  };

  handelAddOptions = (option) => {
    if (!option) {
      return "Kindly put a valid option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option),
      };
    });
  };

  render() {
    return (
      <div>
        <Header title="Taskit" subtitle="Get Yourself Organised :D" />
        <div className="container">
          <Action
            handelOptionChoice={this.handelOptionChoice}
            handelDeleteOptions={this.handelDeleteOptions}
          />
          <div className="widget">
            <Options options={this.state.options} />
            <Form
              hasOption={this.state.options.length > 0}
              handelAddOptions={this.handelAddOptions}
            />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectOption}
          wipeoutOptionDialog={this.wipeoutOptionDialog}
        />
      </div>
    );
  }
}

export default Taskit;
