import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './components/sections/Contact';
import Features from './components/sections/Features';
import Feedbacks from './components/sections/Feedbacks';
import Trial from './components/sections/Trial';

const App = () => {
  const [showTitle, setShowTitle] = useState(false);
 

  setTimeout(() => {
    setShowTitle(true);
  }, 1000);
  return (
    <div>
      <Navbar />
      <div className='hero min-h-[400px] bg-base-200'>
        <div>
          <div className='text-center'>
            <div
              className={`${
                !showTitle ? 'opacity-0' : 'opacity-100'
              } transition-all`}
            >
              <h1 className='mb-5 text-6xl font-bold'>MATH4U</h1>
              <p className='mb-5 text-xl'>  
                Where your attitude towards math changes
              </p>
              <p className='mb-5 text-2xl'>
                Online mathematics coaching for grades 8 9 & 10 [CBSE]
              </p>
            </div>
            <a className='btn btn-primary' href='#trial'>
              Book your trial class
            </a>
          </div>
        </div>
      </div>
      <span className='divider' />
      <Feedbacks />
      <span className='divider' />
      <Features />
      <span className='divider' />
      <Trial />
      <span className='divider' />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
