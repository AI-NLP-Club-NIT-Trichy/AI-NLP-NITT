import React, { useState } from 'react';
import HoverCard from './Hovercard'; // Assuming HoverCard is in the same directory

const Productivity = (props) => {
  const [hovered, setHovered] = useState(false);
  const [hovered1, setHovered1] = useState(false);

  return (
    <div className='relative max-w-[100%] mx-auto'>
      <div className='flex space-x-3 md:space-x-10'>
        <div className='flex flex-col items-center'>
          <div className='relative'>
            <HoverCard backgroundColor='#7ee787' direction='flex-col' left='0'>
              {/* Content */}
            </HoverCard>
          </div>
          <div className="h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#7ee787]" ></div>
        </div>
        <div className='md:w-10/12 mb-24'>
          <div className="text-[20px] md:text-2xl mb-7 font-medium text-white">FACULTY ADVISOR</div>
          <div className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white">
            <span className="text-[#7ee787]">Introducing The Cornerstone of our Club, our Esteemed Faculty Advisor. </span>
            Dr.(Mrs.) S. Sangeetha
          </div>
        </div>
      </div>
      {/* Other content */}
    </div>
  );
};

export default Productivity;
