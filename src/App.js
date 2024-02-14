// import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css';
import Search from './components/Search';
import Display from './components/Display';

function App() {
  const [city, setCity] = useState("Karachi");
  const [data, setData] = useState(null);


  function handlechange(e) {
    setCity(e.target.value)
  }

  useEffect(() => {
    axios.get(`https://api.weatherapi.com/v1/current.json?key=6b520d1bda6745ee83d163648240802&q=${city}&aqi=no`)
      .then((response) => {
        setData(response.data)

      })
      .catch((error) => {
        console.log(" error =>", error)
      })

  }, [city])


  if (data !== null) {
    return (
      <div className="Main_container">
        <Search handlechange={handlechange} city={city} setCity={setCity} />
        <Display data={data} />
      </div>
    );
  } else{
    return (
      <div className="Main_container">
        <Search handlechange={handlechange} city={city} setCity={setCity} />
      </div>
    );
  }

}



export default App;
