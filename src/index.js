import React from "react";
import { render } from "react-dom";

function Hi() {
  return <p> Index JS. </p>;
}

render(<Hi />, document.getElementById("app"));
