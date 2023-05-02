import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

function App() {


const availableAirlines = useSelector((Store)=> Store.availableAirlines)
console.log(availableAirlines);
const dispatch= useDispatch();

  return (
    <div>
      <h1>Redux Airport</h1>
      <input placeholder='Airline Name' />
      <button>Add Airline</button>
      <table>{/* Airlines should be listed here */}</table>
    </div>
  );
}

export default App;
