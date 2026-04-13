import type { Metadata } from 'next'
import Link from 'next/link'
import { examSubpages } from '@/data/navigation'

export const metadata: Metadata = {
  title: 'Online Proctored Exam Help | ATI TEAS, HESI, NCLEX, NR Courses | NursingSchoolTutors',
  description: 'Online Proctored Exam Help — expert assistance for ATI TEAS, HESI A2, NCLEX, Chamberlain NR courses, GRE, GMAT, and 60+ more exams. Guaranteed pass or money back.',
}

const examTypes = [
  { icon: '🩺', name: 'ATI TEAS Proctored Exam Help', href: '/services/online-proctored-exam-help/ati-teas-proctored-exam-help' },
  { icon: '🏥', name: 'HESI A2 Proctored Exam Help', href: '/services/online-proctored-exam-help/hesi-proctored-exam-help' },
  { icon: '📋', name: 'NCLEX Exam Help', href: '/services/online-proctored-exam-help/nclex-exam-help' },
  { icon: '🎓', name: 'WGU Proctored Exam Help', href: '/services/online-proctored-exam-help/wgu-proctored-exam-help' },
  { icon: '📊', name: 'GRE Proctored Exam Help', href: '/services/online-proctored-exam-help/gre-proctored-exam-help' },
  { icon: '💼', name: 'GMAT Proctored Exam Help', href: '/services/online-proctored-exam-help/gmat-proctored-exam-help' },
  { icon: '📝', name: 'CLEP Proctored Exam Help', href: '/services/online-proctored-exam-help/clep-proctored-exam-help' },
  { icon: '🏫', name: 'Accuplacer Proctored Exam Help', href: '/services/online-proctored-exam-help/accuplacer-proctored-exam-help' },
]

export default function ProctoredExamPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link href="/">Home</Link> › <Link href="/services">Services</Link> › Online Proctored Exam Help</nav>
          <h1>Online Proctored Exam Help — Expert Support for Every Nursing Exam</h1>
          <p>ATI TEAS, HESI A2, NCLEX, Chamberlain NR courses, GRE, GMAT, and 60+ more. Certified experts, guaranteed results.</p>
          <div style={{display:'flex',gap:'14px',flexWrap:'wrap',marginTop:'24px'}}>
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 Get Help Now</a>
            <Link href="/order" className="btn btn-primary btn-lg">🎯 Free Quote</Link>
          </div>
        </div>
      </div>

      <section style={{padding:'64px 0'}}>
        <div className="container">
          <div style={{maxWidth:'820px',margin:'0 auto',marginBottom:'64px'}}>
            <span className="section-label">About This Service</span>
            <h2 className="section-title">What is Online Proctored Exam Help?</h2>
            <p style={{fontSize:'16px',color:'var(--text-light)',lineHeight:'1.8',marginBottom:'18px'}}>
              Online Proctored Exam Help refers to professional academic assistance where certified nursing tutors provide expert guidance, preparation coaching, and real-time support for your proctored examinations. Our service covers every major nursing and academic exam platform.
            </p>
            <p style={{fontSize:'16px',color:'var(--text-light)',lineHeight:'1.8',marginBottom:'18px'}}>
              Whether you are preparing for your <strong>ATI TEAS</strong> nursing school admissions test, sitting your <strong>HESI A2</strong>, completing a <strong>Chamberlain NR proctored exam</strong>, or tackling a <strong>WGU objective assessment</strong> — our team of credentialed nursing professionals is available 24/7 to ensure you achieve an A or minimum B.
            </p>
            <div style={{display:'flex',gap:'12px',flexWrap:'wrap',marginTop:'24px'}}>
              <span className="badge badge-green">✅ 98% Pass Rate</span>
              <span className="badge badge-green">🔒 100% Confidential</span>
              <span className="badge badge-gold">🏆 A or B Guaranteed</span>
              <span className="badge badge-gold">⏰ 24/7 Support</span>
            </div>
          </div>

          {/* Exam types grid */}
          <h2 className="section-title text-center">Exams We <span>Cover</span></h2>
          <div className="services-grid" style={{marginBottom:'48px'}}>
            {examTypes.map(e => (
              <Link key={e.href} href={e.href} className="exam-card">
                <span className="exam-icon">{e.icon}</span>
                <span>{e.name}</span>
                <span className="exam-arrow">→</span>
              </Link>
            ))}
          </div>

          {/* All subpages */}
          <div className="related-box">
            <h3>📚 All Chamberlain NR Proctored Exam Courses</h3>
            <p style={{color:'var(--text-light)',fontSize:'14px',marginBottom:'20px'}}>Our experts specialize in every Chamberlain NR course. Click any course below for dedicated help.</p>
            <div className="related-links">
              {examSubpages.map(p => (
                <Link key={p.slug} href={`/services/online-proctored-exam-help/${p.slug}`}>{p.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Pass Your Proctored Exam?</h2>
          <p>Our certified nursing exam experts are available right now. Get matched in 30 minutes.</p>
          <div className="cta-buttons">
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 WhatsApp Now</a>
            <Link href="/order" className="btn btn-primary btn-lg">🎯 Free Quote</Link>
            <a href="mailto:instanthelp24hr@gmail.com" className="btn btn-outline btn-lg">📧 Email Us</a>
          </div>
        </div>
      </section>
      <style>{`
        .exam-card { display:flex; align-items:center; gap:12px; padding:16px 20px; background:var(--white); border:1.5px solid var(--border); border-radius:var(--radius); font-weight:600; font-size:14px; transition:all 0.2s; }
        .exam-card:hover { background:var(--jungle-xlight); border-color:var(--jungle-green); color:var(--jungle-dark); }
        .exam-icon { font-size:22px; }
        .exam-arrow { margin-left:auto; color:var(--jungle-green); }
      `}</style>
    </>
  )
}
