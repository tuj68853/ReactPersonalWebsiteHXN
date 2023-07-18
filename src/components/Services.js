import React from 'react';
//icon
import { BsArrowUpRight } from 'react-icons/bs';
import { BsPatchCheckFill } from 'react-icons/bs';
//motion
import { AnimateSharedLayout, motion } from 'framer-motion'
//variants
import { fadeIn } from '../variants'
//styling
import './services.css'


const Services = () => {
  return (
    <section className='section' id='services'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Developement</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Tailwind</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </article>

            
          </div>
        </div>
        <div className='experience__backend'>

        </div>
      </div>
    </section>
  );
};

export default Services;
