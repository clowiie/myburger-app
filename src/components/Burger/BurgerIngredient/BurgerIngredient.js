import React from 'react'
import classes from './BurgerIngredient.css'

const burgerIngredient = props => {
  let ingredient = null

  switch (props.type) {
    case 'bread-bottom':
      ingredient = <div className="BreadBottom" />
      break
  }
}

export default burgerIngredient
