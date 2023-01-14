import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import { router as Route} from './pages/router'
import Logo from "./assets/svg/FitFinderLogoSimple.svg";

const App = () => {
  
  return (
    <Router>
      <Link to="/" className="logo"><div><object data={Logo} type="image/svg+xml"></object></div></Link>
      {/* Route is located at pages folder */}
      <Route/>
    </Router>
  );
}

export default App;
