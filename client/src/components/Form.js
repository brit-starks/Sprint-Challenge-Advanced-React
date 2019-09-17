import React, { useState } from 'react';
import './form.scss';

import useForm from './useForm';

const Form = () => {
  // const [search, setSearch] = useState([]);
  const [fetchInput, setFetchInput] = useForm()

  const handleChange = e => {
    setFetchInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    // setFetchInput(``);
  }

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

    // const useForm = () => {
    //   const [fetchInput, setFetchInput] = useState([]);
    
    //   return [fetchInput, setFetchInput]
    // }

export default Form;