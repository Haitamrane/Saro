import {
    InputStyle,DivAmis,Add,
      } from "./InputAmis.elements";
    
      
      
      function InputAmis(props) {
          return (
            <DivAmis>
              <InputStyle placeholder={props.placeholder} name={props.name} type={props.type}/>
              <Add>Ajouter</Add>
            </DivAmis>
          );
        }
        
        export default InputAmis;
      
      