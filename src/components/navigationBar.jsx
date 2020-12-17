import React, {Component} from 'react';
import PostComponent from './post'
import NewTask from './newTask'
import WorkStation from './workStation'
import Expenses from './financial_info'
import {HashRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';

class NavigationComponent extends Component{
    render(){
        return(
        <Router>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Activity Scheduling and Managment Tool</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/task_manager_client/home">Home</Nav.Link>
                        <Nav.Link href="/new_schedule">New Schedule</Nav.Link>
                        <Nav.Link href="/work_station">Work Station</Nav.Link>
                        <Nav.Link href="/expense">Expense</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <br />
            <div>
            <Switch>
                <Route exact path="/task_manager_client/" component={PostComponent}></Route>
                <Route exact path="/task_manager_client/home" component={PostComponent}></Route>
                <Route path="/new_schedule" component={NewTask}></Route>
                <Route path="/work_station" component={WorkStation}></Route>
                <Route path="/expense" component={Expenses}></Route>
            </Switch>
            </div>
        </Router>
        )  
    }
}

export default NavigationComponent;
