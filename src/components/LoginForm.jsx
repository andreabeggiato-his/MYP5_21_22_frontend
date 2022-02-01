import React from 'react';
import axios from 'axios';

const LoginForm = () => {

  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError(null);
    axios.post('http://localhost:4000/login', {
      email: email,
      password: password
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      setError(err.response.data);
    });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>Email:</label>
      <input
        type="text"
        onChange={handleEmailChange}
        value={email}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={handlePasswordChange}
        value={password}
      />
      <input type="submit" value="Login" />
      {error && <div>{error}</div>}
    </form>
  )
};

export default LoginForm;
