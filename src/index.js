import React from "react";
import ReactDOM from "react-dom";
import kuda from "./images/kuda.jpg";
import barter from "./images/barter.jpg";

//rules set 1
/*
1. function name must be capitalized
2. always return jsx, even if it is an empty html element.
3. we can only render one component.

// function SayHi() {
// 	return <h4>My first component</h4>;
// }

// multiple elements using traditional function.
function SayHi() {
	return (
		<div>
			<h4>My first component</h4>;
		</div>
	);
}

// we can write our component using arrow funcion.
// const SayHi = () => {
// 	return React.createElement("h1", {}, "hi sammy");
// };

//multiple elements using arrow function
// const SayHi = () => {
// 	return React.createElement(
// 		"h1",
// 		{},
// 		React.createElement("h2", {}, "hi sammy")
// 	);
// };

ReactDOM.render(SayHi />, document.getElementById("root"));
*/

//rules set 2
/*
// 1. we can only return a single element
//2. we can wrap our elements in semantic tags(div, section, etc)
//3. camelCase is used for compound attribute name html attributes 
e.g. onClick instead of onclick. className is used instead of class
//4. all html elements must have a closing, either self-closing or closing tag 

// function SayHi() {
// 	return (
// 		<div>
// 			<h1>React Class</h1>
// 			<p>
// 				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
// 				inventore.
// 			</p>
// 		</div>
// 	);
// }

// instead of enclosing everything in a div, we can use something called 
React.Fragment - <React.Fragment></React.Fragment> or 
we can jus use an empty angle bracket - <></>.
function SayHi() {
	return (
		<React.Fragment>
			<h1>React Class</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
				inventore.
			</p>
		</React.Fragment>
	);
}
ReactDOM.render(<SayHi />, document.getElementById("root"));
*/

//rule set 3
/*
// we can have nested component. creating multiple components and passing them into a 
parent component. we can see the list of components that we have in the react developer tools.
function ParentComp() {
	return (
		<>
			<ListHead />
			<ListItems></ListItems>
			<ListHead />
			<ListItems />
		</>
	);
}

let ListHead = () => <h1>My Fruits</h1>;

function ListItems() {
	return (
		<>
			<ul>
				<li>Banana</li>
				<li>Orange</li>
				<li>Pineapple</li>
				<li>Water Melon</li>
			</ul>
		</>
	);
}

ReactDOM.render(<ParentComp />, document.getElementById("root"));
*/

//4. we want to create a little app with what we've learned.
const BankTab = () => {
	return (
		<>
			<Bank />
		</>
	);
};
const Bank = () => {
	return (
		<>
			<Images />
			<Name />
			<Sector />
		</>
	);
};

const Images = () => {
	return (
		<>
			<img src={kuda} alt="" />
		</>
	);
};

const Name = () => {
	return (
		<>
			<h2>Kuda Bank</h2>
		</>
	);
};

const Sector = () => {
	return (
		<>
			<p>Fintech</p>
		</>
	);
};

ReactDOM.render(<BankTab />, document.getElementById("root"));
