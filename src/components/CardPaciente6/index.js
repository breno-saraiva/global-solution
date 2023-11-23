import React from "react";
import * as C from "./styles";
import pastaImagem from "../../image/Cama.png";
import "./styles.css";


const CardPaciente6 = () => {
    return (
        <C.Card>
            <div class='leito6'>


                <i class="fa-solid fa-hospital-user imagem-leito6"></i>  
                
                <h2>Leito 6</h2>
                

            </div>
        </C.Card>
    );
};

export default CardPaciente6;