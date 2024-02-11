import React, { useState } from 'react'


const Movie = ({movie}) => {
  // let cnt = 0;
  function btnClickHandler(){
    // cnt++;
    setCnt(cnt+1);
    console.log(movie, " : ",cnt);
  }

  // const [variableName, variableUpdateFunction] = useState(initialValue);
  const [cnt, setCnt] = useState(0);

  return (
    <div>
      <span>{movie}</span> <br />
      <span>You have clicked this movie: {cnt}</span> &nbsp;
      <button onClick={btnClickHandler}>Click</button>
    </div>
  )
}

export default Movie