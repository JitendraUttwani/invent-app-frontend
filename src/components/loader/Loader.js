import React from "react";
// import loaderImg from "../../assets/loading.gif";
import ReactDOM from "react-dom";
import "./Loader.scss";

const Loader = () => {
	return ReactDOM.createPortal(
		<div className="wrapper">
			<div className="loader">
				{/* <img src={loaderImg} alt="Loading..." /> */}
				<h1>Loading...</h1>
			</div>
		</div>,
		document.getElementById("loader")
	);
};

export const SpinnerImg = () => {
	return (
		<div className="--center-all">
			<img src="../../assets/loading.gif" alt="Loading..." />
			{/* <h1>Loading...</h1> */}
		</div>
	);
};

export default Loader;
