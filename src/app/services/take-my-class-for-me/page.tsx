import type { Metadata } from 'next'
import Link from 'next/link'
import { takeMeSubpages } from '@/data/navigation'

export const metadata: Metadata = {
  title: 'Take My Class For Me — Full MSN, DNP, FNP, PA, MPH Course Takeover | NursingSchoolTutors',
  description: 'Take My Class For Me service for Chamberlain MSN, DNP, FNP, PA, MPH, and MSW programs. Our certified nursing experts handle every assignment, discussion, quiz, and exam. A or B guaranteed.',
}

const tracks = [
  { icon: '🩺', name: 'MSN Core Courses', desc: 'NR-581 through NR-586 — full MSN foundation takeover' },
  { icon: '🎓', name: 'DNP Program Courses', desc: 'DNP project, practicum, and all doctoral coursework' },
  { icon: '👩‍⚕️', name: 'Family Nurse Practitioner (FNP)', desc: 'NR-566, NR-601, NR-602, NR-603, NR-667 and more' },
  { icon: '🧠', name: 'Psychiatric-Mental Health NP', desc: 'PMHNP track — NR-546 through NR-668' },
  { icon: '🏥', name: 'Nurse Executive Track', desc: 'NR-531 through NR-534 and concluding experiences' },
  { icon: '📊', name: 'Nurse Educator Track', desc: 'NR-524, NR-535, NR-536, NR-537 and capstones' },
  { icon: '🌍', name: 'Population Health Track', desc: 'NR-538 through NR-612 population health series' },
  { icon: '💻', name: 'Nursing Informatics Track', desc: 'NR-541 through NR-643 informatics specialty' },
  { icon: '🩻', name: 'PA Program (MPAS)', desc: 'Chamberlain PA-501 through PA-650 full program' },
  { icon: '🏛️', name: 'MPH Public Health Courses', desc: 'MPH-500 through MPH-620 public health program' },
  { icon: '🤝', name: 'MSW Social Work Courses', desc: 'MSW-541 through MSW-555 social work program' },
  { icon: '📚', name: 'RN to BSN Completion', desc: 'NR-351, NR-305, NR-439, NR-451 and all BSN courses' },
]

