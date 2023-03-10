import React, { useState } from 'react';
import axios from 'axios';
// import DateTimePicker from "react-datetime-picker";

function Post() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState(null);
  const [time, setTime] = useState(null);
  
  // useEffect(() => {
  //   const dateInput = document.getElementById('time');
  //   dateInput.addEventListener('input', (e) => {
  //     const selectedDate = new Date(e.target.value);
  //     const year = selectedDate.getFullYear().toString().slice(2);
  //     const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
  //     const day = selectedDate.getDate().toString().padStart(2, '0');
  //     const formattedDate = `${year}-${month}-${day}`;
  //     e.target.value = formattedDate;
  //   });
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);
    formData.append('description', description)
    formData.append('time', time);

    try {
      await axios.post('http://127.0.0.1:8000/api/events/create/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Post created successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to create post.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Text:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="time" className="block mb-2 text-gray-700 font-bold">
          Time
        </label>
        {/* <div>
          <DateTimePicker
           id="time"
           name="time"
           type="date"
          // onChange={handleChange}
          value={time}
          onChange={(e) => setTime(e.target.value)}
          format="MM-dd-yyyy"
          />
        </div> */}
        <input
          type="datetime"
          id="time"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <button type="submit">Create Post</button>
    </form>

    
  );
}

export default Post;
