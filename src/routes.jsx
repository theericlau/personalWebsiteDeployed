import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Home from './components/Home';
import Header from './components/Header';
import Photography from './components/Photography';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

// Theme


{/* <IndexRoute component={Home} /> */}
// Routes
const routes = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/photography" component={Photography} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  </Router>
);

export default routes;
