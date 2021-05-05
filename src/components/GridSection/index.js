import React, { useEffect, useState } from 'react';
import BlockIcon from '../BlockIcon';

const GridSection = () => {
  const API = 'http://localhost:3000/gridIcons';

  const [icons, setIcons] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setIcons(data));
  }, []);

  console.log('icons', icons);
  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {icons.map((data) => (
          <BlockIcon key={data.id} info={data} />
        ))}
      </div>
    </section>
  );
};

export default GridSection;
