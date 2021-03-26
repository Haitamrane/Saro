import styled, { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
* {
	box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
  line-height: 1;
  background-color: #192248;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

a {
	width: max-content;
	text-decoration: none;
}
 
  h1 {
    font-size: 35px;
    font-family: "Lato", sans-serif;
    color: #1e1e1e;
    font-weight: 900;
    line-height: 134%;
    @media screen and (min-width: 768px) {
      font-size: 42px;
      max-width: 800px;
    }
  }
h2 {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 42px;
  color: #1D1D1B; 
}
  h3 {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 134%;
    color: #1D1D1B;
    @media screen and (min-width: 768px) {
      font-size: 25px;
    }
  }

  h4 {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    text-transform: uppercase;
    line-height: 18px;
    color: #1e1e1e;
    @media screen and (min-width: 768px) {
      font-size: 15px;
      max-width: 800px;
    }
  }
  h5 {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 134%;
    text-transform: uppercase;
    color: #1E1E1E;
  }

  h6 {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #000000;
  }
  p {
    font-size: 16px;
    font-family: "Lato", sans-serif;
    font-weight: 300;
    color:  ${({ white }) => (white ? "white" : "#1E1E1E")};
    line-height: 134%;
    max-width: ${({ maxWidth }) => (maxWidth ? "590px" : "")};
  
    }

    strong {
      font-weight: 700;
    }

    em {
      font-style: italic;
    }

`;

export default globalStyle;
