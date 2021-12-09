import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useEffect} from 'react';
import { render } from '@testing-library/react';

/*const fetchUser = () => {
  axios.get("http://localhost:8080/user/all")
}*/

function App() {
useEffect(()=>{
  getData();
})
  function getData () {

    fetch('http://localhost:3000/php/test.php')
      .then((response) => response.json())
      .then((response) => {
          /*this.setState({
            forumdata: response,
          })*/
          console.log(response)
           })
      .catch((error) => {
          console.error(error);
      })

  }
  
    return(
      <div>hjälp</div>
    );
      
}
  


export default App;
