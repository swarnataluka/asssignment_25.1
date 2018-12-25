import React from 'react';
import './App.css';
// import the User component
import User from "./User/User";

const users = [
  { id: 1, name: "Sachin", age: 30, details: ["Entrepreneur","Cricket"]},
  { id: 2, name: "Som", age: 78, details: ["Sleeping","Writing codes"]},
  { id: 3, name: "Suraj", age: 26, details: ["Tennis","Painter"]},
  { id: 4, name: "Saurav", age: 32, details: ["Badminton","Doctor"]},
  { id: 5, name: "Rohan", age: 34, details: ["Golf","Pilot"]}
];
class App extends React.Component {
//App component is rendered
//User is the child component that displays the users and according to the MakeMeOlder button click update event the age is incremented by 3 years
  render() {
    return (
      <div className="App">

        <User users={users}/>
      </div>
    );
  }
}
export default App;