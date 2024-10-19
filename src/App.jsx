import './App.css';
import InputText from '../Components/InputText';
import { useState } from 'react';
import Response from '../Components/Response';

function App() {

  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const apiData = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`).then(response => response.json())
    .then(data => setResponse(data[0].meanings[0].definitions[0].definition));

  return (
    <>
      <h1>Dicitionary app</h1>
      <InputText setInput={setInput} />
      <Response response={response} />
    </>
  )
}

export default App;
