import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Eric Lau</h1>
//         </header>
//         <p className="App-intro">
//           Welcome to the Website! It'll be completed soon!
//         </p>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;