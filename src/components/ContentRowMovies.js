import React from 'react';
import SmallCard from './SmallCard';
import { useState, useEffect, useRef } from "react";

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let productsInDB = {
    title: "Total de productos",
    color: 'primary',
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalUsers = {
    title: "Total de usuarios",
    color: 'success',
    cuantity: '79',
    icon: 'fa-award'
}

/* <!-- Actors quantity --> */

let totalCategories = {
    title: "Total de categorías",
    color: 'warning',
    cuantity: '49',
    icon: 'fa-user-check'
}

let cartProps = [productsInDB, totalUsers, totalCategories];


function ContentRowMovies() {

    //Variables de estado par productos, categorìas y usuarios
    let [productos, setProductos] = useState(productsInDB);
    let [categorias, setCategorias] = useState(totalUsers);
    let [usuarios, setUsuarios] = useState([]);

    useEffect(() => {

        //Cargar el total de productos
        fetch("http://127.0.0.1:3001/api/products").then( (response) => {            
            
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


        fetch("http://127.0.0.1:3001/api/users").then( (response) => {            
            
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

export default ContentRowMovies;