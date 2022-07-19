import React from 'react';
import { Feedback } from '../..';
import FeedbackCard from '../FeedbackCard';
const Feedbacks = () => {
  const feedbacks: Feedback[] = [
   
    {
      name: 'Aliza Shad',
      text: 'Lots of improvement in maths after tuition  very nice teacher',
      grade: 9,
      location: 'Qatar',
    },
    {
      name: 'Shishir Rao',
      text: 'I like the teaching method.Conducting chapterwise tests and revision classes has been very useful.',
      grade: 9,
      location: 'Qatar',
    },
    {
      name: 'Parent of Mamata Menon',
      text: "Great teaching , Mamata has improved a lot in Math after she started training with you ma'am.Thank you.",
      grade: 9,
      location: 'Bangalore',
    },

    {
      name: 'Parent of Esha Anna Alex',
      text: 'Really happy with your guidance and support towards Esha. Your regular tests also helps to keep her on her toes.',
      grade: 8,
      location: 'Bangalore',
    },
    {
      name: 'Abel Sunny',
      text: "I didn't use to be a person who found Math Interesting and didn't put any effort to it though it was a hard subject for me. But After joining Math4u I feel math's is easier and now i have the interest to learn it. Thank you For Helping !",
      grade: 10,
      location: 'Bangalore',
    },
    {
      name: 'Parent of Shea Mascarenhas',
      text: "She explains till every student understands, gives extra sums for practice,  makes the class lively,  gives many examples, motivates the children to interact so that the doubts can be cleared. Shea has been under her guidance from the 8th grade and we can see the difference in her",
      grade: 10,
      location: 'Bangalore',
    },
  ];
  return (
    <div className='flex align-middle justify-center flex-col mt-4 ' id='testimonials'>
      <h1 className='mb-5 text-4xl font-bold text-center'>Testimonials</h1>
      <h3 className='text-xl mb-8 text-center'>
         See how our students feel after attending MATH4U
      </h3>
      <div
        className='flex flex-wrap  mx-auto xl:space-x-5 align-middle sm:justify-center xs:ml-5 xs:mr-0 sm:space-y-3 md:space-x-2' 
      >
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback.name} feedback={feedback} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;