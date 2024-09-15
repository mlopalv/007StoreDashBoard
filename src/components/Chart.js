import React from 'react';
import ChartRow from './ChartRow';
import { useState, useEffect, useRef } from "react";


//Reqiore module to pull environment variables
const apiHostURL = process.env.REACT_APP_API_HOST_URL;
console.log("apiHostURL value --> " + apiHostURL)

let tableRowsData = [
    {
        Title: 'Billy Elliot ',
        Length: '123',
        Rating: '5',
        Categories: ['Drama', 'Comedia'],
        Awards: 2
    },
    {
        Title: 'Alicia en el país de las maravillas',
        Length: '142',
        Rating: '4.8',
        Categories: ['Drama', 'Acción', 'Comedia'],
        Awards: 3
    },

]


function Chart() {

    let [productos, setProductos] = useState([]);

    useEffect(() => {

        //Cargar el total de productos
        fetch(apiHostURL + "/api/products").then((response) => {

            return response.json();
        
        }).then((data) => {

            setProductos(data.data);

            console.log("Productos (cantidad): ", productos.length);

        }).catch(exception => {

            console.log("Excepción atrapada obteniendo los productos en la sección de categorías: " + exception);

        });
    }, []);

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Products list</h5>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                                productos.map((producto, i) => {
                                    return <ChartRow {...producto} key={i} />
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;