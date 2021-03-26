import {
    DivJeu,DIVO,Title,Info,Other,Flex,
  } from "./JeuCours.elements";
  
  
  function JeuCours(props) {
      return (
        <DivJeu primary={props.primary}>
            <img src={props.src} alt={props.alt} />
            <DIVO>

              <Flex>
                <Title>{props.title}</Title>
                <Info>{props.joueur}</Info>
              </Flex>

              <Info>{props.info}</Info>

              <Flex>
                <Other>{props.partie}</Other>
                <Other>{props.encours}</Other>
              </Flex>

            </DIVO>
        </DivJeu>
      );
    }
    
    export default JeuCours;