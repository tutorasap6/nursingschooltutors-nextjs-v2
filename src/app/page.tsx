import type { Metadata } from 'next'
import Link from 'next/link'
import TestimonialsFlip from '@/components/ui/TestimonialsFlip'

export const metadata: Metadata = {
  title: 'Nursing School Tutors | Proctored Exam Help | Take My Online Class | AI-Free Writing',
  description: 'Pay someone to do your Nursing Online Assignments, Proctored Exams, Online Class, ATI Nursing, HESI, TEAS, and more. Guaranteed A\'s or minimum B. AI-free, plagiarism-free, 24/7.',
}

const services = [
  { icon: '🏛️', title: 'Online Proctored Exam Help', desc: 'Expert support for ATI TEAS, HESI, NCLEX, Chamberlain NR courses, GRE, GMAT & 60+ more exams. Guaranteed pass or money back.', href: '/services/online-proctored-exam-help', color: '#004B49' },
  { icon: '💻', title: 'Pay Someone For My Online Class', desc: 'We handle your entire Chamberlain NR course — assignments, quizzes, discussions & final exams. Guaranteed A or B.', href: '/services/pay-someone-to-do-my-online-class', color: '#006B68' },
  { icon: '📚', title: 'Take My Class For Me', desc: 'Full MSN, DNP, FNP, PA & MPH course takeover. Certified experts earn your grade while you focus on what matters.', href: '/services/take-my-class-for-me', color: '#00948F' },
  { icon: '✍️', title: 'AI-Free Writing Assignment Help', desc: 'Zero plagiarism, zero AI. PICOT, Capstone projects, DNP dissertations, care plans & more — all by human nursing experts.', href: '/services/ai-free-nursing-writing-assignment-help', color: '#C9A84C' },
]

const faqs = [
  { q: 'Is it safe to pay someone to take my nursing class?', a: 'Yes. We operate with 100% confidentiality. Your identity is never shared, all communications are encrypted, and we have served 50,000+ students without a single privacy breach.' },
  { q: 'What grades do you guarantee?', a: 'We guarantee a minimum grade of B or better, with the primary goal of achieving A grades. If we fall short, we offer a full money-back guarantee — no questions asked.' },
  { q: 'How quickly can you start?', a: 'We can begin within 30 minutes of your order for urgent requests. Contact us via WhatsApp for the fastest response. We are available 24 hours a day, 7 days a week.' },
  { q: 'Do you cover all Chamberlain NR courses?', a: 'Yes — we cover every NR course from NR-103 through NR-730, including all MSN, DNP, FNP, PA, MPH and MSW programs offered at Chamberlain University.' },
  { q: 'Is your work really AI-free?', a: 'Absolutely. Every assignment is written by a credentialed human nursing expert. We never use ChatGPT or any AI tool. Our work passes Turnitin AI Detection, GPTZero, and Copyleaks.' },
]

