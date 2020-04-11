import React from "react";
import LoginPage from "./Views/Login/LoginPage";
import "./AppStyleDefinitions/Styler.css";
import CalendarComponent from "./Views/ScheduleCalendar/Calendar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dogs from "./Controllers/DataFetcher"
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import "./Views/ScheduleCalendar/CalendarComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";


const client = new ApolloClient({
  uri: "http://localhost:4000/api"
});

// import logo from './logo.svg';

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div className="App">
        <AppRouter />
        {/* <Dogs/> */}
      </div>
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
      <Route path="/Password/Reset">
         <h1 style={{color:"white"}}>Password Reset Page Here</h1>
        </Route>
        <Route path="/PostScheduler">
          <CalendarComponent className="CalendarComponent" />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
};
