import React from 'react';
import './PlansSection.css';
import { motion } from 'framer-motion';
import PlansItems from '../../Assets/PlansItems';
import PlanCard from './PlanCard';

function PlansSection() {
  return (
    <div className='bg-black text-light py-4 py-sm-5' id='plans'>
        <div className="container">
            <motion.h2
                className='section-title fw-bold text-capitalize mb-4 mb-sm-5'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Our <span className='text-purple'>plans</span>
            </motion.h2>
            <div className='row d-flex align-items-center g-4'>
                {
                    PlansItems.map((item) => <PlanCard key={item.id} itemClasses={item.itemClasses} itemIcon={item.itemIcon} iconColor={item.iconColor} itemTitle={item.itemTitle} itemPrice={item.itemPrice} firstListItem={item.firstListItem} secondListItem={item.secondListItem} thirdListItem={item.thirdListItem} btnClasses={item.btnClasses} />)
                }
            </div>
        </div>
    </div>
  )
}

export default PlansSection;