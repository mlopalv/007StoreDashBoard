import React from 'react';
import ChartRow from './ChartRow';
import { useState, useEffect, useRef } from "react";

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
        fetch("http://127.0.0.1:3001/api/products").then((response) => {

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
                <h5 className="m-0 font-weight-bold text-gray-800">Listado completo de productos</h5>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Categoría</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Nombre</th>
                                <th>Categoría</th>
                                <th>Precio</th>
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