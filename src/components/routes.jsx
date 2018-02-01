import React from 'react';
import { BrowserRouter as Router, Route, Switch, hashHistory, IndexRoute } from 'react-router-dom';
// import React from 'react';
// import { IndexRoute, BrowserRouter as Router, Route, hashHistory } from 'react-router';
// import React from 'react';
// import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import Home from './components/Home';
import Header from './components/Header';
import Photography from './components/Photography';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

// console.log('hi');
// // export default (
// //   <Router history={hashHistory}>
// //     <Route path="/" component={App}>
// //       <IndexRoute component={Home} />
// //     </Route>
// //   </Router>
// // );

// // export default (
// //   <Home />
// // )

// export default (
//   <Router history={hashHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Home} />
//     </Route>
//   </Router>
// );


// Components
// import App from './components/App';
// import Home from './components/Home';
// import About from './components/About';
// import Teachers from './components/Teachers';
// import Courses from './components/Courses';

// Components -- Courses
// import HTML from './components/courses/HTML';
// import CSS from './components/courses/CSS';
// import JavaScript from './components/courses/JavaScript';

// Routes
// contain all routes into a variable to be imported into index.js
// const routes = (
//   <Router>
//     {/* If path is / then load the Home component */}
//     <App>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/teachers" component={Teachers} />
//         <Courses>
//           <Route path="/courses/html" component={HTML} />
//           <Route path="/courses/css" component={CSS} />
//           <Route path="/courses/javascript" component={JavaScript} />
//         </Courses>
//       </Switch>
//     </App>
//   </Router>
// );
{/* <IndexRoute component={Home} /> */}

const routes = (
  <Router history={hashHistory}>
    <div>
      <Header />
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
