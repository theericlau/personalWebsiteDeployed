import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Route, Switch } from 'react-router-dom';

// import Portfolio from './Portfolio';
// import Photography from './Photography';
// import About from './About';
// import Contact from './Contact';

// const Home = props => {
//   return (
//     <div>
//       <Switch>
//         <Route exact path="/" component={Portfolio} />
//         <Route path="/photography" component={Photography} />
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} />
//       </Switch>
//     </div>
//   );
// };

const Image = styled.img`
  width:100%;
  margin: 0;
  padding: 0;
`;

class Home extends Component {
  componentDidMount() {
    document.title = 'Eric Lau';
  }

  render() {
    return (
      <div>
        <Image src={require('../assets/websiteHome.jpg')} alt="home" />
      </div>
    )
  }
}
Home.propTypes = {

};

export default Home;
