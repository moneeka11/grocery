import React from 'react'
import { useParams } from 'react-router-dom'
import Products from '../Data/Products'

export default function Details() {
  
    let {id}=useParams()
    let Pdisplay=Products.find((a)=>a.id==id)
  return (
   <>
   
     <div className="product-display">
      <div className="container">
        <div className="product-items">
          <div className="row">
            <h3>details {id}</h3>
            <div className="col-lg-6">
              <img src={Pdisplay.image} alt="" />
            </div>
            <div className="col-lg-6">
              <div className="p-title">
                 <h3>{Pdisplay.title}</h3>
              </div>
              <div className="p-price">
                <span className="p-old"><del>{Pdisplay.oldprice}</del></span>
                <span className="p-new">{Pdisplay.newprice}</span>
              </div>
              <div className="p-description">
                <p>{Pdisplay.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
     


   </> 
  )
}
