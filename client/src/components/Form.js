import React, { useState } from 'react';
import './form.scss';

const Form = () => {
  const [fetchInput, setFetchInput] = useState([]);

  return(
  <form className='form'>
    <input
      type='text'
      value=''
      placeholder='Search player'
    />
  </form>
  )

}

export default Form;