//import React, { useState } from 'react';
import React from 'react';
import './global.css';
import Logon from './pages/Logon';

// Is a function that returns the HTML, so it is a JSX (Javascript XML)
function App() { 
/*  let [counter, setCounter] = useState(0);

  // useState => array [valor, funcaoDeAtualizacao] - never assign a value manually like counter += 1;, always use the setCounter of the useState because all components will be refreshed on screen automatically ;)

  function increment() {
    setCounter(counter += 1);
  }*/

  return (
    <Logon />
   /* <div>
        <Header>Contador: {counter}</Header>
        <button onClick={increment}>Incrementar</button>
    </div>*/
  );
}

export default App;
