import { useEffect, useState } from 'react'
import {
  faJava,
  faDocker,
  faGitAlt,
  faGitlab,
  faJsSquare,
  faReact, faPython,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faDocker} color="#28A4D9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJava} color="#F06529" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#F7DF1E" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faReact} color="#61DBFB" />
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
