const Dog = (props) => {
  return React.createElement("div", null, [
    React.createElement("h1", null, props.name),
    React.createElement("h2", null, props.breed),
    React.createElement("h2", null, props.color),
  ]);
};

const App = () => {
  return React.createElement("div", { id: "hello" }, [
    React.createElement(Dog, { name: "Rex", breed: "bulldog", color: "brown" }),
    React.createElement(Dog, {
      name: "Max",
      breed: "labrador",
      color: "black",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
