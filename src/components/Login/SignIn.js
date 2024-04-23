import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  const [logdata, setData] = useState({
    email: "",
    password: "",
  });

  // console.log(logdata);

  const adddata = (e) => {
    const { name, value } = e.target;

    // console.log(name, value);

    setData(() => {
      return {
        ...logdata,
        [name]: value,
      };
    });
  };

  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_form">
            <form>
              <div className="sign-page-logo">
                <h1>Sign_In</h1>
                <img src="./logo192.png" alt="" />
                <hr />
              </div>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={adddata}
                  value={logdata.email}
                  id="email"
                  placeholder="admedusociety@gmail.com"
                  required
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={adddata}
                  value={logdata.password}
                  id="password"
                  placeholder="At least 6 characters"
                  required
                />
              </div>
              <button type="submit" className="signin_btn">
                login
              </button>
            </form>
          </div>
          <div className="create_accountinfo">
            <p>New to ADM?</p>
            <button>
              <NavLink to="/register">Create your ADM Account</NavLink>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
