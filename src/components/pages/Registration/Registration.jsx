import "./Registration.css";
import React from "react";

function Registration() {
  return (
    <div className="registration">
      <h1>Registration</h1>
      <form onSubmit={cnj}>
        <label htmlFor="fName">Enter First Name: </label>
        <input type="text" name="fName"/>
        <label htmlFor="lName">Enter Last Name: </label>
        <input type="text" name="lName"/>
        <label htmlFor="birthDate">Enter Birth Date: </label>
        <input type="text" name="birthDate"/>
        <label htmlFor="email">Enter Email: </label>
        <input type="text" name="email"/>
        <label htmlFor="password">Enter Password: </label>
        <input type="text" name="password"/>
        <label htmlFor="confirm_psw">Confirm password: </label>
        <input type="text" name="confirm_psw"/>
      </form>
    </div>
  );
};

export default Registration;
