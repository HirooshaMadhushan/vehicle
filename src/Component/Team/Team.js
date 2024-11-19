import React, { useState } from 'react';
import logo2 from '../../Asset/ima2.jpg';
import Card from '../Card/Card';

function Team() {
    const [data, setDetails] = useState([
        { title: "Hiroosha Madhushan", image: logo2 },
        { title: "Haritha Nmawarathna", image: logo2 },
        { title: "Nimal Kodagoda", image: logo2 },
    ]);

    return (
        <div className='flex justify-center mt-5 mb-5 dark:bg-gray-500 '>
            <div className="grid grid-cols-1 gap-4 mt-5 mb-5 sm:grid-cols-2 lg:grid-cols-3 ">
                {data.map((detail, index) => (
                    <Card key={index} data={detail} />
                ))}
            </div>
        </div>
    );
}

export default Team;
