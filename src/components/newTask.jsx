import React, { Component } from 'react';
import InputRow from './ui_components/inputs';
import axios from 'axios';
import { Col, Card, Row } from 'react-bootstrap'


class NewTask extends Component {
    state = {
        data: {group: "", tag: "", title: "", description: "", deadline: "", file_id: "", 
               cost: "", travel: "", engaged: "", waiting: ""},
        errors: {},
        choices_01 : [ {id: 1, value: "Logistics"}, 
        {id: 2, value: "Finance"}, 
        {id: 3, value: "Office"}, 
        {id: 4, value: "KVO"},
        {id: 5, value: "Personal"},
        {id: 6, value: "Others"} ],
        choices_02 : [ {id: 1, value: "Urgent"}, 
        {id: 2, value: "High Priority"}, 
        {id: 3, value: "Repetitave"}, 
        {id: 4, value: "Normal"} ]
    };
    async componentDidMount() {
        // const {data: tasks} = await axios.get('/books');
        // this.setState({tasks});
    };
    handleSubmit = async(e) => {
        e.preventDefault();
        console.log(this.state)
        const {data: task} = await axios.post('/result', this.state.data);
        console.log(task)
    };
    handleOnChange = ({currentTarget: input}) => {
        const data = {...this.state.data}
        data[input.name] = input.value;
        this.setState({data})
    };
    render() { 
        const {data} = this.state;
        return ( 
        <div className="container">
        <div className = "col my-2"> 
        <h3>New Task Registration Form</h3> 
        <form className="col"  onSubmit={this.handleSubmit}>
        <Card>
        <Card.Header>New Task Description</Card.Header>
            <Card.Body>
            <div className="row">
                <Col className="col-4">
                <InputRow type='selection' id="group" title="Group" value={this.state.choices_01} handleOnChange={this.handleOnChange} />
                </Col>
                <div className="col-4"></div>
                <Col className="col-4">
                <InputRow type='selection' id="tag" title="Tag" value={this.state.choices_02} handleOnChange={this.handleOnChange} />
                </Col>
            </div>
            <InputRow type='text' id="title" title="Title" value={data.title} handleOnChange={this.handleOnChange} />
            <InputRow type="textarea" id="description" title="Description" value={data.description} handleOnChange={this.handleOnChange}/>
            <Col className="col-4"> 
            <InputRow type="file" id="file_id" value={data.file_id} handleOnChange={this.handleOnChange}/>
            </Col>
            </Card.Body>
            </Card>
            <br></br>
            <Card> 
                <Card.Header>Estimated Time of Completion and Estimated Cost</Card.Header>
                <Card.Body>
                <Row>
                    <Col><InputRow type="text" id="cost" title="Cost" value={data.cost} handleOnChange={this.handleOnChange}/></Col>
                    <Col><InputRow type="text" id="travel" title="Travel Time" value={data.travel} handleOnChange={this.handleOnChange}/></Col>
                    <Col><InputRow type="text" id="engaged" title="Engagement Period" value={data.engaged} handleOnChange={this.handleOnChange}/></Col>
                    <Col><InputRow type="text" id="waiting" title="Waiting Period" value={data.waiting} handleOnChange={this.handleOnChange}/></Col>
                </Row>    
                <InputRow type="date" id="deadline" title="Deadline" value={data.deadline} handleOnChange={this.handleOnChange}/>
                </Card.Body>
            </Card>
            <br></br>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </div>);
    };
}
 
export default NewTask;