import styled from "styled-components"



export const StyledCourseCardContainer=styled.div`
background-color: white;
padding: 1.3rem;
border-radius: 15px;
max-width: 500px;
margin: 10px auto;



h1{
    font-size: 1.3rem;
    color: ${({theme})=>theme.usingGreenBackground.bg};
    grid-area: heading;

}
img{
    width: 100%;
    border-radius: 10px;
    margin:.5rem 0;
    grid-area: imageTag;
}
a{
    grid-area: Link;
}
p{
    grid-area: pTag;
}
&>div{
    grid-area: info;
}

@media screen  and (min-width:1000px){
        width: 70%;
        max-width: revert;
        display: grid;
        grid-template-columns: repeat(2,1fr);

        grid-template-areas: 
        "imageTag heading"
        "imageTag pTag"
        "imageTag Link"
        "imageTag info"
        ;
        img{
            width: 70%;
        }
}
`



export const StyledSmallInfo=styled.div`

background-color: #22596bc5;
display: inline-block;
padding: .3rem .9rem;
color: white;
border-radius: 30px;


`