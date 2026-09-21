import { useState } from "react";
import { companyConfig } from "./config";

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="site-header"><div className="container nav-wrap">
    <a className="brand" href="#top" onClick={close}><span className="brand-mark">{companyConfig.shortName}</span><span><strong>{companyConfig.name}</strong><small>{companyConfig.legalSuffix}</small></span></a>
    <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
    <nav className={`nav ${open ? "open" : ""}`} aria-label="Primary navigation">
      <a href="#about" onClick={close}>About</a><a href="#capabilities" onClick={close}>Capabilities</a><a href="#products" onClick={close}>Products</a><a href="#business" onClick={close}>Why Us</a><a href="#contact" onClick={close}>Contact</a>
      <a className="nav-cta" href={`tel:${companyConfig.phone}`}>Call Us</a>
    </nav>
  </div></header>;
}

function ProductCard({product,onDetails}) {
  return <article className="product-card"><div className="product-image-wrap"><img src={product.image} alt={product.name} loading="lazy"/><span className="product-number">{product.id}</span></div><div className="product-info"><h3>{product.name}</h3><p>{product.summary}</p><button className="details-link" onClick={()=>onDetails(product)}>View details <span>→</span></button></div></article>;
}

function App() {
  const [selected,setSelected]=useState(null);
  const c=companyConfig;
  return <>
    <div id="top"/><Header/>
    <main>
      <section className="hero"><div className="hero-shape shape-one"/><div className="hero-shape shape-two"/><div className="container hero-grid">
        <div className="hero-copy"><p className="eyebrow">Reliable. Practical. Built for business.</p><h1>Carry solutions that <em>work as hard</em> as your business.</h1><p className="hero-text">{c.description} With over {c.experienceYears} years in the industry, we understand the importance of practical packaging solutions.</p><div className="hero-actions"><a className="btn btn-primary" href="#products">Explore Products <span>→</span></a><a className="btn btn-light" href="#contact">Get in touch</a></div><div className="trust-row"><span><b>{c.experienceYears}</b> Years Experience</span><span><b>{c.stats.productSolutions}</b> Bag Solutions</span><span><b>{c.stats.locations}</b> Locations</span></div></div>
        <div className="hero-art"><img src="/products/hero-bags.svg" alt="Carry bag product range"/></div>
      </div></section>

      <section className="intro section" id="about"><div className="container intro-grid"><div><p className="eyebrow">{c.about.eyebrow}</p><h2>{c.about.heading}</h2></div><div className="intro-copy">{c.about.paragraphs.map((p,i)=><p key={i}>{p}</p>)}</div></div></section>

      <section className="business section" id="capabilities"><div className="container"><div className="business-heading"><p className="eyebrow">What we do</p><h2>Packaging support built around <em>your requirements.</em></h2></div><div className="business-grid">
        <article><span>01</span><h3>Customization</h3><p>Customized sizes, colours and designs can be discussed for specific business requirements.</p></article>
        <article><span>02</span><h3>Printing & Branding</h3><p>Printing and branding options are available for business identity and product presentation.</p></article>
        <article><span>03</span><h3>Lamination</h3><p>Laminated bag solutions are part of the wider product offering, including BOPP applications.</p></article>
        <article><span>04</span><h3>Manufacturing Infrastructure</h3><p>The existing company profile describes automatic bag-making, printing and fabric-lamination capabilities.</p></article>
        <article><span>05</span><h3>Quality Focus</h3><p>A dedicated quality-control function is described as part of the company's operating setup.</p></article>
        <article><span>06</span><h3>Packaging & Dispatch</h3><p>Storage and packaging facilities support order handling and delivery requirements.</p></article>
      </div></div></section>

      <section className="products section" id="products"><div className="container"><div className="section-heading"><div><p className="eyebrow">Our products</p><h2>A product range for <em>business needs.</em></h2></div><p>Explore the configured product catalogue. Product specifications can be added centrally as verified information becomes available.</p></div><div className="product-grid">{c.products.map(p=><ProductCard key={p.id} product={p} onDetails={setSelected}/>)}</div></div></section>

      <section className="intro section"><div className="container intro-grid"><div><p className="eyebrow">Quality & applications</p><h2>Flexible solutions across <em>multiple applications.</em></h2></div><div className="intro-copy"><p>Products can support retail, corporate, promotional, industrial, manufacturing and general packaging applications.</p><p>Customization can include size, colour, design, printing, branding and lamination depending on the selected bag format.</p><p>For exact material, dimensions, thickness/GSM, capacity and minimum-order requirements, contact the company for product-specific confirmation.</p></div></div></section>

      <section className="business section" id="business"><div className="container"><div className="business-heading"><p className="eyebrow">Why work with us</p><h2>Experience that understands <em>your business.</em></h2></div><div className="business-grid"><article><span>01</span><h3>Industry experience</h3><p>More than {c.experienceYears} years of carry-bag industry experience.</p></article><article><span>02</span><h3>Multiple formats</h3><p>{c.stats.productSolutions} configured product solutions covering varied packaging needs.</p></article><article><span>03</span><h3>Two locations</h3><p>Connect in {c.addresses[0].label} or {c.addresses[1].label}.</p></article></div></div></section>

      <section className="contact section" id="contact"><div className="container contact-grid"><div className="contact-copy"><p className="eyebrow">Contact us</p><h2>Let’s find the right <em>bag for your need.</em></h2><p>Share your product, quantity or customization requirement with us.</p><a className="phone" href={`tel:${c.phone}`}>{c.phoneDisplay} <span>→</span></a><a className="email" href={`mailto:${c.email}`}>{c.email}</a><a className="btn btn-primary" href={`https://wa.me/${c.whatsapp.replace(/\D/g,"")}`} target="_blank" rel="noreferrer">WhatsApp Enquiry →</a></div><div className="locations">{c.addresses.map((a,i)=><article className="location" key={a.label}><span className="location-no">0{i+1}</span><h3>{a.label}</h3><p>{a.lines.map((line,j)=><span key={j}>{line}{j<a.lines.length-1&&<br/>}</span>)}</p></article>)}<div className="gst"><span>GST Registration</span><strong>{c.gst}</strong></div></div></div></section>
    </main>
    <footer className="footer"><div className="container footer-inner"><div className="brand footer-brand"><span className="brand-mark">{c.shortName}</span><span><strong>{c.name}</strong><small>{c.legalSuffix}</small></span></div><p>{c.tagline}</p><a href="#top">Back to top ↑</a></div></footer>
    {selected&&<div className="modal-backdrop" onClick={()=>setSelected(null)}><div className="modal" role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()}><button className="modal-close" aria-label="Close" onClick={()=>setSelected(null)}>×</button><img src={selected.image} alt={selected.name}/><p className="eyebrow">Product {selected.id}</p><h2>{selected.name}</h2><p>{selected.details}</p><a className="btn btn-primary" href="#contact" onClick={()=>setSelected(null)}>Enquire about this product →</a></div></div>}
  </>;
}
export default App;