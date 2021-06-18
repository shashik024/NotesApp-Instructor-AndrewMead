const getFirstName = (fullName) => fullName.split(" ")[0];

const firstName = <h1>{getFirstName("Shashi kant")}</h1>;

const whereToRender = document.getElementById("app");

ReactDOM.render(firstName, whereToRender);
