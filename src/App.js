import React from 'react'
import { Navbar} from './components'
import {Footer} from './components'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Service from './pages/ServicePage/Service'
import contact from './pages/Contact/Contact'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {GlobalStyle } from './globalStyles'


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />
      <Switch >
        <Route path="/" exact component={Home} />
        <Route path="/aboutus" excat component={AboutUs} />
        <Route path="/service" excat component={Service} />
        <Route path="/contact" excat component={contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
