import Menu from '../Components/Menu/Menu';
import Creation from '../Components/Creation/Creation';
import JeuCours from '../Components/JeuCours/JeuCours';

import neufquatre from '../Assets/94.svg';
import neuftrois from '../Assets/93.svg';
import neufcinq from '../Assets/95.svg';
import neufdeux from '../Assets/92.svg';
import neufun from '../Assets/91.svg';
import septsept from '../Assets/77.svg';
import septhuit from '../Assets/78.svg';

function HomeJeu() {
    return (
        <div>
            <JeuCours src={neufquatre} alt="94" title="Departement 94" info="Citez le maximum de ville du 94" joueur="4/4" partie="Partie 14" encours="Jeu en cours"/>
            <JeuCours src={neufquatre} alt="94" title="Departement 94" info="Citez le maximum de ville du 94" joueur="1/4" partie="Partie 14" encours="Rejoindre" primary="primary"/>
            <JeuCours src={neufquatre} alt="94" title="Departement 94" info="Citez le maximum de ville du 94" joueur="1/4" partie="Partie 14" encours="Rejoindre" primary="primary"/>
            <JeuCours src={neufquatre} alt="94" title="Departement 94" info="Citez le maximum de ville du 94" joueur="1/4" partie="Partie 14" encours="Rejoindre" primary="primary"/>
            <JeuCours src={neufquatre} alt="94" title="Departement 94" info="Citez le maximum de ville du 94" joueur="1/4" partie="Partie 14" encours="Rejoindre" primary="primary"/>
            <JeuCours src={neufquatre} alt="94" title="Departement 94" info="Citez le maximum de ville du 94" joueur="1/4" partie="Partie 14" encours="Rejoindre" primary="primary"/>
            <JeuCours src={neufquatre} alt="94" title="Departement 94" info="Citez le maximum de ville du 94" joueur="1/4" partie="Partie 14" encours="Rejoindre" primary="primary"/>
            <JeuCours src={neufquatre} alt="94" title="Departement 94" info="Citez le maximum de ville du 94" joueur="1/4" partie="Partie 14" encours="Rejoindre" primary="primary"/>
            <JeuCours src={neufquatre} alt="94" title="Departement 94" info="Citez le maximum de ville du 94" joueur="1/4" partie="Partie 14" encours="Rejoindre" primary="primary"/>
            <JeuCours src={neufquatre} alt="94" title="Departement 94" info="Citez le maximum de ville du 94" joueur="1/4" partie="Partie 14" encours="Rejoindre" primary="primary"/>

            <Creation/>
            <Menu messages="#898989" home="white" profils="#898989"/>
        </div>
    );
  }
  
  export default HomeJeu;