import React, {useMemo , useState} from 'react'
import {ChildComp} from './ChildComp'

const ParentComponent = () => {
    const [count, setCount]= useState(0)
    const style = useMemo(()=> {
      return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        width: '55%',
        height:'95%',
        flexDirection: 'column',
        backgroundColor: '#e09ddf'
      }
    }, [])
    const expensiveCal =   (count)=>{ 
      console.log('Parent`s expensiveCalculation invoked ')
        for(let i =0; i< 1000000000; i++){
           count +=1;
        }
        return count;
    }
    const calc = useMemo(()=> expensiveCal(count), []) 
    console.log('Parent Component rendered')
  return (
    <div style={style}><div>
          <h4 style={{fontWeight: '900' }}> Parent Component </h4>
        <h5 style={{fontWeight: '900'}}> Parent Count : {count}  | result : {calc} </h5>
         <button onClick={()=> setCount((prev)=> prev+=1)}> Parent Count +</button>
         </div>
         <ChildComp />

         </div>
  )
}
export const  ParentComp = React.memo(ParentComponent);
