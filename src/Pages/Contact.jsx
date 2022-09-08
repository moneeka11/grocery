import React, { useState } from 'react'
import Validation from './Validation';

export default function Contact() {
  const [form,setForm]=useState({
    name_1:"",
    email_2:"",
    number_3:"",
    message_4:"",


  });
  const [errors,setErrors]=useState({});
  const handleChange=(event)=>{
    const name=event.target.name;
    const data=event.target.value;
    setForm({...form,[name]: data});

  }
  const handleFormSubmit=(e)=>{
    e.preventDefault();
    setErrors(Validation(form))

  }
  return (
    <>
    <div className="contact ">
      <div className="container">
        <div className="page mt-2">
          <form action="#">
            <h2>Contact Us</h2>
            <div className="name-type lf-field"><label>Name</label>
        <span>
          <input id="name_1" type="text" name="name_1" class="lf-form-name" onChange={handleChange} value={form.name_1} required="" placeholder="Name"/>
          {
            errors.name_1 && <p className='error'>{errors.name_1}</p>
          }
        </span></div>
        <div class="text-type lf-field"><label>Email</label>
        <span><input id="email_2" type="email" class="lf-form-text " name="email_2" required="" value={form.email_2} onChange={handleChange} placeholder="Email"/>
        {
            errors.email_2 && <p className='error'>{errors.email_2}</p>
          }
        </span></div>
        <div class="text-type lf-field"><label>Contact No</label>
        <span><input id="number_3" type="number" class="lf-form-text " name="number_3" required="" value={form.number_3} onChange={handleChange} placeholder="Contact number"/>
        {
            errors.number_3 && <p className='error'>{errors.number_3}</p>
          }
        </span></div>
        <div class="textarea-type lf-field"><label>Message</label>
            <span><textarea id="message_4" name="message_4" class="lf-form-textarea" value={form.message_4 }onChange={handleChange} placeholder="Message" required=""></textarea>
            </span></div>
            <div class="lf-form-panel">
              <div class="submit-type lf-field">
                <label><input id="0" class="lf-form-submit" type="submit" name="submit" value="Submit" onClick={handleFormSubmit}/>
                </label></div></div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
