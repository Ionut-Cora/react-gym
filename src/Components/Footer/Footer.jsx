import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Footer() {
  const [newDate, setNewDate] = useState('');
  useEffect(() => {
    let todayDate = new Date();
    let todayYear = todayDate.getFullYear();
    setNewDate([todayYear])
  }, []);

  return (
    <footer className='bg-black text-light py-3'>
        <motion.p
            className='text-center m-0'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            Copyright &copy; 2024-{newDate} / Designed by <a className='text-white text-decoration-none' href="https://www.ionutcora.com/" target="_blank" rel="noopener noreferrer">Ionut Cora</a>
        </motion.p>
    </footer>
  )
}

export default Footer;