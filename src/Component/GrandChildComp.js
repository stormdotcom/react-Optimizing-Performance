import React, {useMemo, useState} from 'react'

const GrandChildComp = () => {
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
        backgroundColor: '#508c5f'
        }
    }, [])
    const expensiveCal = ()=> {
        for(let i =0; i< 100000000; i++){

        
        }
    }
    expensiveCal()
    console.log('Grand Child Component rendered')
  return (
    <div style={style}> <h5 style={{fontWeight: '900', color: 'white'}}>Grand Child Component </h5>
            <h5  style={{fontWeight: '900', color: 'white'}}>Grand Child Count : {count}</h5>
         <button onClick={()=> setCount((prev)=> prev+=1)}> Grand Child Count +</button>
    </div>
  )
}

export default GrandChildComp