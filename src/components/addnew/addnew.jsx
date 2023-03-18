import React from 'react';
import './addnew.scss';

export default function addnew() {
  return (
    <div className='addnewtodo'>
      <input type='text' placeholder='Add Your New ToDo' />
      <button value='button'> + </button>
    </div>
  );
}
