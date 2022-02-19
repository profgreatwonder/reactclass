const Bank = (props) => {
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

// internal stylesheet
const logoSize = {
	backgroundColor: "green",
	height: "50%",
	width: "50%",
};

export default Bank;
