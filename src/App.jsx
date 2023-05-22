import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import React from 'react';
import Saludo from './components/Saludo';

const App = () => {
  return (
    <Saludo saludoNuevo="Hello my friend!"></Saludo>
  );
};

export default App;