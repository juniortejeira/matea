import { useState } from "react"
import { Carrousel } from './components/Carrousel/Carrousel';
import Clock from './components/Clock/Clock';
import Header from './components/Header/Header';
import './App.css';
import Modal from "./components/Modal/Modal";

const carrouselImges = [
  "https://static-cse.canva.com/blob/665901/1600w-RdccdYiYmHI.jpg",
  "https://marketplace.canva.com/EAE7yMgyqZQ/1/0/1600w/canva-banner-de-linkedin-sencillo-tecnolog%C3%ADa-jA8bSOvN_w0.jpg",
  "https://marketplace.canva.com/EAEmbLmpRTY/1/0/1600w/canva-banner-de-linkedin-lugar-de-trabajo-ordenado-JU4xTHD1sf0.jpg"
]

function App() {
  const [showModal, setShowModal] = useState(false)
  const handleOpenModal = () => {
    setShowModal(true)
  }
  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <Header handleModal={handleOpenModal} />
      <Carrousel images={carrouselImges} />
      <Clock />
      {
        showModal &&
        <Modal handleCloseModal={handleCloseModal} />
      }
    </>
  );
}

export default App;
