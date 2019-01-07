import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <h1 className="App-header m-20">Hello CodeSandbox</h1>
      <h2 className="m-20">
        Start <a href="#">editing</a> to see some magic happen!
      </h2>
      <h3 className="m-20">Start editing to see some magic happen!</h3>
      <h4 className="m-20">Start editing to see some magic happen!</h4>
      <h5 className="m-20">Start editing to see some magic happen!</h5>
      <h6 className="m-20">Start editing to see some magic happen!</h6>

      <div className="col-1 row  mt-50">
        <div className="col-2 m-20">
          First Column {"  "}
          <a href="#">Click here</a>
        </div>
        <div className="col-2 m-20 ">Second Column</div>
      </div>
      <button>My Button</button>
      <input type="submit" class="primary" value="Submit" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
