import Image from 'next/image';
import React from 'react';
import fastFood from '../../../../public/About/fast-food.png'
import healthFood from '../../../../public/About/diet.png'
import { BsArrowRightShort } from "react-icons/bs";
const About = () => {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 bg-[#032836] p-5 text-white'>
            <div className='py-5 flex justify-center items-center'>
                <Image width={300} height={300} className='w-full h-full animate-pulse' src={'https://i.postimg.cc/8Pj2zMfs/Burger.png'} alt=''></Image>
            </div>
            <div className='space-y-4 py-5'>
                <h3 className='text-xl font-semibold text-orange-600'>About Us</h3>
                <h3 className='text-4xl font-semibold leading-relaxed '>Where quality food meet Excellent service.</h3>
                <p className='leading-relaxed font-semibold'>Seamlessly conceptualize sticky functionalities after prospective data. Interactively unleash customized supply chains whereas goal oriented paradigm.</p>
                <div className='flex justify-between gap-5'>
                    <div className=' rounded-xl border p-5 space-y-3'>
                        <Image width={50} height={50} src={fastFood} alt='Fast Food'></Image>
                        <h3 className=' text-xl font-semibold'>Fast Foods</h3>
                        <p>Health foods are nutrient-Dense Foods</p>
                    </div>
                    <div className='rounded-xl border p-5 space-y-3'>
                    <Image width={50} height={50} src={healthFood} alt='Fast Food'></Image>
                    <h3 className='text-xl font-semibold'>Healthy Foods</h3>
                    <p className='leading-relaxed'>Health foods are nutrient-Dense Foods</p>
                    </div>
                </div>
                 <button className="group flex gap-0.5 py-2.5 px-8 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 duration-500 transition-all   text-white">
                      <span className="group-hover:translate-x-3 duration-500">
                      About More
                      </span>
                      <BsArrowRightShort className="w-6 h-6 group-hover:translate-x-3 duration-500" />
                    </button>
            </div>
        </div>
    );
};

export default About;