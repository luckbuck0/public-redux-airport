import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

function App() {

  const [airline,setAirline]=useState('')

const availableAirlines = useSelector((Store)=> Store.availableAirlines)
console.log(availableAirlines);
const dispatch= useDispatch();

const createAirline= (event)=>{
  event.preventDefault()

  dispatch({
    type: 'CREATE_AIRLINES',
    payload: airline
  })
  setAirline('')
}
  return (
    <div>
      <h1>Redux Airport</h1>
      <form>
          <input placeholder='Airline Name' 
            type='text'
            value={airline}
            onChange={(event)=>{setAirline(event.target.value)}}
          />
        <button onClick={createAirline}>Add Airline</button>
      </form>
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
