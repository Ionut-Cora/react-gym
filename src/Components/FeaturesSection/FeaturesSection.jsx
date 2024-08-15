import React from 'react';
import './FeaturesSection.css';
import { motion } from 'framer-motion';
import FeaturesItems from '../../Assets/FeaturesItems';
import FeaturesCard from './FeaturesCard';

function FeaturesSection() {
  return (
    <div className='bg-black text-light py-4 py-sm-5' id='features'>
        <div className="container">
            <motion.h2
                className='section-title text-center text-capitalize fw-bold mb-4 mb-sm-5'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Our <span className='text-purple'>features</span>
            </motion.h2>
            <div className='row g-4'>
                {
                    FeaturesItems.map((item) => <FeaturesCard key={item.id} itemIcon={item.itemIcon} itemTitle={item.itemTitle} itemDescription={item.itemDescription} />)
                }
            </div>
        </div>
    </div>
  )
}

export default FeaturesSection;