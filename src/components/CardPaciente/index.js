import React from "react";
import * as C from "./styles";
import pastaImagem from "../../image/Cama.png";
import "./styles.css";


const CardPaciente = () => {
    return (
        <C.Card>
            <div class='leito'>
                <h2>Leito 1</h2>
                
                <i class="fa-solid fa-bed-pulse imagem-leito"></i>

            </div>
        </C.Card>
    );
};

export default CardPaciente;