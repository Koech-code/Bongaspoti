import React, {useState} from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  };

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "http://127.0.0.1:8000/api/login/";
    const data = {username: username, password: password};
    try {
      const response = await axios.post(url, data);
      localStorage.setItem("token", response.data.token);
      console.log(response.data);
      // Redirect to homepage on success
      window.location.href = "/feed";
      alert("Login successful");
    } catch (error) {
      console.error(error);
      alert("Failed to Login");
    }
  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto shadow-lg rounded-lg mt-4 pl-4 pr-4 pb-4 pt-4"
    >
      <div className="mb-4">
        <label htmlFor="username" className="block font-medium mb-2  ">
          Username
        </label>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="w-full border-gray-400 border-solid border-2 rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block font-medium mb-2 ">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full border-gray-400 border-solid border-2 rounded-md px-3 py-2 center focus:outline-none focus:border-green-500"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white font-bold py-2 px-4 rounded"
      >
        Login
      </button>
    </form>
  );
}

export default Login;
