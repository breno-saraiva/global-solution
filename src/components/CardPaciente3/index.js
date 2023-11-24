import React, { useState } from "react";
import * as C from "./styles";
import "./styles.css";

const CardPaciente3 = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <C.Card>
        <div className='leito3' onClick={handleOpenModal}>
          <i className="fa-solid fa-hospital-user imagem-leito3"></i>
          <h2>Leito 3</h2>
        </div>
      </C.Card>

      {modalOpen && (
        <div className="modal-overlay3">
          <div className="modal3">
            <span className="close-button3" onClick={handleCloseModal}>
              &times;
            </span>
            <h1>Fábio Leon</h1>
            <p><b>Idade:</b> 30 anos</p>
            <p><b>Sexo:</b> Masculino</p>
            <p><b>Data:</b> 20/11/2023</p>
            <p><b>Motivo:</b> Gripe</p>
            <p><b>Temperatura:</b> 36.8°</p>
            <p><b>Pressão:</b> 12/8</p>
            <p><b>Saturação:</b> 98%</p>
            <p><b>Batimentos:</b> 65 bpm</p>
            <br></br>

            <p>------------------------------</p>
          
          </div>
        </div>
      )}
    </div>
  );
};

export default CardPaciente3;
