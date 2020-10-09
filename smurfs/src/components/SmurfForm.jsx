import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf } from "../actions/index.js"

const SmurfForm = (props) => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    props.postSmurf(smurf);
    document.getElementById("smurfForm").reset();
  };

  const inputHandler = (e) => {
    e.preventDefault();
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={submitHandler} id="smurfForm" className="form">
        <label htmlFor="name">
          <input
          className="input"
            type="text"
            name="name"
            value={props.name}
            placeholder="name"
            id="name"
            onChange={inputHandler}
          />
        </label>
        <label htmlFor="age">
          <input
            className="input"
            type="text"
            name="age"
            value={props.age}
            placeholder="age"
            id="age"
            onChange={inputHandler}
          />
        </label>
        <label htmlFor="height">
          <input
            className="input"
            type="text"
            name="height"
            value={props.height}
            placeholder="height"
            id="height"
            onChange={inputHandler}
          />
        </label>
        <button className="btn">Add a Smurf</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    error: state.error,
  };
};

export default connect(mapStateToProps, { postSmurf })(SmurfForm);
