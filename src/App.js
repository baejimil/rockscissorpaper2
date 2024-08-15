import React from 'react';
import './App.css';
import Box from './component/Box';
import {useState} from 'react';
import {FaHandScissors, FaHandRock, FaHandPaper} from "react-icons/fa";

const choice = {
  rock : {
    name : "Rock",
    img : "https://cdn-icons-png.flaticon.com/128/4151/4151487.png"
  },
  scissors : {
    name : "Scissors",
    img : "https://cdn-icons-png.flaticon.com/128/4151/4151780.png"
  },
  paper: {
    name : "Paper",
    img : "https://cdn-icons-png.flaticon.com/128/10187/10187368.png"
  }
}

function App() {

  const [userSelect, setUserSelect] = useState(null)

  const [computerSelect, setComputerSelect] = useState(null)

  const [result, setResult] = useState("")

  const play =(userChoice)=>{
    setUserSelect(choice[userChoice]) 
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice))
    
  }

  const randomChoice =()=> {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length)
    let final = itemArray[randomItem]

    return choice[final];
  }

  const judgement =(user, computer)=> {
    if( user.name === computer.name){
      return "tie"
    }else if(user.name === "Rock") return computer.name === "Scissors"?"win":"lose"
    else if(user.name === "Scissors") return computer.name === "Paper"?"win":"lose"
    else if(user.name === "Paper") return computer.name === "Rock"?"win":"lose"
  }

  return (
    <div>
      <div className="main">
          <Box title="You" item={userSelect} result={result} />
          <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={()=> {play("scissors")}}>
          <FaHandRock size={40} />
        </button>
        <button onClick={()=> {play("rock")}}>
          <FaHandScissors size={40} />
        </button>
        <button onClick={()=> {play("paper")}}>
          <FaHandPaper size={40} />
        </button>
      </div>
    </div>
  );
}

export default App;




