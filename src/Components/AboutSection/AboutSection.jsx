import React from 'react';
import { motion } from 'framer-motion';
import AboutImg from '../../Assets/Images/about-img.jpg';
import PurpleBtn from '../PurpleBtn/PurpleBtn';

function AboutSection() {
  return (
    <div className='bg-black text-light py-4 py-sm-5' id='about'>
        <div className="container">
            <div className='flex-column-reverse flex-lg-row row'>
                <motion.div
                    className='col-lg-6 d-flex justify-content-center'
                    initial={{ opacity: 0, x: -300 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img className='img-fluid w-75 mt-4 mt-lg-0' src={AboutImg} alt="about us img" />
                </motion.div>
                <motion.div
                    className='col-lg-6 d-flex flex-column justify-content-center align-items-start'
                    initial={{ opacity: 0, x: 350 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className='section-title text-capitalize fw-bold'>About <span className='text-purple'>us</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, voluptatum id iusto accusantium dolor reiciendis ea modi porro error! Dolor deleniti maxime, magni porro rem consequuntur rerum laboriosam eaque maiores natus iste, impedit, ad placeat! A placeat hic numquam. Vero, numquam? Amet, facere. Assumenda, autem debitis blanditiis nam ut eius?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate expedita unde veritatis animi, libero suscipit neque voluptas quibusdam nulla voluptatem voluptates ducimus eaque rem ab, repellendus vitae maxime modi voluptatum totam architecto! Repellendus ipsum error quo non deleniti amet distinctio.</p>
                    <PurpleBtn btnTitle='More about us' />
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection;