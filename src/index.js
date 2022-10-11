import ReactDOM from "react-dom/client";

const Alert = () => {
  const colorClasses = {
    color: "orange",
    text4Red: "OMG! Something really bad has happened!",
    text4Orange: "Well, it is not that bad after all!",
  };
  //your component here
  if (colorClasses.color === "red")
    return (
      <div className="alert alert-danger" role="alert">
        {colorClasses.text4Red}
      </div>
    );
  else if (colorClasses.color === "orange")
    return (
      <div className="alert alert-warning" role="alert">
        {colorClasses.text4Orange}
      </div>
    );
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties are being passed to the component
// ReactDOM.render(<Alert />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Alert />);
