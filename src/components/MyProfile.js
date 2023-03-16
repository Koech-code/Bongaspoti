import React, {useState, useEffect} from 'react'

const MyProfile = () => {
    const [profile, setProfile] = useState([])
    



    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/profiles/allprofiles/', {
            method: 'GET',
            headers: {
              Authorization: `Token ${localStorage.getItem('token')}`,
            }
        })
          .then((res) => res.json())
          .then((data) => setProfile(data))
          .catch((err) => console.log(`Error: ${err}`));
      }, []);
    // fetch('http://127.0.0.1:8000/api/feed', {
    
    // method: 'GET',
    // headers: {
    //   Authorization: `Token ${localStorage.getItem('token')}`,
    // }
    // })
    // .then((response) => response.json())
    // .then((data) => {
    //     console.log(data);
    //     setTweets(data);
    // })
    // .catch((err) => {
    //     console.log(err.message);
    // });

  return (
    <div>
         {profile.map((item)=>{
            return(
                <div key={item.id}>
                    <p>{item.First_name}</p>
                    <p>{item.Last_name}</p>
                </div>
            )
         })}
    </div>
  )
}

export default MyProfile