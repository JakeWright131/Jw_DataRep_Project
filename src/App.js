import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Create } from './components/create';
import { Read } from './components/read';
import { Edit } from './components/edit';


//imports component from react
//imports header, content and footer components
//imports create,read,edit components
//navbar is displayed on the web application for navigation
//added routing to the web application

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Navbar bg="success" variant="dark">
            <Navbar.Brand href="/"><i><b>Recipe</b>Reminder</i>{" "}</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/" ><b><u>Home</u></b></Nav.Link>
              <Nav.Link href="/view"><b><u>View Recipes</u></b></Nav.Link>
              <Nav.Link href="/add"><b><u>Add Recipes</u></b></Nav.Link>
            </Nav>
          </Navbar>

          <br />
          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/add' component={Create} />
            <Route path='/view' component={Read} />
            <Route path='/edit/:id' component={Edit}></Route>
          </Switch>


        </div>
      </Router>
    );
  }
}

export default App;
