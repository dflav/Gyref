import React from 'react';
import { exercises, menuTypes } from '../../constants/data';
import { Link } from 'react-router-dom';

export const Menu = ({ desiredType }) => {
  return (
    <div className='grid-container'>
      {Object.entries(menuTypes)
        .filter(([key, value]) => {
          return value.type === desiredType;
        })
        .map(([key, value], index) => (
          <Link to={`/Exercises/${key}`} key={index}>
            <MenuContent image={value.image} exerciseName={key} />
          </Link>
        ))}
    </div>
  );
};

export const ExerciseMenu = ({ desiredType, target, menu }) => {
  let filtered = exercises.filter((item) => {
    switch (target) {
      case 'Muscles':
        return item.main === desiredType;
      case 'Equipment':
        return item.equipment.includes(desiredType);
      case 'Type':
        return item.mechanics === desiredType;
      default:
        return null;
    }
  });

  if (menu !== 'All')
    filtered = filtered.filter((item) => {
      const key = item.equipment.includes(menu);
      return key === true;
    });

  return (
    <div>
      <div className='grid-container'>
        {filtered.map((item, index) => (
          <Link to={`/Exercises/${item.main}/${item.name}`} key={index}>
            <ExerciseMenuContent image={item.image} exerciseName={item.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

const MenuContent = ({ image, exerciseName }) => {
  return (
    <div className='img-container'>
      <img src={image} alt={`${exerciseName} category`} />
      <span>{`${exerciseName} exercises `}</span>
    </div>
  );
};

const ExerciseMenuContent = ({ image, exerciseName }) => {
  return (
    <div className='img-container' style={{ cursor: 'auto' }}>
      <img
        style={{ transform: 'scale(1)' }}
        src={image}
        alt={`${exerciseName} exercise`}
      />
      <span>
        {exerciseName}
        <br />
        <button>See the exercise</button>
        <button disabled>Add to a workout</button>
      </span>
    </div>
  );
};
