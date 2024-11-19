import React, { useState } from 'react';
import logo2 from '../../Asset/ima2.jpg';
import logo3 from '../../Asset/logo3.jpg';
import logo4 from '../../Asset/logo4.jpg'
import Card from './Card';

export default function Cardchild() {
    const [details, setDetails] = useState([
        { title: "Noteworthy technology ", image: logo2 },
        { title: "New Advances in AI Technology", image: logo3 },
        { title: "Revolutionary Tech in 2022", image: logo4 },
        
    ]);

    return (
        
        <div>
            <div className="flex items-center justify-center mt-6 text-3xl font-bold">
                <span className="mr-1 text-red-500">Our</span>
                <span className="text-black">Services</span>
            </div>



            <div className='flex justify-center m-6 mt-5 mb-5 bg-white rounded-lg rouded-md'>
        <div className="grid gap-4 mt-5 mb-5 x grd-cols-1 itsems-center sm:grid-cols-2 lg:grid-cols-3">
            {details.map((detail, index) => (
                <Card key={index} data={detail} />
            ))}
            </div>
        </div>
        </div>
    );
}

