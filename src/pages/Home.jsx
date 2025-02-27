import React from 'react'
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
};

const Home = () => {
  return (
    <motion.div 
      variants={pageVariants} 
      initial="initial" 
      animate="animate" 
      exit="exit"
    >
      <div className={`schema`}>Home</div>
    </motion.div>
  )
}

export default Home













// import React , { useState }  from 'react'
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux';
// import {Toggle} from '../store/redux/actions/productsActions'
// import {useMySelectors} from '../hooks/useMySelectors'

// const Home = () => {
//   // *######### start API
//   // State to store the message from the API
//   const [message, setMessage] = useState('');

//   // Function to fetch data from the SchemaServer API
//   const fetchMessage = async () => {
//     try {
//       // Fetch data from the SchemaServer API
//       const response = await fetch('http://localhost:3000/api/message');
//       const data = await response.json(); // Parse the JSON response
//       setMessage(data.message); // Set the message in state
//     } catch (error) {
//       console.error('Error fetching message:', error);
//     }
//   };
//   // *######### End API
//   // *######### start Data Handling
//   //* GIT DATA
//   const { Istoggle, myData } = useMySelectors();
//   //* USE DATA & CHANGE
//   const dispatch = useDispatch();
//   const handleUpdate = () => {
//     dispatch(Toggle(!Istoggle));
//   };
//   // *######### end Data Handling 
//   // *######### start Elements 
//   return (
//     <div className='schema flex-col flex-center'>
//           <Link to={'/about'}>
//             <button className='btn cursor-pointer' onClick={handleUpdate}>{myData}</button>
//           </Link>
//           <div>
//             <h1 className=''>React and Express API Integration</h1>
//             <button className='btn' onClick={fetchMessage}>Get Message from API</button>
//             <p>{message}</p> {/* Display the fetched message */}
//           </div>
//     </div>
//   )
//   // *######### end Elements 
// }

// export default Home

