import React from "react";
import "./LabBox.css";

function LabBox(props) {
	return (
		<div>
			<div className="lab-box">
				<div className="content">
					<img className="icon-placeholder" src={props.iconURL}></img>
					<p className="text-bold">{props.namaLab}</p>
					<p className="text-regular">{props.labdesc}</p>
					<p className="text-italic-more">See More</p>
				</div>
			</div>
		</div>
	);
}

export default LabBox;
