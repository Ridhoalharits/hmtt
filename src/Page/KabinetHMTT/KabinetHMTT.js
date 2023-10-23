import React from "react";
import Header from "../../Component/Header/Header";
import "./KabinetHMTT.css";

const KabinetHMTT = () => {
	return (
		<div>
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
							alt="foto_inti_kabinet"
						/>
						<img
							className="kabinet-img-placeholder"
							src="./img/fotoanggota.jpeg"
							alt="foto_anggota"
						/>
					</div>
				</div>
			</div>

			<div className="visimisi-base">
				<p className="visimisi-headling">Visi & Misi</p>
				<div className="visimisi-box1">
					<p className="visimisi-subheading">Visi & Misi</p>
					<p className="visi-headline">VISI</p>
					<p className="visi-body">
						Terwujudnya HMTT sebagai wadah pengembangan potensi mahasiswa S1
						Teknik Telekomunikasi yang bersifat inovatif dan kreatif, serta
						menjalin hubungan baik dengan seluruh elemen, baik elemen internal
						maupun eksternal, guna mendapatkan hasil agar dapat membantu
						pengembangan keilmuan di bidang telekomunikasi.
					</p>
				</div>
				<div className="visimisi-box2">
					<p className="visimisi-subheading-black">Visi & Misi</p>
					<p className="visi-headline-black">Misi</p>
					<div className="misi-kebawah">
						<div className="misi-list">
							<p>1</p>
							<p>
								Merangkul seluruh elemen S1 Teknik Telekomunikasi dengan
								memfokuskan kepada keterbukaan satu sama lain
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default KabinetHMTT;
