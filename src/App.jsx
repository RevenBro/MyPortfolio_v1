import './App.css'
import Experience from './components/Experience'
import Header from './components/Header'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import About from './components/about'

function App() {
  return (
    <div className='overflow-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Header/>
        <Hero/>
        <About/>
        <Technologies/>
        <Experience/>
      </div>
    </div>
  )
}

export default App
