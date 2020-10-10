import React from "react";
import LoginPage from "./Views/Login/LoginPage";
import "./AppStyleDefinitions/Styler.css";
import CalendarComponent from "./Views/ScheduleCalendar/Calendar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dogs from "./Controllers/DataFetcher";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import "./Views/ScheduleCalendar/CalendarComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Models/PaymentsModel/PaymentGateWay/paymentGateway.css";
import StripePaymentGatewayComponent from "./Models/PaymentsModel/PaymentGateWay/StripePaymentComponent";
import SignupComponent from "./Views/Signup/SignupComponent";
// import SidebarExampleTransitions from "./Models/SideBarModel/SideBarDemo";
import SideBarComponent from "./Models/SideBarModel/SideBarComponent";
import TopNavBar from "./Models/TopNavModel/TopNav";
import DataTableComponent from "./Models/DataTableModel/DataTableComponent";
import ProfilePage from "./Views/UserProfile/ProfilePage";
import Test from "./Views/Test"

import CardComponent from "./Views/CardComponent/CardComponent"

// SideBar CSS Import

const client = new ApolloClient({
  uri: "http://localhost:4000/api",
});

// import logo from './logo.svg';

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        {/* <TopNavBar /> */}
        <AppRouter />
        {/* <Dogs/> */}
      </ApolloProvider>
    );
  }
}

export default App;

//Dumb Old Router

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/SideBar">
          <div className="App">
            <SideBarComponent />
            <div className="AppContainer">
              <StripePaymentGatewayComponent />
            </div>
          </div>
          {/* <SidebarExampleTransitions/> */}
        </Route>
        <Route path="/Password/Reset">
          <h1 style={{ color: "white" }}>Password Reset Page Here</h1>
        </Route>
        <Route path="/PostScheduler">
          <div className="AppContainer">
            <CalendarComponent className="CalendarComponent" />
          </div>
        </Route>
        <Route path="/XzPaymentGateway">
          <div className="AppContainer">
            <StripePaymentGatewayComponent />
          </div>
        </Route>
        <Route path="/Xp$SignUp">
          <div className="AppContainer">
            <SignupComponent />
          </div>
        </Route>
        <Route path="/JobCards">
          <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </div>
        </Route>
        <Route path="/DataView">
          <div className="App">
            <DataTableComponent />
          </div>
        </Route>
        <Route path="/Test">
          <div className="AppContainer">
            {/* <ProfilePage />  */}
            <Test />
          </div>
        </Route>
        <Route path="/">
          <div className="AppContainer">
            <LoginPage />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};
