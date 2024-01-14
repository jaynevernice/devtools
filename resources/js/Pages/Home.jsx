import React, { useEffect, useState }  from 'react'
import '../../css/style.css'
import {FaArrowDown, FaArrowUp, FaBatteryFull, FaCalendar, FaCamera, FaFont, FaPhone} from "react-icons/fa"
import { IconContext } from 'react-icons'

function Home() {
  const [rotateValue, setRotateValue] = useState("rotate(0deg)");
  
  useEffect(() => {
    const circle = document.getElementById("circle");
    const upBtn = document.getElementById("upBtn");
    const downBtn = document.getElementById("downBtn");

    const rotateHandler = (angle) => {
      const newRotateValue = 'rotate(${angle}deg)';
      setRotateValue(newRotateValue);
      circle.style.transform = newRotateValue;
    };

    upBtn.onclick = () => rotateHandler(-90);
    downBtn.onclick = () => rotateHandler(90);

    return () => {
      upBtn.onclick = null;
      downBtn.onclick = null;
    };
  }, []);
  
  return (
    <div className='main'>

      <div className="information">  

        <div className='overlay'></div>

        <h1 className='category'>
          <IconContext.Provider value={{ size: "8em" }}>
            <FaFont/>
          </IconContext.Provider>
          Font
        </h1>

        <div id='circle' style={{ transform: rotateValue }}>

          <div className='feature one'>
            <FaCamera />
            <div>
              <h1>Camera</h1>
              <p>12MP, Wide Angle Lens</p>
            </div>
          </div>

          <div className='feature two'>
            <FaCalendar />
            <div>
              <h1>Processor</h1>
              <p>Snapdragon Octa-core 11nm</p>
            </div>
          </div>  

          <div className='feature three'>
            <FaPhone />
            <div>
              <h1>Display</h1>
              <p>0.5 Mini-Drop Fullscreen</p>
            </div>
          </div>  

          <div className='feature four'>
            <FaBatteryFull />
            <div>
              <h1>Battery Life</h1>
              <p>5000mAh, 720Hrs Standby</p>
            </div>
          </div>  

        </div>

        <div className='controls'>
          <FaArrowUp id='upBtn' />
          <h3>Features</h3>
          <FaArrowDown id='downBtn' />
        </div>

      </div>

    </div>

  )
}

export default Home