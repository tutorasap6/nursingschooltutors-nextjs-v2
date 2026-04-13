import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions | NursingSchoolTutors.com',
  description: 'Answers to the most common questions about NursingSchoolTutors.com — safety, confidentiality, grade guarantees, pricing, and how our service works.',
}
const faqs = [
  {q:'Is it safe and legal to use your service?',a:'Yes. Academic help services are legal and widely used worldwide. We provide expert academic assistance similar to a tutoring center or writing coach. All activity is 100% confidential — your name, school, or identity is never shared with any third party.'},
  {q:'What grade do you guarantee?',a:'We guarantee a minimum grade of B (or 80%), with the primary goal of achieving an A. If we fall below the agreed grade target, we issue a full refund. No questions asked.'},
  {q:'How quickly can you start?',a:'Most orders begin within 30–60 minutes of confirmation. For urgent requests — exams in 24 hours, overnight assignments — contact us via WhatsApp immediately for the fastest matching.'},
  {q:'Is your work AI-free?',a:'Yes — absolutely and completely. All assignments, papers, discussion posts, and exam responses are written by credentialed human nursing experts. We never use ChatGPT, Claude, or any AI writing tool. Our work passes Turnitin AI detection, GPTZero, and Copyleaks.'},
  {q:'What nursing programs and schools do you cover?',a:'We cover all major nursing programs: Chamberlain University (all NR courses), WGU, Capella, SNHU, Liberty University, Grand Canyon University, Walden, Strayer, and dozens more. We cover BSN, MSN, DNP, FNP, PA, MPH, and MSW programs.'},
  {q:'How do I pay?',a:'We accept all major payment methods including credit/debit cards, PayPal, CashApp, and Zelle. Payment is typically split — 50% upfront, 50% on delivery — so you are protected throughout the process.'},
  {q:'What if I need revisions?',a:'We offer unlimited free revisions. If you receive your assignment and want any changes — structure, content, length, citations — just ask and we will revise immediately at no charge.'},
  {q:'Can you take my proctored exam?',a:'Yes. We provide expert preparation coaching, structured study plans, and guided support for all major proctored exams including ATI TEAS, HESI A2, NCLEX, Chamberlain NR proctored assessments, WGU objective assessments, GRE, GMAT, and many more.'},
  {q:'How do I get started?',a:'Simply contact us via WhatsApp (+1 765-470-9090), email (instanthelp24hr@gmail.com), or fill out the free quote form on our website. Tell us your course, school, deadline, and what you need — and we will take care of the rest.'},
]
export default function FAQPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link href="/">Home</Link> › FAQ</nav>
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about how NursingSchoolTutors.com works.</p>
        </div>
      </div>
      <section style={{padding:'64px 0'}}>
        <div className="container" style={{maxWidth:'760px'}}>
          {faqs.map((f,i) => (
            <details key={i} className="faq-item" style={{marginBottom:'12px'}}>
              <summary className="faq-question" style={{padding:'18px 24px',fontWeight:700,fontSize:'15px',color:'var(--jungle-dark)',background:'var(--white)',display:'flex',justifyContent:'space-between',cursor:'pointer',listStyle:'none',borderRadius:'var(--radius)'}}>
                {f.q} <span style={{fontSize:'20px',color:'var(--jungle-green)',marginLeft:'12px',flexShrink:0}}>+</span>
              </summary>
              <div style={{padding:'16px 24px 24px',fontSize:'15px',color:'var(--text-light)',lineHeight:'1.75',background:'var(--white)',borderTop:'1px solid var(--border)'}}>{f.a}</div>
            </details>
          ))}
          <div style={{textAlign:'center',marginTop:'48px',display:'flex',gap:'14px',justifyContent:'center',flexWrap:'wrap'}}>
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 More Questions? WhatsApp Us</a>
            <Link href="/order" className="btn btn-green btn-lg">🎯 Get Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  )
}
