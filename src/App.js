import React from 'react';
import { eventsArray } from './events';

function App() {
  return (
    <div>
      <h1>Sudanese events</h1>
        <div>
          { eventsArray.map((event, index) => {
            return (
              <ul key={index}>
                <h2>{event.name}</h2>
                <p>{event.description}</p>
                <p><strong>{event.date}</strong></p>
                <a href="#">{event.link}</a>           
              </ul>
            );
          })}
        </div>
    </div>
  );
}

export default App;
