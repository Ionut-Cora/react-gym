import React from 'react';
import { motion } from 'framer-motion'
import ContactForm from './ContactForm';

function ContactSection() {
  return (
    <div className='bg-black text-light py-4 py-sm-5' id='contact'>
        <div className='container d-flex flex-column align-items-center'>
            <motion.h2
                className='section-title fw-bold text-capitalize text-center mb-4 mb-sm-5'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Contact <span className='text-purple'>us</span>
            </motion.h2>
            <ContactForm />
        </div>
    </div>
  )
}

export default ContactSection;