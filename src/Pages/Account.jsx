import React from 'react'

export default function Account() {
  return (
    <>
    <div className="f">
    <div className="container">
        <div className="app-wrapper mt-4 mb-3">
            <div>
                <h2 className="title ">Create Account</h2>
            </div>
            <form action="" className="form-wrapper">
                <div className="name">
                    <label  className="label">
                        Username:
                    </label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="password">
                    <label  className="label">
                        Password:
                    </label>
                    <input type="text" name="password" id="ps" />
                </div>
                <button >Sign Up</button>
            </form>
        </div>
    </div>
    </div>
   
    </>
  )
}
