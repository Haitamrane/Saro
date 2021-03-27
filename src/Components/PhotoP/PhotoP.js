import { Link } from "react-router-dom";

import {
    DivPicture,DivPicto,DivAll,Name,DivFond,Bio,Fond,DivAchat,Price,Buy,
  } from "./PhotoP.elements";
  
  
  function PhotoP(props) {
      return (
          <DivAll>
            <DivPicture>
                <img src={props.src} alt=""/>
                <DivPicto>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.07407 1.23077H7.5L7.125 0.232967C7.09909 0.16469 7.05161 0.105672 6.98905 0.0639754C6.92649 0.0222784 6.8519 -6.4024e-05 6.77546 1.37805e-07H3.22454C3.06829 1.37805e-07 2.92824 0.0934067 2.87616 0.232967L2.5 1.23077H0.925926C0.414352 1.23077 0 1.62418 0 2.10989V7.12088C0 7.60659 0.414352 8 0.925926 8H9.07407C9.58565 8 10 7.60659 10 7.12088V2.10989C10 1.62418 9.58565 1.23077 9.07407 1.23077ZM9.16667 7.12088C9.16667 7.16923 9.125 7.20879 9.07407 7.20879H0.925926C0.875 7.20879 0.833333 7.16923 0.833333 7.12088V2.10989C0.833333 2.06154 0.875 2.02198 0.925926 2.02198H3.08681L3.28472 1.4967L3.54977 0.791209H6.44907L6.71412 1.4967L6.91204 2.02198H9.07407C9.125 2.02198 9.16667 2.06154 9.16667 2.10989V7.12088ZM5 2.72528C3.97685 2.72528 3.14815 3.51209 3.14815 4.48352C3.14815 5.45495 3.97685 6.24176 5 6.24176C6.02315 6.24176 6.85185 5.45495 6.85185 4.48352C6.85185 3.51209 6.02315 2.72528 5 2.72528ZM5 5.53846C4.38657 5.53846 3.88889 5.06593 3.88889 4.48352C3.88889 3.9011 4.38657 3.42857 5 3.42857C5.61343 3.42857 6.11111 3.9011 6.11111 4.48352C6.11111 5.06593 5.61343 5.53846 5 5.53846Z" fill="#EBEBEB"/>
                    </svg>
                </DivPicto>
            </DivPicture>
        <Name>{props.name}</Name>
        <DivFond><Bio>{props.bio}</Bio></DivFond>
        <Link to="/fond">
            <Fond>CHANGEZ VOTRE FOND</Fond>
        </Link>
        <DivAchat>
            <Price>{props.price}</Price>

            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 9V12C18 13.3 14.866 15 11 15C7.134 15 4 13.3 4 12V9.5" fill="#15484B"/>
            <path d="M18 9V12C18 13.3 14.866 15 11 15C7.134 15 4 13.3 4 12V9.5" stroke="#111111" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29395 9.75908C5.15895 10.9071 7.83395 11.9841 10.9999 11.9841C14.8659 11.9841 17.9999 10.3781 17.9999 8.99808C17.9999 8.22308 17.0129 7.37408 15.4639 6.77808" fill="#15484B"/>
            <path d="M4.29395 9.75908C5.15895 10.9071 7.83395 11.9841 10.9999 11.9841C14.8659 11.9841 17.9999 10.3781 17.9999 8.99808C17.9999 8.22308 17.0129 7.37408 15.4639 6.77808" stroke="#111111" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15 4V7C15 8.3 11.866 10 8 10C4.134 10 1 8.3 1 7V4" fill="#15484B"/>
            <path d="M15 4V7C15 8.3 11.866 10 8 10C4.134 10 1 8.3 1 7V4" stroke="#111111" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 6.984C11.866 6.984 15 5.378 15 3.998C15 2.617 11.866 1 8 1C4.134 1 1 2.617 1 3.998C1 5.378 4.134 6.984 8 6.984Z" fill="#15484B" stroke="#111111" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <Buy>Acheter</Buy>
        </DivAchat>
        </DivAll>
      );
    }
    
    export default PhotoP;