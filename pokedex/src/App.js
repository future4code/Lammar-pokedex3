import { RoutesComponent } from './Components/Routes'
import {GlobalState} from "./Global/GlobalState"
import React from 'react';
function App() {
  return (
    <GlobalState>
      <RoutesComponent/>
      </GlobalState>
  );
}

export default App;
