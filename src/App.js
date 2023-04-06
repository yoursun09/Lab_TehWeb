
import './App.css';
import React from 'react';
import IconButtonColors from "./mybuttons";
import {useState} from "react";
import ActionAreaCard from "./card";
import InputWithButton from "./inputmy";

function App() {
  const [showCard ,setShowCard]=useState (false)
  const [showInput ,setShowInput]=useState (true)
    const [bgColor, setBgColor] = useState("#3EE6E5"); // Initial background color is white (#fff)

    function handleMouseMove(e) {
        // const randomColor = Math.floor(Math.random()*16777215).toString(16); // Generate random color
        setBgColor("#19DAD9"); // Update background color with random color
    }
  const handleclickerd = () => {
    setShowCard(!showCard)
    setShowInput(!showInput)
  }
  return (
      <div style={{ backgroundColor: bgColor }} onMouseMove={handleMouseMove}>
    <div>
<IconButtonColors onClick={handleclickerd} />
    </div >
 <div className="box">
   {showCard && <ActionAreaCard/>}
 </div>
        <div>
          {showInput && <InputWithButton/>}
        </div>
      </div>


  );
}

export default App;
