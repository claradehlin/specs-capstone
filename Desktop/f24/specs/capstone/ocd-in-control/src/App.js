import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import axios from 'axios';

function App() {
  const[theme, setTheme] = useState('')
  const[exposure, setExposure] = useState('')

  const accessDB = () => {
    axios.get('/api/info')
    .then((res) => {
      console.log(res.data)
      setTheme(res.data.theme)
      setExposure(res.data.exposure)
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{theme ? theme : "No OCD theme..."}</h2>
        <h3>{exposure ? exposure : "No exposure..."}</h3>
        <button onClick={accessDB}>OCD Exposure Ideas</button>
      </header>
    </div>
  );
}

export default App;
