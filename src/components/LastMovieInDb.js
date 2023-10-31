import React from 'react';
import { useState, useEffect, useRef } from "react";

let lastProductInDB = {
    id: "",
    name: "",
    description: "",
    categorie: "",
    imagePath: "",
    precio: ""    
}


function LastMovieInDb(){
    
    let [ultimoProducto, setUltimoProducto] = useState(lastProductInDB);
    
    //Cargar el último producto creado obteniendo el último ID
    useEffect(() => {
        let ultimoProductoEnArray = null;
        //Cargar el total de productos
        fetch("http://127.0.0.1:3001/api/products").then( (response) => {            
            
            return response.json();
        }).then( (data) => {
                      
           ultimoProductoEnArray = data.data[data.data.length-1];
           lastProductInDB.id =  ultimoProductoEnArray.id;
           lastProductInDB.name =  ultimoProductoEnArray.name;
           lastProductInDB.description =  ultimoProductoEnArray.description;
           lastProductInDB.categorie =  ultimoProductoEnArray.categorie;
           lastProductInDB.imagePath =  ultimoProductoEnArray.imagePath;
           lastProductInDB.precio = ultimoProductoEnArray.precio;

           setUltimoProducto(lastProductInDB);
           
           console.log("data último producto id: ", lastProductInDB.id);
           console.log("data ultimo producto nombre: : ", ultimoProductoEnArray.name);
           console.log("data ultimo producto imagen: : ", ultimoProductoEnArray.imagePath);


        }).catch(exception => {
            console.log("Excepción atrapada obteniendo los productos: "+exception);

        });
    });

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto creado</h5>
                </div>
                <div className="card-body">
                <div className="text-center">
                        <p className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem', "font-weight": "bold"}}>{ultimoProducto.name}</p>
                    </div>
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 30 +'rem'}} src={ultimoProducto.imagePath} alt=" Star Wars - Mandalorian "/>
                    </div>
                    
                    <div className="text-center">
                        <p className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem', "font-weight": "bold"}}>Precio: $ {ultimoProducto.precio}</p>
                    </div>
                    <div className="text-center">
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href={"http://localhost:3001/products/"+ultimoProducto.id}>Ver detalle del Producto</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
