import React from 'react'
import { Navbar} from './components'
import Home from './pages/Home/Home'
import AboutUs from './pages/Contact/AboutUs'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {GlobalStyle } from './globalStyles'


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />
      <Switch >
        <Route path="/" exact component={Home} />
        <Route path="/AboutUs" excat component={AboutUs} />
      </Switch>
    </Router>
  );
}

export default App;
