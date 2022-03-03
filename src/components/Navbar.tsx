import { AiOutlinePhone } from 'react-icons/ai';
import { FiInstagram, FiYoutube } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className='navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box max-w-[90vw] mx-auto px-3'>
      <div className='flex-none px-2 mx-2'>
        <span className='text-lg font-bold'>MATH4U</span>
      </div>
      <div className='flex-1 px-2 mx-2'>
        <div className='items-stretch hidden lg:flex'>
          <a className='btn btn-ghost btn-sm rounded-btn' href='#'>
            Home
          </a>
          <a className='btn btn-ghost btn-sm rounded-btn' href='#trial'>
            Trial
          </a>
          <a className='btn btn-ghost btn-sm rounded-btn' href='#features'>
            Features
          </a>
          <a className='btn btn-ghost btn-sm rounded-btn' href='#contact'>
            Contact
          </a>
        </div>
      </div>
      <div className='flex-none'>
        <a
          className='btn btn-square btn-ghost text-lg'
          href='https://youtube.com/math4ucbse'
        >
          <FiYoutube />
        </a>
      </div>
      <div className='flex-none'>
        <a className='btn btn-square btn-ghost text-lg' href='tel:9986390601'>
          <AiOutlinePhone />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
