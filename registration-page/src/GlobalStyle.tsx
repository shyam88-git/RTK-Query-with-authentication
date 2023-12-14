import {createGlobalStyle} from 'styled-components';

export const GlobalStyle=createGlobalStyle`
    
    *{

        margin:0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
        margin-top: 20px;
        margin-left:50px;
    }

    html{

        font-size:62.5%;
        overflow-x:hidden;
    }

    h1{

font-size: 6rem;
font-weight: 900;
color:${({theme})=>theme.colors.heading};
}


h2{
color:${({theme})=>theme.colors.heading};
font-size: 4.4rem;
font-weight: 300;
white-space: normal;
text-align:left;
margin-left:-20px;

}

h3{

font-size: 1.8rem;
font-weight: 400;
margin-left: -30px;

}

p{

color:${({theme})=>theme.colors.text};
opacity: 0.7;
font-size: 1.65rem;
line-height: 1.5;
margin-top: 1rem;
font-weight:400;
text-align: left;
margin-left: -50px;


}
.container{


margin: 0 auto;
display: flex;
justify-content:center;
align-items: center;
      
}
`