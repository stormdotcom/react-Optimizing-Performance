import React, { useMemo, useState} from 'react'
import {GrandChildComp} from './GrandChildComp'

const ChildComponent = () => {
    const [count, setCount]= useState(0)
    const style = useMemo(()=> {
        return {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '75%',
        height:'95%',
        border: '1px solid black',
        backgroundColor: '#ba65b9'
        }
    }, [])
    const expensiveCal =   (count)=>{ 
      console.log('Child`s expensiveCalculation invoked ')
        for(let i =0; i< 1000000000; i++){
           count +=1;
        }
        return count;
    }
    const calc = useMemo(()=> expensiveCal(count), []) 
    console.log('Child Component rendered')
  return (
    <div style={style}>
        <div>  
        <h4 style={{fontWeight: '900', color: '#f2f2f2'}}> Child Component </h4>
        <h5> Child Count : {count}  | result : {calc} </h5>
         <button onClick={()=> setCount((prev)=> prev+=1)}> Child Count +</button>
        </div>
        <GrandChildComp />
        <div>
       
        </div>
    </div>
  )
}

export const ChildComp =  React.memo(ChildComponent)