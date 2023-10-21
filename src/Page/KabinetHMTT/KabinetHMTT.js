import React from "react";
import Header from "../../Component/Header/Header";
import "./KabinetHMTT.css";

const KabinetHMTT = () => {
	return (
		<div className="base">
			<Header />
			<div className="headingKabinet-base">
				<p className="heading-kabinet-text">Kabinet HMTT 2023</p>
			</div>

			<div className="aboutus-base">
				<div className="aboutus-row">
					<div className="aboutus-text">
						<p className="aboutus-subheading-text">Tentang Kami</p>
						<p className="aboutus-heading-text">
							Himpunan Mahasiswa Teknik Telekomunikasi
						</p>
						<p className="aboutus-bodycopy-text">
							Himpunan Mahasiswa Teknik Telekomunikasi merupakan organisasi
							kemahasiswaan di Universitas Telkom Bandung, Program Studi Strata
							1 Teknik Telekomunikasi, yang telah disahkan sejak tanggal 9
							Februari 2014 yang sebelumnya telah terbentuknya Telco sejak 7
							Desember 2011. Himpunan Mahasiswa Teknik Telekomunikasi
							Universitas Telkom adalah organisasi yang berasaskan Pancasila dan
							Tri Dharma Perguruan Tinggi.
						</p>
						<p className="aboutus-bodycopy-text">
							Himpunan Mahasiswa Teknik Telekomunikasi Universitas Telkom adalah
							organisasi yang bersifat kekeluargaan dan menjunjung tinggi
							profesionalisme. Dalam pertumbuhan dan perkembangannya maka
							Himpunan Mahasiswa Teknik Telekomunikasi (HMTT) harus dapat
							mengembangkan potensi anggotanya dan diharapkan mampu mengatasi
							permasalahan dan tantangan yang ada serta dapat menyelesaikan dan
							menjawab tantangan tesebut, sehingga Organisasi ini dapat menuju
							kearah yang sesuai dengan tujuan, visi, dan misi dari Himpunan
							Mahasiswa Teknik Telekomunikasi.
						</p>
						<p className="aboutus-bodycopy-text">
							Dalam pertumbuhan dan perkembangannya maka Himpunan Mahasiswa
							Teknik Telekomunikasi (HMTT) harus dapat mengembangkan potensi
							anggotanya dan diharapkan mampu mengatasi permasalahan dan
							tantangan yang ada serta dapat menyelesaikan dan menjawab
							tantangan tesebut, sehingga Organisasi ini dapat menuju kearah
							yang sesuai dengan tujuan, visi, dan misi dari Himpunan Mahasiswa
							Teknik Telekomunikasi.
						</p>
					</div>
					<div className="aboutus-image-row">
						<img
							className="kabinet-img-placeholder"
							src="./img/fotoinkab.jpeg"
						/>
						<img
							className="kabinet-img-placeholder"
							src="./img/fotoanggota.jpeg"
						/>
					</div>
				</div>
			</div>
			{/* 
			<div className="visimisi-base">
				<p className="visimisi-headling">Visi & Misi</p>
				<div className="visimisi-box1"></div>
			</div> */}
		</div>
	);
};

export default KabinetHMTT;
