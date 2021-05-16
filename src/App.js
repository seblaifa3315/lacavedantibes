import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';

//Importing Router stuff
import { BrowserRouter } from 'react-router-dom';

//Importing Components
import Main from './Components/Main';

//importing react-redux stuff
import { ConfigureStore } from './redux/configureStore';
import{ Provider } from 'react-redux';

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
