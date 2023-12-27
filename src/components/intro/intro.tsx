import './Intro.css'
import { PiGithubLogoBold, PiLinkedinLogoBold  } from "react-icons/pi";
import Picture from '../../img/profile-pic.png'
import Html from '../../img/html.png'
import CSS from '../../img/css.png'
import JS from '../../img/js.png'
import TS from '../../img/ts.png'
import React from '../../img/react.png'
import Native from '../../img/native.png'

function Intro() {

  return (
    <div className='intro-container'>
      <div className='intro'>
        <img src={Picture}/>
        <div>
          <h1>Front-end Developer👋</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neque erat, ultrices vitae nisi in, consequat facilisis ligula.</p>
          <div className='icons'>
            <a href=""><PiGithubLogoBold/></a>
            <a href=""><PiLinkedinLogoBold/></a>
          </div>
        </div>
      </div>
      <br />
      <div className='stack'>
        <h3>Tech Stack</h3>
        <div className='test'>
          <figure>
            <img src={Html} />
            <p>HTML</p>
          </figure>
          <figure>
            <img src={CSS} />
            <p>CSS</p>
          </figure>
          <figure>
            <img src={JS} />
            <p>Javascript</p>
          </figure>
          <figure>
            <img src={TS} />
            <p>Typescript</p>
          </figure>
          <figure>
            <img src={React} />
            <p>React.js</p>
          </figure>
          <figure>
            <img src={Native} />
            <p>React Native</p>
          </figure>
        </div>
        </div>
    </div>
  )
}

export default Intro
