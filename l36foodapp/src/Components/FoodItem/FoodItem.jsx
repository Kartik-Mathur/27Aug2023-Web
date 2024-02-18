import React from 'react'

const FoodItem = ({food}) => {
  return (
    <div>
        {food.name} <br />
        {food.price} <br />
        {food.description} <br />
        <img src={food.imageUrl} />
        <button>Add To Cart</button>
    </div>
  )
}

export default FoodItem