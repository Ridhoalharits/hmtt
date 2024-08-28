import React from "react";
import Header from "../../Component/Header/Header";
// import img from "../../../public/img/inkab.jpg";
import "./labdetail.css";

const CoordinatorLab = [
  { nama: "Ridho", jabatan: "Koordinator Asisten" },
  { nama: "Ariiq", jabatan: "Pembimbing 1" },
  { nama: "Reva", jabatan: "Pembimbing 2" },
  { nama: "Rayan", jabatan: "Koordinator Riset" },
];
const LabDetail = () => {
  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <div className="lab-title">
          <div className="title-container">
            <p className="title">Network Laboratorium</p>
            <p className="lab-name">Adaptive Network Laboratory</p>
          </div>
          <img
            className="header-placeholder"
            src={"./img/fotoinkab.jpeg"}
            alt="foto"
          />
        </div>
      </div>

      <div className="content-wrapper">
        <div className="aboutus-title">
          <div className="aboutus-container">
            <p className="aboutus">
              Adaptive Network Laboratory adalah lab riset dan juga lab
              praktikum yang berfokus pada bidang core network. Adaptive Network
              Laboratory memiliki tiga divisi utama, yaitu SDN (Software Defined
              Network), NFV (Network Function Virtualization) dan Cloud Native
              Laboratorium Adaptive Network ini dibina oleh ibu Dr. Sofia Naning
              Hertiana, Ibu Ir. M.T. Ridha Muldina Negara S.T, M.T. dan ibu
              Ratna Mayasari, S.T., M.T.
            </p>
            <p className="aboutus-grey">
              Adaptive Network Laboratory adalah lab riset dan juga lab
              praktikum yang berfokus pada bidang core network. Adaptive Network
              Laboratory memiliki tiga divisi utama, yaitu SDN (Software Defined
              Network), NFV (Network Function Virtualization) dan Cloud Native
              Laboratorium Adaptive Network ini dibina oleh ibu Dr. Sofia Naning
              Hertiana, Ibu Ir. M.T. Ridha Muldina Negara S.T, M.T. dan ibu
              Ratna Mayasari, S.T., M.T.
            </p>
          </div>
          <div className="logolab-container">
            <img
              className="logolab-placeholder"
              src={"./icon/an.png"}
              alt="foto"
            />
          </div>
        </div>
      </div>

      <div className="wrapper">
        <p className="lab-name">Laboratorium Coordinator</p>
        <div className="photocard-container">
          {CoordinatorLab.map((item) => (
            <div className="parent-photocard">
              <div className="photocard">
                <img className="photo" src="./img/inkab.jpg" />
              </div>
              <p className="nama">{item.nama}</p>
              <p className="jabatan">{item.jabatan}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="wrapper">
        <p className="lab-name">Activity</p>
        <div className="content-wrapper-activity">
          <div className="activity-title">
            <div className="activity-container">
              <p className="lab-name">NetSchool.</p>
              <p className="activity-copy">
                NetSchool merupakan study grup atau program untuk melatik
                mahasiswa/I aktif Telkom University agar mempunyai dasar yang
                terkait dengan Network Computer dan Server Administration, serta
                mencari talenta terbaik untuk direktrut sebagai anggota baru
                Laboratorium Adaptive Network.
              </p>
            </div>
            <div className="logolab-container">
              <img
                className="activity-image"
                src={"./img/inkab.jpg"}
                alt="foto"
              />
            </div>
          </div>
          <div className="activity-title">
            <div className="logolab-container">
              <img
                className="activity-image"
                src={"./img/inkab.jpg"}
                alt="foto"
              />
            </div>
            <div className="activity-container">
              <p className="lab-name">NetSchool.</p>
              <p className="activity-copy">
                NetSchool merupakan study grup atau program untuk melatik
                mahasiswa/I aktif Telkom University agar mempunyai dasar yang
                terkait dengan Network Computer dan Server Administration, serta
                mencari talenta terbaik untuk direktrut sebagai anggota baru
                Laboratorium Adaptive Network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabDetail;
