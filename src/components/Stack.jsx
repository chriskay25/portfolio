import React, { useState } from 'react'
import { stackData } from '../assets/data.js'
import Card from './Card'
import { motion, AnimateSharedLayout } from 'framer-motion'

const Stack = () => {
    const [selected, setSelected] = useState(false)

    const handleSelected = (id) => {
        if (selected) {
            setSelected(false)
            return
        }
        setSelected(id)
    }

    return (
        <div className='stack'>
            <motion.h2 initial={{opacity: 0, y: '40px'}} animate={{opacity: 1, y: 0}} transition={{delay: 1.3, duration: .6}}>
                MY LANGUAGES & FRAMEWORKS
            </motion.h2>
            <AnimateSharedLayout type='crossfade'>
                <motion.ul layout>
                    {stackData.map((item) => (
                        <motion.li key={item.id} onClick={() => handleSelected(item.id)} animate={selected && selected !== item.id ? {opacity: 0} : {opacity: 1}}>
                            <Card key={item.id} item={item} selected={selected === item.id} />
                        </motion.li>
                    ))}
                </motion.ul>
            </AnimateSharedLayout>
        </div>
    )
}

export default Stack