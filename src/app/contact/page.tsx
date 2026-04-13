import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us — Get Free Quote | NursingSchoolTutors.com',
  description: 'Contact NursingSchoolTutors for a free quote on nursing exam help, online class assistance, or AI-free writing. WhatsApp: +1(765)470-9090 | Email: instanthelp24hr@gmail.com',
}

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><a href="/">Home</a> › Contact Us</nav>
          <h1>Get Your Free Quote — We Respond in 30 Minutes</h1>
          <p>WhatsApp, email, or fill out the form below. Expert help matching starts immediately.</p>
        </div>
      </div>
      <section style={{padding:'64px 0', background:'var(--off-white)'}}>
        <div className="container">
          <div className="contact-grid">
            <ContactForm />
            <div className="contact-info-box">
              <h3>Reach Us Directly</h3>
              <div className="ci-item">
                <span className="ci-icon">💬</span>
                <div>
                  <strong>WhatsApp — Fastest Response</strong>
                  <p>Available 24/7. Typical reply in under 5 minutes.</p>
                  <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp" style={{marginTop:'10px'}}>+1 (765) 470-9090 — Chat Now</a>
                </div>
              </div>
              <div className="ci-item">
                <span className="ci-icon">📧</span>
                <div>
                  <strong>Email Support</strong>
                  <p>We reply within 30 minutes.</p>
                  <a href="mailto:instanthelp24hr@gmail.com" style={{color:'var(--gold)',fontWeight:700}}>instanthelp24hr@gmail.com</a>
                </div>
              </div>
              <div className="ci-item"><span className="ci-icon">⏰</span><div><strong>24/7 — Every Day</strong><p>Never closed. Day, night, weekends, holidays.</p></div></div>
              <div className="ci-item"><span className="ci-icon">🔒</span><div><strong>100% Confidential</strong><p>Your identity is never shared. Bank-grade encryption.</p></div></div>
              <div className="ci-item"><span className="ci-icon">🏆</span><div><strong>A or B Grade Guaranteed</strong><p>Or your money back. No questions asked.</p></div></div>
              <div className="budget-ref">
                <h4>💡 Typical Budget Ranges (USD)</h4>
                <div className="budget-ref-grid">
                  <div><div>📋 Single Assignment</div><strong>$20 – $80</strong></div>
                  <div><div>📝 Exam Prep Help</div><strong>$50 – $200</strong></div>
                  <div><div>💻 Full Online Class</div><strong>$150 – $600</strong></div>
                  <div><div>🎓 Full Course Takeover</div><strong>$300 – $1,000+</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 40px; align-items: start; }
        .contact-info-box { background: var(--jungle-dark); border-radius: var(--radius-lg); padding: 36px; color: rgba(255,255,255,0.82); }
        .contact-info-box h3 { font-family: var(--font-heading); color: var(--white); font-size: 22px; margin-bottom: 24px; }
        .ci-item { display: flex; gap: 14px; margin-bottom: 22px; padding-bottom: 22px; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .ci-item:last-of-type { border-bottom: none; }
        .ci-icon { font-size: 24px; flex-shrink: 0; }
        .ci-item strong { display: block; color: var(--white); margin-bottom: 4px; font-size: 15px; }
        .ci-item p { font-size: 13px; color: rgba(255,255,255,0.65); margin-bottom: 0; }
        .budget-ref { background: rgba(255,255,255,0.07); border-radius: 12px; padding: 18px; margin-top: 4px; }
        .budget-ref h4 { color: var(--gold-light); font-size: 13px; margin-bottom: 12px; }
        .budget-ref-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 12px; color: rgba(255,255,255,0.7); }
        .budget-ref-grid strong { color: var(--gold-light); display: block; }
        @media(max-width:900px) { .contact-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  )
}
