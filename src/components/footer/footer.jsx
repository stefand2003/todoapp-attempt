import React from 'react';
import './footer.scss';

export default function () {
  return (
    <ul className='footer'>
      <li>
        You have <a href='#'>4</a> pending tasks, click here to view{' '}
        <a href='#'>completed ones</a>
      </li>
      <button>Clear All</button>
    </ul>
  );
}
