import React, { useState } from "react";
import axios from "axios";

function RegistrationForm() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = 'http://127.0.0.1:8000/api/register/';
    const data = { username: username, email, password: password };
    try {
      const response = await axios.post(url, data);
      localStorage.setItem('token', response.data.token);
      console.log(response.data);
      // Redirect to login on success
      window.location.href = '/profiles';
      alert('Register successful');
    } 
    catch (error) {
      console.error(error);
      alert('Failed to Register');
    }
  };

return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto shadow-lg sm:max-w-sm md:max-w-md: rounded-lg mt-8 pl-4 pr-4 pb-4 pt-4">
      <div className="mb-4 pt-3">
        <label htmlFor="username" className="block font-medium mb-2">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)} 
          required
          className="w-full border-gray-400 border-solid border-2 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)} 
          required
          className="w-full border-gray-400 border-solid border-2 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block font-medium mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)} 
          required
          className="w-full border-gray-400 border-solid border-2 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Register
      </button>
    </form>
   
  );
}

export default RegistrationForm;