import React, { useState, useEffect } from 'react';
import { HeartIcon, ChatIcon, PlusIcon, ShareIcon, PhotographIcon } from '@heroicons/react/outline';

const GetPosts = () => {
    const [tweets, setTweets] = useState([])

    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => setIsOpen(!isOpen);

    const [content, setContent] = useState('');


    fetch('http://127.0.0.1:8000/api/feed', {
    
    method: 'GET',
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
    }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        setTweets(data);
    })
    .catch((err) => {
        console.log(err.message);
    });
    

  return (
    <div>
        <div className="flex flex-wrap">
        {tweets.map((item)=>{
            return(
                <div key={item.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                <div >
                    <h2 className="text-lg font-medium mb-2">{item.content}</h2>
                  </div>
                  <button class="bg-blue-500 hover:bg-blue-700 text-white hover:text-white font-bold py-2 px-4 rounded-full flex items-center">
                    <svg xmlns="http:www.w3.org/2000/svg" class="h-6 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                    </svg>
                    <span>Follow</span>
                  </button>
       
                </div>
                <img src={item.image} alt="event" />
                <video src={item.video} controls></video>
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
                             <svg xmlns="http:www.w3.org/2000/svg" onClick={togglePopup} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                               <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                             </svg>
                           </div>
                         </div>
                         <form 
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
            )
        })}
</div>
    </div>
  )
}

export default GetPosts












// import React, {useEffect, useState} from 'react'

// const GetPosts = () => {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         fetch('http://127.0.0.1:8000/api/feed')
//            .then((response) => response.json())
//            .then((data) => {
//               console.log(data);
//               setPosts(data);
//            });
//      }, []);

//   return (
//     <div className="posts-container">
//       {posts.map((post) => {
//          return (
//             <div className="post-card" key={post.id}>
//                <h2 className="post-title">{post.content}</h2>
//                {/* <p className="post-body">{post.body}</p> */}
//                <img src={post.image}/>
//                <video src={post.video} height='50%' width='50%' controls/>
//                <div className="button">
//                <div className="delete-btn">Delete</div>
//                </div>
//             </div>
//          );
//       })}
//    </div>
//   )
// }

// export default GetPosts