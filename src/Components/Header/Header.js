import { Link } from "react-router-dom";

import {
    HeaderDiv,HeaderH1,DivHead,
  } from "./Header.elements";
  
  
  function Header(props) {
      return (
          <DivHead>
        <HeaderDiv>
            <Link to={props.return}>
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 2.28571L3.375 8L9 13.7143L7.875 16L0 8L7.875 0L9 2.28571Z" fill="#EBEBEB"/>
                </svg>
            </Link>

            <HeaderH1>{props.H1}</HeaderH1>
            
            <Link to={props.link}>
                <img src={props.src} alt="" />
            </Link>

        </HeaderDiv>
        </DivHead>
      );
    }
    
    export default Header;