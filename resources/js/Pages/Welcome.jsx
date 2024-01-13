import { useEffect, useState } from 'react';
import { Head } from '@inertiajs/react';
import Preloader from '@/Components/Preloader';
import Home from './Home';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
  const [showPreloader, setShowPreloader] = useState(true);

  // Simulating an asynchronous operation (e.g., fetching data) that takes some time
  useEffect(() => {
    const fetchData = async () => {
      // Simulate a delay (e.g., fetching data from an API)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Once the data is fetched or the necessary setup is complete, hide the preloader
      setShowPreloader(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <Head title="Developer Tools by JVCR" />
      {showPreloader ? (
        <Preloader />
      ) : (
        <Home auth={auth} laravelVersion={laravelVersion} phpVersion={phpVersion} />
      )}
    </>
  );
}
