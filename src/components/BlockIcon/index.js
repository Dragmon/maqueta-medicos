import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BlockIcon = (data) => {
  console.log('data', data);
  const { icon, name } = data.info;
  return (
    <div className='bg-white flex flex-col justify-center items-center rounded-2xl h-40'>
      <FontAwesomeIcon icon={icon} color='purple' size='3x' />
      <p>{name}</p>
    </div>
  );
};

export default BlockIcon;
