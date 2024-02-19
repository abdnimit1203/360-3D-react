import React from 'react';
import VideoCard from '../components/VideoCard';
import Image360card from '../components/Photo360/Image360card';
import Chair3D from '../components/Extra/Chair3D';

const Home = () => {
    return (
        <div>
           <h2 className='text-xl text-secondary font-bold'>HomePage</h2> 
           <div className=''>
            <Image360card/>
           </div>
           <div>
            <VideoCard/>
           </div>

           <div>
            hello
            <Chair3D/>
           </div>
        </div>
    );
};

export default Home;