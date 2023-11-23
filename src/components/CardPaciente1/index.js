import React from "react";
import * as C from "./styles";
import pastaImagem from "../../image/Cama.png";
import "./styles.css";


const CardPaciente1 = () => {
    return (
        <C.Card>
            <div class='leito'>


                <i class="fa-solid fa-hospital-user imagem-leito"></i>  
                
                <h2>Leito 1</h2>
                

            </div>
        </C.Card>
    );
};

export default CardPaciente1;