import React from "react";
// import "../Login/LoginPage.css";
// import CurrentContextForm from "../../FormsConfig/CurrentContextForm";
// import FormMaker from "./../../FormsConfig/FormMaker";
// import { green } from "@material-ui/core/colors";
import {Form,Button} from "react-bootstrap"
import logo from "../../Assets/log.png"
import "./Logme.css"

let config = {
  LoginForm: {
    formName: "Login",
    fields: [
      {
        type: "email",
        name: "email",
        label: "Phone Number ,Username or Email"
      },
      { type: "password", name: "password", label: "Password" }
    ],
    submitButtonText: "Log In"
  }
};


const  LoginPage=()=>{

 let email= React.createRef();
 let password=React.createRef();

  return <>

<div className="LoginContainer"> 
<div className="LoginLogoContainer"  ><img src={logo} /></div>
<div className="LoginBox">


<div className="Login">
<Form>

    <div><input className="loginTextFields emailPassField"  ref={email} type="email" placeholder="Email"  /></div>
   
  
  
    <div><input className="loginTextFields emailPassField"  ref={password} type="password" placeholder="Password" /></div>
 
  <div className="loginTextFields" style={{display:"flex",justifyContent:"flex-start"}} >

    <div><input type="checkbox"  name="rememberMe" value="rememberMe"/>
  <label style={{padding:"8px",marginTop:"20px"}} for="rememberMe"> Remember Me</label></div>
  
  </div>
  <button style={{marginTop:"20px"}} className="loginSubmitButton"  onClick={(event)=>{event.preventDefault(); 
console.log("=======",email.current.value,password.current.value)
}}    type="submit">
    LogIn
  </button>



  <div className="LoginLinks">
  <a style={{textDecoration:"underline",color:"grey"}}>Forgot Your Password ?</a>  
  </div>

  <div >
  <a style={{textDecoration:"underline",color:"grey"}}> Didn't receive confirmation instructions ?</a>
  </div>
</Form>

</div>
</div>
</div>

  </>
}








export default LoginPage;



//LOGIN PAGE DUMB COMPONENTS

const Liner = () => {
  return (
    <div className="Liner">
      <hr className="separatorLine"></hr>
      <div className="CenterText">OR</div>
      <hr className="separatorLine2"></hr>
    </div>
  );
};

const FaceBookLogin = () => {
  return (
    <div className="FacebookLogIn">
      <span className="sprite fbIcon"></span>
      <span className="fbLogText">Log in with Facebook</span>
    </div>
  );
};
