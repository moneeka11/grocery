import React from 'react'

const Validation = (form) => {
    let errors={};
    if(!form.name_1){
        errors.name_1="Name is required"
    }
    if(!form.email_2){
        errors.email_2="Email is required"
    }else if(!/\S+@\S+\.\S+/.test(form.email_2)){

        errors.email_2="Email is invalid"

    }
    if(!form.number_3){
        errors.number_3="Phone Number is Required"
    }else if(form.number_3.length<10){
        errors.number_3="Phone Number must be more than Ten digits"
    }
   
  return errors;
}

export default Validation

