import React from 'react'
import { motion } from 'framer-motion';
import Blocks from '../components/MemoryBlocks/Blocks';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
};

const MemoryBlocks = () => {
  return (
    <motion.div 
    variants={pageVariants} 
    initial="initial" 
    animate="animate" 
    exit="exit"
  >
    <div className={`schema `}>
      <Blocks />
    </div>
  </motion.div>
  )
}

export default MemoryBlocks