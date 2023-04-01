import React from 'react'
import athlete from '../images/Frame 13.png'
import knowathletefooter from '../images/knowAthleteFooter.png'
import {ReactComponent as Icon} from '../images/Vector.svg'
import {useNavigate} from 'react-router-dom'
const KnowAthlete = () => {
    const navigate = useNavigate();

    const navigateRegistrationPage = () => {
      // 👇️ navigate to /profiles
      navigate('/registration');
    };
  return (
    <div className='sm:w-full sm:h-full md:w-full md:h-full lg:w-full lg:h-full sm:text-center'>
       <p className='bg-[#22354D] md:px-8 lg:px-24 sm:text-1xl text-white md:text-4xl font-bold text-center md:mt-2 mb-8 md:mb-12 p-24'>
            Get to know our athletes
        </p> 
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm overflow-hidden md:max-w-2xl sm:max-w-2xl sm:text-center">
            <div className="md:flex">
                <div className="p-8">
                <h1 className="block mt-1 leading-tight font-medium md:text-2xl sm:text-2xl text-center md:text-center sm:tetx-center text-black">Select an athlete</h1>
                <p className="mt-2 text-gray-500 text-center md:text-center sm:text-center">Awesome Name provides its services to athletes of track and field events. To find out about our available 
                athletes please select the event  you are interested in below.</p>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-center mt-6 md:mt-6 sm:mt-6 lg:mt-6">
  <div class="relative">
    <select class="block appearance-none bg-gray-50 border border-gray-400 hover:border-purple-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
      <option disabled selected>Please Select</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 14l-5-5h10l-5 5z"/></svg>
    </div>
  </div>
  
  <div class="relative ml-6">
    <select class="block appearance-none bg-gray-50 border border-gray-400 hover:border-purple-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
      <option disabled selected>Please Select</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 14l-5-5h10l-5 5z"/></svg>
    </div>
  </div>
</div>


</div>


  )
}

export default KnowAthlete