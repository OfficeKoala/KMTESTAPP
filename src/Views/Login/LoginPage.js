import React from "react";
import "./LoginPage.css";
import CurrentContextForm from "../../FormsConfig/CurrentContextForm";
import FormMaker from "./../../FormsConfig/FormMaker";

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

const LoginPage = () => {
  return (
    <React.Fragment>
      <div className="LoginContainer">
      <div className="gifHolder"></div>
      <section className="LoginPaper">
        <header className="LoginHeader"></header>
        <div className="LoginBox">
        <FormMaker castLoginForm={config.LoginForm} />
        </div>
        <Liner />
        <FaceBookLogin/>
        <div className="ForgotPassword"><a className="ForgotPassword pxt23T35" href="/Password/Reset">Forgot Password?</a></div>
        <a className="pxt23T35" href="/PostScheduler">Goto Scheduler</a>
      </section>
      <div className="LoginPaperBelow"><span className="SignUpText">Don't have an account? &nbsp;</span><a className="SignupLink">Sign up</a></div>
      </div>
      <footer className="Footer"></footer>
    </React.Fragment>
  );
};

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
