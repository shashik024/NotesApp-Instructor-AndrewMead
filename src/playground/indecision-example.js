// console.log("App.js is running");

//JSX  - JavaScript XML  is provided by react to define our template

//uses of babel =  it is a js compiler . it takes features from es6 and es7 and compiles them down to es5 code .

const objOne = {
  title: "Bhagwati Traders",
  subtitle: "A Clothing Shop",
  varaity: ["cotton ", "jorget", "silk", "rayon"],
};

const whatToRender = (
  <div>
    <h1> {objOne.title} </h1>
    {objOne.subtitle && <p>Subtitle : {objOne.subtitle}</p>}
    {objOne.varaity.length > 0 ? (
      <h2>Here are ur choices </h2>
    ) : (
      <h2>Coming Soon</h2>
    )}
    <ol>
      <li>Node Course</li>
      <li>React Course</li>
      <li>React Native Course</li>
      <li>Angular Course</li>
    </ol>
  </div>
);

const objtwo = {
  name: "shashi kant",
  about: "I am shashi kant , lives i Rohtak",
  age: 19,
};

const ifAboutExist = function (about) {
  if (about) {
    return <h4>{"this is from function "}</h4>;
  } else {
    return <h2>{"about not exist"} </h2>;
  }
};

const secondWhatToRender = (
  <div>
    <h1>{objtwo.name ? objtwo.name : "Name not found !!!"}</h1>
    {ifAboutExist(objtwo.about)}
    <ol>
      <li> I loves CryptoCurrency</li>
      <li> Movies</li>
      <li>Lives in Rohtak!!!</li>
    </ol>
    {objtwo.age && objtwo.age >= 18 && <h3>Age : {objtwo.age}</h3>}
  </div>
);
const whereToRender = document.getElementById("app");
ReactDOM.render(whatToRender, whereToRender);
x;
