import React, {Component} from 'react';
import {Provider} from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import Dashboard from './components/DashboardComponent';
import './App.css';

const store = ConfigureStore();

class App extends Component {
  render () {
    return (
      <div className="App">
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </div>
    );
  }
}

export default App;
