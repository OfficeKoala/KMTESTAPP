import React from "react";
import {  Mutation } from "react-apollo";
import {  graphql } from 'react-apollo';
import gql from "graphql-tag";
import {LoginMutation} from "../Controllers/Mutations/Mutations"
const username="darkwarface";
const password="dakksh123";
const email="";
const Dogs = (props) => (
  <Mutation mutation={gql`${LoginMutation}`} variables={{ username,password,email}} >
    {(addVar,{ loading, error, data }) => {
      console.log("=====",props)
      console.log("------",data)
     
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return <form
      onSubmit={e => {
        e.preventDefault();
        addVar({ variables: { username:props.username,password:props.password,email:props.email } });

        
      }}
    >     
    <button type="submit">Update Todo</button>
    </form>
      
      
    }}
  </Mutation>
);
export default Dogs;
