import React, { useState } from 'react';
import './navbar.css';
import {BiSearchAlt} from 'react-icons/bi';


const Navbar = () => {
  const [inputValue, setInputValue] = useState(''); 
  const [jsonResult, setJsonResult] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const obj = inputValue.replace(/'/g, "\""); // Reemplaza ' por "
      setJsonResult(obj);
      request(obj); // Llama a la función de solicitud con la cadena modificada
    } catch (error) {
      console.error('Error al analizar JSON:', error);
    }
  };

  const request = (json) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "trackingId=rB8XfGUI8yKyKQr8CmqdAg==");
    
    var raw = JSON.stringify({
      "query": json
    }); //transforma el input en un archivo json para realizar la solicitud a la api
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://torre.ai/api/entities/_searchStream", requestOptions)
      .then(response => response.text())
      .then(result => window.alert(result))
      .catch(error => console.log('error', error));
  };

  return (
    <nav>
      <a href='#app' onClick={handleSubmit}><BiSearchAlt/></a>
      <input
        value={inputValue}
        placeholder='Search'
        type='text'
        onChange={handleInputChange}
        name='name'
        autoComplete='name'
        required
      />
    </nav>
  );
}

export default Navbar;


