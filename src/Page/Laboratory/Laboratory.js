import React from "react";
import Header from "../../Component/Header/Header";
import LabBox from "../../Component/LabBox/LabBox";
import LabBox2 from "../../Component/LabBox2/LabBox2";
import "./Laboratory.css";

const Laboratory = () => {
	const laboratoryList = [
		{
			LabName: "Jaringan",
			icon: "./icon/cloudLogo.png",
			desc: "Laboratorium Jaringan Membahas Teknologi dalam menghubungkan satu perangkat dengan perangkat lain",
		},
		{
			LabName: "Sinyal",
			icon: "./icon/signalLogo.png",
			desc: "Laboratorium Jaringan Membahas Teknologi dalam menghubungkan satu perangkat dengan perangkat lain",
		},
		{
			LabName: "Transmisi",
			icon: "./icon/transLogo.png",
			desc: "Laboratorium Jaringan Membahas Teknologi dalam menghubungkan satu perangkat dengan perangkat lain",
		},
	];
	return (
		<div>
			<Header />
			<div>
				<div className="base-lab">
					<div>
						<p className="heading-lab">Laboratory</p>
						<p className="sub-heading-lab">Network Laboratory</p>
						<div className="center">
							<p className="bodycopy-lab">
								Laboratorium Jaringan Membahas Teknologi dalam menghubungkan
								satu perangkat dengan perangkat lain
							</p>
						</div>
						<div className="lab-box-row">
							{laboratoryList.map((laboratoryLists) => (
								<LabBox
									key={laboratoryLists.id}
									namaLab={laboratoryLists.LabName}
									labdesc={laboratoryLists.desc}
									iconURL={laboratoryLists.icon}
								/>
							))}
						</div>
					</div>

					{/* <div className="lab-type"></div> */}
				</div>
				<div className="base-lab-2">
					<div>
						<p className="heading-lab-2">Laboratory</p>
						<p className="sub-heading-lab-2">Transmission Laboratory</p>
						<div className="center">
							<p className="bodycopy-lab-2">
								Laboratorium Jaringan Membahas Teknologi dalam menghubungkan
								satu perangkat dengan perangkat lain
							</p>
						</div>
						<div className="lab-box-row">
							{laboratoryList.map((laboratoryLists) => (
								<LabBox2
									key={laboratoryLists.id}
									namaLab={laboratoryLists.LabName}
									labdesc={laboratoryLists.desc}
									iconURL={laboratoryLists.icon}
								/>
							))}
						</div>
					</div>

					{/* <div className="lab-type"></div> */}
				</div>
				<div className="base-lab">
					<div>
						<p className="heading-lab">Laboratory</p>
						<p className="sub-heading-lab">Signal Laboratory</p>
						<div className="center">
							<p className="bodycopy-lab">
								Laboratorium Jaringan Membahas Teknologi dalam menghubungkan
								satu perangkat dengan perangkat lain
							</p>
						</div>
						<div className="lab-box-row">
							{laboratoryList.map((laboratoryLists) => (
								<LabBox
									key={laboratoryLists.id}
									namaLab={laboratoryLists.LabName}
									labdesc={laboratoryLists.desc}
									iconURL={laboratoryLists.icon}
								/>
							))}
						</div>
					</div>

					{/* <div className="lab-type"></div> */}
				</div>
			</div>
		</div>
	);
};

export default Laboratory;
