import React from 'react';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

export default function FileUploads() {
  return (
    <div className='fileUpload-container'>
      <Button variant='contained' component='label'>
        Upload
        <input hidden accept='image/*' multiple type='file' />
      </Button>
      <IconButton color='primary' aria-label='upload picture' component='label'>
        <input hidden accept='image/*' type='file' />
        <PhotoCamera />
      </IconButton>
      <div>
        <Button variant='contained' component='label'>
          Upload
          <input hidden accept='image/*' multiple type='file' />
        </Button>
        <IconButton
          color='primary'
          aria-label='upload picture'
          component='label'>
          <input hidden accept='image/*' type='file' />
          <PhotoCamera />
        </IconButton>
      </div>
    </div>
  );
}
