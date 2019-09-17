import React, { Component } from 'react';
import Game from './views/game';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

class App extends Component {
  // configureMixpanel = () => {
  //   window.MIXPANEL.configure({
  //     apiKey: 'abc1234',
  //     email: 'akasky72@gmail.com'
  //   }).then(() => window.MIXPANEL.identify());
  // };

  // componentDidMount = () => {
  //   this.configureMixpanel();
  // };

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Game />
        </div>
      </Provider>
    );
  }
}

export default App;
