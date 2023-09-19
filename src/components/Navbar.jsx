import React, { useRef } from 'react';
import './navbar.css';
import {BiSearchAlt} from 'react-icons/bi';


const Navbar = () => {
    var searchinput = useRef();
    var input = JSON.stringify(searchinput);
    const request = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "trackingId=rB8XfGUI8yKyKQr8CmqdAg==");
    
        var raw = JSON.stringify({
        "query": input
        });
    
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
    }
    return (
    <nav>
      <a href='#app' onClick={request}><BiSearchAlt/></a>
      <input ref={searchinput} placeholder='Search' type='text' name='name' autoComplete='name' required/>
    </nav>
  )

}

export default Navbar;