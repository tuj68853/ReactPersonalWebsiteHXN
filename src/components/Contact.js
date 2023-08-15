import React from 'react';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//emailjs
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ifwblik', 'template_k81l711', form.current, '9tuFkzesYMgrfhMzb')
    e.target.reset()
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justifying-start items-center'>
            <div>
              <h4 className='text-x1 uppercase text-accent font-medium mb-2
              tracking-wide'>
                Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>

          {/* form */}
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2x1 flex flex-col gap-y-6 
          pb-24 p-6 items-start'
            ref={form}
            onSubmit={sendEmail}>
            <input
              className='bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all'
              name="name"
              type='text'
              placeholder='Your name'
              required
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all'
              name="email"
              type='text'
              placeholder='Your email'
              required
            />
            <textarea className='bg-transparent border-b py-12 outline-none w-full
              placeholder:text-white focus:border-accent transition-all
              resize-none mb-12'
              name="message"
              placeholder='Your message'
              required
            ></textarea>

            <button className='btn btn-lg'>Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
