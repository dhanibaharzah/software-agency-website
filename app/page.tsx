const services = [
  { number: '01', title: 'Product strategy', text: 'We turn ambitious ideas into focused roadmaps, sharp positioning, and products people actually want to use.' },
  { number: '02', title: 'Design & experience', text: 'Interfaces with a point of view. Every interaction considered, every detail earning its place.' },
  { number: '03', title: 'Engineering', text: 'Fast, resilient digital products built with modern web technology and a relentless eye for quality.' },
]

const work = [
  { type: 'Fintech / Product', title: 'The future of treasury, in one clear view.', name: 'Morrow', className: 'work-morrow' },
  { type: 'Health / Platform', title: 'Making complex care feel human.', name: 'Northstar', className: 'work-northstar' },
  { type: 'Culture / Brand', title: 'A new signal for the next generation.', name: 'Luma', className: 'work-luma' },
]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span className={diagonal ? 'arrow arrow-diagonal' : 'arrow'} aria-hidden="true">→</span>
}

export default function Page() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Northstar home"><span className="brand-mark">+</span> NORTHSTAR<span className="brand-dot">.</span></a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a>
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk <Arrow /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker"><span className="pulse-dot" /> Independent digital studio <span className="kicker-year">EST. 2014</span></div>
        <h1>We build the<br /><em>next</em> <span className="outline-word">chapter.</span></h1>
        <div className="hero-bottom">
          <p className="hero-intro">Northstar is a software house for teams ready to move with intention. We make digital products, brands, and experiences that create meaningful momentum.</p>
          <a className="circle-link" href="#work" aria-label="Explore selected work"><span>↓</span><small>SCROLL TO<br />EXPLORE</small></a>
        </div>
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><div className="hero-cross cross-one">+</div><div className="hero-cross cross-two">+</div>
      </section>

      <section className="ticker" aria-label="Studio capabilities"><div>Strategy</div><span>✳</span><div>Design</div><span>✳</span><div>Technology</div><span>✳</span><div>Momentum</div><span>✳</span><div>Strategy</div></section>

      <section className="section work-section" id="work">
        <div className="section-heading"><div><span className="eyebrow">01 / SELECTED WORK</span><h2>Built for<br /><em>impact.</em></h2></div><p className="section-note">A few things we&apos;ve helped bring into the world.<br />Good work starts with a good question.</p></div>
        <div className="work-grid">{work.map((item, index) => <a className={`work-card ${item.className}`} href="#contact" key={item.name}><div className="work-art"><span className="work-index">0{index + 1}</span><span className="work-name">{item.name}</span><div className="art-shape" /></div><div className="work-meta"><div><span>{item.type}</span><h3>{item.title}</h3></div><Arrow diagonal /></div></a>)}</div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading"><div><span className="eyebrow">02 / WHAT WE DO</span><h2>Small team.<br /><em>Big range.</em></h2></div><p className="section-note">From the first sketch to the final deploy, we stay close to the work and closer to the outcome.</p></div>
        <div className="service-list">{services.map((service) => <article className="service-row" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><Arrow diagonal /></article>)}</div>
      </section>

      <section className="manifesto" id="about"><div className="manifesto-stamp">N<span>✳</span>S<br />/ 10</div><p>We believe the best work lives<br />at the intersection of <em>clarity</em><br />and <strong>curiosity.</strong></p><div className="manifesto-line" /></section>

      <section className="section contact-section" id="contact"><div className="contact-label"><span className="eyebrow">03 / START A CONVERSATION</span><span className="contact-count">Have a project in mind?</span></div><h2>Let&apos;s make<br /><em>something</em><br />matter.</h2><a className="contact-button" href="mailto:hello@northstar.studio">hello@northstar.studio <Arrow diagonal /></a></section>

      <footer className="site-footer"><a className="brand" href="#top"><span className="brand-mark">+</span> NORTHSTAR<span className="brand-dot">.</span></a><p>Digital products for a changing world.</p><div className="footer-links"><a href="#work">Instagram</a><a href="#work">LinkedIn</a><a href="mailto:hello@northstar.studio">Email</a></div><span className="copyright">© 2025 Northstar Studio</span></footer>
    </main>
  )
}

export const metadata = undefined
