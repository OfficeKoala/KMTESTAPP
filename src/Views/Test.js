import React from "react";

const ref = React.createRef();


let config ={buttons:["7","8","9","4","5","6","1","2","3","+","-","/","=","*","c"]};
let current="";
let previous="";
let operator="";

class Test extends React.Component{

// state={
//   current:"",
//   previous:"",
//   operator:"",
//   finalAns:""  
// }

render()
{

return <div style={{height:"600px",width:"800px"}}>

<div style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"25px",flexDirection:"column"}}>
<input ref={ref} name="myinput" style={{width:"800px",padding:"12px",color:"black"}}></input>
<div style={{height:"600px",width:"800px",display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
{
config.buttons.map((btn,index)=>{

return <button  onClick={(e)=>{


    console.log(btn)

    // console.log("----resultant--",current)
    // console.log("----previous--",previous)

  if(index<8)
  {
    current+=config.buttons[index];
    
  }
  if(index>8)
  {
    
    if(btn==="+"||btn==="-"||btn==="/"||btn==="*")
    {
        console.log("-----HERE")
        ref.current.value="";
        operator=btn;
        previous=current;        
        current=""  
    }
  

  }
  
  if(btn=="=")
  {

   console.log("=====Fuck==== ",operator) 
   switch(operator)
   {
 case "*":
    //  console.log("====entered here")
 previous=parseInt(previous) * parseInt(current);
//  console.log("-----------------Answer after Muliply-----",previous)
 break;

 case  "+":
 previous=parseInt(previous)+ parseInt(current);

//  console.log("-----------------Answer after sum-----",previous)
 break; 
 
 case "-":
 previous=parseInt(previous)-parseInt(current);
//  console.log("-----------------Answer after minus-----",previous)
 break;
  
 case "/":
 previous=parseInt(previous)/parseInt(current);

//  console.log("-----------------Answer after division-----",previous)
 break;
 
 
    
   }

    
  }

  //Clear all 
  if(btn=="c")
  {
      current=""
      previous=""
      
  }

 

  console.log("========= >>> ",)

  if(previous=="")
  {      
  ref.current.value=current;
  console.log("this")
  }
  else
  {      
  ref.current.value=previous;
  console.log("that")
  }
  

//   ref.value=previous;

}}  style={{background:"#2d3436",color:"whitesmoke"}}   >{btn}</button>



    })
}
</div>  
</div>


</div>

}




}


class Calculator {
    previous;

}


export default Test;