import React from "react";
import PropTypes from 'prop-types';
import "./User.css";

class User extends React.Component {
//User component is first initialized. This constructor(props) method is only called once.
    constructor(props){ 
//propTypes to check the types of each props     
      User.propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        details: PropTypes.string.isRequired
      };
      super(props);
//initialize User component state.
      this.state = {
      name: props.users[1].name,
      age: props.users[1].age,
      details0: props.users[1].details[0],
      details1: props.users[1].details[1],
      greet: false
      };
    }
    IncrementAge = () => {
//setState() method allows components to update their own state
//increments the age by 3 years the count of the state
      this.setState({age: this.state.age + 3});
    }
    Greet = () => {this.setState({greet: !this.state.greet});
  }
//User component is rendered
    render(){
      return (
//onClick event in React
      <div>
        {this.state.greet ? <div><h1>Hi, This is a React App</h1>Your name is {this.state.name} and age is {this.state.age}<h1>Skills</h1><ul><li>{this.state.details0}</li><li>{this.state.details1}</li></ul></div> : ''}
        <span><button onClick={this.IncrementAge}>MakeMeOlder</button>           <button onClick={this.Greet}>{this.state.greet ? 'Greet' : 'Greet'}</button></span>
         </div>
      );
    }
  }
  
  export default User;