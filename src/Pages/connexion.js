import { Link } from "react-router-dom";
import TitleInscription from '../Components/Title/TitleInscription';
import InputInscription from '../Components/Input/InputInscription';
import Button from '../Components/Button/Button';
import Decoration from '../Components/Decoration/Decoration';

import {
    MDP,DivMDP,DivAll,DivInput,
      } from "./inscription.elements";

function Connexion() {
    return (
        <DivAll>
            <Decoration/>
            <TitleInscription title="CONNEXION"/>
            
            <DivMDP>
                <DivInput>
                    <InputInscription placeholder="Pseudo"/>
                    <InputInscription placeholder="Mot de passe" type="password"/>
                    <Link to="/reset">
                        <MDP>Mot de passe oublié ?</MDP>
                    </Link>
                </DivInput>
            </DivMDP>

            <Button Button="Se connecter" Sub="Je n’ai pas de compte" lien="/inscription"/>
        </DivAll>
    );
  }
  
  export default Connexion;