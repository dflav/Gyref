import React from 'react';

function Humburger(props) {
  return (
    <>
      <input
        onClick={() => props.toggle()}
        type='checkbox'
        className='toggler'
      />
      <div className='humburger'>
        <div className='btn-line'></div>
      </div>
    </>
  );
}

export default Humburger;
