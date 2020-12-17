import React, { Component } from 'react';
import { Row,Col,Button, Card } from 'react-bootstrap'
import InputRow from './ui_components/inputs';
import TableView from './ui_components/tables';
import axios from 'axios';

class WorkStation extends Component {
    state = { task_info : { id:"",
                            title: "",
                            description: "",
                            directory: "",
                            deadline: "",
                            group: "",
                            tag: "",
                            updated: "",
                            posted: "",
                            status: ""},

              progress : {  id:"",
                            task_id: "",
                            note: "",
                            ac_cost: "",
                            ac_travel_time: "",
                            ac_waiting_time: "",
                            ac_engagement_time: "",
                            updated_on: "",
                            status: ""},

              time_table : [{id: 0, header: ""}, 
                            {id: 1,header: "Estimated"}, 
                            {id: 2, header: "Actual"}], 

             table_values: [{row_inde: 0, values: [{col: '00', cell_value: "Engagment"}, {col: '01', cell_value: "1"}, {col: '02', cell_value: ""}]}, 
                            {row_inde: 1, values: [{col: '10', cell_value: "Drive"}, {col: '11', cell_value: ""}, {col: '12', cell_value: ""}]}, 
                            {row_inde: 2, values: [{col: '20', cell_value: "Waiting Period"}, {col: '21', cell_value: "4"}, {col: '22', cell_value: "55"}]}],

             table_2_values: [{row_inde: 0, values: [{col: 0, cell_value: "Cost"}, {col: 1, cell_value: "0"}, {col: 2, cell_value: ""}]}]
            }

    async componentDidMount() {
    const response = await fetch('/tasks/1')
    const sec_response = await fetch('/tasks/table/1')
    const data = await response.json();
    this.setState({task_info: data[0]})
    const table_01 = await sec_response.json();
    console.log(table_01)
    this.setState({table_values: table_01})
    }

    handleOnChange = ({currentTarget: input}) => {
        const data = {...this.state.progress}
        data[input.name] = input.value;
        this.setState({progress: data})
    };
    handleSubmit = async(e) => {
        e.preventDefault();
        // console.log(this.state)
        // const {data: task} = await axios.post('/result', this.state.data);
        // console.log(task)
    };
    render() { 
        return (     
        <div className = "col my-2">
        <h3>Work Area</h3> 
        <Card>
            <Card.Header> 
                <Row>
                    <Col className="my-2"> Task No. {this.state.task_info.id} - - {this.state.task_info.tag}</Col>
                    <Button variant="primary" className="float-right">Modify Task Definition</Button>
                </Row> 
            </Card.Header>
            <Card.Body>
                <Card.Title>{this.state.task_info.title}</Card.Title> 
                    {this.state.task_info.group}  
                    <Col className="my-2">    
                        <Card.Text>
                            {this.state.task_info.description}
                        </Card.Text>
                    </Col>
                    Deadline: {this.state.task_info.deadline}
            </Card.Body>
        </Card>

        <Row className="row my-2">
            <Col className="col-4">
                <Card>
                    <Card.Header>Procedure</Card.Header>
                    <Card.Body>
                        <Card.Title>Time Management</Card.Title>
                        <Col>
                        <TableView header_values={this.state.time_table} value={this.state.table_values}></TableView>
                        </Col>
                        <Card.Title>Expense Management</Card.Title>
                        <Col>
                        <TableView header_values={this.state.time_table} value={this.state.table_2_values}></TableView>
                        </Col>
                        <Card.Title>File Management</Card.Title> 
                        <Col>
                        <InputRow type="file" id="file_id" value="" handleOnChange={this.handleOnChange}/>
                        </Col>
                        <h3 id="tree_label"> File Viewer </h3>
                            <ul role="tree" aria-labelledby="tree_label">
                            <li role="treeitem" aria-expanded="false">
                                <span> Files </span>
                                <ul role="group">
                                <li role="treeitem" class="doc"> project-1.docx </li>
                                <li role="treeitem" class="doc"> project-2.docx </li>
                                </ul>
                            </li>
                            <li role="treeitem" aria-expanded="false">
                                <span> Letters </span>
                                <ul role="group">
                                <li role="treeitem" aria-expanded="false">
                                    <span> letter-1 </span>
                                    <ul>
                                    <li role="treeitem" class="doc"> letter-1A.docx </li>
                                    <li role="treeitem" class="doc"> letter-1B.docx </li>
                                    <li role="treeitem" class="doc"> letter-1C.docx </li>
                                    </ul>
                                </li>
                                <li role="treeitem" aria-expanded="false">
                            </li>
                            </ul>
                            </li>
                            </ul>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="col-8">
            <form onSubmit={this.handleSubmit}>
                <Card>
                    <Card.Header>Progress Update <Button type="submit" className="float-right">Commit Change</Button></Card.Header>
                    <Card.Body>
                    <InputRow type="textarea" id="note" title="Notes" value={this.state.progress.note} handleOnChange={this.handleOnChange}/>
                    <Row>
                        <Col><InputRow type="text" id="ac_cost" title="Cost" value={this.state.progress.ac_cost} handleOnChange={this.handleOnChange}/></Col>
                        <Col><InputRow type="text" id="ac_travel_time" title="Drive Time" value={this.state.progress.ac_travel_time} handleOnChange={this.handleOnChange}/></Col>
                        <Col><InputRow type="text" id="ac_engagement_time" title="Engagment Period" value={this.state.progress.ac_engagement_time} handleOnChange={this.handleOnChange}/></Col>
                        <Col><InputRow type="text" id="ac_waiting_time" title="Waiting Period" value={this.state.progress.ac_waiting_time} handleOnChange={this.handleOnChange}/></Col>
                    </Row>
                    </Card.Body>
                </Card>
                <br></br>
                <Card>
                    <Card.Body>
                        <Card.Title>Note 01</Card.Title>  
                            <Col className="my-2">    
                                <Card.Text>
                                    {this.state.task_info.description}
                                </Card.Text>
                            </Col>
                            Updated on: {this.state.task_info.deadline}
                    </Card.Body>
                </Card>
            </form>
            </Col>
        </Row>

        </div> );
    }
}
 
export default WorkStation;