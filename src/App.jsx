import { useState } from "react";
import { companyConfig } from "./config";

const products = [
  { id:"01", name:"BOPP Bag", image:"/products/bopp-bag.svg", summary:"A presentation-friendly carry-bag format for business packaging requirements.", details:"BOPP bags are designed for applications where a clean product presentation and practical carrying solution are important." },
  { id:"02", name:"D Cut Bag", image:"/products/d-cut-bag.svg", summary:"A simple, convenient handle format for everyday carrying.", details:"D Cut bags use a die-cut handle opening and offer a straightforward carry solution for retail and general business requirements." },
  { id:"03", name:"Handle Bag", image:"/products/handle-bag.svg", summary:"Handled carry bags focused on convenience and easy movement.", details:"Handle bags provide an integrated carrying area and can be used across a range of retail and business packaging needs." },
  { id:"04", name:"W Cut Bag", image:"/products/w-cut-bag.svg", summary:"A flexible carry-bag format for varied business requirements.", details:"W Cut bags provide a practical bag shape with a W-style handle opening for convenient handling." },
  { id:"05", name:"Box Bag", image:"/products/box-bag.svg", summary:"A structured format with useful capacity for business packaging.", details:"Box bags are shaped to provide a more structured base and useful volume for carrying packaged goods." },
  { id:"06", name:"Stitching Bag", image:"/products/stitching-bag.svg", summary:"A stitched construction for practical, demanding handling.", details:"Stitching bags use stitched construction and are suited to requirements where a more reinforced bag format is preferred." },
  { id:"07", name:"Canvas Jute Bag", image:"/products/canvas-jute-bag.svg", summary:"A reusable-looking natural-fabric option for business and brand use.", details:"Canvas and jute bags offer a natural, reusable presentation and can be considered for promotional, retail and general carrying needs." }
];

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="site-header">
    <div className="container nav-wrap">
      <a className="brand" href="#top" onClick={close}><span className="brand-mark">{companyConfig.shortName}</span><span><strong>{companyConfig.name}</strong><small>ENTERPRISES</small></span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
      <nav className={`nav ${open ? "open" : ""}`} aria-label="Primary navigation">
        <a href="#about" onClick={close}>About</a><a href="#products" onClick={close}>Products</a><a href="#business" onClick={close}>Why Us</a><a href="#contact" onClick={close}>Contact</a>
        <a className="nav-cta" href="tel:${companyConfig.phone}">Call Us</a>
      </nav>
    </div>
  </header>;
}

function ProductCard({ product, onDetails }) {
  return <article className="product-card">
    <div className="product-image-wrap"><img src={product.image} alt={product.name} loading="lazy" /><span className="product-number">{product.id}</span></div>
    <div className="product-info"><h3>{product.name}</h3><p>{product.summary}</p><button className="details-link" onClick={() => onDetails(product)}>View details <span>→</span></button></div>
  </article>;
}

function App() {
  const [selected, setSelected] = useState(null);
  return <>
    <div id="top" />
    <Header />
    <main>
      <section className="hero">
        <div className="hero-shape shape-one" /><div className="hero-shape shape-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Reliable. Practical. Built for business.</p>
            <h1>Carry solutions that <em>work as hard</em> as your business.</h1>
            <p className="hero-text">MAA Bala Sundri Enterprises provides carry bags for industrial, manufacturing, retail and wholesale business requirements. With over 8 years in the industry, we understand the importance of practical packaging solutions.</p>
            <div className="hero-actions"><a className="btn btn-primary" href="#products">Explore Products <span>→</span></a><a className="btn btn-light" href="#contact">Get in touch</a></div>
            <div className="trust-row"><span><b>8+</b> Years Experience</span><span><b>7</b> Bag Solutions</span><span><b>2</b> Locations</span></div>
          </div>
          <div className="hero-art" aria-hidden="true"><img src="/products/hero-bags.svg" alt="" /></div>
        </div>
      </section>

      <section className="intro section" id="about">
        <div className="container intro-grid">
          <div><p className="eyebrow">About us</p><h2>Everything you need to keep your business <em>moving.</em></h2></div>
          <div className="intro-copy"><p>We’re here to make sure you have the right carry-bag solution for your day-to-day business. Our range serves industrial, manufacturing, retail and wholesale requirements.</p><p>With <strong>8+ years in the industry</strong>, MAA Bala Sundri Enterprises brings experience and a straightforward approach to carry-bag requirements.</p></div>
        </div>
      </section>

      <section className="products section" id="products">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">Our products</p><h2>A product range for <em>business needs.</em></h2></div><p>Browse the seven carry-bag categories offered by MAA Bala Sundri Enterprises. Select a product to view its overview.</p></div>
          <div className="product-grid">{products.map(p => <ProductCard key={p.id} product={p} onDetails={setSelected} />)}</div>
        </div>
      </section>

      <section className="business section" id="business">
        <div className="container">
          <div className="business-heading"><p className="eyebrow">Why work with us</p><h2>Experience that understands <em>your business.</em></h2></div>
          <div className="business-grid"><article><span>01</span><h3>Industry experience</h3><p>More than 8 years of experience in the carry-bag industry.</p></article><article><span>02</span><h3>Multiple formats</h3><p>Seven product categories to cover different packaging requirements.</p></article><article><span>03</span><h3>Two locations</h3><p>Connect with us in Naraingarh, Ambala or Gharaunda, Karnal.</p></article></div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="container contact-grid">
          <div className="contact-copy"><p className="eyebrow">Contact us</p><h2>Let’s find the right <em>bag for your need.</em></h2><p>Have a requirement or want to discuss products? Reach out to us.</p><a className="phone" href="tel:+918571958200">{companyConfig.phoneDisplay} <span>→</span></a><a className="email" href="mailto:{companyConfig.email}">mbsenterprises15@gmail.com</a></div>
          <div className="locations">
            <article className="location"><span className="location-no">01</span><h3>{companyConfig.addresses[0].label}</h3><p>{companyConfig.addresses[0].lines.map((line, i) => <span key={i}>{line}{i < companyConfig.addresses[0].lines.length - 1 && <br />}</span>)}</p></article>
            <article className="location"><span className="location-no">02</span><h3>{companyConfig.addresses[1].label}</h3><p>{companyConfig.addresses[1].lines.map((line, i) => <span key={i}>{line}{i < companyConfig.addresses[1].lines.length - 1 && <br />}</span>)}</p></article>
            <div className="gst"><span>GST Registration</span><strong>{companyConfig.gst}</strong></div>
          </div>
        </div>
      </section>
    </main>
    <footer className="footer"><div className="container footer-inner"><div className="brand footer-brand"><span className="brand-mark">MBS</span><span><strong>MAA Bala Sundri</strong><small>ENTERPRISES</small></span></div><p>Carry bag solutions for businesses.</p><a href="#top">Back to top ↑</a></div></footer>
    {selected && <div className="modal-backdrop" role="presentation" onClick={() => setSelected(null)}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="product-title" onClick={e => e.stopPropagation()}><button className="modal-close" aria-label="Close" onClick={() => setSelected(null)}>×</button><img src={selected.image} alt={selected.name} /><p className="eyebrow">Product {selected.id}</p><h2 id="product-title">{selected.name}</h2><p>{selected.details}</p><a className="btn btn-primary" href="#contact" onClick={() => setSelected(null)}>Enquire about this product →</a></div></div>}
  </>;
}

export default App;