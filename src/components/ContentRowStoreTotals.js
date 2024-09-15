import React from 'react';
import SmallCard from './SmallCard';
import { useState, useEffect, useRef } from "react";

//Reqiore module to pull environment variables
const apiHostURL = process.env.REACT_APP_API_HOST_URL;

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let productsInDB = {
    title: "Total products",
    color: 'primary',
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalUsers = {
    title: "Total users",
    color: 'success',
    cuantity: '79',
    icon: 'fa-award'
}

/* <!-- Actors quantity --> */

let totalCategories = {
    title: "Total categories",
    color: 'warning',
    cuantity: '49',
    icon: 'fa-user-check'
}

let cartProps = [productsInDB, totalUsers, totalCategories];


function ContentRowStoreTotals() {

    //Variables de estado par productos, categorìas y usuarios
    let [productos, setProductos] = useState(productsInDB);
    let [categorias, setCategorias] = useState(totalUsers);
    let [usuarios, setUsuarios] = useState([]);

    useEffect(() => {

        //Cargar el total de productos
        fetch(apiHostURL + "/api/products").then( (response) => {            
            
            return response.json();
        }).then( (data) => {
            //setMovies(data.Search);
            productsInDB.cuantity = data.metadatos.count;
            totalCategories.cuantity = data.countByCategory.length;
            console.log("Cantidad de productos en la DB de productos: " + productos.cuantity);
            setProductos(productsInDB);
            setCategorias(totalCategories);
            console.log("data : ", data);
        }).catch(exception => {
            console.log("Excepción atrapada: "+exception);

        });


        fetch(apiHostURL + "/api/users").then( (response) => {            
            
            return response.json();
        }).then( (data) => {
            //setMovies(data.Search);
            totalUsers.cuantity = data.meta.count;
            console.log("Cantidad de productos en la DB de productos: " + usuarios.cuantity);
            setUsuarios(totalUsers);
            console.log("data usuarios: ", data);
        }).catch(exception => {
            console.log("Excepción atrapada: "+exception);

        });

    }, [] );
   
    return (

        <div className="row">

            {cartProps.map((movie, i) => {

                return <SmallCard {...movie} key={i} />

            })}

        </div>
    )
}

export default ContentRowStoreTotals;