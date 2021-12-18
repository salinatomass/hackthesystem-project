import React from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex flex-row justify-content-center">
          <h1>¿Qué te gustaría estudiar?</h1>
        </div>
        <br />
        <div className="d-flex flex-row justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Aprende Javascript</h5>
              <p className="card-text">
                Start programming with basic Javascript.
              </p>
              <Link to="/theory" className="btn btn-primary">
                Theory
              </Link>
              <Link to="/exercise" className="btn btn-success">
                Exercises
              </Link>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Aprende Java</h5>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <Link to="/theory" className="btn btn-primary">
                Theory
              </Link>
              <Link to="/exercise" className="btn btn-success">
                Exercises
              </Link>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Aprende React</h5>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <Link to="/theory" className="btn btn-primary">
                Theory
              </Link>
              <Link to="/exercise" className="btn btn-success">
                Exercises
              </Link>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Aprende Angular</h5>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <Link to="/theory" className="btn btn-primary">
                Theory
              </Link>
              <Link to="/exercise" className="btn btn-success">
                Exercises
              </Link>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Aprende PHP</h5>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <Link to="/theory" className="btn btn-primary">
                Theory
              </Link>
              <Link to="/exercise" className="btn btn-success">
                Exercises
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
