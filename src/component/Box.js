import React from 'react'

const Box = (props) => {

  let result;
  if(
    props.title === "Computer" && props.result !== "tie" && props.result !== ""
  ){
    result = props.result === "win"?"lose":"win" 
  }else{
    result = props.result
  }

  return (
    <div>
      <div className={`box ${result}`}>
        <h2>{props.title}</h2>
        <h2>{props.item && props.item.name}</h2>
        <img className='item-img' src={props.item && props.item.img} />

        <h2>{result}</h2>
      </div>
      
    </div>
  )
}

export default Box
