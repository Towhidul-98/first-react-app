import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  {/*const actors = ["Jasim" , "Sakib" , "Razzak" , "Sakib Khan"];
const actresses = ["Shabana","Shabnur","Bobita","Ruba"]*/}
  const actorInfo = [
    { name : "Jasim", actress : "Shabana" },
    { name : "Sakib", actress : "Shabnur" },
    { name : "Razzak", actress : "Bobita" },
    // { name : "Bappi", actress : "Bubli" },
    { name : "Shuvo" , actress : "Shabnam"},
    { name : "RAJ" , actress : "XYZ"}
  ]
  

      return (
          <div className="App">
            <header className="App-header">
                {/*Dynamic List */}
                {/*<ul>
                  {
                    actorInfo.map( element => <li>{element.name}</li> )
                  }
                  {/*<li>{actorInfo[0].name}</li>
                  <li>{actorInfo[1].name}</li>
                  <li>{actorInfo[2].name}</li>
                  <li>{actorInfo[3].name}</li>
                </ul> */}
                
                  {/*Concept of State and declaration */}
                  {/*<Counter></Counter>
                  {
                    actorInfo.map( it => <Actor info={it}/>)
                  }*/}
                  

                {/*<Actor info = {actorInfo[0]} />
                <Actor info = {actorInfo[1]} />
                <Actor info = {actorInfo[2]} />
                <Actor info = {actorInfo[3]} />*/}

                {/* <Actor name = {actors[0]} actress = {actresses[0]} />
                <Actor name = {actors[1]} actress= {actresses[1]} />
                <Actor name = {actors[2]} actress= {actresses[2]} />
                <Actor name = {actors[3]} actress = {actresses[3]} />*/}
                
                {/*Loading Data from API*/}
                <UserData/>
                

            </header>
          </div>
      )
}

// Concept of State and declaration 
function Counter () {
  // Declare a new state variable, which we'll call "count"
  const [count, sC] = useState(0);
  console.log(sC)
  //const clickHandler = () => sC(count+1) ;
 
  return (
    <div>
      <h3> Count : {count} </h3>
      <button onClick = { () => sC(count-1) }>Decrease</button>
      <br/>
      <button onClick = { () => sC(count+1) }>Increase</button> 
    </div>
  )
}


// dynamic info declaration
function Actor(props) {
  const styleActor = {
     border : '1px solid red',
     borderRadius : '10px',
     margin : '10px' ,
     padding : '10px',
     width : '500px' ,
     height : '100px'
  }
  //console.log(props.info)
  const {name,email} = props.info;
  return (
   
   <div style = {styleActor}>
     <h1>I am {name}</h1>
     <h3>Email :  {email}</h3>
  </div>)
  
}

function Greetings() {
    return <h1>Hello World</h1>
}



     

export default App;
