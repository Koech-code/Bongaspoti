import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import DateTimePicker from "react-datetime-picker";
import HomePage from './HomePage';
import { HeartIcon, ChatIcon, PlusIcon, ShareIcon, PhotographIcon } from '@heroicons/react/outline';

function Post() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState(null);
  const [time, setTime] = useState(null);
  
  
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => setIsOpen(!isOpen);

  const [events, setEvents] = useState([]);
  const [content, setContent] = useState('');

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
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
  
      });

      alert('Post created successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to create post.');
    }
  };

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/events/all-events/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEvents(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  return (
    
    <div>
      <div>

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
      </div>
      <div>
      <div className="flex flex-wrap">
       {events.map((item) => (
         <div key={item.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
           <div className="bg-white rounded-lg shadow-lg">
             <div className="p-4">
               <div className="grid grid-cols-2 gap-4">
               <div >
                   <h2 className="text-lg font-medium mb-2">{item.title}</h2>
                 </div>
                 <button class="bg-blue-500 hover:bg-blue-700 text-white hover:text-white font-bold py-2 px-4 rounded-full flex items-center">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                   </svg>
                   <span>Follow</span>
                 </button>
       
               </div>
               <img src={`http://127.0.0.1:8000${item.image}`} alt="event" />
               <div class="bg-white rounded-lg shadow-lg flex p-10 justify-between ">
                 <div >
                 <p className="text-gray-700 self-start">{item.description}</p>
                 </div>
                 <div>
                   <p className="text-gray-700 self-end">{item.timestamp}</p>
                 </div>
               </div>
               <div className='grid grid-cols-3'>
                 <a>
                   <HeartIcon className='box-content h-7 w-12 p-4 border-none'/>
                 </a>
                 {/* <button
       
                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                 >
                   Open Popup
                 </button> */}
                 {/* <a href='/comment'> */}
       
                   <ChatIcon className='box-content h-7 w-12 p-4 border-none cursor-pointer' onClick={togglePopup}/>
       
                   {isOpen && (
                     <div className="fixed inset-0 flex items-center justify-center">
                       <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
                       <div className="bg-white rounded-lg p-8 z-10">
                         <div className='flex justify-between'>
       
                           <div className='self-start'>
                             <h2 className="text-2xl font-bold mb-4">Comment Post</h2>
                           </div>
                           <div className='self-end pb-8'>
                             <svg xmlns="http://www.w3.org/2000/svg" onClick={togglePopup} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                               <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                             </svg>
                           </div>
                         </div>
                         <form onSubmit={handleSubmit}
       >
                         <input
                           type="text"
                           name="comment"
                           placeholder='Add comment...'
                           onChange={(e) => setContent(e.target.value)}
                           required
                           className="w-full border-gray-400 border-solid border-2 rounded-md px-3 py-2 mb-4"
                         />
                         <button
                           // onClick={togglePopup}
                           type='submit'
                           className="bg-blue-500 hover:bg-blue-700 text-white hover:text-white cursor-pointer font-bold py-2 px-4 rounded"
                         >
                           Comment
                         </button>
                         </form>
                       </div>
                     </div>
                   )}
                 {/* </a> */}
                 <a>
                   <ShareIcon className='box-content h-7 w-12 p-4 border-none'/>
                 </a>
               </div>
             </div>
           </div>
         </div>
       ))}
         
           </div>

      </div>
    </div>
 
   
    
    
  );
}

export default Post;
