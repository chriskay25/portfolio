import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Card = ({ item, selected }) => {
    return (
        <>
            <motion.div className='card' layoutId={item.id}>
                <motion.h4 layoutId={item.name}>{item.name}</motion.h4>
                <motion.img layoutId={item.img} src={item.img} alt={item.alt} />
            </motion.div>
            <AnimatePresence>
                {selected && (
                    <motion.div className='selected-card' layoutId={item.id}>
                        <motion.img src={item.img} alt={item.alt} layoutId={item.img} />
                        <motion.span layoutId={item.name}>{item.name}</motion.span>
                        <div>{item.description}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Card