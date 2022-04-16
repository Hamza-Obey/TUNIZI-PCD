import React from 'react'
import "../Assets/Sidebar1.css"
import AddProduct from './AddProduct'
import { useState } from 'react'

function Sidebar1() {
  const [openModal,setOpenModal] = useState(false)
  return (
    <>
      <div>
        <div class="sidebar-container">

          <ul class="sidebar-navigation">
            <div class="search__container">
              <p class="search__title">
                Search for your product :
              </p>
              <input class="search__input" type="text" placeholder="      SEARCH . . ." />
            </div>
            <br />
            <li>
              <a href="#">
                Computers
              </a>
            </li>
            <li>
              <a href="#">
                Phones
              </a>
            </li>

            <li>
              <a href="#">
                Video-Games
              </a>
            </li>
            <li>
              <a href="#">
                Electromrnagers
              </a>
            </li>
            <li>
              <a href="#">
                Accesoirs
              </a>
            </li>
          </ul>
          <p><button className='addproduct-button' 
          onClick={()=>setOpenModal(true)}
          
          >
            Add a new product </button> </p>

        </div>
      </div>

      {openModal && <AddProduct closeModal={setOpenModal}/>}
    </>
  )
}

export default Sidebar1
