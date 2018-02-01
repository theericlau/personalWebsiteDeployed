import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, IndexRoute, hashHistory } from 'react-router-dom';
// import Header from './Header';
import Home from './Home';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Eric',
    };
  }
  render() {
    console.log('im the props', this.props);
    return (
      <div>
        <Header />
      </div>
    )
    // return (
    //   <Router history={hashHistory}>
    //     <Route path="/" component={Home}>
    //       <IndexRoute component={Home} />
    //     </Route>
    //   </Router>
    // );
  }
}

export default App;
