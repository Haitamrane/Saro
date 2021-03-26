
import {
    DivDiscussions,Flex,DIVO,Name,Msg,Info,
  } from "./Discussions.elements";
  
  
  function Discussions(props) {
      return (
        <DivDiscussions>
                <img src={props.src} alt="Profils"/>
            <DIVO>
                <Flex>
                    <Name namevu={props.namevu}>{props.name}</Name>
                    <Info namevu={props.namevu}>{props.heures}</Info>
                </Flex>

                <Flex>
                    <Msg namevu={props.namevu}>{props.msg}</Msg>
                    <Info namevu={props.namevu}>{props.new}</Info>
                </Flex>
            </DIVO>
        </DivDiscussions>
      );
    }
    
    export default Discussions;