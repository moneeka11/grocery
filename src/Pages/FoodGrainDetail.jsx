import React from 'react'
import { useParams } from 'react-router-dom'
import FoodGrain from '../Data/FoodGrain'

export default function FoodGrainDetail() {
    let {id}=useParams();
    let food=FoodGrain.find((a)=>a.id==id);
  return (
    <>
      <div className="product-display">
      <div className="container">
        <div className="product-items">
          <div className="row">
            
            <div className="col-lg-6">
              <img src={food.image} alt="" />
            </div>
            <div className="col-lg-6">
              <div className="p-title">
                 <h3>{food.title}</h3>
              </div>
              <div className="p-price">
                <span className="p-old"><del>{food.oldprice}</del></span>
                <span className="p-new">{food.newprice}</span>
              </div>
              <div className="p-description">
                <p>{food.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}
