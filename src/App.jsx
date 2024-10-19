import './App.css';
import InputText from '../Components/InputText';
import { useState } from 'react';
import Response from '../Components/Response';

export default function App() {

  const [input, setInput] = useState();
  const [response, setResponse] = useState();

  const apiData = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`).then(response => response.json())
    .then(data => setResponse(data[0].meanings[0].definitions[0].definition)).catch(() => setResponse("Word doesn't exist!"));

  return (
    <>

      <h1>Dicitionary</h1>
      <InputText setInput={setInput} />
      <Response response={response} />

    </>
  )
};