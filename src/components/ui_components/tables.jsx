import React from 'react';
import { Table } from "react-bootstrap";

function tableHeader(value) {
    
    if (value.length === 0) 
        return(
            <th value=""></th>
        );
        return (value.map(header => 
            <th key={header.id}  value={header.header}>{header.header}</th>
    ));
}

function tableValue(value) {
    if (value.length === 0) 
        return(
            <td>"Null Table"</td>
        );
    return (value.map(cell => 
            <td key={cell.id}  value={cell.cell_value}>{cell.cell_value}</td>
    ));
}

function renderTable(header_values, value) {
   
    return(
    <Table>
    <thead>
        <tr>
            {tableHeader(header_values)}
        </tr>
    </thead>
    <tbody>
        {value.map(cell =>     
        <tr>
        {tableValue(cell.values)}
        </tr>)}
    </tbody>
    </Table>);
}

const TableView = ({header_values, value}) => {
    return ( renderTable(header_values, value) );
}
 
export default TableView;


