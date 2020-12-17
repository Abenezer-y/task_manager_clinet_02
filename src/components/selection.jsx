import React, { Component } from 'react';
import { Form } from "react-bootstrap";

class SimpleSelect extends Component {

    state = {
        id: this.props.id,
        title : this.props.title,
        choices : this.props.choices
    }

    onChangeColor(e) {
        const value = e.target.value
        console.log(value);
    }

    renderOption() {
        if (this.state.choices.length === 0) 
            return(<option value="null">. . .</option>);
        
        return (this.state.choices.map(choice => 
        <option key={choice.id}  value={choice.value}>{choice.value}</option>));
    }

    render() {
        return (
            
        <div className="form-group col-4">
            {this.state.title}
            <Form.Control name = {this.state.id}  id='this.state.id' as="select" className = 'col my-2' custom onChange={this.onChangeColor.bind(this)}>
            {this.renderOption()}
            </Form.Control>
        </div>
        );
    }
}

export default SimpleSelect;