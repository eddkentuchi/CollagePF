import React, { useState, useRef, useEffect } from 'react';

const Carrusel = ({ imagenes }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagenSiguiente, setImagenSiguiente] = useState(imagenes[1]); 
  const [imagenActual, setImagenActual] = useState(imagenes[1]); 
  const [opacidadActual, setOpacidadActual] = useState(1);
  const [opacidadSiguiente, setOpacidadSiguiente] = useState(0);
  const containerRef = useRef(null);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1;
      // Calcular el índice de la imagen siguiente
      const nextIndex = newIndex === 0 ? imagenes.length - 1 : newIndex - 1;

      setImagenSiguiente(imagenes[nextIndex]);
      setOpacidadActual(1);
      setOpacidadSiguiente(0);

      setTimeout(() => {
        setImagenActual(imagenes[newIndex]);
        // Iniciar la transición de opacidad
        setOpacidadActual(0);
        setOpacidadSiguiente(1);
      }, 100); 

      return newIndex;
    });
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex === imagenes.length - 1 ? 0 : prevIndex + 1;
      // Calcular el índice de la imagen siguiente
      const nextIndex = newIndex === imagenes.length - 1 ? 0 : newIndex + 1;

      setImagenSiguiente(imagenes[nextIndex]);
      setOpacidadActual(1);
      setOpacidadSiguiente(0);

      setTimeout(() => {
        setImagenActual(imagenes[newIndex]);
        // Iniciar la transición de opacidad
        setOpacidadActual(0);
        setOpacidadSiguiente(1);
      }, 100); 

      return newIndex;
    });
  };

  return (
    <div className="relative md:h-full ">
      <div 
      className="flex  md:h-full overflow-x-hidden transition-opacity duration-300 ease-in-out " 
      ref={containerRef}>
      <div className="slide shrink-0 md:h-80 md:w-64 relative"> {/* Agrega relative */}
          <img
            src={imagenActual.src}
            alt={imagenActual.alt}
            className="h-full w-full object-cover rounded-lg absolute" // Agrega absolute
            style={{ opacity: opacidadActual }}
          />
          <img
            src={imagenSiguiente.src}
            alt={imagenSiguiente.alt}
            className="h-full w-full object-cover rounded-lg absolute" // Agrega absolute
            style={{ opacity: opacidadSiguiente }}
          />
        </div>
      </div>
      <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2">
        Prev
      </button>
      <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2">
        Next
      </button>
    </div>
  );
};

export default Carrusel;