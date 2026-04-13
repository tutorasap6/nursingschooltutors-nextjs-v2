import type { Metadata } from 'next'
import Link from 'next/link'
import { takeMeSubpages } from '@/data/navigation'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return takeMeSubpages.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = takeMeSubpages.find(p => p.slug === params.slug)
  if (!page) return {}
  return {
    title: `${page.label} | NursingSchoolTutors.com`,
    description: `${page.label} — our certified nursing experts handle all coursework including discussions, assignments, quizzes, and exams. A or B guaranteed. 100% confidential, AI-free.`,
    keywords: [page.label, 'take my class for me', 'Chamberlain College of Nursing', 'online nursing class help', 'A or B guaranteed'],
  }
}

export default function TakeMeSubPage({ params }: { params: { slug: string } }) {
  const page = takeMeSubpages.find(p => p.slug === params.slug)
  if (!page) notFound()
  const related = takeMeSubpages.filter(p => p.slug !== params.slug).slice(0, 10)
  const codeMatch = page.label.match(/\b(NR[-\s]?\d{3,4}[A-Z]?|PA[-\s]?\d{3,4}[A-Z]?|MPH[-\s]?\d{3,4}|MSW[-\s]?\d{3,4})/i)
  const courseCode = codeMatch ? codeMatch[0].toUpperCase() : ''
  const pageTags = [courseCode, 'Take My Class For Me', 'Chamberlain College of Nursing', 'Online Class Help', 'A or B Guaranteed', '100% Confidential', 'AI-Free Work', 'Nursing Expert Help'].filter(Boolean)

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> › <Link href="/services/take-my-class-for-me">Take My Class For Me</Link> › {page.label.replace('Take My Class For Me ', '')}
          </nav>
          <h1>{page.label}</h1>
          <p>Our certified nursing expert handles every assignment, discussion, quiz, and exam. A or B guaranteed.</p>
          <div style={{display:'flex',gap:'14px',flexWrap:'wrap',marginTop:'24px'}}>
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 WhatsApp Now</a>
            <Link href="/order" className="btn btn-primary btn-lg">🎯 Free Quote</Link>
          </div>
        </div>
      </div>

      <section style={{padding:'64px 0',background:'var(--off-white)'}}>
        <div className="container">
          <div className="blog-layout">
            <div>
              <div className="page-content-wrap">
                <h2>Take My Class For Me — {page.label.replace('Take My Class For Me ', '')}</h2>
                <p>
                  Struggling to keep up with <strong>{page.label.replace('Take My Class For Me ', '')}</strong>? Whether you are working full-time, managing clinical rotations, raising a family, or simply overwhelmed by the demands of your nursing program — our certified academic experts are here to take the burden off your shoulders completely.
                </p>
                <p>
                  When you hire NursingSchoolTutors.com to take your <strong>{courseCode || 'nursing'}</strong> class for you, we assign a credentialed expert who has specific, verified experience with this exact course. They will log into your learning management system, complete every course requirement on your behalf, and ensure you receive an A or minimum B — or you receive a full refund.
                </p>

                <h2>What Does "Take My Class For Me" Include for {courseCode || 'This Course'}?</h2>
                <p>Our full course takeover service covers every component of your course, from the first day to the last:</p>
                <ul>
                  <li><strong>Weekly Discussion Posts:</strong> Thoughtful, APA-formatted discussion responses and peer replies that reflect advanced nursing knowledge and critical thinking.</li>
                  <li><strong>Written Assignments:</strong> All papers, reflection journals, case study analyses, concept maps, and research assignments — original, AI-free, plagiarism-checked.</li>
                  <li><strong>Quizzes and Non-Proctored Exams:</strong> All online quizzes, module tests, and non-proctored assessments completed accurately and on time.</li>
                  <li><strong>Proctored Exams:</strong> For courses with proctored finals, we provide intensive preparation coaching so you are ready to perform confidently under exam conditions.</li>
                  <li><strong>Group Projects and Collaborative Work:</strong> We coordinate and complete any team-based assignments on your behalf.</li>
                  <li><strong>Capstone and Practicum Documentation:</strong> For advanced courses, we assist with clinical logs, reflective summaries, and project documentation.</li>
                </ul>

                <h2>Why Students Trust Us for {courseCode || 'Nursing'} Course Help</h2>
                <p>
                  Since 2018, NursingSchoolTutors.com has served more than 50,000 nursing students at schools including Chamberlain University, WGU, Capella, SNHU, Liberty University, Grand Canyon University, Walden University, and dozens more. Our 98% success rate reflects the caliber of experts we retain and the depth of our commitment to each student's academic journey.
                </p>
                <ul>
                  <li><strong>Specialized Expert Assignment:</strong> You are never matched with a generalist. Your tutor has passed this exact course and understands its grading rubrics, instructor expectations, and high-yield content areas.</li>
                  <li><strong>100% AI-Free Content:</strong> Every discussion post, paper, and assignment is written by a human nursing professional. We never use ChatGPT, Claude, or any AI writing tool. Our work passes Turnitin AI Detection, GPTZero, and Copyleaks.</li>
                  <li><strong>Absolute Confidentiality:</strong> Your identity, institution, and login credentials are protected under strict non-disclosure protocols. In seven years of operation, we have never had a privacy incident.</li>
                  <li><strong>Grade Guarantee:</strong> A or minimum B — unconditionally. If we fall short, you receive a full refund within 24 hours.</li>
                  <li><strong>On-Time Delivery:</strong> Every assignment is submitted before your deadline. We track all due dates from the moment you engage us.</li>
                  <li><strong>Free Revisions:</strong> If any submission requires adjustments, we revise immediately at no charge until you are 100% satisfied.</li>
                </ul>

                <h2>How the {courseCode || 'Course'} Takeover Process Works</h2>
                <ol>
                  <li><strong>Contact Us:</strong> Reach out via WhatsApp, email, or our quote form. Tell us your course name, institution, start date, and current standing.</li>
                  <li><strong>Expert Assignment:</strong> Within 30–60 minutes, we match you with the most qualified available expert for your specific course.</li>
                  <li><strong>Credentials Handoff:</strong> You securely share your course login credentials via our encrypted messaging channel.</li>
                  <li><strong>Full Course Management:</strong> Your expert takes over immediately — tracking deadlines, completing assignments, posting discussions, and managing all course communications.</li>
                  <li><strong>Regular Updates:</strong> We keep you informed of your progress and grades throughout the course.</li>
                  <li><strong>Grade Delivered:</strong> At the end of the course, you receive your guaranteed A or B. If anything falls short — full refund, no delay.</li>
                </ol>

                <h2>Common Questions About Our Take My Class For Me Service</h2>
                <h3>Is it safe to give someone my login information?</h3>
                <p>We use encrypted, secure channels for all credential sharing. Your login information is used exclusively by your assigned expert and deleted immediately after course completion. We operate with the same level of data security as financial institutions.</p>
                <h3>What if the professor notices the writing style changed?</h3>
                <p>Our experts are skilled at adapting to your natural writing voice. For your first assignment, we may ask you to provide a sample of your previous writing so we can match your style. This ensures complete consistency throughout the course.</p>
                <h3>Can you handle accelerated or compressed courses?</h3>
                <p>Yes — we specialize in accelerated 5-week and 8-week nursing courses. Our experts are experienced with the compressed timelines and heavy workloads these formats demand.</p>

                <div style={{background:'var(--jungle-xlight)',borderRadius:'var(--radius)',padding:'28px',marginTop:'32px',border:'1.5px solid rgba(0,148,143,0.2)'}}>
                  <h3 style={{fontFamily:'var(--font-heading)',color:'var(--jungle-dark)',fontSize:'20px',marginBottom:'14px'}}>Start Your {courseCode || 'Course'} Takeover Today</h3>
                  <p style={{color:'var(--text-light)',marginBottom:'20px'}}>Contact us now — we respond in 30 minutes or less, available 24/7.</p>
                  <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
                    <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp">💬 WhatsApp +1(765)470-9090</a>
                    <Link href="/order" className="btn btn-primary">🎯 Get Free Quote</Link>
                  </div>
                </div>
              </div>

              <div style={{background:'var(--white)',border:'1.5px solid var(--border)',borderRadius:'var(--radius)',padding:'22px',marginTop:'20px'}}>
                <h4 style={{fontSize:'12px',fontWeight:800,textTransform:'uppercase',letterSpacing:'0.1em',color:'var(--gold)',marginBottom:'14px'}}>📌 Tags</h4>
                <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
                  {pageTags.map(t=><span key={t} className="sidebar-tag">{t}</span>)}
                </div>
              </div>

              <div className="related-box">
                <h3>Other Courses We Take For You</h3>
                <div className="related-links">
                  {related.map(p=><Link key={p.slug} href={`/services/take-my-class-for-me/${p.slug}`}>{p.label}</Link>)}
                  <Link href="/services/take-my-class-for-me">View All Courses →</Link>
                </div>
              </div>
            </div>

            <aside className="blog-sidebar">
              <div className="sidebar-box">
                <h3>🎯 Start Today</h3>
                <p>Expert takes over your course in 30 minutes. A or B guaranteed.</p>
                <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp" style={{width:'100%',justifyContent:'center',marginBottom:'10px',display:'flex'}}>💬 WhatsApp Now</a>
                <Link href="/order" className="btn btn-primary" style={{width:'100%',justifyContent:'center',display:'flex',marginBottom:'10px'}}>🎯 Free Quote</Link>
                <a href="mailto:instanthelp24hr@gmail.com" className="btn btn-green btn-sm" style={{width:'100%',justifyContent:'center',display:'flex'}}>📧 Email Us</a>
              </div>
              <div className="sidebar-box">
                <h4>All Services</h4>
                <Link href="/services/online-proctored-exam-help">📋 Proctored Exam Help</Link>
                <Link href="/services/pay-someone-to-do-my-online-class">💻 Pay For My Class</Link>
                <Link href="/services/take-my-class-for-me">📚 Take My Class For Me</Link>
                <Link href="/services/ai-free-nursing-writing-assignment-help">✍️ AI-Free Writing</Link>
              </div>
              <div className="sidebar-box">
                <h4>Guarantees</h4>
                <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
                  <span className="badge badge-green" style={{justifyContent:'center'}}>✅ A or B Grade</span>
                  <span className="badge badge-green" style={{justifyContent:'center'}}>🔒 Confidential</span>
                  <span className="badge badge-gold" style={{justifyContent:'center'}}>💰 Money-Back</span>
                  <span className="badge badge-gold" style={{justifyContent:'center'}}>🧬 AI-Free</span>
                  <span className="badge badge-green" style={{justifyContent:'center'}}>⏰ 24/7 Support</span>
                </div>
              </div>
              <div className="sidebar-box">
                <h4>Course Tags</h4>
                <div className="sidebar-tags">{pageTags.map(t=><span key={t} className="sidebar-tag">{t}</span>)}</div>
              </div>
              <div className="sidebar-box" style={{background:'var(--jungle-dark)',border:'none'}}>
                <h4 style={{color:'var(--gold-light)'}}>Quick Contact</h4>
                <a href="https://wa.me/17654709090" target="_blank" rel="noopener" style={{color:'#25D366',fontWeight:700,display:'block',marginBottom:'8px'}}>💬 +1 (765) 470-9090</a>
                <a href="mailto:instanthelp24hr@gmail.com" style={{color:'var(--gold-light)',fontWeight:700,fontSize:'13px'}}>📧 instanthelp24hr@gmail.com</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <h2>Let Us Take Your {courseCode || 'Nursing'} Class For You</h2>
          <p>Expert matched in 30 minutes. A or B guaranteed — or full money-back refund.</p>
          <div className="cta-buttons">
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 WhatsApp Now</a>
            <Link href="/order" className="btn btn-primary btn-lg">🎯 Get Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  )
}
