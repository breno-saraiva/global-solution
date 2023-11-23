import React from "react";
import * as C from "./styles";
import pastaImagem from "../../image/Cama.png";
import "./styles.css";


const CardPaciente5 = () => {
    return (
        <C.Card>
            <div class='leito5'>


                <i class="fa-solid fa-hospital-user imagem-leito5"></i>  
                
                <h2>Leito 5</h2>
                

            </div>
        </C.Card>
    );
};

export default CardPaciente5;