import React from 'react';
//icon
import { BsPatchCheckFill } from 'react-icons/bs';
//motion
import { AnimateSharedLayout, motion } from 'framer-motion'
//variants
import { fadeIn } from '../variants'


const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex flex-col lg:flex-col'>

          <div>
            <h4 className='h2 text-accent'>
              What skills I have
            </h4>
          </div>

          <article className='flex items-start mb-4 sm:mb-0 sm:mr-4'>
            <BsPatchCheckFill className='flex-shrink-0' /> {/* Use 'flex-shrink-0' to prevent the icon from shrinking */}
            <div className='ml-4'>
              <h2 className='mb-1 text-gradient btn-link'>HTML</h2> {/* Use 'mb-1' to add some bottom margin */}
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='flex items-start mb-4 sm:mb-0 sm:mr-4'>
            <BsPatchCheckFill className='flex-shrink-0' />
            <div className='ml-4'>
              <h2 className='mb-1 text-gradient btn-link'>CSS</h2>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='flex items-start mb-4 sm:mb-0 sm:mr-4'>
            <BsPatchCheckFill className='flex-shrink-0' />
            <div className='ml-4'>
              <h2 className='mb-1 text-gradient btn-link'>Bootstrap</h2>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className='flex items-start mb-4 sm:mb-0 sm:mr-4'>
            <BsPatchCheckFill className='flex-shrink-0' />
            <div className='ml-4'>
              <h2 className='mb-1 text-gradient btn-link'>Tailwind</h2>
              <small className='text-light'>Beginer</small>
            </div>
          </article>

          <article className='flex items-start mb-4 sm:mb-0 sm:mr-4'>
            <BsPatchCheckFill className='flex-shrink-0' />
            <div className='ml-4'>
              <h2 className='mb-1 text-gradient btn-link'>React</h2>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
