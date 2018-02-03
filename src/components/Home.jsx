import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import image from '../assets/websiteHome.jpg';
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

const Image = styled.section`
  background-image: url(${image});
`;

const ColorDiv = styled.div`
  color: red;
`;
{/* <Image className="intro" src={require('../assets/websiteHome.jpg')} alt="home" /> */}

class Home extends Component {
  componentDidMount() {
    document.title = 'Eric Lau';
  }

  render() {
    return (
      <div>
        <Image className="intro">
            <div className="inner">
              <div className="content">
                <h1>Home</h1>
              </div>
            </div>
        </Image>
      </div>
    )
  }
}
Home.propTypes = {

};

export default Home;
