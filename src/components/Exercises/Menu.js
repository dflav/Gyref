import React from 'react';
import {
  muscleTypes,
  equipmentTypes,
  mechanicsTypes
} from '../../constants/data';
import { Link } from 'react-router-dom';

export const MuscleMenu = ({ handleClick }) => {
  return (
    <div className='grid-container'>
      {muscleTypes.map((item, index) => (
        <Link to={`/Exercises/${item.name}`} key={index}>
          <div key={index} className='img-container'>
            <img src={item.image} alt={`${item.name} category`} />
            <span>Exercises for {`${item.name}`}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export const EquipmentMenu = ({ handleClick }) => {
  return (
    <div className='grid-container'>
      {equipmentTypes.map((item, index) => (
        <Link to={`/Exercises/${item.name}`} key={index}>
          <div className='img-container'>
            <img src={item.image} alt={`${item.name} category`} />
            <span>Exercises with {`${item.name}`}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export const MechanicsMenu = ({ handleClick }) => {
  return (
    <div className='grid-container'>
      {mechanicsTypes.map((item, index) => (
        <Link to={`/Exercises/${item.name}`} key={index}>
          <div key={index} className='img-container'>
            <img src={item.image} alt={`${item.name} category`} />
            <span>{`${item.name} exercises `}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};
