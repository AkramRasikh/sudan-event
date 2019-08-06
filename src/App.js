import React from 'react';
import { GlobalStyle } from './styles';
import { eventsArray } from './events';
import EventCard from './Components/EventCard';

const App = () => (
  <>
    <GlobalStyle />
    <div>
      <h1>Sudanese events</h1>
        <ul>
          { eventsArray.map((event, index) => <EventCard event={event} key={index} />) }
        </ul>
    </div>
  </>
  );

export default App;
