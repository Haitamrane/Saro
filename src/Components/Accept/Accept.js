
import {
    DivAccept,DivA,Name,Send,Statut,DivB,
      } from "./Accept.elements";
    
      
      
      function Accept(props) {
          return (
            <DivAccept>
                <img src={props.src} alt="" />

                <DivA>
                    <DivB>
                        <Name>{props.name}</Name>
                        <Send>{props.send}</Send>
                    </DivB>

                    <Statut add={props.add} >{props.statut}</Statut>
                </DivA>

            </DivAccept>
          );
        }
        
        export default Accept;
      
      