import Hero from '../sections/Hero/Hero'

function Home() {
  return (
    <main className="site-shell">
      <Hero />
      <section className="sr-only" id="work">Selected work</section>
      <section className="sr-only" id="contact">Contact Hriday</section>
    </main>
  )
}

export default Home
