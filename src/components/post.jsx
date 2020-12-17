import React, { Component } from 'react';
import {Card, Button, Row, Col, Table} from 'react-bootstrap';

class PostCard extends Component {
    state = { postData : this.props.postData 
    }
    render() { 
        return (

        <Card className = "my-2">
            {/* <Card.Header>Task No. {this.state.postData.id} - - {this.state.postData.tag}</Card.Header> */}
                <Card.Body>
                    <Card.Title>Task No. {this.state.postData.id} - - {this.state.postData.tag}</Card.Title>
                    <h4>{this.state.postData.title}</h4>
                    <Card.Text>
                    {this.state.postData.description}
                    </Card.Text>
                    <Row>
                        <Col>
                            <Col><small className="text-muted my-5">Posted on: {this.state.postData.posted}</small></Col>
                            <Col><small className="text-muted my-5">Deadline: {this.state.postData.deadline}</small></Col>
                        </Col>
                        <Col>
                            <Col><small className="text-muted my-5">Last Modified: {this.state.postData.updated}</small></Col>
                            <Col><small className="text-muted my-5">Status: {this.state.postData.status}</small></Col>
                        </Col>
                    </Row>
                    

                    
                </Card.Body>
                {/* <Button variant="primary">Detail</Button> */}
        </Card>);
    }
}
 

class PostComponent extends Component {
    state = { postData : [{id:"",
                           title: "",
                           description: "",
                           updated: "",
                           posted: "",
                           status: "",
                           tag: "",
                           deadline: ""}] 
            }

    async componentDidMount() {
        const response = await fetch('/tasks')
        const data = await response.json();
        this.setState({postData: data});
    }
    
    render() { 
        return (
        <div className="container">
        <Row>
        <Col sm={8}>
        {this.state.postData.map(posts => 
        <PostCard key={posts.id}  
                  postData = {posts}
                  />)}
        </Col>
        <Col sm={4}>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Description</th>
                <th>Count</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Active</td>
                <td>5</td>
                </tr>
                <tr>
                <td>Urgent</td>
                <td>0</td>
                </tr>
                <tr>
                <td>Completed</td>
                <td>0</td>
                </tr>
            </tbody>
            </Table>
        </Col>
        </Row>
        </div>
          );
    }
}
 
export default PostComponent;
