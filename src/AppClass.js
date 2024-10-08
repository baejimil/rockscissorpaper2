import React, { Component } from 'react'
import BoxClass from './component/BoxClass';
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

export default class AppClass extends Component {

    constructor(){
        super();
        this.state = {
            userSelect : null,
            computerSelect : null,
            result : "",

        };
    }

    play=(userChoice)=>{
        let computerChoice = this.randomChoice();
        this.setState({
            userSelect : choice[userChoice],
            computerSelect : computerChoice,
            result : this.judgement(choice[userChoice], computerChoice),
        })
    }

    randomChoice =()=> {
        let itemArray = Object.keys(choice);
        let randomItem = Math.floor(Math.random() * itemArray.length)
        let final = itemArray[randomItem]
    
        return choice[final];
      }

    judgement =(user, computer)=> {
        if( user.name === computer.name){
          return "tie"
        }else if(user.name === "Rock") return computer.name === "Scissors"?"win":"lose"
        else if(user.name === "Scissors") return computer.name === "Paper"?"win":"lose"
        else if(user.name === "Paper") return computer.name === "Rock"?"win":"lose"
      }

  render() {
    return (
        <div>
        <div className="main">
            <BoxClass title="You" item={this.state.userSelect} result={this.state.result} />
            <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result} />
        </div>
        <div className="main">
        <button onClick={()=> {this.play("scissors")}}>
          <FaHandScissors size={40} />
        </button>
        <button onClick={()=> {this.play("rock")}}>
          <FaHandRock size={40} />
        </button>
        <button onClick={()=> {this.play("paper")}}>
          <FaHandPaper size={40} />
        </button>
      </div>
      </div>
    )
  }
}
