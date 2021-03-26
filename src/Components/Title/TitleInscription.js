import {
  H1, DivH1,
} from "./TitleInscription.elements";


function TitleInscription(props) {
    return (
      <DivH1>
      <H1>{props.title}</H1>
      </DivH1>
    );
  }
  
  export default TitleInscription;

