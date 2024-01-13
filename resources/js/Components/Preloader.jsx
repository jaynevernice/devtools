// Component for displaying a Lottie animation as a preloader for this webpage 
// using lottie-react (https://github.com/Gamote/lottie-react?tab=readme-ov-file)

import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import preloader from '../../assets/preloader.json';
import '../../css/style.css'

function Preloader() {
  const loaderRef = useRef();

  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    console.log('Animation Loop Complete');
    setAnimationComplete(true);
  };

  useEffect(() => {
    const loaderInstance = loaderRef.current;

    if (loaderInstance) {
      loaderInstance.setSpeed(1.5);
    }
  }, []); 

  return (
    <div className='flex items-center justify-center h-screen'>
      {!animationComplete && (
        <Lottie
          animationData={preloader}
          loop={1}
          onComplete={handleAnimationComplete}
          lottieRef={loaderRef}
        />
      )}
      {!animationComplete && (
      <p className='absolute bottom-4 text-center w-full mb-4 text-gray-700'>Your go-to website for software development resources!</p>
      )}
    </div>
  );
}

export default Preloader;