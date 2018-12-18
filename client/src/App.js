import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Nav from "./components/Nav";
// import Jumbotron from './components/Jumbotron/Jumbotron';
import Home from './components/pages/Home'
// import Saved from './pages/Saved';

const App = () => (
  <Router>
    <div>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

      {/* <Nav/> */}
      {/* <Jumbotron/> */}
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route exact path="/saved" component={Saved}/> */}

      </Switch>
    </div>
  </Router>
)

export default App
