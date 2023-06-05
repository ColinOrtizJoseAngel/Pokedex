import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import loadingGif from './loading.gif'; // Ruta al archivo GIF descargado

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Tiempo en milisegundos para que el GIF se muestre (5 segundos en este caso)

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <img src={loadingGif} alt="Loading" className="loading-gif" />
      </div>
    );
  }

  return null;
};