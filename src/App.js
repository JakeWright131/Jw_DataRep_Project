import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Create } from './components/create';
import { Read } from './components/read';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">


        <Navbar bg="success" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/view">View Recipes</Nav.Link>
            <Nav.Link href="/add">Add Recipes</Nav.Link>
          </Nav>
        </Navbar>

<br />
<Switch>
  <Route path='/' component={Content} exact/>
  <Route path='/add' component={Create} exact/>
  <Route path='/view' component={Read} exact/>

</Switch>

        
      </div>
      </Router>
    );
  }
}

export default App;
