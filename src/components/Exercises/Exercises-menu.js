import React from 'react';
import {
  muscleTypes,
  equipmentTypes,
  mechanicsTypes
} from '../../constants/data';

export const MuscleMenu = ({ handleClick }) => {
  return (
    <div className='grid-container'>
      {muscleTypes.map((item, index) => (
        <div
          key={index}
          className='img-container'
          onClick={() => handleClick(`${item.name}`)}
        >
          <img src={item.image} alt={`${item.name} category`} />
          <span>Exercises for {`${item.name}`}</span>
        </div>
      ))}
    </div>
  );
};

export const EquipmentMenu = (handleClick) => {
  return (
    <div className='grid-container'>
      {equipmentTypes.map((item, index) => (
        <div
          key={index}
          className='img-container'
          onClick={() => handleClick(`${item.name}`)}
        >
          <img src={item.image} alt={`${item.name} category`} />
          <span>Exercises with {`${item.name}`}</span>
        </div>
      ))}
    </div>
  );
};

export const MechanicsMenu = (handleClick) => {
  return (
    <div className='grid-container'>
      {mechanicsTypes.map((item, index) => (
        <div
          key={index}
          className='img-container'
          onClick={() => handleClick(`${item.name}`)}
        >
          <img src={item.image} alt={`${item.name} category`} />
          <span>{`${item.name} exercises `}</span>
        </div>
      ))}
    </div>
  );
};
