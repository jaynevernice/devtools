import React, { useEffect, useState }  from 'react'
import '../../css/style.css'
import {FaArrowDown, FaArrowUp, FaBatteryFull, FaCalendar, FaCamera, FaFont, FaPhone} from "react-icons/fa"
import { IconContext } from 'react-icons'

function Home() {
  // const [rotateValue, setRotateValue] = useState("rotate(0deg)");
  
  // useEffect(() => {
  //   const circle = document.getElementById("circle");
  //   const upBtn = document.getElementById("upBtn");
  //   const downBtn = document.getElementById("downBtn");

  //   const rotateHandler = (angle) => {
  //     const newRotateValue = 'rotate(${angle}deg)';
  //     setRotateValue(newRotateValue);
  //     circle.style.transform = newRotateValue;
  //   };

  //   upBtn.onclick = () => rotateHandler(-90);
  //   downBtn.onclick = () => rotateHandler(90);

  //   return () => {
  //     upBtn.onclick = null;
  //     downBtn.onclick = null;
  //   };
  // }, []);
  
  return (

    <div className='main'>

      <div className="information">  

        <div className='overlay'></div>

          <div className="controls">
            <div id='upBtn'>
              <FaArrowUp />
            </div>
            <div className="icon-wrapper">
              <IconContext.Provider value={{ size: '8em' }}>
                <FaFont />
              </IconContext.Provider>
              Typography
            </div>
            <div id='downBtn'>
              <FaArrowDown />
            </div>
          </div>

          <div className="circle">
            
            <div className="category one">
              <a href="https://fonts.google.com/" target='_blank'>
              <div class="absolute left-72 flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                <div class="p-6">
                  <img src="https://logos-world.net/wp-content/uploads/2021/03/Google-Fonts-Logo.png" alt="" className='h-10' />
                  <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Google Fonts
                  </h5>
                  <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    A computer font and web services owned by Google
                  </p>
                </div>
              </div>
              </a>
            </div>

          </div>


        


        {/* <div id='circle' style={{ transform: rotateValue }}>
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
        </div> */}

      </div>
    </div>

  )
}

export default Home