import { exercises } from '../../constants/data';
import React from 'react';
import { Redirect } from 'react-router-dom';

const ExerciseDetails = props => {
  const exercise = props.match.params.idb;
  const muscle = props.match.params.ida;
  const choice = exercises.filter(item => {
    return item.name === exercise;
  });
  let random = exercises.filter(
    ex => ex.main === muscle && ex.name !== exercise
  );

  for (let i = random.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = random[i];
    random[i] = random[j];
    random[j] = temp;
  }
  random = random.slice(0, 3);

  if (choice.length === 0) return <Redirect to='/' />;
  return (
    <>
      <div className='info'>
        <div>
          <h1>{muscle} exercises</h1>
          <p>
            All {muscle.toLowerCase()} exercises with pictures and detailed
            instructions for every step to help you improve your workout
            plan.Select an exercise or log in to add it to your workout.
          </p>
        </div>
      </div>
      <h1 className='title'>{choice[0].name}</h1>
      <div className='d-container'>
        <img src={choice[0].image} alt={`${exercise} exercise`} />
        <div className='d-info'>
          <h2>Exercise Details</h2>
          <span>Main Muscle Group :</span> {choice[0].main}
          <br />
          <span>Other Muscle Groups :</span> {choice[0].other}
          <br />
          <span>Type :</span> {choice[0].type}
          <br />
          <span>Mechanics :</span> {choice[0].mechanics}
          <br />
          <span>Equipment :</span> {choice[0].equipment.join(', ')}
          <br />
          <span>Difficulty :</span> {choice[0].difficulty}
          <br />
          <button>+ Add to Routine</button>
        </div>
      </div>
      <div className='instructions'>
        <h2>How to perform the exercise</h2>
        <br />
        <ul>
          {choice[0].description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        More {muscle.toLowerCase()} exercises
        {/* <div className='more-container'>
          {random.map((item, i) => (
            <Figure key={i}>
              <FigureImage
                width={250}
                height={200}
                alt={item.name}
                src={item.image}
                style={{
                  display: 'block',
                  margin: 'auto'
                }}
              />
              <FigureCaption style={{ textAlign: 'center' }}>
                {item.name}
              </FigureCaption>
            </Figure>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default ExerciseDetails;
