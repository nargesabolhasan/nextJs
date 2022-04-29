import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";

const Login = () => {
  const [user, setUserState] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const _user = { ...user, [e.target.name]: e.target.value };
    setUserState(_user);
  };

  const handleSubmit = () => {
    dispatch(setUser(user));
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="name"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};

export default Login;