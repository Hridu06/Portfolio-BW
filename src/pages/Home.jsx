import Hero from '../sections/Hero/Hero'
import './Home.css'

const capabilities = [
  ['01', 'Frontend systems', 'Maintainable interfaces built with React, semantic HTML, and modern CSS.'],
  ['02', 'Responsive craft', 'Layouts that feel intentional across phones, tablets, and large screens.'],
  ['03', 'Product thinking', 'Clear visual hierarchy and interaction details that support real user goals.'],
]

function Home() {
  return (
    <main>
      <Hero />
      <section className="capabilities" id="capabilities" aria-labelledby="capabilities-title">
        <div className="section-intro">
          <p className="section-label">What I focus on</p>
          <h2 id="capabilities-title">Digital experiences that are clear, quick, and built to last.</h2>
        </div>
        <div className="capability-list">
          {capabilities.map(([number, title, description]) => (
            <article className="capability" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
