import TitleInscription from '../Components/Title/TitleInscription';
import InputInscription from '../Components/Input/InputInscription';
import Button from '../Components/Button/Button';
import Decoration from '../Components/Decoration/Decoration';

import {
    Photo,DivAll,DivInput,
      } from "./inscription.elements";
    

function Inscription() {
    return (
        <DivAll>
            <Decoration/>
            <TitleInscription title="INSCRIPTION"/>

            <DivInput>
                <InputInscription placeholder="Pseudo"/>
                <InputInscription placeholder="Mot de passe" type="password"/>
                <InputInscription placeholder="Confirmer Mot de passe" type="password"/>
                <InputInscription placeholder="Email" type="Email"/>
                <Photo>Ajouter une photo de profil</Photo>
            </DivInput>

            <Button Button="S’inscrire" Sub="Retour" lien="/connexion"/>
        </DivAll>
    );
  }
  
  export default Inscription;