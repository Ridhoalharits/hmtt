import React from "react";
import "./Welcome.css";
import Header from "../../Component/Header/Header";
import Intro from "../../Segment/Intro/Intro";
import OurLab from "../../Segment/OurLab/OurLab";
import ArticleTile from "../../Component/ArticleTile/ArticleTile";

const Welcome = () => {
	return (
		<div className="base">
			<Header />
			<div className="welcome">
				<p className="welcome-text">PERTAMA, TERBAIK,</p>
				<p className="welcome-text">SALAM TELEKOMUNIKASI</p>
				<p className="welcome-detail-text">
					Welcome! This is an official website of Himpunan Mahasiswa Teknik
					Telekomunikasi
				</p>
				<button className="aboutus-button">
					<a href="/kabinethmtt" className="text-button2">
						Get To Know Us
					</a>
				</button>
			</div>
			<Intro />
			<OurLab />
			<div>
				<ArticleTile />
			</div>
		</div>
	);
};

export default Welcome;
