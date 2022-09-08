import React from 'react'
import { useParams } from 'react-router-dom'
import Toprate from '../Data/Toprate'

export default function Detail() {
    let {id}=useParams()
    let Pdisplay=Toprate.find((a)=>a.id==id)
  return (
   <>
     <div className="product-display">
      <div className="container">
        <div className="product-items">
          <div className="row">
            
            <div className="col-lg-6">
              <img src={Pdisplay.image} alt="food" />
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
              <div className="add-btn">
                <button className='btn'>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
   </>
  )
}
