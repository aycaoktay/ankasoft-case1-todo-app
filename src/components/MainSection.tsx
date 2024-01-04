import React, { useState } from 'react';
import ToDoSection from './ToDoSection';

const MainSection = () => {
  const [currentSection, setCurrentSection] = useState('main');

  const switchToToDoSection = () => {
    setCurrentSection('todo');
  };
   

  return (
    <div className='flex  bg-gradient-to-r from-[#FFFFFF] from-%80 to-[#FFFFFF] to-%60  h-4/5 w-11/12 rounded-xl'>
      {currentSection === 'main' ? (
        <div className='flex flex-col items-center justify-center w-full'>
          <div className='font-roboto text-3xl font-semibold items-center justify-center text-black mt-5 '>
            Uygulamaya Hoş Geldiniz
          </div>
          <button
            className='font-roboto text-2xl font-semibold justify-center items-center h-full w-full text-red-500'
            onClick={switchToToDoSection}
          >
            Çalıştır
          </button>
        </div>
      ) : (
        <ToDoSection />
      )}
    </div>
  );
};

export default MainSection;
