import {
  AiOutlineFacebook,
  AiOutlinePhone,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='items-center p-4 footer bg-neutral text-neutral-content'>
      <div className='items-center grid-flow-col'>
        <h1 className='text-3xl'>MATH4U</h1>
        <p>2020 - {new Date().getFullYear()}</p>
      </div>
      <div className='grid-flow-col gap-4 md:place-self-center md:justify-self-end text-xl'>
        <a href='https://www.facebook.com/math4ucbse'>
          <AiOutlineFacebook />
        </a>
        <a href='http://youtube.com/math4ucbse'>
          <AiOutlineYoutube />
        </a>
        <a>
          <AiOutlinePhone href='tel:9986390601'/>
        </a>
        <a>
          <AiOutlineWhatsApp href='http://whatsapp.me/919986390601' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
