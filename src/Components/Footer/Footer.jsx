import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className='bg-black text-light py-3'>
        <motion.p
            className='text-center m-0'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            Copyright &copy; 2024 - All rights reserved
        </motion.p>
    </footer>
  )
}

export default Footer;