import React, { useState } from 'react'
import data from '../assets/data.js'
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
            <h2>My Software Stack</h2>
            <AnimateSharedLayout type='crossfade'>
                <motion.ul animate={selected ? {blur: '4px'} : {blur: 0}} layout>
                    {data.map((item) => (
                        <li key={item.id} onClick={() => handleSelected(item.id)}>
                            <Card key={item.id} item={item} selected={selected === item.id} />
                        </li>
                    ))}
                </motion.ul>
            </AnimateSharedLayout>
        </div>
    )
}

export default Stack