import React, {useMemo, useState} from 'react'
import GrandChildComp from './GrandChildComp'

const ChildComp = () => {
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
        backgroundColor: '#97c2a2'
        }
    }, [])
    const expensiveCal = ()=> {
        for(let i =0; i< 100000000; i++){

        
        }
    }
    expensiveCal()
    console.log('Child Component rendered')
  return (
    <div style={style}>
        <div>  
        <h4 style={{fontWeight: '900', color: '#f2f2f2'}}> Child Component </h4>
        </div>
        <GrandChildComp />
        <div>
        <h5> Child Count : {count}</h5>
         <button onClick={()=> setCount((prev)=> prev+=1)}> Child Count +</button>
        </div>
    </div>
  )
}

export default ChildComp