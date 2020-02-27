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

export const ExerciseMenu = ({ desiredType, target }) => {
  return (
    <div>
      <div className='grid-container'>
        {exercises
          .filter((item) => {
            switch (target) {
              case 'muscles':
                return item.main === desiredType;
              case 'equipment':
                return item.equipment === desiredType;
              case 'type':
                return item.mechanics === desiredType;
              default:
                return null;
            }
          })
          .map((item, index) => (
            <Link to={`/Exercises/${item.main}/${item.name}`} key={index}>
              <ExerciseMenuContent
                image={item.image}
                exerciseName={item.name}
              />
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
    <div className='img-container'>
      <img src={image} alt={`${exerciseName} exercise`} />
      <span>
        {`${exerciseName}`}
        <button disabled>See the exercise</button>
      </span>
    </div>
  );
};
