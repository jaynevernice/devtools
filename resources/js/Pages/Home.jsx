import React, { useEffect, useState }  from 'react'
import '../../css/style.css'
import {FaArrowDown, FaArrowUp, FaFont, FaSwatchbook, FaBook} from "react-icons/fa"
import { IconContext } from 'react-icons'
import { typography } from '@/Data'

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

  const [categoryIndex, setCategoryIndex] = useState(0);
  // const categories = ['Typography', 'Color', 'Icons', 'Documentation'];
  const categories = [
    {name: 'Typography', icon: <FaFont/>},
    {name: 'Color', icon: <FaSwatchbook/>},
    {name: 'Documentations', icon: <FaBook/>},
  ]

  const handleUpClick = () => {
    setCategoryIndex(prevIndex => (prevIndex === 0 ? categories.length - 1 : prevIndex - 1));
  };

  const handleDownClick = () => {
    setCategoryIndex(prevIndex => (prevIndex === categories.length - 1 ? 0 : prevIndex + 1));
  };

  return (

    <div className='main'>

      <div className="information">  

        <div className='overlay'></div>

          <div className="controls">
            <div id='upBtn' onClick={handleUpClick}>
              <FaArrowUp />
            </div>
            <div className="icon-wrapper">
              <IconContext.Provider value={{ size: '8em' }}>
                {/* <FaFont /> */}
                {categories[categoryIndex].icon}
              </IconContext.Provider>
              {categories[categoryIndex].name}
            </div>
            <div id='downBtn' onClick={handleDownClick}>
              <FaArrowDown />
            </div>
          </div>

          {/* <div className="circle"> */}

          <div className='absolute top-1/2 left-full transform -translate-x-1/2 -translate-y-1/2'>
            <div className='flex flex-row space-x-4'>
              {typography.map(({name, site, logo, description}, index) => {
                return(
                  <div key={index}>
                    <a href={site} target='_blank'>
                      <div className="text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 h-40">
                        <div className="p-6">
                          <img src={logo} alt="" className='h-10' />
                          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {name}
                          </h5>
                          <p className="font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            {description}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                )
              })}
            </div>
          </div>


            {/* {typography.map(({name, site, logo, description}, index) => {

              console.log({name, site, logo, description});

              return(
                <div className="" key={index}>
                  <div key={index}>
                    <a href={site} target='_blank'>
                      <div className="absolute left-72 flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-10">
                        <div className="p-6">
                          <img src={logo} />
                          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {name}
                          </h5>
                          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            {description}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })} */}
            
            {/* <div className='absolute flex-row top-72 left-2/3 m-4'>
              <div className="">
                <a href="https://fonts.google.com/" target='_blank'>
                <div className="text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                  <div className="p-6">
                    <img src="https://logos-world.net/wp-content/uploads/2021/03/Google-Fonts-Logo.png" alt="" className='h-10' />
                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                      Google Fonts
                    </h5>
                    <p className=" font-sans text-base antialiased font-light leading-relaxed text-inherit">
                      A computer font and web services owned by Google
                    </p>
                  </div>
                </div>
                </a>
              </div>
              <div className="">
                <a href="https://fontsinuse.com/" target='_blank'>
                <div className="text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                  <div className="p-6">
                    <img src="https://seeklogo.com/images/F/fonts-in-use-logo-6EA99A0816-seeklogo.com.png" alt="" className='h-10' />
                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                      Fonts in Use
                    </h5>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                      A computer font and web services owned by Google
                    </p>
                  </div>
                </div>
                </a>
              </div>
             </div> */}


            {/* <div className="category two">
              <a href=""></a>
            </div> */}

          {/* </div> */}


        


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