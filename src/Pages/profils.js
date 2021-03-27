import Menu from '../Components/Menu/Menu';
import Header from '../Components/Header/Header';
import PhotoP from '../Components/PhotoP/PhotoP';

import parametre from '../Assets/parametre.svg';
import PictureP from '../Assets/PictureP.png';

function Profils() {
    return (
        <div>
            <Header H1="Profils" return="/homejeu" src={parametre} link="/parametre"/>
            <PhotoP src={PictureP} name="Teddy93" bio="Dédicasse à personne fallait etre la" price="1200"/>
            <Menu messages="#898989" home="#898989" profils="white"/>
        </div>
    );
  }
  
  export default Profils;