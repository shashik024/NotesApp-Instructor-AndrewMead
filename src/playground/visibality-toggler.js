class VisibalityToggle {
  //   handelVisibality(prevState) {
  //     if (this.state.visibality) {
  //       this.setState((prevState) => {
  //         return {
  //           message: "Updated",
  //         };
  //       });
  //     }
  //   }

  render() {
    return (
      <div>
        <h1> Visibality Magic</h1>
        <button onClick={this.handelVisibality}>Show Details</button>
        <h5>{this.state.message}</h5>
      </div>
    );
  }
}

ReactDOM.render(<VisibalityToggle />, document.getElementById("app"));
