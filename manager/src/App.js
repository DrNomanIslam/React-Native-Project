import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentWillMount() {
      const config = {
      apiKey: 'AIzaSyBs53oTAM1AfBh_NzGJjeiaGq6-jNdRk1w',
      authDomain: 'manager-40bee.firebaseapp.com',
      databaseURL: 'https://manager-40bee.firebaseio.com',
      projectId: 'manager-40bee',
      storageBucket: 'manager-40bee.appspot.com',
      messagingSenderId: '75065034597'
     };
      firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
      );
  }
}

export default App;
