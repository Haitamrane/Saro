import Menu from '../Components/Menu/Menu';
import Header from '../Components/Header/Header';
import InputAmis from '../Components/InputAmis/InputAmis';
import Attente from '../Components/Attente/Attente';
import Accept from '../Components/Accept/Accept';

import picture from '../Assets/picture.png';

function Demande() {
    return (
        <div>
            <Header H1="Demande d’amis" return="/messages"/>
            <InputAmis placeholder="Entrez le pseudo"/>

            <Attente demande="Demande en attente"/>
            <Accept src={picture} name="Amira92" send="Vous avez envoyée une demande d’ami" statut="En attente"/>


            <Attente demande="Demande d'amis"/>
            <Accept src={picture} name="Amira92" send="Vous a envoyée une demande d’ami" statut="Accepter" add="add"/>
            <Accept src={picture} name="Amira92" send="Vous a envoyée une demande d’ami" statut="Accepter" add="add"/>
            <Accept src={picture} name="Amira92" send="Vous a envoyée une demande d’ami" statut="Accepter" add="add"/>
            <Accept src={picture} name="Amira92" send="Vous a envoyée une demande d’ami" statut="Accepter" add="add"/>
            <Accept src={picture} name="Amira92" send="Vous a envoyée une demande d’ami" statut="Accepter" add="add"/>
            <Accept src={picture} name="Amira92" send="Vous a envoyée une demande d’ami" statut="Accepter" add="add"/>
            <Accept src={picture} name="Amira92" send="Vous a envoyée une demande d’ami" statut="Accepter" add="add"/>
            <Accept src={picture} name="Amira92" send="Vous a envoyée une demande d’ami" statut="Accepter" add="add"/>
            <Accept src={picture} name="Amira92" send="Vous a envoyée une demande d’ami" statut="Accepter" add="add"/>


            <Menu messages="white" home="#898989" profils="#898989"/>
        </div>
    );
  }
  
  export default Demande;