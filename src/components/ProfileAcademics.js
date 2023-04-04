import React, {useState} from 'react'
import '../css/styles.css';

const ProfileAcademics = () => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => setIsOpen(!isOpen);


  return (
    // <div>ProfileAcademics</div>
    <div className="wrapper">
             <button
                type="submit"
                onClick={togglePopup}
                className="bg-green-500 text-white font-bold w-full m-4 rounded"
                >
                Pay to upload
            </button>
        {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            <div className="bg-white rounded-lg p-8 z-10 m-4">
              <div className='flex justify-between'>

                <div className='self-start'>
                  <h2 className="text-2xl font-bold mb-4 text-green-700">Lipa na M-pesa</h2>
                </div>
                <div className='self-end pb-8'>
                  <svg xmlns="http:www.w3.org/2000/svg" onClick={togglePopup} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer text-red-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <form>
              <span className='font-bold'>Amount</span><input
                type="number"
                name="amount"
                placeholder='1000'
                // onChange={(e) => setContent(e.target.value)}
                readOnly
                className="w-full border-none focus:outline-none rounded-md px-3 font-semibold py-2 mb-4 placeholder-purple-400"
              />
              
              <input
                type="number"
                name="pay"
                placeholder='0745441222'
                // onChange={(e) => setContent(e.target.value)}
                required
                className="w-full border-gray-400 focus:outline-none focus:border-green-500 border-solid border-2 rounded-md px-3 py-2 mb-4"
              />
               <div class="flex justify-center items-center h-full">
               <button
                // onClick={togglePopup}
                type='submit'
                className="bg-green-500 hover:bg-green-700 text-white hover:text-white cursor-pointer font-bold w-full py-1 rounded"
              >
                Pay
              </button>
               </div>
             
              </form>
            </div>
          </div>
        )}
    </div>

    
  )
}

export default ProfileAcademics