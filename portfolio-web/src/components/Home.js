import React from 'react';
import dp from '../assets/YashRay.jpg';

function Home() {
    return (
        <div className='text-white m-2 sm:m-4 lg:m-6'>
            <div className='neumorphic rounded-lg p-4 h-full flex flex-col md:flex-row justify-center items-center'>
                <div className='mx-2 flex flex-col justify-center w-full md:w-2/3'>
                    <div>Hi!!</div>
                    <div>I'm a Junior at Vellore Institure of Technology, Vellore</div>
                </div>
                <div className='mx-2 flex justify-center w-full md:w-1/3'>
                    <div className='neumorphic h-1/2 w-1/2 flex justify-center items-center rounded-full overflow-hidden'><div><img  className='h-1/2 w-2/3' src={dp} alt='profile-card-dp' /></div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Home;