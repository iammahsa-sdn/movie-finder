import React from 'react'
import Navbar from './components/layout/Navbar'
import Landing from './components/home/Landing'
import Movie from './components/home/Movie'
import {HashRouter as  Router, Route} from 'react-router-dom'
import store from './store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Landing}  />
        <Route exact path="/movie/:id" component={Movie}  />
      </div>
      </Router>
    </Provider>
  );
}

export default App;
