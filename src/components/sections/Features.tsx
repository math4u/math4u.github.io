import { Feature } from '../../index';
import FeatureCard from '../FeatureCard';
import { FaGlobe, FaLaptop, FaPen } from 'react-icons/fa';
import { BiCalculator } from 'react-icons/bi';

const Features = () => {
  const features: Feature[] = [
    {
      title: 'Accessibility',
      description: 'Attend the classes from anywhere in the world.',
      icon: <FaGlobe />,
    },
    {
      title: 'Review',
      description: 'Review and evaluation after each chapter.',
      icon: <BiCalculator />,
    },
    {
      title: 'Classes can be attended via',
      description: 'any device.',
      icon: <FaLaptop />,
    },
    {
      title: 'Every concept',
      description: 'are explained in whiteboard for better understanding.',
      icon: <FaPen />,
      centerStyle: true
    },
  ];
  return (
    <section className='grid place-content-center mt-4' id='features'>
      <h1 className='mb-5 text-4xl font-bold text-center'>Features</h1>
      <div className='flex flex-wrap overflow-hidden xl:space-x-5 align-middle  sm:space-y-3 md:space-x-2 justify-center mr-8 sm:mr-0 mx-auto'>
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;