import { useState } from 'react';

const useForm = () => {
  const [fetchInput, setFetchInput] = useState([]);

  return [fetchInput, setFetchInput]
}

export default useForm;