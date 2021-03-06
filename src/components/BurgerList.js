import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = (props) => {
  return (
    <div className="BurgerList">
      {props.burgers.map(burger =>
        <BurgerItem key={burger.id}
        burger={burger}
        handleClick={props.handleClick}/>
      )}
    </div>
  )
}

export default BurgerList
