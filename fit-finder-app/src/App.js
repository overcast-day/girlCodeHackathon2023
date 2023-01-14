import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import { router as Route} from './pages/router'

const App = () => {
  
  return (
    <Router>
      {/* Route is located at pages folder */}
      <Route/>
    </Router>
  );
}

export default App;
