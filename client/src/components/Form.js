import React, { useState } from 'react';
import './form.scss';

// import { useForm } from './useForm';

const Form = () => {
  // const [search, setSearch] = useState([]);
  const [fetchInput, setFetchInput] = useState([]);

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

export default Form;