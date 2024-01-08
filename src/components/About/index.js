import './index.scss'
import Loader from 'react-loaders'
import Animation from '../Animation'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <Animation
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              index={15}
            />
          </h1>
          <p>
            As an exceptionally motivated front-end developer, I'm searching for
            a position in an IT company where I can use modern technology to
            work on engaging and diverse projects.
          </p>
          <p>
            I'm self-assured, inherently curious and perpetually honing my
            design problem-solving abilities.
          </p>
          <p>
            I'm highly adaptable, detail-oriented, and communicative. I consider
            myself to be a good team player. Although working alone is not a
            problem for me, I much rather collaborate on projects.
          </p>
          <p>
            I constantly look for fresh, independent ways to advance in my
            position. The purpose of these possibilities is to enhance my level
            of professional competency. One way to do this might be to attend a
            symposium, begin a new project, or undergo training.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#dd0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default About
