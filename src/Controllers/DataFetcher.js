import React from "react";
import { Query, Mutation } from "react-apollo";
import {  graphql } from 'react-apollo';
import gql from "graphql-tag";
import {LoginMutation} from "../Controllers/Mutations/Mutations"
const username="darkwarface";
const password="dakksh123";
const email="";
const Dogs = (props) => (
  <Mutation mutation={gql`${LoginMutation}`} variables={{ username,password,email}} >
    {({ loading, error, data }) => {
      console.log("------",data)
     
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return  <button onClick={`... you'll implement this 🔜`}>
      Submit
    </button>
      
      
    }}
  </Mutation>
);
export default Dogs;
