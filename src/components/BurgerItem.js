import React, { Component } from 'react';

const BurgerItem = (props) => {
  return (
    <div>
      <div className="BurgerItem">
        { props.burger.name }
      </div>
      <div className="BurgerBottomBun">
        <button onClick={() => props.handleClick('show', props.burger)}>Show</button>
        <button onClick={() => props.handleClick('delete', props.burger)}>Delete</button>
      </div>
    </div>
  )
}

export default BurgerItem
