import React, { useState, useEffect } from 'react'
import "../Assets/Sidebar1.css"
import AddProduct from './AddProduct'
import axios from "axios";


function Sidebar1() {
  const [openModal, setOpenModal] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts();
  },[]);

  const getProducts = () => {
    axios.get("http://localhost:5000/produit/get", {
      headers: {
        "Content-Type": "application/json",

      },
    })
      .then((result) => {
        setProducts(result.data)  ;
      })
      .catch((err) => {
        console.error("error:${error}")

      });

  }
  

  return (
    <>
      <div>
        <div class="sidebar-container">

          <ul class="sidebar-navigation">
            <div class="search__container">
              <p class="search__title">
                Search for your product :
              </p>
              <input class="search__input" type="text" placeholder="     SEARCH . . ." />
            </div>
            <br />
            {/* {console.log(products)} */}
            {products.map((product,i) => {
              return(
              <li>
                <a href="#">
                  {product.name}
                </a>
              </li> );
            })} 

          </ul>
          <p><button className='addproduct-button'
            onClick={() => setOpenModal(true)}

          >
            Add a new product </button> </p>

        </div>

      </div>
      <AddProduct

        setModal={setOpenModal}
        isOpen={openModal}
        product={products}
        setProducts={setProducts}

      />


    </>
  )
}

export default Sidebar1
