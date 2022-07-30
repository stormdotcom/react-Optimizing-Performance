import { useState } from "react";
import ParentComp from "./Component/ParentComp";

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
    backgroundColor: '#f7d7f7'
}
console.log('Index Component rendered')
  return (
    <div style={style}>
      <h4 style={{fontWeight: '900' }}> Index Component </h4>
      {/* <ParentComp /> */}
      {toggle && <ParentComp />}
      <button onClick={()=> setToggle((prev) => !prev)}>Toggle View </button>
    </div>
  );
}
export default App;