export default function HomePage() {
  return (
    <>
      {/* ── TRUST BAR ── */}
      <div className="trust-bar">
        <div className="trust-bar-inner">
          {['🏆 #1 Trusted Nursing Help', '✅ 50,000+ Students Helped', '📊 98% Pass Rate', '🔒 100% Confidential', '⚡ 30-Min Response', '🎓 A\'s & B\'s Guaranteed', '🧬 AI-Free Work', '⏰ 24/7 Support',
            '🏆 #1 Trusted Nursing Help', '✅ 50,000+ Students Helped', '📊 98% Pass Rate', '🔒 100% Confidential', '⚡ 30-Min Response', '🎓 A\'s & B\'s Guaranteed', '🧬 AI-Free Work', '⏰ 24/7 Support'].map((item, i) => (
            <div key={i} className="trust-bar-item"><span>{item.split(' ')[0]}</span>{item.split(' ').slice(1).join(' ')}</div>
          ))}
        </div>
      </div>

      {/* ── HERO — FIX 2: full-width headline, no image, clean CTA ── */}
      <section className="hero">
        <div className="hero-bg-grid" aria-hidden="true"/>
        <div className="container hero-inner">
          <div className="hero-eyebrow">
            <span className="badge badge-gold">🏆 #1 Trusted Nursing Academic Help Platform — Since 2018</span>
          </div>
          <h1 className="hero-title">
            Pay Someone to Do Your<br/>
            <span className="hero-accent">Nursing Exams, Classes &amp; Assignments</span>
          </h1>
          <p className="hero-sub">
            Expert help for <strong>ATI TEAS</strong>, <strong>HESI A2</strong>, <strong>NCLEX</strong>, all Chamberlain NR courses,
            proctored exams, full online class takeovers &amp; AI-free writing.
            <strong> Guaranteed A or minimum B</strong> — or your money back.
          </p>
          <div className="hero-actions">
            <a href="https://wa.me/17654709090?text=Hi!%20I%20need%20help%20with%20my%20nursing%20exam%20or%20class." target="_blank" rel="noopener" className="btn btn-primary btn-lg hero-btn-main">
              💬 WhatsApp — Get Instant Help
            </a>
            <Link href="/order" className="btn btn-outline btn-lg">
              🎯 Get Free Quote Now
            </Link>
            <a href="mailto:instanthelp24hr@gmail.com" className="btn btn-outline btn-lg">
              📧 Email Us
            </a>
          </div>
          <div className="hero-stats">
            <div className="hstat"><div className="hstat-num">50,000+</div><div className="hstat-label">Students Helped</div></div>
            <div className="hstat-sep"/>
            <div className="hstat"><div className="hstat-num">98%</div><div className="hstat-label">Pass Rate</div></div>
            <div className="hstat-sep"/>
            <div className="hstat"><div className="hstat-num">A / B</div><div className="hstat-label">Grade Guaranteed</div></div>
            <div className="hstat-sep"/>
            <div className="hstat"><div className="hstat-num">24/7</div><div className="hstat-label">Expert Support</div></div>
          </div>
          <div className="hero-service-pills">
            {['ATI TEAS', 'HESI A2', 'NCLEX', 'Chamberlain NR', 'DNP Capstone', 'PICOT Writing', 'Full Course Takeover', 'WGU Exams', 'GMAT / GRE', 'AI-Free Writing'].map(s => (
              <span key={s} className="service-pill">{s}</span>
            ))}
          </div>
        </div>
        <style>{`
          .hero {
            background: linear-gradient(160deg, var(--jungle-dark) 0%, var(--jungle-green) 55%, #008580 100%);
            padding: 96px 0 110px; position: relative; overflow: hidden;
          }
          .hero::after {
            content: ''; position: absolute; bottom: -2px; left: 0; right: 0;
            height: 90px; background: var(--white);
            clip-path: ellipse(55% 100% at 50% 100%);
          }
          .hero-bg-grid {
            position: absolute; inset: 0; pointer-events: none;
            background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
            background-size: 60px 60px;
          }
          .hero-inner { position: relative; z-index: 2; text-align: center; max-width: 1000px; margin: 0 auto; }
          .hero-eyebrow { margin-bottom: 22px; }
          .hero-title {
            font-family: var(--font-heading);
            font-size: clamp(38px, 6vw, 72px);
            color: var(--white);
            line-height: 1.12;
            margin-bottom: 22px;
            font-weight: 900;
          }
          .hero-accent { color: var(--gold-light); display: block; }
          .hero-sub {
            font-size: clamp(17px, 2vw, 20px);
            color: rgba(255,255,255,0.82);
            line-height: 1.7;
            max-width: 720px;
            margin: 0 auto 36px;
          }
          .hero-sub strong { color: var(--gold-light); }
          .hero-actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-bottom: 48px; }
          .hero-btn-main { background: var(--gold); color: var(--jungle-dark); border-color: var(--gold); font-size: 18px; padding: 20px 44px; box-shadow: 0 6px 28px rgba(201,168,76,0.4); }
          .hero-btn-main:hover { background: var(--gold-light); transform: translateY(-3px); box-shadow: 0 10px 36px rgba(201,168,76,0.5); }
          .hero-stats { display: flex; align-items: center; justify-content: center; gap: 24px; flex-wrap: wrap; margin-bottom: 36px; }
          .hstat { text-align: center; }
          .hstat-num { font-family: var(--font-heading); font-size: 30px; font-weight: 900; color: var(--gold-light); line-height: 1; }
          .hstat-label { font-size: 13px; color: rgba(255,255,255,0.65); margin-top: 4px; }
          .hstat-sep { width: 1px; height: 40px; background: rgba(255,255,255,0.2); }
          .hero-service-pills { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
          .service-pill {
            background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
            color: rgba(255,255,255,0.85); padding: 7px 16px; border-radius: 50px;
            font-size: 13px; font-weight: 600; backdrop-filter: blur(4px);
            transition: all 0.18s;
          }
          .service-pill:hover { background: rgba(255,255,255,0.18); color: white; }
          @media (max-width: 640px) { .hero-actions { flex-direction: column; align-items: center; } .hstat-sep { display: none; } }
        `}</style>
      </section>

      {/* ── SERVICES ── */}
      <section style={{padding:'88px 0', background:'var(--white)'}}>
        <div className="container">
          <div className="text-center">
            <span className="section-label">Our Services</span>
            <h2 className="section-title">Everything You Need to <span>Excel in Nursing School</span></h2>
            <p className="section-sub">From single assignments to full course takeovers — our certified nursing experts handle it all, guaranteed.</p>
          </div>
          <div className="services-grid">
            {services.map(s => (
              <Link key={s.href} href={s.href} className="service-card" style={{'--card-color': s.color} as React.CSSProperties}>
                <div className="sc-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="sc-link">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
        <style>{`
          .service-card { display:flex; flex-direction:column; background:var(--white); border:1.5px solid var(--border); border-radius:var(--radius-lg); padding:34px; transition:all 0.25s ease; position:relative; overflow:hidden; }
          .service-card::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:var(--card-color,var(--jungle-green)); }
          .service-card:hover { box-shadow:var(--shadow-md); transform:translateY(-6px); border-color:var(--jungle-light); }
          .sc-icon { font-size:40px; margin-bottom:16px; }
          .service-card h3 { font-family:var(--font-heading); font-size:21px; color:var(--jungle-dark); margin-bottom:12px; }
          .service-card p { font-size:15px; color:var(--text-light); line-height:1.7; flex:1; margin-bottom:20px; }
          .sc-link { font-size:15px; font-weight:700; color:var(--jungle-green); }
          .service-card:hover .sc-link { text-decoration:underline; }
        `}</style>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{padding:'88px 0', background:'var(--off-white)'}}>
        <div className="container">
          <div className="text-center">
            <span className="section-label">Simple Process</span>
            <h2 className="section-title">Get Help in <span>3 Easy Steps</span></h2>
            <p className="section-sub">From first contact to receiving your grade — the whole process takes less than an hour to start.</p>
          </div>
          <div className="steps-grid">
            {[
              { n:'01', title:'Contact Us', desc:'WhatsApp, email, or fill out the free quote form. Tell us your course, deadline, and budget. We respond within 30 minutes, day or night.' },
              { n:'02', title:'Match with Expert', desc:'We match you with a certified nursing tutor who has specific experience with your exact course, exam type, or assignment — no generalists.' },
              { n:'03', title:'Get Your Grade', desc:'Our expert handles everything and submits on time. We guarantee an A or minimum B. If we fall short — you get a full refund, no questions asked.' },
            ].map(s => (
              <div key={s.n} className="step-card">
                <div className="step-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center', marginTop:'52px', display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap'}}>
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 WhatsApp Us Now</a>
            <Link href="/order" className="btn btn-green btn-lg">🎯 Get Free Quote</Link>
          </div>
        </div>
        <style>{`
          .steps-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:28px; }
          .step-card { background:var(--white); border-radius:var(--radius-lg); padding:40px 32px; text-align:center; border:1.5px solid var(--border); }
          .step-num { font-family:var(--font-heading); font-size:58px; font-weight:900; color:var(--jungle-xlight); line-height:1; margin-bottom:16px; }
          .step-card h3 { font-family:var(--font-heading); font-size:22px; color:var(--jungle-dark); margin-bottom:12px; }
          .step-card p { font-size:16px; color:var(--text-light); line-height:1.7; }
          @media(max-width:768px) { .steps-grid { grid-template-columns:1fr; } }
        `}</style>
      </section>

      {/* ── TESTIMONIALS — FIX 6: 20 reviews, flip mode ── */}
      <section style={{padding:'88px 0', background:'var(--white)'}}>
        <div className="container">
          <div className="text-center">
            <span className="section-label">Student Reviews</span>
            <h2 className="section-title">Thousands of Students <span>Trust Us</span></h2>
            <p className="section-sub">Real reviews from verified nursing students across the USA.</p>
          </div>
          <TestimonialsFlip />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{padding:'88px 0', background:'var(--off-white)'}}>
        <div className="container" style={{maxWidth:'800px'}}>
          <div className="text-center">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
          </div>
          {faqs.map((f, i) => (
            <details key={i} className="faq-item" style={{marginBottom:'12px',border:'1.5px solid var(--border)',borderRadius:'var(--radius)',overflow:'hidden'}}>
              <summary style={{padding:'18px 26px',fontWeight:700,fontSize:'16px',color:'var(--jungle-dark)',background:'var(--white)',display:'flex',justifyContent:'space-between',cursor:'pointer',listStyle:'none'}}>
                {f.q} <span style={{color:'var(--jungle-green)',marginLeft:'12px',flexShrink:0}}>+</span>
              </summary>
              <div style={{padding:'16px 26px 24px',fontSize:'16px',color:'var(--text-light)',lineHeight:'1.8',background:'var(--white)',borderTop:'1px solid var(--border)'}}>{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Ace Your Nursing Class?</h2>
          <p>Join 50,000+ students who earned A&apos;s and B&apos;s with NursingSchoolTutors. Get started in 30 minutes.</p>
          <div className="cta-buttons">
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 Chat on WhatsApp</a>
            <Link href="/order" className="btn btn-primary btn-lg">🎯 Get Free Quote Now</Link>
            <a href="mailto:instanthelp24hr@gmail.com" className="btn btn-outline btn-lg">📧 Email Us</a>
          </div>
        </div>
      </section>
    </>
  )
}
