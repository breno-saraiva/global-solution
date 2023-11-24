import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import Navbar from "../../components/Navbar";
import CardPaciente1 from "../../components/CardPaciente1";
import CardPaciente2 from "../../components/CardPaciente2";
import CardPaciente3 from "../../components/CardPaciente3";
import CardPaciente4 from "../../components/CardPaciente4";
import CardPaciente5 from "../../components/CardPaciente5";
import CardPaciente6 from "../../components/CardPaciente6";
import CardPaciente7 from "../../components/CardPaciente7";
import CardPaciente8 from "../../components/CardPaciente8";
import CardPaciente9 from "../../components/CardPaciente9";
import CardPaciente10 from "../../components/CardPaciente10";
import Footer from "../../components/Footer";


const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
      <div>
        
    <C.Container>
      <Navbar/>
    </C.Container>
  
    <C.Card>
      <CardPaciente1/>
      <CardPaciente2/>
      <CardPaciente3/>
      <CardPaciente4/>
      <CardPaciente5/>
      <CardPaciente6/>
      <CardPaciente7/>
      <CardPaciente8/>
      <CardPaciente9/>
      <CardPaciente10/>
    </C.Card>

    <C.Foot>
      <Footer/>
    </C.Foot>

      </div> 

);
};

export default Home;

{/* <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
  Sair
</Button> */}