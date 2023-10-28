import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext';

const About = () => {
  const { message } = useContext(AuthContext);

  return (
    <div className='m-80 text-5xl'>{message}</div>
  )
}

export default About