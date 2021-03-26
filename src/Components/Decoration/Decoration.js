import {
    DivDeco,
  } from "./Decoration.elements";
  
  
  function Decoration() {
      return (
        <div>
        <DivDeco>
            <svg viewBox="0 0 375 148" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
            <path d="M126.031 62.908L0 30.8015V0H375V112.765L349.292 124.508C324.805 135.694 296.841 136.534 271.727 126.838L251.5 119.029L163.593 76.6005C151.561 70.7932 138.978 66.2061 126.031 62.908Z" fill="#15484B"/>
            </g>
            <defs>
            <filter id="filter0_d" x="-10" y="-6" width="395" height="153.549" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            </defs>
            </svg>
    </DivDeco>
        </div>
      );
    }
    
    export default Decoration;