import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import kuda from "./images/kuda.jpg";
// import barter from "./images/barter.jpg";
// import carbon from "./images/carbon.png";
import { bankDBs } from "./bankDBs";
import Bank from "./Bank";

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

// internal stylesheet
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

// internal stylesheet
const logoSize = {
	backgroundColor: "green",
	height: "50%",
	width: "50%",
};
*/

//7. here we want to separate the props object for the individual item, then try accessing them. we will start by creating an object of the bank details.
/*
const bankObj = {
	branch: "ikeja",
	streetNum: 30,
};

const bankObj2 = {
	branch: "mile 12",
	streetNum: 28,
};
const bankName = "Kuda Bank";
const paraDesign = "Fintech";
const BankTab = () => {
	// from the object, we are want to get the branch, branch2 and streetNum. when you pass props, be sure to be looking for them in the components where you need to use them.
	return (
		// we have what is called children props, which is anything that we render between the opening and closing tag of a component as seen with the second bank component. it doesn't work in a self-closing tag. to access it, we add 'children' to the component where we need it as part of the props, then pass in a tag. this has to be called 'children', nothing else.
		<>
			<Navbar />
			<Bank branch={bankObj.branch} streetNum={bankObj.streetNum} />
			<Bank branch={bankObj2.branch} streetNum={bankObj2.streetNum}>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
				molestiae.
			</Bank>
			<Bank />
		</>
	);
};

const Bank = ({ branch, branch2, streetNum, children }) => {
	// to avoid repitition(of props.), we could destructure the properties from the object
	// const { branch, branch2, streetNum, children } = props;
	// you can destructure where you are passing the props as a parameter. Instead of props, we will pass in branch, branch2, streetNum
	return (
		<>
			<Section />
			<p>{branch}</p>
			<p>{branch2}</p>
			<p>{streetNum}</p>
			<p>{children}</p>
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

// internal stylesheet
const logoSize = {
	backgroundColor: "green",
	height: "50%",
	width: "50%",
};
*/

//8. The previous example is not pratical as we need to create an object everytime we want to pass a prop. here we want to iterate over an array of objects(bankDBs), then try accessing them. we access them by wrapping them in our html using map method.

/*
const bankDBs = [
	{
		image: kuda,
		bankName: "kuda",
		branch: "ikeja",
		streetNum: 30,
	},

	{
		image: barter,
		bankName: "barter",
		branch: "mile 12",
		streetNum: 28,
	},

	{
		image: carbon,
		bankName: "carbon",
		branch: "mile 12",
		streetNum: 28,
	},
];

const paraDesign = "Fintech";
const BankTab = () => {
	return (
		//we want to iterate over the array of objects (bankDBs)
		<>
			<Navbar />
			<section>
				{bankDBs.map((bankDB) => {
					// const { image, bankName, branch, streetNum } = bankDB;
					//instead of returning:
					// <img src={image} alt="bank image" />
					// <p>{bankName}</p>
					// <p>{branch}</p>
					// <p>{streetNum}</p>
					//we will return the bank component instead. instead of passing the content of the array one at a time, we will destructure
					return (
						<div>
							<Bank bankDB={bankDB}></Bank>
							<Section />
						</div>
					);
				})}
			</section>
		</>
	);
};

const Bank = (props) => {
	const { image, bankName, branch, streetNum } = props.bankDB;
	return (
		<>
			<img src={image} style={logoSize} alt="bank image" />
			<p>{bankName}</p>
			<p>{branch}</p>
			<p>{streetNum}</p>
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
			<p className="para">{paraDesign}</p>
			<h2 style={{ color: "green", fontSize: "40px" }}></h2>
			<p className="para">{2 + 6}</p>
		</>
	);
};

// internal stylesheet
const logoSize = {
	backgroundColor: "green",
	height: "50%",
	width: "50%",
};

*/

