import React, { useEffect, useState }  from 'react'
import '../../css/style.css'
import {FaArrowDown, FaArrowUp, FaFont, FaSwatchbook, FaBook} from "react-icons/fa"
import { IconContext } from 'react-icons'
import { cards } from '@/Data'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

import 'swiper/css/grid'
import {Grid} from 'swiper/modules'

function Home() {

  const [categoryIndex, setCategoryIndex] = useState(0);

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

  const filteredCards = cards.filter(({category}) => category === categories[categoryIndex].name);

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
                {categories[categoryIndex].icon}
              </IconContext.Provider>
              {categories[categoryIndex].name}
            </div>
            <div id='downBtn' onClick={handleDownClick}>
              <FaArrowDown />
            </div>
          </div>


          <Swiper className='absolute top-1/2 left-full transform -translate-x-1/3 -translate-y-1/2'
            // spaceBetween={10}
            slidesPerView={3}
            grid = {{ 
              rows: 2,
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
          {/* <div className='absolute top-1/2 left-full transform -translate-x-1/2 -translate-y-1/2'> */}
            {/* <div className='grid grid-cols-2 gap-x-[21rem] gap-y-2'> */}
              {filteredCards.map(({name, site, logo, description}, index) => {
              // {filteredCards.slice(0, 8).map(({name, site, logo, description}, index) => {
                // console.log({name, site, logo, description});
                return(
                  <SwiperSlide key={index} className='mb-2'>
                    {/* div key={index} */}
                    <a href={site} target='_blank'>
                      <div className="text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80 h-40">
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
                  </SwiperSlide>
                )
              })}
            {/* </div> */}
          {/* </div> */}
          </Swiper>

      </div>
    </div>

  )
}

export default Home