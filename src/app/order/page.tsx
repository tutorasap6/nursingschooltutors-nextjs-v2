import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '../contact/ContactForm'

export const metadata: Metadata = {
  title: 'Order Now — Free Quote | NursingSchoolTutors.com',
  description: 'Get a free quote for nursing exam help, online class assistance, or AI-free writing help. WhatsApp: +1(765)470-9090. Response in 30 minutes.',
}

export default function OrderPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link href="/">Home</Link> › Order Now — Free Quote</nav>
          <h1>🎯 Order Now — Get Your Free Quote in 30 Minutes</h1>
          <p>Tell us what you need. We'll match you with a certified nursing expert and send a no-obligation quote fast.</p>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',marginTop:'16px'}}>
            <span className="badge badge-gold">🏆 A or B Guaranteed</span>
            <span className="badge badge-gold">🔒 100% Confidential</span>
            <span className="badge badge-gold">⏰ 30-Min Response</span>
            <span className="badge badge-gold">💰 Money-Back Guarantee</span>
          </div>
        </div>
      </div>
      <section style={{padding:'64px 0',background:'var(--off-white)'}}>
        <div className="container" style={{maxWidth:'720px'}}>
          <ContactForm />
          <div style={{textAlign:'center',marginTop:'28px',padding:'24px',background:'var(--white)',borderRadius:'var(--radius)',border:'1.5px solid var(--border)'}}>
            <p style={{fontWeight:700,color:'var(--text)',marginBottom:'12px'}}>Prefer to reach us directly?</p>
            <div style={{display:'flex',gap:'12px',justifyContent:'center',flexWrap:'wrap'}}>
              <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp">💬 WhatsApp +1(765)470-9090</a>
              <a href="mailto:instanthelp24hr@gmail.com" className="btn btn-green">📧 instanthelp24hr@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
