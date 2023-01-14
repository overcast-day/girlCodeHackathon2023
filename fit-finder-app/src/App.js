import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import { router as Route} from './pages/router'
import Logo from "./assets/svg/FitFinderLogoSimple.svg";

const App = () => {
  
  return (
    <Router>
      <object data={Logo} type="image/svg+xml" className="logo"></object>
      {/* Route is located at pages folder */}
      <Route/>
    </Router>
  );
}

export default App;
