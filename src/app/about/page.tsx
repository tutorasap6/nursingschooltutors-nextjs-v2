import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'About Us — NursingSchoolTutors.com | #1 Nursing Academic Help',
  description: 'Learn about NursingSchoolTutors.com — the #1 trusted nursing academic help platform. Our certified experts have helped 50,000+ students earn A\'s and B\'s since 2018.',
}
export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link href="/">Home</Link> › About Us</nav>
          <h1>About NursingSchoolTutors.com</h1>
          <p>The #1 trusted nursing academic help platform — serving 50,000+ students since 2018.</p>
        </div>
      </div>
      <section style={{padding:'64px 0'}}>
        <div className="container" style={{maxWidth:'820px'}}>
          <div style={{background:'var(--white)',border:'1.5px solid var(--border)',borderRadius:'var(--radius-lg)',padding:'48px',marginBottom:'32px'}}>
            <h2 style={{fontFamily:'var(--font-heading)',fontSize:'28px',color:'var(--jungle-dark)',marginBottom:'20px'}}>Our Mission</h2>
            <p style={{color:'var(--text-light)',lineHeight:'1.85',fontSize:'16px',marginBottom:'16px'}}>
              NursingSchoolTutors.com was founded in 2018 with a single mission: to help nursing students succeed academically without sacrificing their health, families, or sanity. Nursing school is one of the most demanding academic journeys anyone can undertake — and we believe every student deserves access to expert support.
            </p>
            <p style={{color:'var(--text-light)',lineHeight:'1.85',fontSize:'16px',marginBottom:'16px'}}>
              Our team consists exclusively of credentialed nursing professionals — registered nurses, nurse practitioners, clinical educators, and DNP/PhD-prepared faculty — who understand exactly what nursing programs demand at every level.
            </p>
            <p style={{color:'var(--text-light)',lineHeight:'1.85',fontSize:'16px'}}>
              We operate on three core principles: <strong>Confidentiality</strong> (your identity is never shared), <strong>Quality</strong> (AI-free, plagiarism-free, expert-written work), and <strong>Results</strong> (A or B guaranteed — or your money back).
            </p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:'20px',marginBottom:'32px'}}>
            {[{num:'50,000+',label:'Students Helped'},{num:'98%',label:'Pass Rate'},{num:'7+',label:'Years in Service'},{num:'5,000+',label:'Courses Covered'}].map(s=>(
              <div key={s.label} style={{background:'var(--jungle-dark)',borderRadius:'var(--radius)',padding:'24px',textAlign:'center'}}>
                <div style={{fontFamily:'var(--font-heading)',fontSize:'34px',fontWeight:900,color:'var(--gold-light)'}}>{s.num}</div>
                <div style={{fontSize:'13px',color:'rgba(255,255,255,0.65)',marginTop:'6px'}}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center',display:'flex',gap:'14px',justifyContent:'center',flexWrap:'wrap'}}>
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 Talk to Us Now</a>
            <Link href="/order" className="btn btn-green btn-lg">🎯 Get Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  )
}
