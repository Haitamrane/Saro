import logo from '../Assets/Logo.svg';
import {
  LoadingDiv,
} from "./loading.elements";


function Loading() {
    return (
      <LoadingDiv>
        <img src={logo} alt="LOGO" />
        <h1>SARO</h1>
      </LoadingDiv>
    );
  }
  
  export default Loading;