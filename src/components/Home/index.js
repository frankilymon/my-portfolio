
import { Link } from 'react-router-dom';
import './index.scss';

import { useEffect, useState } from 'react';
import Animation from '../Animation';

const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['  ','F', 'r', 'a', 'n', 'k', 'l', 'i', 'n']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

useEffect(()=> {
   setTimeout(() =>{
    setLetterClass('text-animate-hover')
  }, 4000)

},[])
    return (
      <div className="container home-page">
        <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
               <br/>
               <span className={`${letterClass} _13`}>I</span>
               <span className={`${letterClass} _14`}>'m,</span>
            
            <Animation  letterClass={letterClass}
            strArray={nameArray}
            index={15}/>
            <br/>
            <Animation  letterClass={letterClass}
            strArray={jobArray}
            index={22}/>
            </h1>
            <h2>Frontend Developer / JavaScript Expert / System Administrator </h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
       
      </div>  
    );
}

export default Home