import React, {useMemo, useState} from 'react'

const GrandChildComponent = () => {
    const [count, setCount]= useState(0)
    const style = useMemo(()=> {
        return {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
        height:'55%',
        border: '1px solid black',
        backgroundColor: '#993698'
        }
    }, [])
    const expensiveCal =   (count)=>{ 
      console.log('Grand`s expensiveCalculation invoked  called')
        for(let i =0; i< 1000000000; i++){
           count +=1;
        }
        return count;
    }
   const calc = useMemo(()=> expensiveCal(count), [])
    console.log('Grand Child Component rendered')
  return (
    <div style={style}> <h5 style={{fontWeight: '900', color: 'white'}}>Grand Child Component </h5>
            <h5  style={{fontWeight: '900', color: 'white'}}>Grand Child Count : {count}  | result : {calc || 1} </h5>
         <button onClick={()=> setCount((prev)=> prev+=1)}> Grand Child Count +</button>
    </div>
  )
}

export const GrandChildComp = React.memo(GrandChildComponent)