import React from 'react';
import { Feedback } from '..';
const FeedbackCard = ({ feedback }: { feedback: Feedback }) => {
  const { name, text, grade, location } = feedback;
  return (
    <div className='card text-center shadow-md my-2 px-2 overflow-hidden sm:my-px sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-[#d7d7d7] hover:bg-[#d5caca] max-w-[400px] mt-4  transition-all max-h-fit ml-[-5%]'>
      <div className='card-body'>
        <div className='flex space-x-2'>
          <h1 className='card-title'>{name}</h1>
          <h3 className='text-sm -mb-10'>Grade {grade}</h3>
        </div>
        <p>{text}</p>
        <p className='text-sm text-right mt-2'>{location}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
