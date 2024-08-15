import React from 'react';
import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

function PlanCard(props) {
  return (
    <motion.div
        className='col-lg-4'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
    >
        <Card className={props.itemClasses}>
            <Card.Body className='d-flex flex-column align-items-center justify-content-center'>
                <FontAwesomeIcon icon={props.itemIcon} size='2xl' style={{ color: `${props.iconColor}` }} />
                <h4 className='fw-bold mt-2'>{props.itemTitle}</h4>
                <h3 className='fw-bold text-dark'>£{props.itemPrice}</h3>
                <ul className='list-unstyled'>
                    <li>
                        <FontAwesomeIcon icon={faSquareCheck} /> {props.firstListItem}
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faSquareCheck} /> {props.secondListItem}
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faSquareCheck} /> {props.thirdListItem}
                    </li>
                </ul>
                <button className={props.btnClasses}>Join now</button>
            </Card.Body>
        </Card>
    </motion.div>
  )
}

export default PlanCard;