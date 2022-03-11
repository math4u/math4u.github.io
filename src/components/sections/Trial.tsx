import { SyntheticEvent, useState } from 'react';
import axios from 'axios'

const Trial = () => {
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [grade, setGrade] = useState<number>();
  const [physics, setPhysics] = useState(false);
  const [school, setSchool] = useState('');

  const onSubmit = async(e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`https://math4u-api.herokuapp.com/trial`, {
        studentName,
        parentName,
        email,
        phone,
        grade,
        physics,
        school,
      });
      console.log(data)
    } catch (err) {
      console.error(err);
      
    }
  }
  return (
    <section id='trial' className='grid place-content-center mt-4 mb-5'>
      <form className='flex flex-col space-y-2 w-96 mx-2' onSubmit={onSubmit}>
        <h1 className='mb-5 text-4xl font-bold '>Book your trial class</h1>
        <input
          type='text'
          placeholder='Name of the student'
          className='input input-bordered'
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          required
        />
        <input
          type='text'
          placeholder='Name of the parent'
          className='input input-bordered'
          value={parentName}
          onChange={(e) => setParentName(e.target.value)}
          required
        />
        <input
          type='text'
          placeholder='Email'
          className='input input-bordered'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='text'
          placeholder='School'
          className='input input-bordered'
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          required
        />
        <input
          type='tel'
          placeholder='Phone Number'
          className='input input-bordered'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <select
          className='select select-bordered w-full'
          onChange={(e) => setGrade(e.target.value as unknown as number)}
          required
        >
          <option disabled selected>
            Your Grade
          </option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>
        {grade > 8 && (
          <div className='flex'>
            <input
              type='checkbox'
              id='physicsCheckbox'
              checked={physics}
              className='checkbox checkbox-primary'
              onChange={() => setPhysics(physics => !physics)}
              required
            />
            <label htmlFor="physicsCheckbox" className='ml-3'>I want physics classes too</label>
          </div>
        )}
        <button className='btn btn-outline btn-primary'>Book my trial  !</button>
      </form>
    </section>
  );
};

export default Trial;
