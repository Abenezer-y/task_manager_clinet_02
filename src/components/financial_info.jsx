import React, {Component} from 'react';
import { Col, Card, Row } from 'react-bootstrap'
import InputRow from './ui_components/inputs';
import axios from 'axios';

class Expenses extends Component {
    state = { 
        data: {group: "", tag: "", title: "", description: "", deadline: "", file_id: "", 
               cost: "", travel: "", engaged: "", waiting: ""},
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
     }
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
        <div className = "col my-2"> 
        <h3>Expense Registeration Form</h3> 
        <form className="col"  onSubmit={this.handleSubmit}>
        <Row>
            <Col className = "col-4 my-2">
            <Card>
            <Card.Header>Seller Information</Card.Header>
            <Card.Body>
            <InputRow type='input_group' id="seller_name" title="Seller Name" value={data.title} handleOnChange={this.handleOnChange} />
            <InputRow type='input_group' id="tin" title="TIN" value={data.title} handleOnChange={this.handleOnChange} />
            <InputRow type='input_group' id="phone" title="Phone No" value={data.title} handleOnChange={this.handleOnChange} />
            <h3>Address</h3>
            <Row>
                <Col><InputRow type="text" id="cost" title="Region" value={data.cost} handleOnChange={this.handleOnChange}/></Col>
                <Col><InputRow type="text" id="travel" title="City" value={data.travel} handleOnChange={this.handleOnChange}/></Col>
            </Row>
            <Row>
                <Col><InputRow type="text" id="engaged" title="Sub City" value={data.engaged} handleOnChange={this.handleOnChange}/></Col>
                <Col><InputRow type="text" id="waiting" title="Woreda" value={data.waiting} handleOnChange={this.handleOnChange}/></Col>
                <Col><InputRow type="text" id="waiting" title="Kebele" value={data.waiting} handleOnChange={this.handleOnChange}/></Col>
            </Row>  
            </Card.Body>
            </Card>
            </Col>

            <Col className = "col-8 my-2">
            <Card>
            <Card.Header>Payment Detail</Card.Header>
            <Card.Body>
            <Row>
                <Col><InputRow type="input_date" id="travel" title="Date" value={data.travel} handleOnChange={this.handleOnChange}/></Col>
                <Col><InputRow type="input_group" id="cost" title="Recipt No." value={data.cost} handleOnChange={this.handleOnChange}/></Col>
            </Row>
            <InputRow type='input_text' id="seller_name" title="Reason for payment" value={data.title} handleOnChange={this.handleOnChange} />
            <br></br>
            <InputRow type='selection' id="group" title="Expense Category" value={this.state.choices_01} handleOnChange={this.handleOnChange} />
            </Card.Body>
            </Card>
            </Col>
        </Row>
            <br></br>
            <Card> 
                <Card.Header>Estimated Time of Completion and Estimated Cost</Card.Header>
                <Card.Body>
                <Row>
                    <Col><InputRow type="text" id="cost" title="Region" value={data.cost} handleOnChange={this.handleOnChange}/></Col>
                    <Col><InputRow type="text" id="travel" title="City" value={data.travel} handleOnChange={this.handleOnChange}/></Col>
                    <Col><InputRow type="text" id="engaged" title="Sub City" value={data.engaged} handleOnChange={this.handleOnChange}/></Col>
                    <Col><InputRow type="text" id="waiting" title="Woreda" value={data.waiting} handleOnChange={this.handleOnChange}/></Col>
                    <Col><InputRow type="text" id="waiting" title="Kebele" value={data.waiting} handleOnChange={this.handleOnChange}/></Col>
                </Row>  
                
                <InputRow type="textarea" id="description" title="Description" value={data.description} handleOnChange={this.handleOnChange}/>
                <Col className="col-4"> 
                <InputRow type="file" id="file_id" value={data.file_id} handleOnChange={this.handleOnChange}/>
                </Col>  
                <InputRow type="date" id="deadline" title="Deadline" value={data.deadline} handleOnChange={this.handleOnChange}/>
                </Card.Body>
            </Card>
            <br></br>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div> );
    }
}
 
export default Expenses;