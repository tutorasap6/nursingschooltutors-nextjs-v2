import type { Metadata } from 'next'
import Link from 'next/link'
import { writingSubpages } from '@/data/navigation'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return writingSubpages.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = writingSubpages.find(p => p.slug === params.slug)
  if (!page) return {}
  return {
    title: `${page.label} — AI-Free | Zero Plagiarism | NursingSchoolTutors`,
    description: `${page.label} written by certified nursing experts. 100% AI-free, zero plagiarism, APA formatted, guaranteed A or B. Get your free quote today.`,
  }
}

export default function WritingSubPage({ params }: { params: { slug: string } }) {
  const page = writingSubpages.find(p => p.slug === params.slug)
  if (!page) notFound()
  const related = writingSubpages.filter(p => p.slug !== params.slug).slice(0, 8)

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> › <Link href="/services/ai-free-nursing-writing-assignment-help">Writing Help</Link> › {page.label}
          </nav>
          <h1>{page.label} — AI-Free | Zero Plagiarism</h1>
          <p>Written by a certified nursing expert. 100% original, AI-free, plagiarism-checked. Guaranteed A or B.</p>
          <div style={{display:'flex',gap:'14px',flexWrap:'wrap',marginTop:'24px'}}>
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 WhatsApp Now</a>
            <Link href="/order" className="btn btn-primary btn-lg">🎯 Free Quote</Link>
          </div>
        </div>
      </div>

      <section style={{padding:'64px 0'}}>
        <div className="container" style={{maxWidth:'900px'}}>
          <div style={{background:'var(--white)',border:'1.5px solid var(--border)',borderRadius:'var(--radius-lg)',padding:'40px',marginBottom:'40px'}}>
            <h2 style={{fontFamily:'var(--font-heading)',fontSize:'26px',color:'var(--jungle-dark)',marginBottom:'16px'}}>
              Expert {page.label} — AI-Free &amp; Zero Plagiarism
            </h2>
            <p style={{color:'var(--text-light)',lineHeight:'1.8',marginBottom:'16px'}}>
              Our certified nursing writers deliver exceptional <strong>{page.label}</strong> that meets the highest academic standards. Every piece is written from scratch by a human nursing expert — no AI tools, no paraphrasing software, no plagiarism.
            </p>
            <p style={{color:'var(--text-light)',lineHeight:'1.8',marginBottom:'16px'}}>
              We use only peer-reviewed, scholarly sources. All papers are formatted in <strong>APA 7th Edition</strong> and accompanied by a plagiarism-free certificate from Turnitin or similar software upon request.
            </p>
            <p style={{color:'var(--text-light)',lineHeight:'1.8',marginBottom:'24px'}}>
              We offer unlimited free revisions until you are 100% satisfied, and a full money-back guarantee if we fail to meet the agreed grade target.
            </p>
            <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
              <span className="badge badge-green">✅ 100% AI-Free</span>
              <span className="badge badge-green">🔬 Plagiarism Report Included</span>
              <span className="badge badge-gold">🏆 A or B Guaranteed</span>
              <span className="badge badge-gold">📚 APA 7th Edition</span>
              <span className="badge badge-green">🔄 Free Revisions</span>
            </div>
          </div>

          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'20px',marginBottom:'40px'}}>
            {[
              {step:'01',title:'Share Your Requirements',desc:'Send us your assignment instructions, rubric, sources required, word count, and deadline.'},
              {step:'02',title:'Get Matched with Expert',desc:'We assign a nursing writer with specific experience in this exact type of assignment.'},
              {step:'03',title:'Receive Your Paper',desc:'Original, proofread, APA-formatted paper delivered before your deadline.'},
              {step:'04',title:'Review & Submit',desc:'Request any revisions. Once satisfied, submit and earn your grade.'},
            ].map(s => (
              <div key={s.step} style={{background:'var(--off-white)',borderRadius:'var(--radius)',padding:'22px',border:'1.5px solid var(--border)'}}>
                <div style={{fontFamily:'var(--font-heading)',fontSize:'32px',color:'var(--jungle-xlight)',fontWeight:900,lineHeight:1,marginBottom:'8px'}}>{s.step}</div>
                <h3 style={{fontFamily:'var(--font-heading)',fontSize:'16px',color:'var(--jungle-dark)',marginBottom:'6px'}}>{s.title}</h3>
                <p style={{fontSize:'13px',color:'var(--text-light)',lineHeight:'1.6'}}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="related-box">
            <h3>Other Nursing Writing Services</h3>
            <div className="related-links">
              {related.map(p => (
                <Link key={p.slug} href={`/services/ai-free-nursing-writing-assignment-help/${p.slug}`}>{p.label}</Link>
              ))}
              <Link href="/services/ai-free-nursing-writing-assignment-help">View All Writing Services →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Get Your {page.label} Written by an Expert</h2>
          <p>AI-free. Plagiarism-free. A or B guaranteed. Delivered before your deadline.</p>
          <div className="cta-buttons">
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 WhatsApp Now</a>
            <Link href="/order" className="btn btn-primary btn-lg">🎯 Get Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  )
}
