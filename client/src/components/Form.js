import React, { useState } from 'react';
import './form.scss';

const Form = () => {
  const [search, setSearch] = useState([]);
  const [fetchInput, setFetchInput] = useState([]);


  const handleChange = e => {
    setSearch(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    setFetchInput(`http://localhost:5000/api/players`)
  }

  return(
  <form className='form' submit={handleSubmit}>
    <input
      type='text'
      name='search'
      value={fetchInput}
      onChange={handleChange}
      placeholder='Search player'
    />
  </form>
  )

}

export default Form;