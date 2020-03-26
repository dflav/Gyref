import React from 'react';
import { exercises, menuTypes } from '../../constants/data';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';

export const TypeMenu = ({ desiredType }) => {
  return (
    <div className='grid-container'>
      {Object.entries(menuTypes)
        .filter(([key, value]) => {
          return value.type === desiredType;
        })
        .map(([key, value], index) => (
          <Link to={`/Exercises/${key}`} key={index}>
            <TypeContent image={value.image} exerciseName={key} />
          </Link>
        ))}
    </div>
  );
};

const TypeContent = ({ image, exerciseName }) => {
  return (
    <div className='img-container'>
      <img src={image} alt={`${exerciseName} category`} />
      <span>{`${exerciseName} exercises `}</span>
    </div>
  );
};

export const ExerciseMenu = ({ desiredType, target, menu }) => {
  let filtered = exercises.filter(item => {
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
    filtered = filtered.filter(item => {
      const key = item.equipment.includes(menu);
      return key === true;
    });

  return (
    <div>
      <div className='grid-container'>
        {filtered.map((item, index) => (
          <ExerciseContent key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const ExerciseContent = ({ item }) => {
  return (
    <div className='img-container' style={{ cursor: 'auto' }}>
      <img
        style={{ transform: 'scale(1)' }}
        src={item.image}
        alt={`${item.name} exercise`}
      />
      <span>
        {item.name}
        <br />
        <Link to={`/Exercises/${item.main}/${item.name}`}>
          <button>See the exercise</button>
        </Link>

        <Tooltip
          title={
            <span style={{ fontSize: '12px' }}>
              You have to be loged in to use this feature.
            </span>
          }
          arrow
          style={{ fontSize: '16px' }}
        >
          <div style={{ display: 'inline-block' }}>
            <button disabled style={{ pointerEvents: 'none' }}>
              Add to a workout
            </button>
          </div>
        </Tooltip>
      </span>
    </div>
  );
};
