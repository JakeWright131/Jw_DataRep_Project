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
import { Edit } from './components/edit';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">


        <Navbar bg="success" variant="light">
        <Navbar.Brand href="/">
                <img
                  alt=""
                  src="https://www.pngrepo.com/download/212360/recipe.png"
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                />{" "}</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/" ><b><u>Home</u></b></Nav.Link>
            <Nav.Link href="/view"><b><u>View Recipes</u></b></Nav.Link>
            <Nav.Link href="/add"><b><u>Add Recipes</u></b></Nav.Link>
          </Nav>
        </Navbar>

<br />
<Switch>
  <Route path='/' component={Content} exact/>
  <Route path='/add' component={Create}/>
  <Route path='/view' component={Read}/>
  <Route path='/edit/:id' component={Edit}></Route>
</Switch>

        
      </div>
      </Router>
    );
  }
}

export default App;
