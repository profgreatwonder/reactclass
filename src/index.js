import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
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

//4. we want to create a little app with what we've learned. here we introduce css - inline, internal, external
/*
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
			<Navbar />
			<Images />
			<Name />
			<Sector />
		</>
	);
};

const Navbar = () => {
	return (
		<ul className="nav">
			<li className="nav-item">
				<a className="nav-link active" aria-current="page" href="#">
					Active
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					Link
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					Link
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link disabled">Disabled</a>
			</li>
		</ul>
	);
};

const Images = () => {
	return (
		<>
			<img src={kuda} style={logoSize} alt="" />
		</>
	);
};

const Name = () => {
	return (
		// inline css
		<>
			<h2 style={{ color: "green", fontSize: "40px" }}>Kuda Bank</h2>
		</>
	);
};

const Sector = () => {
	return (
		// external stylesheet
		<>
			<p className="para">Fintech</p>
		</>
	);
};

// internal css
const logoSize = {
	backgroundColor: "green",
	height: "50%",
	width: "50%",
};

// we can also add bootstrap to this file by running 'npm install bootstrap'
*/

// 5. accessing JS variables inside JSX

/*
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
			<Navbar />
			<Section />
		</>
	);
};

const Navbar = () => {
	return (
		<ul className="nav">
			<li className="nav-item">
				<a className="nav-link active" aria-current="page" href="#">
					Active
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					Link
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					Link
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link disabled">Disabled</a>
			</li>
		</ul>
	);
};

const bankName = "Kuda Bank";
const Section = () => {
	// you can make changes in the variable and it will be rendered in the browser. you can also add variables outside a component.
	const paraDesign = "Fintechhhhhhhhhhh";
	return (
		//js added inside the jsx must return something. this means that it has to be an expression(2 + 6) and not a statement(<p className="para">{let x = 6}</p>)
		//we can also use methods like to .toUpperCase()
		<>
			<img src={kuda} style={logoSize} alt="" />
			<p className="para">{paraDesign}</p>
			<h2 style={{ color: "green", fontSize: "40px" }}>
				{bankName.toUpperCase()}
			</h2>
			<p className="para">{2 + 6}</p>
		</>
	);
};

// external stylesheet
const logoSize = {
	backgroundColor: "green",
	height: "50%",
	width: "50%",
};
*/

// 6. props: when we copy multitple instance of the Bank, we may want it to display a different value at different times depending on what we are passing into the different instance of the book. we'll move all our variables to the top. we could also make a variable for an image if its a link from the internet.
// props works like a parameter in JS. our components are functions and we can add parameters and arguments to them.
/*
const bankName = "Kuda Bank";
const paraDesign = "Fintech";
const BankTab = () => {
	return (
		<>
			<Navbar />
			<Bank area="ikeja" />
			<Bank branch="mile 12" streetNum={30} />
			<Bank />
		</>
	);
};

// here we will pass a parameter into the Bank function called props. you can call it any name you want(but it is wise to follow convention). we will first log it to the console to see what it means. it returns an object. we pass the props in the component where we are rendering the other components of the app(in this case bankTab). to access them(i.e. to display them in our browser), we call it as a method on the props object()
const Bank = (props) => {
	console.log(props);
	return (
		<>
			<Section />
			{console.log(props)}
			<p>{props.area}</p>
			<p>{props.branch}</p>
			<p>{props.streetNum}</p>
		</>
	);
};

const Navbar = () => {
	return (
		<ul className="nav">
			<li className="nav-item">
				<a className="nav-link active" aria-current="page" href="#">
					Active
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					Link
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					Link
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link disabled">Disabled</a>
			</li>
		</ul>
	);
};

const Section = () => {
	return (
		<>
			<img src={kuda} style={logoSize} alt="" />
			<p className="para">{paraDesign}</p>
			<h2 style={{ color: "green", fontSize: "40px" }}>
				{bankName.toUpperCase()}
			</h2>
			<p className="para">{2 + 6}</p>
		</>
	);
};

// external stylesheet
const logoSize = {
	backgroundColor: "green",
	height: "50%",
	width: "50%",
};
*/

//7. here we want to separate the props object for the individual item, then try accessing them.
const bankName = "Kuda Bank";
const paraDesign = "Fintech";
const BankTab = () => {
	return (
		<>
			<Navbar />
			<Bank area="ikeja" />
			<Bank branch="mile 12" streetNum={30} />
			<Bank />
		</>
	);
};

// here we will pass a parameter into the Bank function called props. you can call it any name you want(but it is wise to follow convention). we will first log it to the console to see what it means. it returns an object. we pass the props in the component where we are rendering the other components of the app(in this case bankTab). to access them(i.e. to display them in our browser), we call it as a method on the props object()
const Bank = (props) => {
	console.log(props);
	return (
		<>
			<Section />
			{console.log(props)}
			<p>{props.area}</p>
			<p>{props.branch}</p>
			<p>{props.streetNum}</p>
		</>
	);
};

const Navbar = () => {
	return (
		<ul className="nav">
			<li className="nav-item">
				<a className="nav-link active" aria-current="page" href="#">
					Active
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					Link
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					Link
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link disabled">Disabled</a>
			</li>
		</ul>
	);
};

const Section = () => {
	return (
		<>
			<img src={kuda} style={logoSize} alt="" />
			<p className="para">{paraDesign}</p>
			<h2 style={{ color: "green", fontSize: "40px" }}>
				{bankName.toUpperCase()}
			</h2>
			<p className="para">{2 + 6}</p>
		</>
	);
};

// external stylesheet
const logoSize = {
	backgroundColor: "green",
	height: "50%",
	width: "50%",
};

ReactDOM.render(<BankTab />, document.getElementById("root"));
