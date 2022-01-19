import styled from "styled-components";



export const StyledfooterContainer = styled.footer`
    background-color: ${({ theme }) => theme.usingGreenBackground.bg};
        padding: 1.2rem .9rem;
`

export const StyledFooterIntroContent = styled.div`

    /* border: 1px solid red; */
    
    width: 100%;
    max-width: 500px;
    img{
        width: 20%;
        height: 90px;
        /* border: 1px solid yellow; */
        margin: 0;
        padding: 0;
    }
    p{
          color:${({ theme }) => theme.usingGreenBackground.secondaryColor} ;
    }

    @media screen and (min-width: 1020px){
        width: 30%;
    }
`

export const StyledFooterSectionAPart = styled.div`



@media screen and (min-width: 1020px){
    display: flex;
    align-items: center;
    justify-content: space-between;
    justify-content: space-around;
}
`


export const StyledFooterSectionBPart = styled.div`
  p{
    color: ${({ theme }) => theme.usingGreenBackground.mainColor};
    text-align: center;
  }   
`


export const StyledFooterSocial = styled.div`
    
`


export const StyledFooterNavLinkContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    /* border: 1px solid red; */
    /* text-align: left; */
    /* align-items: center; */
    justify-content: center;
    ul li{
        list-style-type: circle;
        font-size:.9rem;
    }
    ul li a{
        color: ${({ theme }) => theme.usingGreenBackground.mainColor};
    }
    h4{
        font-size: 1.2rem;
        color: #ffe1d7;
    }


    @media screen and (min-width: 700px) {
    grid-template-columns: repeat(4,1fr);
        
    }

    @media screen and (min-width: 1020px){
        width:70%;
    }
`