export default function TakeMyClassPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> › <Link href="/services">Services</Link> › Take My Class For Me
          </nav>
          <h1>Take My Class For Me — Full Nursing Course Takeover, Guaranteed A or B</h1>
          <p>From MSN to DNP to FNP — our certified nursing experts take over your entire course. Every assignment, discussion, quiz, and proctored exam handled professionally.</p>
          <div style={{display:'flex',gap:'14px',flexWrap:'wrap',marginTop:'24px'}}>
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 WhatsApp — Start Now</a>
            <Link href="/order" className="btn btn-primary btn-lg">🎯 Get Free Quote</Link>
          </div>
        </div>
      </div>

      <section style={{padding:'64px 0', background:'var(--white)'}}>
        <div className="container">
          <div style={{maxWidth:'820px', margin:'0 auto 56px'}}>
            <span className="section-label">Full Course Help</span>
            <h2 className="section-title">What Does <span>"Take My Class For Me"</span> Mean?</h2>
            <p style={{fontSize:'16px',color:'var(--text-light)',lineHeight:'1.8',marginBottom:'16px'}}>
              When you hire us to take your class for you, one of our certified nursing academic experts is assigned exclusively to your course. They log in, complete every piece of coursework, and ensure you receive an A or minimum B — without you lifting a finger.
            </p>
            <p style={{fontSize:'16px',color:'var(--text-light)',lineHeight:'1.8',marginBottom:'16px'}}>
              This includes weekly discussion posts, reflection papers, case studies, proctored exams, group projects, practicum logs, and your final. All work is 100% AI-free, original, plagiarism-checked, and submitted before deadlines.
            </p>
            <p style={{fontSize:'16px',color:'var(--text-light)',lineHeight:'1.8',marginBottom:'24px'}}>
              We cover all <strong>Chamberlain University</strong> graduate and undergraduate programs, including MSN, DNP, FNP, PMHNP, AGACNP, AGPCNP, Nurse Executive, Nurse Educator, Nursing Informatics, PA (MPAS), MPH, and MSW tracks.
            </p>
            <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
              <span className="badge badge-green">✅ A or B Guaranteed</span>
              <span className="badge badge-green">🔒 100% Confidential</span>
              <span className="badge badge-gold">🧬 AI-Free Content</span>
              <span className="badge badge-gold">⏰ 24/7 Expert Available</span>
              <span className="badge badge-green">💰 Money-Back Guarantee</span>
            </div>
          </div>

          {/* Track cards */}
          <h2 className="section-title text-center mb-8">Programs <span>We Cover</span></h2>
          <div className="tracks-grid">
            {tracks.map(t => (
              <div key={t.name} className="track-card">
                <span className="track-icon">{t.icon}</span>
                <div>
                  <h3>{t.name}</h3>
                  <p>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* All subpages */}
          <div className="related-box" style={{marginTop:'56px'}}>
            <h3>📚 All Take My Class For Me — Course Pages</h3>
            <p style={{color:'var(--text-light)',fontSize:'14px',marginBottom:'20px'}}>
              Click any course below for dedicated help pages with specific information, pricing, and expert matching.
            </p>
            <div className="related-links">
              {takeMeSubpages.map(p => (
                <Link key={p.slug} href={`/services/take-my-class-for-me/${p.slug}`}>{p.label}</Link>
              ))}
            </div>
          </div>

          {/* Budget guide */}
          <div style={{background:'var(--jungle-dark)',borderRadius:'var(--radius-lg)',padding:'40px',marginTop:'40px',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'24px'}}>
            <div style={{gridColumn:'1/-1'}}>
              <h3 style={{fontFamily:'var(--font-heading)',color:'var(--white)',fontSize:'22px',marginBottom:'6px'}}>💡 Typical Budget Ranges</h3>
              <p style={{color:'rgba(255,255,255,0.6)',fontSize:'14px'}}>All prices in USD. Final quote depends on program level, duration, and urgency.</p>
            </div>
            {[
              {label:'4–6 Week Short Course', range:'$200 – $400'},
              {label:'8-Week Standard Course', range:'$400 – $700'},
              {label:'Graduate / MSN Course', range:'$700 – $1,200'},
              {label:'DNP / Doctoral Level', range:'$1,200+'},
            ].map(b => (
              <div key={b.label} style={{background:'rgba(255,255,255,0.06)',borderRadius:'var(--radius)',padding:'18px',border:'1px solid rgba(255,255,255,0.1)'}}>
                <div style={{fontSize:'13px',color:'rgba(255,255,255,0.6)',marginBottom:'6px'}}>{b.label}</div>
                <div style={{fontFamily:'var(--font-heading)',fontSize:'22px',color:'var(--gold-light)',fontWeight:700}}>{b.range}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Let Us Take Your Nursing Class — You Focus on Your Life</h2>
          <p>Get matched with a certified nursing expert in 30 minutes. A or B guaranteed, or money back.</p>
          <div className="cta-buttons">
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 WhatsApp Now</a>
            <Link href="/order" className="btn btn-primary btn-lg">🎯 Get Free Quote</Link>
            <a href="mailto:instanthelp24hr@gmail.com" className="btn btn-outline btn-lg">📧 Email Us</a>
          </div>
        </div>
      </section>

      <style>{`
        .tracks-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:20px; }
        .track-card { display:flex; gap:16px; align-items:flex-start; padding:22px; background:var(--white); border:1.5px solid var(--border); border-radius:var(--radius); transition:all 0.2s; }
        .track-card:hover { border-color:var(--jungle-green); box-shadow:var(--shadow-sm); }
        .track-icon { font-size:28px; flex-shrink:0; }
        .track-card h3 { font-family:var(--font-heading); font-size:15px; color:var(--jungle-dark); margin-bottom:4px; }
        .track-card p { font-size:13px; color:var(--text-light); line-height:1.5; }
      `}</style>
    </>
  )
}
