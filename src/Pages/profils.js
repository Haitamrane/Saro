import Menu from '../Components/Menu/Menu';
import Header from '../Components/Header/Header';
import parametre from '../Assets/parametre.svg';

function Profils() {
    return (
        <div>
            <Header H1="Profils" return="/homejeu" src={parametre} link="/parametre"/>
            <Menu messages="#898989" home="#898989" profils="white"/>
        </div>
    );
  }
  
  export default Profils;