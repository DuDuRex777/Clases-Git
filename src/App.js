import React, {useEffect, useState} from "react";
import { Router, Route, Link, Routes } from "react-router-dom";
import Inicio from "./conponents/Inicio";
import Perfil from "./conponents/Perfil"


const App = () =>{
  return (
    <Routes>
      <Route path="/" element={<Inicio />}></Route>
      <Route path="/perfil" element={<Perfil />}></Route>
    </Routes>
  )
}

export default App