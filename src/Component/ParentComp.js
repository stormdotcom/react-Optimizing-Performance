import React, {useState} from 'react'
import ChildComp from './ChildComp'

export const ParentComp = () => {
    const [count, setCount]= useState(0)
    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        width: '55%',
        height:'95%',
        flexDirection: 'column',
        backgroundColor: '#c8e3cf'
    }
    console.log('Parent Component rendered')
  return (
    <div style={style}><div>
          <h4 style={{fontWeight: '900' }}> Parent Component </h4>
        <h5 style={{fontWeight: '900'}}> Parent Count : {count}</h5>
         <button onClick={()=> setCount((prev)=> prev+=1)}> Parent Count +</button>
         </div>
         <ChildComp />

         </div>
  )
}
