import React from "react"
import Home from "./pages/home";
import GlobalStyles from "./components/globalstyles";
import { Routes, Route } from "react-router-dom"
import Login from "./components/Login";
import Header from "./components/Header";
import MovieDetails from "./components/moviedetails";
import Seriesdetails from "./components/seriesdetails";

function App() {

  return (
    <div className="App">
      <GlobalStyles/>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/detail/:id" element={<MovieDetails/>}/>
        <Route path="/shows/:id" element={<Seriesdetails/>} />        
      </Routes>
     
    </div>
  );
}

export default App;
