import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.categorie}</td>
                    <td>$ {props.precio}</td>                   
                    
                </tr>
            )
    }
    
        

export default ChartRow;