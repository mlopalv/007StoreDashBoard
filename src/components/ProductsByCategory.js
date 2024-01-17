import React from "react";
import { useState, useEffect, useRef } from "react";


function ProductsByCategory() {

  let [categorias, setCategorias] = useState([]);

  useEffect(() => {

    //Cargar el total de productos
    fetch("http://127.0.0.1:3001/api/products").then((response) => {

      return response.json();
    }).then((data) => {
                
      setCategorias(data.countByCategory);

      console.log("Categorias (cantidad): ", categorias.length);

    }).catch(exception => {
      
      console.log("Excepción atrapada obteniendo los productos en la sección de categorías: " + exception);

    });
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">

        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Products by category
          </h5>
        </div>
        <div className="card-body">
          <div className="row">

            {
              categorias.length > 0 &&
              categorias.map((categoria, i) => {
                return (

                  <div className="col-lg-6 mb-4" key={i}>
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">{categoria.category} ({categoria.quantity})</div>
                    </div>
                  </div>

                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsByCategory;
