import {
  InputStyle,
    } from "./Input.elements";
  
    
    
    function InputInscription(props) {
        return (
          <>
            <InputStyle placeholder={props.placeholder} name={props.name} type={props.type}/>
          </>
        );
      }
      
      export default InputInscription;
    
    