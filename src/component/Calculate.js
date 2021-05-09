import React,{useEffect} from 'react'
 
export default function Calculate({fn,txt}) {
   let css={
       height:"20%",
       border:"1px solid"
   }
   useEffect(()=>{
       console.log("calculator rendered");
   })
   let input={
       width:"98%",
       height:"95%",
       textAlign:"center",
       fontSize:"2em"
   }
    return (
        <div style={css}>
          <input type="text" id="input" style={input} value={txt} onChange={(e)=>{fn(e.target.value)}}></input> 
        </div>
    )
}
