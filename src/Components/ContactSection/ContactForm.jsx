import React from 'react';
import './ContactForm.css';
import Form from 'react-bootstrap/Form';
import { motion } from 'framer-motion';
import PurpleBtn from '../PurpleBtn/PurpleBtn';

function ContactForm() {
  return (
    <motion.form
        className='contact-form'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
    >
        <Form.Group className='mb-3'>
            <Form.Label className='text-capitalize'>Full name</Form.Label>
            <Form.Control className='rounded-0' type='text' />
        </Form.Group>
        <Form.Group className='mb-3'>
            <Form.Label className='text-capitalize'>Email address</Form.Label>
            <Form.Control className='rounded-0' type='email' />
        </Form.Group>
        <Form.Group className='mb-3'>
            <Form.Label className='text-capitalize'>Your message</Form.Label>
            <Form.Control className='rounded-0' as='textarea' rows={3} />
        </Form.Group>
        <PurpleBtn btnTitle='Submit' />
    </motion.form>
  )
}

export default ContactForm;