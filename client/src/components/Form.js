import React, { useState } from 'react';
import './form.scss';

import useForm from '../hooks/useForm';

const Form = () => {
  // const [search, setSearch] = useState([]);
  const [fetchInput, setFetchInput, handleChange, handleSubmit] = useForm('')

  return(
  <form className='form' submit={handleSubmit}>
    <input
      type='text'
      name='search'
      value={fetchInput}
      onChange={handleChange}
      placeholder='Search soccer'
    />

    <button>Search</button>
  </form>
  )

  
}

export default Form;