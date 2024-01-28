import { Meteor } from 'meteor/meteor';
import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const submit = (e: FormEvent) => {
    e.preventDefault();

    const login = Meteor.loginWithPassword(username, password);
    console.log(login)
    navigate('/home');
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

      <button type="submit" onSubmit={submit}>Log In</button>
    </form>
  );
};
