import styled from 'styled-components'
import svgLine from '../../assets/svg/line.svg'
import heroBg from '../../assets/images/herobg.jpg'
import heroLeft from '../../assets/images/hero-left.jpg'




export const StyledmainHeaderWrapper = styled.div`
/* border: 1px solid red; */
/* display: flex;
flex-direction: column; */
max-width: 100%;
/*max-height:60vh;*/
padding: 2rem 1rem;
margin:0 auto;
/*background-image: url(${heroBg});*/
background-color:#fff;
object-fit: fill;
background-repeat: no-repeat;

@media screen and (min-width:1026px) {
    display: flex;
    max-width: revert;
    width: 100%;
    margin: 0;
}

@media screen and (max-width:1024px) {
    display: flex;
    width: 100%;
    height:100%;
    margin: 0;
}
@media screen and (max-width:900px) {
    display: flex;
    flex-direction: column-reverse;
   
    padding:0.5rem;
    width: 100%;
    margin: 0;
}

@media screen and (max-width:800px) {
    display: flex;
    flex-direction: column-reverse;
 
    padding:0.5rem;
    width: 120%;
    margin: 0;
}
`
export const Spacer = styled.div`
width:100%;
height: 0.5rem;
background-color:#fff;

@media screen and (max-width:800px) {
    height:0.2rem;
  
}
`

export const StyledmainHeaderContentPane = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600;700;800&display=swap');

/* background-color:; */
/*background-color:#22596B;*/
padding:5rem 8rem 8rem 3rem;
border-radius: 10px;
width:94%;
/* min-width: 80%; */
margin:0 auto;
background-image: url(${heroLeft});
object-fit: fill;
/* background-size: 100px; */
background-repeat: no-repeat;
   overflow: hidden;




   h1{
    font-family: "Quicksand", sans-serif !important;
    color:#22596B;
    font-weight:800;
    font-size:3rem;
    margin-bottom: 0.8rem;
}

p{
    font-family: "Quicksand", sans-serif !important;
    color:#22596B;
    font-weight:600;
}
&>p{
    padding-bottom:1.6rem;
}


@media screen and (max-width:1024px) {
  
    width: 90%;
    margin:0;
    padding:1rem;
    
}

@media screen and (min-width: 1026px) {
    width: 70%;
/* padding: rem 1rem; */
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    /* background-position-x:300px ; */
background-size: 900px;
    /* width: 50%; */
padding-right: 8rem;

    h1{
    font-size: 2.4rem;
}
p{
    font-size: 1rem;
}
}

@media screen and (max-width:800px) {
    padding:0.5rem;
    width: 100%;
    margin: 0;
}

`



export const StyledImageHeaderContainer = styled.div`
        width:80%;
        padding-top:1rem;
        margin: 0 auto;
        border-radius:10px;
        /* border: 1px solid yellow; */
        

@media screen and (min-width: 1026px){
    width: 50%;
}

@media screen and (max-width: 1024px){
    width: 70%;
    height: 48vh;
}


@media screen and (max-width: 900px){
    width: 60%;
    height: 38vh;
}
@media screen and (max-width: 380px){
    width: 80%;
    height: 33vh;
}
`
export const StyledHeaderImage = styled.img`

     width: 100%;
     height:100%;
    /*transform: translateY(-70px);*/



@media screen and (min-width: 1026px) {
    /*transform: translateY(-30px) translateX(-80px);*/
    height: 80%;
            object-fit:contain;
            border-radius: 10px;
    
}

  

    `


export const StyledTestimonialHeader = styled.div`
    margin: -30px 0;
    
p{
    padding: 0 .8rem;
    color: #584848;
}
img{
  /* transform: translate(0); */
    width:80%;
    /* display: block; */
    /* border-radius: 10px; */
}
&>div{
    display: grid;
    grid-template-columns: repeat(4,1fr);
}


@media screen and (min-width: 1026px){
    width: 100%;
    padding:1rem 1.4rem;
    margin: 0;

    img{
        width: 50%;
        height: 50%;
    }
    &>div{
        grid-template-columns: repeat(6,1fr);
        /* gap: 5px 10px; */
        width: 80%;
    }

}
`

export const ButtonContainer = styled.div`
display: flex; 
flex-direction: row
paddingTop: '0.7rem';

@media screen and (max-width: 800px){
    flex-direction: column;
}

`

export const StyledButton = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600;700;800&display=swap');
    width: 50%;
    background-color: #F55608;
    font-family: 'Quicksand' !important;
    font-weight: 600;
    color:#fff;
    padding: 1rem 0rem;
    margin: 0 auto;
    border-radius:20px;
    text-align: center;

    @media screen and (max-width: 800px){
    width:100%;
    border-radius:10px;

}

       @media screen and (max-width: 380px){
    margin-bottom: 1rem;
    padding: 0.5rem 0rem;
    font-size: 14px;
}
`

export const StyledGreenButton = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600;700;800&display=swap');
    width: 100%;
    background-color: #052B38;
    font-family: 'Quicksand' !important;
    font-weight: 600;
    color:#fff;
    padding: 1rem 0rem;
    margin: 0 auto;
    border-radius:20px;
    text-align: center;

    @media screen and (max-width: 800px){
    width:100%;
    border-radius:10px;

}

       @media screen and (max-width: 380px){
    margin-bottom: 1rem;
    padding: 0.5rem 0rem;
    font-size: 14px;
}
`

export const OutlineButton = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600;700;800&display=swap');
    width: 80%;
    font-family: 'Quicksand' !important;
    font-weight: 600;
    color:#22596B;
    padding: 1rem 0rem;
    text-align: center;

    @media screen and (max-width: 800px){
    width:100%;
    border: 1px #22596B dotted;
    border-radius:10px;
}

    @media screen and (max-width: 380px){
    font-size: 14px;
    padding: 0.5rem 0rem;
}
`