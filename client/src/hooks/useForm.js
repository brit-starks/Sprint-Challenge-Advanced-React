import { useState } from 'react';

const useForm = (cb) => {
  const [value, setValue] = useState({});

  const handleChange = e => {
    setValue(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    setValue({...value, [e.target.name]: e.target.value});
  }

  return [value, setValue, handleChange, handleSubmit, cb]
}

export default useForm;