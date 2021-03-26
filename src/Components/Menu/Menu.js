import { Link } from "react-router-dom";
import {
    DivMenu,CenterDiv,
  } from "./Menu.elements";
  
  
  function Menu(props) {
      return (
        <DivMenu>
            <CenterDiv>
                <Link to="/messages">
                <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.0345 5.83032H25.2676V14.2221C25.2676 15.5287 24.5035 16.7102 22.9716 16.7102H7.96289V17.1091C7.96289 18.2643 9.28261 19.4304 10.6378 19.4304H22.1127L26.5027 22L25.866 19.4304H26.0345C27.3888 19.4304 28 18.267 28 17.1091V7.82241C28 6.66723 27.3888 5.83032 26.0345 5.83032Z" fill={props.messages}/>
                <path d="M20.7311 0H3.29883C1.76508 0 0 1.35647 0 2.66397V13.182C0 14.3862 1.49549 15.2557 2.92997 15.3899L1.99642 18.918L7.9784 15.4144H20.7311C22.2648 15.4144 23.6802 14.4886 23.6802 13.182V4.67238V2.66397C23.6802 1.35647 22.2639 0 20.7311 0ZM5.9583 8.8787C5.08851 8.8787 4.38357 8.1769 4.38357 7.31097C4.38357 6.44504 5.08851 5.74323 5.9583 5.74323C6.82718 5.74323 7.53303 6.44504 7.53303 7.31097C7.53303 8.1769 6.82718 8.8787 5.9583 8.8787ZM11.8401 8.8787C10.9703 8.8787 10.2654 8.1769 10.2654 7.31097C10.2654 6.44504 10.9703 5.74323 11.8401 5.74323C12.7099 5.74323 13.4148 6.44504 13.4148 7.31097C13.4148 8.1769 12.7099 8.8787 11.8401 8.8787ZM17.7228 8.8787C16.853 8.8787 16.1472 8.1769 16.1472 7.31097C16.1472 6.44504 16.853 5.74323 17.7228 5.74323C18.5908 5.74323 19.2975 6.44504 19.2975 7.31097C19.2975 8.1769 18.5908 8.8787 17.7228 8.8787Z" fill={props.messages}/>
                </svg>
                </Link>
            </CenterDiv>

            <CenterDiv>
                <Link to="/homejeu">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22" cy="22" r="22" fill={props.home}/>
                <path d="M22.1238 35.2C23.8324 35.2 25.2175 33.8148 25.2175 32.1062C25.2175 30.3976 23.8324 29.0125 22.1238 29.0125C20.4151 29.0125 19.03 30.3976 19.03 32.1062C19.03 33.8148 20.4151 35.2 22.1238 35.2Z" fill="#111111"/>
                <path d="M22.1237 8.79999C17.6884 8.79999 14.08 12.4084 14.08 16.8437V17.6172H20.2675V16.8437C20.2675 15.8202 21.1001 14.9875 22.1237 14.9875C23.1473 14.9875 23.98 15.8202 23.98 16.8437C23.98 17.3892 23.7406 17.9054 23.3231 18.2602L19.03 21.9102V27.4656H25.2175V24.7711L27.3303 22.9748C29.1333 21.4426 30.1675 19.208 30.1675 16.8437C30.1675 12.4084 26.5591 8.79999 22.1237 8.79999V8.79999Z" fill="#111111"/>
                </svg>
                </Link>
            </CenterDiv>

            <CenterDiv>
                <Link to="/profils">
                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00033 0C6.01447 0 3.58533 2.45879 3.58533 5.48102C3.58533 8.50325 6.01447 10.962 9.00033 10.962C11.9862 10.962 14.4154 8.50325 14.4154 5.48102C14.4154 2.45879 11.9863 0 9.00033 0Z" fill={props.profils}/>
            <path d="M17.9826 20.4854C17.8186 17.9636 16.4796 15.7454 14.4811 14.3238C13.0273 13.2894 11.2241 12.6771 9.27088 12.6771H8.7297C3.90826 12.6771 0 16.4081 0 21.0109V22H18V21.0109C18 20.8345 17.9942 20.6591 17.9826 20.4854Z" fill={props.profils}/>
            </svg>
            </Link>
            </CenterDiv>
        </DivMenu>
      );
    }
    
    export default Menu;