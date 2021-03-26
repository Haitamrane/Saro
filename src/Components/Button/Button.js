import { Link } from "react-router-dom";
import {
    DivButton,ButtonCo,SubTitle,
  } from "./Button.elements";
  
  
  function Button(props) {
      return (
        <DivButton>
            <ButtonCo>{props.Button}</ButtonCo>
            
            <Link to={props.lien}>
              <SubTitle>{props.Sub}</SubTitle>
            </Link>
        </DivButton>
      );
    }
    
    export default Button;