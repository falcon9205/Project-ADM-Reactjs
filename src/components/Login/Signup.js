import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });

  // console.log(udata);

  const adddata = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setUdata(() => {
      return {
        ...udata,
        [name]: value,
      };
    });
  };
  //                 phone number input valid

  const [phoneNumber, setphoneNumber] = useState("");
  const [valid, setvalid] = useState("");

  const handleChange = (event) => {
    const input = event.target.value;
    setphoneNumber(input);
    setvalid(validatePhoneNumber(input));
  };
  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_form">
            <form>
              <div className="sign-page-logo2">
                <h1>Create_account</h1>
                <img src="./logo192.png" alt="" />
                <hr />
              </div>
              <div className="form_data">
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  name="fname"
                  onChange={adddata}
                  // onChange={(e)=>(setUdata({...udata,fname:e.target.value}))}
                  value={udata.fname}
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form_data">
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  onChange={adddata}
                  // onChange={(e)=>(setUdata({...udata,email:e.target.value}))}
                  value={udata.email}
                  id="email"
                  placeholder="admedusociety@gmail.com"
                  required
                />
              </div>
              <div className="form_data">
                <label htmlFor="mobile">Mobile number</label>
                <input
                  type="text"
                  name="mobile"
                  onChange={handleChange}
                  // onChange={(e)=>(setUdata({...udata,mobile:e.target.value}))}
                  value={phoneNumber}
                  id="mobile"
                  placeholder="Enter 10 digit mobile number"
                  required
                />
                {!valid && <p className="text-sm">Please enter a valid phone number</p>}
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={adddata}
                  // onChange={(e)=>(setUdata({...udata,password:e.target.value}))}
                  value={udata.password}
                  id="password"
                  placeholder="At least 6 characters"
                  required
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Confirm Password</label>
                <input
                  type="password"
                  name="cpassword"
                  onChange={adddata}
                  // onChange={(e)=>(setUdata({...udata,cpassword:e.target.value}))}
                  value={udata.cpassword}
                  id="passwordg"
                  required
                />
              </div>
              <button type="submit" className="signin_btn">
                Continue
              </button>

              <div className="signin_info">
                <p>Already have an account?</p>
                <NavLink to="/login">Sign in</NavLink>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
