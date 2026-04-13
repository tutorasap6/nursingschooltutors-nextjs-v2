import type { Metadata } from 'next'
import Link from 'next/link'
import { examSubpages } from '@/data/navigation'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return examSubpages.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = examSubpages.find(p => p.slug === params.slug)
  if (!page) return {}
  return {
    title: `${page.label} | Guaranteed Pass | NursingSchoolTutors.com`,
    description: `${page.label} — certified experts guarantee an A or minimum B. 100% confidential, AI-free, 24/7 support. Get your free quote today at NursingSchoolTutors.com.`,
    keywords: [page.label, 'proctored exam help', 'nursing exam help', 'Chamberlain College of Nursing', 'online exam help', 'guaranteed pass'],
  }
}

export default function ExamSubPage({ params }: { params: { slug: string } }) {
  const page = examSubpages.find(p => p.slug === params.slug)
  if (!page) notFound()
  const related = examSubpages.filter(p => p.slug !== params.slug).slice(0, 10)

  // Extract course code and course name
  const codeMatch = page.label.match(/\b(NR[-\s]?\d{3,4}[A-Z]?|PA[-\s]?\d{3,4}|ATI TEAS|HESI|NCLEX|GRE|GMAT|WGU|CLEP|TOEFL|GED|PMP|ASVAB|CCAT|NCE|NREMT|TSI)\b/i)
  const courseCode = codeMatch ? codeMatch[0].toUpperCase() : ''

  // Tags: course code, course name, university, trending
  const pageTags = [
    courseCode,
    'Online Proctored Exam Help',
    'Chamberlain College of Nursing',
    'Nursing Exam Help',
    'Guaranteed Pass',
    'A or B Grade',
    '24/7 Expert Support',
    'Confidential Exam Help',
    page.label.includes('ATI') ? 'ATI Testing' : '',
    page.label.includes('HESI') ? 'HESI Exam Prep' : '',
    page.label.includes('WGU') ? 'Western Governors University' : '',
    'NursingSchoolTutors.com',
  ].filter(Boolean)

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> › <Link href="/services/online-proctored-exam-help">Proctored Exam Help</Link> › {page.label.replace('Online Proctored Exam Help ', '')}
          </nav>
          <h1>{page.label}</h1>
          <p>Certified nursing experts guarantee an A or minimum B. 100% confidential, AI-free, available 24/7.</p>
          <div style={{display:'flex',gap:'14px',flexWrap:'wrap',marginTop:'24px'}}>
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 Get Help Now</a>
            <Link href="/order" className="btn btn-primary btn-lg">🎯 Free Quote</Link>
          </div>
        </div>
      </div>

      <section style={{padding:'64px 0',background:'var(--off-white)'}}>
        <div className="container">
          <div className="blog-layout">
            {/* Main content — Fix 4: 1000+ words, boxed */}
            <div>
              <div className="page-content-wrap">
                <h2>Expert {page.label}</h2>
                <p>
                  Are you preparing for your <strong>{page.label.replace('Online Proctored Exam Help ', '')}</strong> and feeling overwhelmed? You are not alone. Thousands of nursing and healthcare students across the United States struggle with proctored exams every semester — but with the right expert support, achieving an A or B is completely achievable.
                </p>
                <p>
                  At <strong>NursingSchoolTutors.com</strong>, we specialize in providing certified, confidential, and results-guaranteed online proctored exam help. Our team consists exclusively of credentialed nursing professionals — registered nurses, nurse practitioners, clinical educators, and doctoral-prepared faculty — who have passed these exact exams and know what it takes to succeed.
                </p>

                <h2>What Is {page.label}?</h2>
                <p>
                  Online proctored exams are remotely monitored assessments that students must complete within a specified time window, often through platforms like ProctorU, Respondus, Honorlock, or ATI's own proctoring system. These exams are designed to verify your mastery of course content under controlled, invigilated conditions — making preparation and expert guidance essential.
                </p>
                <p>
                  Whether your exam covers advanced pathophysiology concepts, pharmacological principles, clinical decision-making, or evidence-based nursing practice, our tutors are equipped with the specialized knowledge and strategic test-taking expertise to help you perform your best.
                </p>

                <h2>Why Students Choose NursingSchoolTutors.com for {courseCode || 'Proctored Exam'} Help</h2>
                <p>
                  Since 2018, we have helped more than 50,000 nursing students earn the grades they need to progress through their programs, maintain scholarships, and qualify for clinical placements. Our 98% pass rate is not a marketing claim — it is the result of painstaking expert matching, individualized preparation strategies, and an unwavering commitment to your success.
                </p>
                <ul>
                  <li><strong>Certified Nursing Experts:</strong> Every tutor we assign has direct experience with your specific exam type. We do not use generalists — we match you with someone who has passed this same assessment.</li>
                  <li><strong>100% Confidential:</strong> Your personal information, academic institution, and course details are never shared with any third party. We operate under strict non-disclosure protocols.</li>
                  <li><strong>Grade Guaranteed:</strong> We guarantee an A or minimum B. If we fall short of your agreed target, we issue a full refund — no exceptions, no questions asked.</li>
                  <li><strong>AI-Free Preparation:</strong> Every study guide, practice scenario, and coaching session is conducted by human experts. We never rely on AI tools to prepare you — only real clinical and academic expertise.</li>
                  <li><strong>24/7 Availability:</strong> Whether your exam is tomorrow morning or in three weeks, we are available around the clock. Contact us via WhatsApp for the fastest possible response.</li>
                </ul>

                <h2>How Our {page.label} Process Works</h2>
                <p>Getting started is simple and takes less than 30 minutes from first contact to expert assignment:</p>
                <ol>
                  <li><strong>Contact Us:</strong> Reach out via WhatsApp (+1 765-470-9090), email (instanthelp24hr@gmail.com), or our free quote form. Tell us your exam name, date, institution, and any specific concerns.</li>
                  <li><strong>Expert Matching:</strong> We immediately identify the best-qualified tutor from our network — someone with direct, verified experience with your specific exam.</li>
                  <li><strong>Personalized Preparation Plan:</strong> Your expert designs a targeted study plan based on your exam date, current knowledge level, and the specific content areas most likely to appear.</li>
                  <li><strong>Intensive Coaching Sessions:</strong> One-on-one preparation sessions covering high-yield content, clinical reasoning strategies, question interpretation techniques, and time management under exam conditions.</li>
                  <li><strong>Exam Day Support:</strong> Depending on your needs, we provide last-minute review, confidence-building coaching, and technical guidance for your proctored exam platform.</li>
                  <li><strong>Results Delivered:</strong> You receive your grade. If it meets the guaranteed target — great! If not — you receive a full refund immediately.</li>
                </ol>

                <h2>Content Areas Covered in {page.label}</h2>
                <p>
                  Our experts are prepared to coach you on every major content domain that appears in nursing and healthcare proctored assessments, including:
                </p>
                <ul>
                  <li>Human anatomy and physiology — systems, organs, cellular mechanisms</li>
                  <li>Pathophysiology — disease processes, compensatory responses, clinical manifestations</li>
                  <li>Advanced pharmacology — drug classes, mechanisms, interactions, nursing implications</li>
                  <li>Clinical decision-making and priority setting — SBAR, ADPIE, Maslow's hierarchy</li>
                  <li>Evidence-based practice — research appraisal, PICOT methodology, Level I–VII evidence</li>
                  <li>Maternal-newborn and pediatric nursing concepts</li>
                  <li>Mental health nursing — DSM-V diagnoses, therapeutic communication, psychopharmacology</li>
                  <li>Community and population health nursing</li>
                  <li>Leadership, management, and informatics in nursing</li>
                  <li>Mathematics — dosage calculations, IV drip rates, unit conversions</li>
                </ul>

                <h2>Frequently Asked Questions About {page.label}</h2>

                <h3>How quickly can you start helping me?</h3>
                <p>In most cases, we begin the expert matching process within 15–30 minutes of your initial contact via WhatsApp. For urgent exams — those within 24–48 hours — we have a rapid-response team dedicated specifically to last-minute preparation requests.</p>

                <h3>Is this service confidential?</h3>
                <p>Absolutely. Your identity, institution, and course details are protected under our strict non-disclosure policy. We have never had a privacy incident in over seven years of operation and 50,000+ students served.</p>

                <h3>What if I am not satisfied with the results?</h3>
                <p>Our Grade Guarantee is unconditional. If your final exam result falls below the agreed grade target — either an A or a B, depending on what you specify — we issue a complete refund within 24 hours. No disputes, no lengthy review process.</p>

                <h3>Do you work with students outside the United States?</h3>
                <p>Yes. We assist nursing students at accredited programs across the United States, Canada, the United Kingdom, Australia, and many other countries where online nursing education is available.</p>

                <div style={{background:'var(--jungle-xlight)',borderRadius:'var(--radius)',padding:'28px',marginTop:'32px',border:'1.5px solid rgba(0,148,143,0.2)'}}>
                  <h3 style={{fontFamily:'var(--font-heading)',color:'var(--jungle-dark)',fontSize:'20px',marginBottom:'14px'}}>Ready to Get Started?</h3>
                  <p style={{color:'var(--text-light)',marginBottom:'20px'}}>Contact us now. We respond in 30 minutes or less, 24 hours a day, 7 days a week.</p>
                  <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
                    <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp">💬 WhatsApp +1(765)470-9090</a>
                    <Link href="/order" className="btn btn-primary">🎯 Get Free Quote</Link>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div style={{background:'var(--white)',border:'1.5px solid var(--border)',borderRadius:'var(--radius)',padding:'22px',marginTop:'20px'}}>
                <h4 style={{fontSize:'12px',fontWeight:800,textTransform:'uppercase',letterSpacing:'0.1em',color:'var(--gold)',marginBottom:'14px'}}>📌 Tags</h4>
                <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
                  {pageTags.map(t => <span key={t} className="sidebar-tag">{t}</span>)}
                </div>
              </div>

              <div className="related-box">
                <h3>Related Proctored Exam Help Pages</h3>
                <div className="related-links">
                  {related.map(p => <Link key={p.slug} href={`/services/online-proctored-exam-help/${p.slug}`}>{p.label}</Link>)}
                  <Link href="/services/online-proctored-exam-help">View All Proctored Exams →</Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              <div className="sidebar-box">
                <h3>🎯 Get Expert Help Now</h3>
                <p>Certified tutors standing by 24/7. Guaranteed A or B.</p>
                <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp" style={{width:'100%',justifyContent:'center',marginBottom:'10px',display:'flex'}}>💬 WhatsApp Now</a>
                <Link href="/order" className="btn btn-primary" style={{width:'100%',justifyContent:'center',display:'flex',marginBottom:'10px'}}>🎯 Free Quote</Link>
                <a href="mailto:instanthelp24hr@gmail.com" className="btn btn-green btn-sm" style={{width:'100%',justifyContent:'center',display:'flex'}}>📧 Email Us</a>
              </div>
              <div className="sidebar-box">
                <h4>All Services</h4>
                <Link href="/services/online-proctored-exam-help">📋 All Proctored Exams</Link>
                <Link href="/services/pay-someone-to-do-my-online-class">💻 Pay For My Class</Link>
                <Link href="/services/take-my-class-for-me">📚 Take My Class For Me</Link>
                <Link href="/services/ai-free-nursing-writing-assignment-help">✍️ AI-Free Writing</Link>
                <Link href="/contact">📞 Contact Us</Link>
                <Link href="/faq">❓ FAQ</Link>
              </div>
              <div className="sidebar-box">
                <h4>Grade Guarantee</h4>
                <p style={{fontSize:'13px',color:'var(--text-light)'}}>We guarantee every student receives an A or minimum B. If we fall short — you get a full refund.</p>
                <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
                  <span className="badge badge-green" style={{justifyContent:'center'}}>✅ A or B Guaranteed</span>
                  <span className="badge badge-green" style={{justifyContent:'center'}}>🔒 100% Confidential</span>
                  <span className="badge badge-gold" style={{justifyContent:'center'}}>💰 Money-Back Policy</span>
                  <span className="badge badge-gold" style={{justifyContent:'center'}}>⏰ 24/7 Support</span>
                </div>
              </div>
              <div className="sidebar-box">
                <h4>Course Tags</h4>
                <div className="sidebar-tags">
                  {pageTags.map(t => <span key={t} className="sidebar-tag">{t}</span>)}
                </div>
              </div>
              <div className="sidebar-box" style={{background:'var(--jungle-dark)',border:'none'}}>
                <h4 style={{color:'var(--gold-light)'}}>Quick Contact</h4>
                <p style={{color:'rgba(255,255,255,0.7)',fontSize:'13px'}}>30-min response guaranteed. Day or night.</p>
                <a href="https://wa.me/17654709090" target="_blank" rel="noopener" style={{color:'#25D366',fontWeight:700,display:'block',marginBottom:'8px'}}>💬 +1 (765) 470-9090</a>
                <a href="mailto:instanthelp24hr@gmail.com" style={{color:'var(--gold-light)',fontWeight:700,fontSize:'13px'}}>📧 instanthelp24hr@gmail.com</a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Pass Your {courseCode || 'Proctored'} Exam — Guaranteed</h2>
          <p>Expert prep coaching, 98% pass rate, money-back guarantee. Get started in 30 minutes.</p>
          <div className="cta-buttons">
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 WhatsApp Now</a>
            <Link href="/order" className="btn btn-primary btn-lg">🎯 Get Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  )
}
