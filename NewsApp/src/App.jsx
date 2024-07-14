import React from 'react'
import './App.css';
import { Navbar } from './components/Navbar';
import { Card } from './components/Card';

export const App = () => {
  return (
    <>
      <div id="cards-container" className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-[80px] place-items-center my-[50px]">
        <Navbar />
        <Card />
      </div>
    </>
  )
}
