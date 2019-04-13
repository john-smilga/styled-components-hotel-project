import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato:400,700');

*{
 margin:0;
 padding:0;
 box-sizing:border-box;
}
body{
 font-size:100%;
  color: #222; 
  background: #fff;
  /* font-family:Verdana, Geneva, Tahoma, sans-serif; */
  /* font-family: "Helvetica Neue", Arial, Helvetica, sans-serif; */
  font-family: 'Lato', sans-serif;
 }
h1 { font-size: 3em; line-height: 1.2; margin-bottom: 0.5em; }
h2 { font-size: 2em; margin-bottom: 0.75em; }
h3 { font-size: 1.5em; line-height: 1; margin-bottom: 1em; }
h4 { font-size: 1.2em; line-height: 1.25; margin-bottom: 1.25em; }
h5 { font-size: 1em; font-weight: bold; margin-bottom: 1.5em; }
h6 { font-size: 1em; font-weight: bold; }
p { 
 line-height:1.5;
 margin: 0 0 1.5em; }

`;

export default Globals;
