import type { Metadata } from 'next'
import Link from 'next/link'
import { classSubpages } from '@/data/navigation'

export const metadata: Metadata = {
  title: 'Pay Someone to Do My Online Class — Nursing Courses | NursingSchoolTutors',
  description: 'Pay someone to do your online nursing class. We cover all Chamberlain NR courses, BSN, MSN, DNP programs. Guaranteed A or B. AI-free, confidential, 24/7.',
}

export default function PayMyClassPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link href="/">Home</Link> › <Link href="/services">Services</Link> › Pay Someone to Do My Online Class</nav>
          <h1>Pay Someone to Do My Online Class — All Nursing Courses Covered</h1>
          <p>Our certified nursing tutors manage your entire online class — every discussion, assignment, quiz, and exam. Guaranteed A or minimum B.</p>
          <div style={{display:'flex',gap:'14px',flexWrap:'wrap',marginTop:'24px'}}>
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 WhatsApp Now — Get Help</a>
            <Link href="/order" className="btn btn-primary btn-lg">🎯 Get Free Quote</Link>
          </div>
        </div>
      </div>
      <section style={{padding:'64px 0'}}>
        <div className="container">
          <div style={{maxWidth:'820px',margin:'0 auto 48px'}}>
            <span className="section-label">Full Course Takeover</span>
            <h2 className="section-title">What Is <span>Pay Someone to Do My Online Class?</span></h2>
            <p style={{fontSize:'16px',color:'var(--text-light)',lineHeight:'1.8',marginBottom:'16px'}}>
              This service connects you with a certified nursing academic expert who takes over all coursework responsibilities in your online nursing class. From weekly discussions to proctored finals — our tutors handle everything, submitting work on time and ensuring your grade target is met.
            </p>
            <p style={{fontSize:'16px',color:'var(--text-light)',lineHeight:'1.8',marginBottom:'24px'}}>
              We specialize in <strong>Chamberlain College of Nursing</strong> NR courses, WGU, Capella, SNHU, Liberty University, and dozens of other nursing programs. Our work is 100% AI-free, plagiarism-free, and completely confidential.
            </p>
          </div>
          <div className="related-box">
            <h3>📚 Courses We Cover — Pay Someone to Do My Online Class</h3>
            <div className="related-links">
              {classSubpages.map(p => (
                <Link key={p.slug} href={`/services/pay-someone-to-do-my-online-class/${p.slug}`}>{p.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>Have Someone Ace Your Online Class Today</h2>
          <p>Get matched with a certified nursing tutor in 30 minutes. Guaranteed A or B.</p>
          <div className="cta-buttons">
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 WhatsApp Now</a>
            <Link href="/order" className="btn btn-primary btn-lg">🎯 Free Quote</Link>
            <a href="mailto:instanthelp24hr@gmail.com" className="btn btn-outline btn-lg">📧 Email Us</a>
          </div>
        </div>
      </section>
    </>
  )
}
