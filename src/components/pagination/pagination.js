import React from 'react';
import { Pagination } from '@mui/material';

export default function MyPagination({ page }) {
  return (
    <div className='pagination-container'>
      steps:
      <Pagination
        count={2}
        color='primary'
        hidePrevButton
        hideNextButton
        page={page}
      />
    </div>
  );
}
