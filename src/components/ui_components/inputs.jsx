import React from 'react';
import { Form, InputGroup, FormControl} from "react-bootstrap";
import './App.css';
function renderOption(value) {
    if (value.length === 0) 
        return(<option value="">. . .</option>);
    
    return (value.map(choice => 
    <option key={choice.id}  value={choice.value}>{choice.value}</option>));
}


function renderInput(type, id, title, value, handleOnChange) {
    if (type === "date") 
        return(
    <div className="form-group">
        <label htmlFor={id}>{title}</label>
        <input type="date"
                name = {id} 
                id={id} 
                className="form-control col-4" 
                data-date-format="mm/dd/yyyy" 
                value={value} 
                onChange = {handleOnChange}/>
    </div>);

    else if (type === "file") 
    return(
    <div className="form-group">
        <input type="file" 
                className="custom-file-input" 
                name = {id} 
                id={id} 
                value={value} 
                onChange = {handleOnChange}/>
        <label className="custom-file-label" htmlFor={id}>Files</label>
    </div>);

    else if (type === "textarea") 
    return(
    <div className="form-group">
        <label htmlFor={id}>{title}</label>
        <textarea className="form-control" name = {id} id={id} rows="3" 
        value={value} onChange = {handleOnChange}></textarea>
    </div> ); 

    else if (type === "selection") 
    return(
    <div className="form-group ">
        {title}
        <Form.Control name = {id}  id='id' as="select" className = 'col my-2' onChange = {handleOnChange}>
        {renderOption(value)}
        </Form.Control>
    </div> );               
     
     
     else if (type === "input_group") 
     return(
        <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id={id} value={value} name = {id}  onChange = {handleOnChange}>{title}</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            // // eslint-disable-next-line react/style-prop-object
            // style="width: 120px;"
        />
       </InputGroup>);  

     
    else if (type === "input_text") 
    return( 
    <InputGroup>
        <InputGroup.Prepend>
            <InputGroup.Text id={id} value={value} name = {id}  onChange = {handleOnChange}>{title}</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl as="textarea" />
        </InputGroup>);

    else if (type === "input_date") 
    return( 
    <InputGroup>
        <InputGroup.Prepend>
            <InputGroup.Text id={id} value={value} name = {id}  onChange = {handleOnChange}>{title}</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl type="date"/>
        </InputGroup>);

    return (     
    <div className="form-group">
    <label htmlFor={id}>{title}</label>
    <input type="text" 
            value={value} name = {id} id={id} 
            placeholder={title} onChange = {handleOnChange} 
            className="form-control" />
    </div>);
}

const InputRow = ({type, id, title, value, handleOnChange}) => {
    return ( renderInput(type, id, title, value, handleOnChange) );
}
 
export default InputRow;
