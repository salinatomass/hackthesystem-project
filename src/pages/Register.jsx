import React, { useState } from 'react';
import { useAuth } from '../contenxt/providers/AuthContext';

import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [userForm, setUserForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleChange = e => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const userResponse = await signup(userForm);
      if (userResponse) navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="d-flex flex-row justify-content-center">
          <div className=" col-md-6 p-5 border">
            <form
              className="d-flex flex-column justify-content-center g-3"
              onSubmit={handleSubmit}
            >
              <div className="col-md-12 mb-3">
                <label htmlFor="username" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Tu nombre de usuario"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-12 mb-3">
                <label htmlFor="email" className="form-label">
                  Correo electronico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Correo@correo.com"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-12 mb-5">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="contraseña"
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
