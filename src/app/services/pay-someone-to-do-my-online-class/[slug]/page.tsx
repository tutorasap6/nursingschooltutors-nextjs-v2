import { classSubpages } from '@/data/navigation'
import Link from 'next/link'
import { notFound } from 'next/navigation'
export async function generateStaticParams() { return classSubpages.map(p => ({ slug: p.slug })) }
export default function ClassSubPage({ params }: { params: { slug: string } }) {
  const page = classSubpages.find(p => p.slug === params.slug)
  if (!page) notFound()
  return (
    <>
      <div className="page-hero"><div className="container">
        <nav className="breadcrumb"><Link href="/">Home</Link> › <Link href="/services/pay-someone-to-do-my-online-class">Pay For My Class</Link> › {page.label}</nav>
        <h1>Pay Someone to Do My Online Class — {page.label}</h1>
        <p>Expert tutors handle your entire {page.label} course. A or B guaranteed.</p>
        <div style={{display:'flex',gap:'14px',marginTop:'24px',flexWrap:'wrap'}}>
          <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 WhatsApp Now</a>
          <Link href="/order" className="btn btn-primary btn-lg">🎯 Free Quote</Link>
        </div>
      </div></div>
      <section style={{padding:'64px 0'}}><div className="container" style={{maxWidth:'900px'}}>
        <div style={{background:'var(--white)',border:'1.5px solid var(--border)',borderRadius:'var(--radius-lg)',padding:'40px',marginBottom:'40px'}}>
          <h2 style={{fontFamily:'var(--font-heading)',fontSize:'26px',color:'var(--jungle-dark)',marginBottom:'16px'}}>Pay Someone to Do My Online Class — {page.label}</h2>
          <p style={{color:'var(--text-light)',lineHeight:'1.8',marginBottom:'16px'}}>Our certified nursing tutors will manage every aspect of your <strong>{page.label}</strong> course — discussions, assignments, quizzes, and exams — so you can focus on what matters most.</p>
          <p style={{color:'var(--text-light)',lineHeight:'1.8',marginBottom:'24px'}}>We guarantee an A or minimum B, with 100% confidentiality and no AI-generated content. All work is original, expertly crafted, and submitted on time.</p>
          <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
            <span className="badge badge-green">✅ A or B Guaranteed</span><span className="badge badge-green">🔒 Confidential</span><span className="badge badge-gold">⏰ 24/7 Support</span>
          </div>
        </div>
        <div className="related-box"><h3>Other Courses We Cover</h3><div className="related-links">
          {classSubpages.filter(p=>p.slug!==params.slug).map(p=><Link key={p.slug} href={`/services/pay-someone-to-do-my-online-class/${p.slug}`}>{p.label}</Link>)}
        </div></div>
      </div></section>
      <section className="cta-section"><div className="container">
        <h2>Start Your {page.label} Help Today</h2>
        <div className="cta-buttons">
          <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 WhatsApp Now</a>
          <Link href="/order" className="btn btn-primary btn-lg">🎯 Free Quote</Link>
        </div>
      </div></section>
    </>
  )
}
