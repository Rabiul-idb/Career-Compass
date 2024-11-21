import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Service = () => {

    const [allData, setAllData] = useState([]);
   useEffect(()=>{
    fetch('/serviceData.json')
    .then(response => response.json())
    .then(data => setAllData(data))
    .catch(error => console.error(error));
   },[])
    
     
    


    return (
        <div className='mt-24 pb-24 w-11/12 mx-auto'>
            <div className='text-center mb-8'>
                <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl  text-black mb-4
                '>Our Services for your Career</h2>
                <p className='text-base text-gray-600 font-semibold '>Our services are designed to help you achieve your career goals. We offer a range<br className='hidden md:block'></br>
                    of services that cater to different needs and preferences.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            
            {
                allData.map((data)=> <ServiceCard cardData = {data}></ServiceCard>)
            }
        </div>
        </div>
    );
};

export default Service;