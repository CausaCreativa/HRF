import React from 'react'
import { Navbar, Footer,MenuNetworks} from './components'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Service from './pages/ServicePage/Service'
import Contact from './pages/Contact/Contact'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {GlobalStyle} from './globalStyles'

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />
      <Switch >
        <Route path="/" exact component={Home} />
        <Route path="/HRF" exact component={Home} />
        <Route path="/contact" excat component={Contact} />
        <Route path="/aboutUs" excat component={AboutUs} />
        <Route path="/services" excat component={Service} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
