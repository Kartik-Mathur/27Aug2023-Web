import React from 'react'
import './List.css';

let foodItems = [
    'Momos',
    'Chole Kulche',
    'Chole Bhature',
    'Butter Chicken'
];

// const List = () => {
//   return (
//     <ul className='foodItems'>
//         {foodItems.map(item=> <li>{item}</li>)}
//     </ul>
//   )
// }

const List = () => {
  return (
    <ul className='foodItems'>
        {
            foodItems.map((item,indx)=>{
                if(indx%2 == 0){
                    return <div className='item-1'>{item}</div>
                }
                else
                    return <div className='item-2'>{item}</div>
            })
        }
    </ul>
  )
}


export default List