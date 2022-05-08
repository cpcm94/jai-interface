import logo from './logo.svg'
import './App.css'
// import { useEffect, useState } from 'react';

const reactAppKey = process.env.REACT_APP_AUTH_KEY

const logKey = (key) => console.log(key)

// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = "{\n    \"email\": \"caiopcmaia94@gmail.com\",\n    \"firstName\": \"Caio\",\n    \"lastName\": \"Maia\",\n    \"company\": \"Nenhum\",\n}";

// var requestOptions = {
//   method: 'PUT',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("https://mycelia.azure-api.net/auth", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

const myHeaders = new Headers()
myHeaders.append('Auth', process.env.REACT_APP_AUTH_KEY)
myHeaders.append('Content-Type', 'application-json')

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
}
fetch(
  'https://mycelia.azure-api.net/info?mode=complete&get_size=true',
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error))

// var myHeaders = new Headers()
// myHeaders.append('Auth', process.env.REACT_APP_AUTH_KEY)
// myHeaders.append('Content-Type', 'application-json')
// console.log({ myHeaders })

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow',
// }

// fetch('https://mycelia.azure-api.net/describe/productimages', requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log('error', error))

// useEffect(() => {
// })

function App() {
  // const [databaseInfo, setDatabaseInfo] = useState([])

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {/* <img
          src='https://myceliademo.blob.core.windows.net/fashion-imgs/images/10000.jpg'
          alt='test'
        /> */}
        <button onClick={() => logKey(reactAppKey)}>REACT KEY</button>
      </header>
    </div>
  )
}

export default App
