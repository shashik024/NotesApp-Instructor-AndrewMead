class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handelMinus = this.handelMinus.bind(this);
    this.handelPlus = this.handelPlus.bind(this);

    this.handelReset = this.handelReset.bind(this);
    this.state = {
      count: 0,
    };
  }

  handelPlus() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
    // console.log("+");
  }
  handelMinus() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
    // console.log("-");
  }
  handelReset() {
    this.setState((prevState) => {
      return {
        count: 0,
      };
    });
    // console.log("Reset");
  }
  render() {
    return (
      <div>
        <h1>Counter : {this.state.count}</h1>
        <button onClick={this.handelPlus}> +1</button>
        <button onClick={this.handelReset}> Reset</button>
        <button onClick={this.handelMinus}> -1</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
