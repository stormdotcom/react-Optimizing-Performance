import { useState } from "react";
import { ParentComp } from "./Component/ParentComp";

function App() {
  const [toggle, setToggle] = useState(false)
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid black',
    height: '90vh',
    flexDirection: 'column',
    width: '100vw',
    backgroundColor: '#f0fff4'
}
console.log('Index Component rendered')
  return (
    <div style={style}>
      <h4 style={{fontWeight: '900' }}> Index Component </h4>
      {toggle && <ParentComp />}
      <button onClick={()=> setToggle((prev) => !prev)}>Toggle View </button>
    </div>
  );
}

export default App;
