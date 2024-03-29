import {
  AiOutlineFacebook,
  AiOutlinePhone,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from 'react-icons/ai';

const Contact = () => {
  return (
    <section className='grid place-content-center mb-10 space-y-8' id='contact'>
      <h1 className='mb-5 text-4xl font-bold text-center'>Contact</h1>
      <div className='flex flex-col sm:flex-row xs:ml-16 space-x-5 '>
        <a
          href='tel:74717362'
          className='btn max-w-fit flex flex-col space-x-2 pr-10 -pr-5 xs:text-md md:text-lg xs:mt-4 md:mt-0 xs:ml-4'
        >
          <AiOutlinePhone className='inline' />
          <span>+974 74717362</span>
        </a>
        <a
          href='https://wa.me/97474717362'
          className='btn max-w-fit flex flex-col space-x-2 pr-10 -pr-5 btn-success xs:text-md md:text-lg xs:mt-4 md:mt-0'
        >
          <AiOutlineWhatsApp className='inline' />
          <span>Whatsapp</span>
        </a>

        <a
          href='https://www.facebook.com/math4ucbse'
          className='btn max-w-fit flex flex-col space-x-2 pr-10 -pr-5 bg-blue-700 hover:bg-blue-800 xs:text-md md:text-lg xs:mt-4 md:mt-0'
        >
          <AiOutlineFacebook className='inline' />
          <span>Facebook</span>
        </a>
      </div>
      <div>
        <a href='https://youtube.com/math4ucbse' className='link text-xl'>
          Watch some demo videos on our
          <AiOutlineYoutube className='inline ml-1 mr-1 ' /> youtube channel
        </a>
      </div>
    </section>
  );
};

export default Contact;
