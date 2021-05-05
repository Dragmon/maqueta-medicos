import React from 'react';
import Button from '../Button';
import DNA from '@images/DNA.png';

const ServiceSection = () => (
  <section className='flex flex-col md:flex-row md:justify-center md:items-center'>
    <div className='w-full md:w-1/2'>
      <h1>Consulte nuestros servicios</h1>
      <p>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y
        archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
        las industrias desde el año 1500, cuando un impresor (N. del T. persona
        que se dedica a la imprenta) desconocido usó una galería de textos y los
        mezcló de tal manera que logró hacer un libro de textos especimen.{' '}
      </p>
      <Button />
    </div>
    <div className='w-full md:w-1/2'>
      <img src={`${DNA}`} alt='Imagen de una cadena DNA' />
    </div>
  </section>
);

export default ServiceSection;
