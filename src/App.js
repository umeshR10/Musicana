import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from '../src/components/Dashboard/dashboard'
import TrendS from "./components/TrendingSongs/trending";
import OldS from "./components/OldSongs/old";
import NewS from "./components/NewSongs/new";
import MySongs from "./components/MyMusic/mySongs";
import Hindi from "./components/Home/Hindi/hindi";


const App =()=>{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/trending" element={<TrendS />}></Route>
          <Route path="/new" element={<NewS />}></Route>
          <Route path="/old" element={<OldS />}></Route>
          <Route path="/mymusic" element={<MySongs />}></Route>
          <Route path="/hindi" element={<Hindi />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;