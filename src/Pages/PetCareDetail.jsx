import React from 'react'
import { useParams } from 'react-router-dom';
import Petcare from '../Data/Petcare';

export default function PetCareDetail() {
    let {id}=useParams();
    let pet=Petcare.find((a)=>a.id==id);
  return (
    <>
      <div className="product-display">
      <div className="container">
        <div className="product-items">
          <div className="row">
            
            <div className="col-lg-6">
              <img src={pet.image} alt="" />
            </div>
            <div className="col-lg-6">
              <div className="p-title">
                 <h3>{pet.title}</h3>
              </div>
              <div className="p-price">
                <span className="p-old"><del>{pet.oldprice}</del></span>
                <span className="p-new">{pet.newprice}</span>
              </div>
              <div className="p-description">
                <p>{pet.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  )
  
}
