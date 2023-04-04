import React, { useState, useEffect } from 'react';
import {HeartIcon, ChatIcon, PlusIcon, ShareIcon, PhotographIcon } from '@heroicons/react/outline';
import {Video} from '@styled-icons/entypo/Video'
import GetPosts from './GetPosts';

import axios from 'axios';

const HomePage = () => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);  

  function handleImageSelection(event) {
    setImage(event.target.files[0]);
  }  

  function handleVideoSelection(evt){
    setVideo(evt.target.files[0])
  }
   
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('content', content);
    formData.append('image', image);
    formData.append('video', video);
 
    
    try {
      await axios.post('http://127.0.0.1:8000/api/feed/create/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      });

      alert('Post created successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to create post.');
    }
  };

   return (
    
     <div id="container">
       <div className="home">
        <form onSubmit={handleSubmit}>
        <div className="bg-white shadow-lg rounded-lg p-6 m-4">
        <input
          className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full focus:outline-none focus:border-blue-500"
          type="text"
          onChange={(evt) => setContent(evt.target.value)}
          placeholder="Lets know what you need to share with the world..."
        />
        <div className="flex justify-between">
          <div className="flex">
          <div className="relative rounded-full h-8 w-8">
              <PhotographIcon className="absolute inset-0 h-full w-full text-blue-600" />
              <input
                type="file"
                onChange={handleImageSelection}
                className="absolute inset-0 h-full w-full opacity-0 cursor-pointer"
              />
          </div>
          <div className="relative rounded-full h-8 w-8">
             <Video className="absolute inset-0 h-full w-full text-blue-600" />
             <input
               type="file"
               onChange={handleVideoSelection}
               className="absolute inset-0 h-full w-full opacity-0 cursor-pointer"
             />
          </div>
          </div>
          <button type='submit' className="p-2 text-sm bg-blue-600 hover:bg-white-700 text-white font-bold py-2 px-4 rounded">
            Tweet
          </button>
        </div>
           </div>
           </form>
         </div>
         <GetPosts/>
     </div>    
   );
 };
 
 export default HomePage;
 