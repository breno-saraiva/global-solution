import React from "react";
import * as C from "./styles";
import pastaImagem from "../../image/Cama.png";
import "./styles.css";


const CardPaciente3 = () => {
    return (
        <C.Card>
            <div class='leito3'>


                <i class="fa-solid fa-hospital-user imagem-leito3"></i>  
                
                <h2>Leito 3</h2>
                

            </div>
        </C.Card>
    );
};

export default CardPaciente3;