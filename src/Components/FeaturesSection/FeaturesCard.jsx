import React from 'react';
import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FeaturesCard(props) {
  return (
    <motion.div
        className='col-lg-6'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
    >
        <Card className='bg-black text-light'>
            <Card.Body className='d-flex flex-column align-items-center'>
                <FontAwesomeIcon icon={props.itemIcon} style={{ color: '#B197FC' }} />
                <Card.Title className='text-capitalize text-center fw-bold my-3'>{props.itemTitle}</Card.Title>
                <Card.Text className='text-center'>{props.itemDescription}</Card.Text>
            </Card.Body>
        </Card>
    </motion.div>
  )
}

export default FeaturesCard;