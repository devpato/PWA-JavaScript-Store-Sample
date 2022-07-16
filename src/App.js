import React, { useEffect } from 'react';
import icon from './assets/icons/icon.png'
import './App.css';
import Items from './components/Items';


function App() {
  useEffect(() => {
    const apiUrl = "https://store-api-a7c49-default-rtdb.firebaseio.com/shoes.json";
    let networkDataReceived = false;
    // fetch fresh data
    var networkUpdate = fetch(apiUrl).then((response)=> {
      return response.json();
    }).then((data)=> {
      networkDataReceived = true;
      console.log(data);
    });
    networkDataReceived = false;
    // fetch cached data
    caches.match("/shoes.json").then((response)=> {     
      if (!response) throw Error("No data");
      return response.json();
    }).then(function(data) {
      // don't overwrite newer network data
      if (!networkDataReceived) {
        console.log(data);
      }
    }).catch(function() {
      // we didn't get cached data, the network is our last hope:
      return networkUpdate;
    }).catch((err)=>console.log(err));
  }, []);


  return (
    <div className="App">
          <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="index.html">
                        <img src={icon} alt="logo" className="logo" />
                    </a>
                </div>
            </div>
          </nav>
      <Items/>
    </div>
  );
}

export default App;
