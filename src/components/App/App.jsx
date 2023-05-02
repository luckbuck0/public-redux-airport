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
      
      <header className='listHeader'>List Of Airlines</header>
      {
        <div>{/* Airlines should be listed here */
        availableAirlines.map((airlines)=>{
          return (
            <table key={airlines} >
            <thead>
              <tr>
                <th>Air</th>
                <th>Lines</th>
              </tr>
            </thead>
            <tbody >
              <tr>
                <td>{airlines}</td>
                
              </tr>
            
            </tbody>
          </table>
          )
        })

        }</div>
      }
      
    </div>
  );
}

export default App;
