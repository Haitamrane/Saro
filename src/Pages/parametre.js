import Menu from '../Components/Menu/Menu';
import Header from '../Components/Header/Header';


function Parametre() {
    return (
        <div>
            <Header H1="Réglages" return="/profils"/>
            <Menu messages="#898989" home="#898989" profils="white"/>
        </div>
    );
  }
  
  export default Parametre;