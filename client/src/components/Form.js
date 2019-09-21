import React, { useState } from 'react';
import './form.scss';

import useForm from '../hooks/useForm';

const Form = () => {
  // const [search, setSearch] = useState([]);
  const [input, setInput, handleChange, handleSubmit] = useForm('')

  return(
  <form className='form' submit={handleSubmit}>
    <input
      type='text'
      name='search'
      value={input.fetchInput}
      onChange={input.handleChange}
      placeholder='Search soccer'
    />

    <button>Search</button>
  </form>
  )

  
}

export default Form;