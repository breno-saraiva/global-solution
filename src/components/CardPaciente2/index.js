import React from "react";
import * as C from "./styles";
import pastaImagem from "../../image/Cama.png";
import "./styles.css";


const CardPaciente2 = () => {
    return (
        <C.Card>
            <div class='leito2'>


                <i class="fa-solid fa-hospital-user imagem-leito2"></i>  
                
                <h2>Leito 2</h2>
                

            </div>
        </C.Card>
    );
};

export default CardPaciente2;