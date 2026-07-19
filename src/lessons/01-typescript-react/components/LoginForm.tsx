import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Logging in with ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email: </label>
        <input
          type='email'
          value={email}
          onChange={handleEmailChange}
          placeholder='Enter email'
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type='password'
          value={password}
          onChange={handlePasswordChange}
          placeholder='Enter password'
        />
      </div>
      <button type='submit'>Login</button>
    </form>
  );
}

export default LoginForm;
