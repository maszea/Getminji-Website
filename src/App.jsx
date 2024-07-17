import './index.css'
import TopNav from './components/TopNav'
import Hero from './components/Hero'
import Why from './components/WhyUse'
import Footer from './components/Footer'

function App() {
  return (
      <>
          <section id={"TOPMENU"}>
              <TopNav/>
          </section>
          <section id={"HERO"}>
              <Hero/>
          </section>
          <section id={"WHY"}>
              <Why/>
          </section>
          <section id={"FOOTER"}>
              <Footer/>
          </section>
      </>
  )
}

export default App
