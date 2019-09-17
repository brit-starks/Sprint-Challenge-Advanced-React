import { useState } from 'react';

const useForm = initialValue => {
  const [Value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    setValue(e.target.value);
  }

  return [Value, setValue, handleChange, handleSubmit]
}

export default useForm;