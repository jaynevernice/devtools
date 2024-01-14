import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import preloader from '../../assets/preloader.json';
import '../../css/style.css';

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
    <div className='flex flex-col items-center justify-center h-screen'>
      {!animationComplete && (
        <Lottie
          animationData={preloader}
          loop={1}
          onComplete={handleAnimationComplete}
          lottieRef={loaderRef}
        />
      )}
      {!animationComplete && (
        <div className='mt-4'>
          <p className='text-gray-700 text-center'>Your go-to website for software development resources!</p>
        </div>
      )}
    </div>
  );
}

export default Preloader;
