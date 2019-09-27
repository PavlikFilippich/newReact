import React from 'react';
import Table from './Table'
import './App.css';

function App() {
  const defaultProp = {
    initalWidth: 4,
    initalHeight: 4,
    size :50
  }
  return (
    <Table defaultProp = {defaultProp}/>
  );
}

export default App;
