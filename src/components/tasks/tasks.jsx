import React from 'react';
import './tasks.scss';

export default function tasks() {
  return (
    <div className='tasks'>
      <p className='tasks__header'>Your Tasks</p>

      <div className='tasks__card'>
        <p>Buy A New Laptop </p>
        <p>Del</p>
      </div>

      <div className='tasks__card'>
        <p>Study Chapter 10 Chemistry</p>
        <p>Del</p>
      </div>
      <div className='tasks__card'>
        <p>Do groceries</p>
        <p>Del</p>
      </div>
      <div className='tasks__card'>
        <p>Send Sam a postcard</p>
        <p>Del</p>
      </div>
    </div>
  );
}
