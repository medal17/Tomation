import styled from "styled-components";
import svgLine from '../../assets/svg/line.svg'



export const StyledIntroToCardList = styled.div`

    padding:.9rem 1.4rem;
    background-color: #22596b1b;
    background-image: url(${svgLine});
    background-repeat :no-repeat ;
    background-size: 1400px;
    h4,p{
        color: #102a33;
        /* font-weight:600; */
    }

    ul{
            display: grid;
            grid-template-columns: repeat(1,1fr);
           gap: 10px;
        }


    @media screen and (min-width: 770px) {
        
        ul{
            display: grid;
            grid-template-columns: repeat(2,1fr);
           gap: 2px;
        }
    }


    @media screen and (min-width: 1024px) {
        
        ul{
            display: grid;
            grid-template-columns: repeat(3,1fr);
           gap: 30px;
        }
    }
`