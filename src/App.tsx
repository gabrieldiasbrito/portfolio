import './App.css'
import About from './components/about/about'
import Intro from './components/intro/intro'
import Navbar from './components/navbar/navbar'

export default function App() {

  return (
    <>
    <Navbar/>
      <div className='principal'>
        <Intro/>
      </div>
      <div className='secondary'>
        <About/>
      </div>
    </>
  )
}
