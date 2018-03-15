import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './BurgerIngredient.css'

class burgerIngredient extends Component {
  render() {
    let ingredient = null

    switch (this.props.type) {
      case 'bread-bottom':
        ingredient = <div className="BreadBottom" />
        break
      case 'bread-top':
        ingredient = (
          <div className="BreadTop">
            <div className="Seeds1" />
            <div className="Seeds2" />
          </div>
        )
        break
      case 'meat':
        ingredent = <div className="Meat" />
        break
      case 'cheese':
        ingredent = <div className="Cheese" />
        break
      case 'salad':
        ingredent = <div className="Salad" />
        break
      case 'bacon':
        ingredent = <div className="Bacon" />
        break
      default:
        ingredient = null
    }
    return ingredient
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default burgerIngredient
