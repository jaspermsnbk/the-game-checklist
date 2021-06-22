import React, { useState } from "react";
import "./index.css";
import ReactDom from "react-dom";
const App = () => {
	const l = [];
	for (let i = 1; i < 101; i++) {
		l.push(<Item num={i} key={i} />);
	}
	return (
		<>
			<Numpad />
			<div className="list">{l}</div>
		</>
	);
};

const Numpad = () => {
	const [val, setVal] = useState("0");
	const Button = ({ num }) => (
		<button
			className="button"
			value={num}
			onClick={(e) => {
				// console.log("click");
				e.preventDefault();
				setVal(val !== "0" ? val + num : String(num));
			}}
		>
			{num}
		</button>
	);
	const l = [];
	for (let i = 0; i < 9; i++) {
		l.push(<Button num={i} key={i} />);
	}
	const Display = () => {
		return <span id="data">{val}</span>;
	};
	return (
		<div id="numpad">
			<Display />
			<div id="buttons">{l}</div>
		</div>
	);
};
const Item = ({ num }) => {
    const [active, setActive] = useState(false)
  
    return (
      <div style={{ margin: "7px" }}>
        <span style={{ textDecoration: active ? "line-through" : "none" }}>
          {" "}
          {num}{" "}
        </span>
      </div>
    )
  }
  
ReactDom.render(<App />, document.getElementById("root"));

