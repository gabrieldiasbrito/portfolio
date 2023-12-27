import './App.css'
import About from './components/about/about'
import Intro from './components/intro/intro'
import Navbar from './components/navbar/navbar'
import Projects from './components/projects/projects'

export default function App() {

  return (
    <>
    <Navbar/>
      <div className='principal principal-color'>
        <Intro/>
      </div>
      <div className='secondary-color'>
        <About/>
      </div>
      <div className='principal-color'>
        <Projects/>
      </div>
    </>
  )
}
