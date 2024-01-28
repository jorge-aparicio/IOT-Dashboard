import { Meteor } from "meteor/meteor";
import React, { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Login: React.FC<{ isAuthenticated: boolean }> = ({
  isAuthenticated,
}) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) navigate("/home");
  }, [navigate, isAuthenticated]);

  const submit = (e: FormEvent) => {
    e.preventDefault();

    Meteor.loginWithPassword(username, password);

    if (isAuthenticated) navigate("/home");
  };

  return (
    <form onSubmit={submit} className="login-form">
      <label htmlFor="username">Username</label>

      <input
        type="text"
        placeholder="Username"
        name="username"
        required
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="password">Password</label>

      <input
        type="password"
        placeholder="Password"
        name="password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" onSubmit={submit}>
        Log In
      </button>
    </form>
  );
};
