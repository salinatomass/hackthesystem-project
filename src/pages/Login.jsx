import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/providers/AuthContext';

const Login = () => {
  const [userForm, setUserForm] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const { signin } = useAuth();

  const handleChange = e => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const userResponse = await signin(userForm);
      if (userResponse) navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-fluid">
      <div className="d-flex flex-row justify-content-center">
        <div className=" col-md-6 p-5 border">
          <form
            className="d-flex flex-column justify-content-center g-3"
            onSubmit={handleSubmit}
          >
            <div className="col-md-12 mb-3">
              <label htmlFor="username" className="form-label">
                Nombre o Correo electrónico
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
                Inicia Sesión
              </button>
            </div>
          </form>
          <div className="d-flex d-row mb-4 mt-4">
            <p className="me-2">Aún no tienes una cuenta? </p>{' '}
            <Link to="/auth/register" href="register.html">
              Registrate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
