import React, { useContext } from 'react'
import GrandChild from './GrandChild'
import { MyContext } from './GrandParent'

const Child = () => {
    const data = useContext(MyContext);
    
  return (
    <div>
        I am Child with data: {data} <br /><br /><br />
    <GrandChild />
    </div>
  )
}

export default Child