//9. In this example, we want to get rid of an error in our console, 'Warning: Each child in a list should have a unique "key" prop.'. we will start by adding an id which serves as a unique identifier, then pass a 'key' prop. we also want to see events in reacts.
/*
const bankDBs = [
	{
		id: 1,
		image: kuda,
		bankName: "kuda",
		branch: "ikeja",
		streetNum: 30,
	},

	{
		id: 2,
		image: barter,
		bankName: "barter",
		branch: "mile 12",
		streetNum: 28,
	},

	{
		id: 3,
		image: carbon,
		bankName: "carbon",
		branch: "Abeokuta",
		streetNum: 28,
	},
];

const paraDesign = "Fintech";
const BankTab = () => {
	return (
		//we are iterating over the array of objects (bankDBs). here we will use the spread operator. instead of having the bankDB object, 'bankDB={bankDB}', we now have {...bankDB}
		<>
			<Navbar />
			<section>
				{bankDBs.map((bankDB) => {
					return (
						<div>
							<Bank key={bankDB.id} {...bankDB}></Bank>
							<Section />
						</div>
					);
				})}
			</section>
		</>
	);
};

const Bank = (props) => {
	//with the spread operator, we don't need to state prop.bankDB. we can simply just assign the destructuring to props. for this button:
	// <button type="button" onClick={checkBranch(bankName)}>
	// 			Bank Name
	// </button>
	// we want to prevent the default behaviour of the button. to do that, we add the arrow function syntax: onClick={() => checkBranch(bankName)}
	// this helps us run the function only when it is clicked
	//in all our event handlers, we can also have the event object(e).
	const { image, bankName, branch, streetNum } = props;
	const clickme = (e) => {
		console.log(e);
		console.log(e.target);
		alert("yay, you clicked me");
	};
	const checkBranch = (bankName) => {
		alert(bankName);
	};
	const hoverHere = () => {
		console.log(branch);
	};
	return (
		<>
			<img
				src={image}
				style={logoSize}
				alt="bank image"
				onMouseOver={hoverHere}
			/>
			<p className="para" onClick={() => alert(branch)}>
				{bankName}
			</p>
			<p>{branch}</p>
			<p>{streetNum}</p>
			<button type="button" onClick={clickme}>
				Click Me
			</button>
			<button type="button" onClick={() => checkBranch(bankName)}>
				Bank Name
			</button>
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
			<p className="para">{paraDesign}</p>
			<h2 style={{ color: "green", fontSize: "40px" }}></h2>
			<p className="para">{2 + 6}</p>
		</>
	);
};

// internal stylesheet
const logoSize = {
	backgroundColor: "green",
	height: "50%",
	width: "50%",
};
*/

//10. In this example, we want to look at import and export. we have 2 types of import and export and they are: 'named' and 'default'. what this does is that it reduces the size of our file.
// we will create a 'bankDBs.js' to store our bank details, 'Bank.js' to store our Bank component. we will use the bankDBs to demonstrate 'named' export and import while we will use Bank.js to demonstrate 'default' export and import. with named export, we add the 'export' keyword to what we are trying to export, then import it with the exact name, 'import { bankDBs } from "./bankDBs";'. we don't need to add the js extension. we also have to transfer the image imports to the bankDBs file bcos that's where it is needed.
// with the default export, we add the 'export default' keyword with the name of the component to the bottom of the file, then import it with any name you wish, 'import Bank from "./Bank";'. we don't need to add the js extension. when we use a different name in our import, we only need to have that same name where we are calling the component.
// we can repeat the process for the the other component, Navbar and section.

const paraDesign = "Fintech";
const BankTab = () => {
	return (
		<>
			<Navbar />
			<section>
				{bankDBs.map((bankDB) => {
					return (
						<div>
							<Bank key={bankDB.id} {...bankDB}></Bank>
							<Section />
						</div>
					);
				})}
			</section>
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
			<p className="para">{paraDesign}</p>
			<h2 style={{ color: "green", fontSize: "40px" }}></h2>
			<p className="para">{2 + 6}</p>
		</>
	);
};

ReactDOM.render(<BankTab />, document.getElementById("root"));
