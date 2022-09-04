import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';

export default function MyForm({ NavigateToPage }) {
  const [info, setInfo] = useState({
    first: '',
    last: '',
    phone: '',
    email: '',
  });
  const handleChange = (e) => {
    const field = e.target.id;
    setInfo((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    NavigateToPage(2);
  };
  return (
    <div>
      <form className='my-form' onSubmit={handleSubmit}>
        <TextField
          id='first'
          label='first name'
          variant='filled'
          autoComplete='off'
          required
          type='text'
          onChange={handleChange}
          value={info.first}
        />
        <TextField
          id='last'
          label='last name'
          variant='filled'
          autoComplete='off'
          required
          type='text'
          onChange={handleChange}
          value={info.last}
        />
        <TextField
          id='phone'
          label='phone number'
          variant='filled'
          autoComplete='off'
          required
          type='text'
          onChange={handleChange}
          value={info.phone}
        />
        <TextField
          id='email'
          label='email'
          variant='filled'
          autoComplete='off'
          required
          type='email'
          onChange={handleChange}
          value={info.email}
        />
        <Button type='submit' variant='outlined'>
          next
        </Button>
      </form>
    </div>
  );
}
