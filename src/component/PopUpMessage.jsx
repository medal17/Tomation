import { useState } from "react"


const PopUpMessage = ({message,isSuccess})=>{

 


    return (

    <div class="alert alert-secondary " role="alert" 
    
    style={{
        position:"absolute",
        top:0,
        left:0,
        width:"100%",
        textAlign:"center",
        zIndex:'100000',

        backgroundColor:`${isSuccess?"#d4edda":"#f8d7da"}`,color:'white'}}>
        <span style={{color:`${isSuccess?"#575724":"#631217"}`}}>{message}</span>
    </div>  

    )
}

export default PopUpMessage