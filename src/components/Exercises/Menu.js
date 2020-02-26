import React from 'react';
import { menuTypes } from '../../constants/data';
import { Link } from 'react-router-dom';

export const MuscleMenu = () => {
  return (
    <div className='grid-container'>
      {menuTypes
        .filter((item) => {
          return item.type === 'muscles';
        })
        .map((item, index) => (
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

export const EquipmentMenu = () => {
  return (
    <div className='grid-container'>
      {menuTypes
        .filter((item) => {
          return item.type === 'equipment';
        })
        .map((item, index) => (
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

export const MechanicsMenu = () => {
  return (
    <div className='grid-container'>
      {menuTypes
        .filter((item) => {
          return item.type === 'type';
        })
        .map((item, index) => (
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
