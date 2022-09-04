import React from 'react';

export default function Notes() {
  return (
    <div className='notes-container'>
      <h2>notes:</h2>
      <ul className='note-list'>
        <li>1. pdf upload section - needs work</li>
        <li>side-by-side, want the icon, don't want icon?</li>
        <li>
          steps could say 'basic info' and 'STG&E-photo/bill' instead of '1'/'2'
        </li>
        <li>the steps: '1' and '2' buttons are called Pagination: </li>
        <li>
          want it to be clickable or just display the current step? (currently
          just displays)
        </li>
      </ul>
    </div>
  );
}
