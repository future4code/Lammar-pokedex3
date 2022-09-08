import { RoutesComponent } from './Components/Routes'
import {GlobalState} from "./Global/GlobalState"
import React from 'react';
import { GlobalStyle } from './Components/GlobalStyle';
function App() {
  return (
    <GlobalState>
      <GlobalStyle/>
      <RoutesComponent/>
     </GlobalState>
  );
}

export default App;
