import type { Metadata } from 'next'
import Link from 'next/link'
import { writingSubpages } from '@/data/navigation'

export const metadata: Metadata = {
  title: 'AI-Free Nursing Writing Assignment Help | Zero Plagiarism | NursingSchoolTutors',
  description: 'AI-Free, Zero Plagiarism Nursing Writing Assignment Help. PICOT, DNP Capstone, Dissertations, Care Plans, Concept Maps, EBP Projects. Guaranteed A or B.',
}

const writingTypes = [
  { icon: '🧬', name: 'PICO/PICOT Questions', desc: 'Expertly constructed PICOT questions with evidence-based literature support.' },
  { icon: '🎓', name: 'DNP Capstone Projects', desc: 'Complete DNP project design, IRB support, manuscript writing, and defense prep.' },
  { icon: '📑', name: 'Nursing Dissertations', desc: 'Full dissertation writing — chapter by chapter, flawlessly cited, zero AI.' },
  { icon: '📋', name: 'Nursing Care Plans', desc: 'NANDA-approved, evidence-based nursing care plans for any patient scenario.' },
  { icon: '🗺️', name: 'Concept Maps', desc: 'Clear, visually organized nursing concept maps with clinical reasoning.' },
  { icon: '🔬', name: 'Evidence-Based Practice Projects', desc: 'Rigorous EBP project design using the IOWA or Johns Hopkins model.' },
  { icon: '📊', name: 'Quality Improvement Initiatives', desc: 'QI projects using PDSA, Six Sigma, or Lean methodology.' },
  { icon: '📝', name: 'Case Study Analyses', desc: 'In-depth nursing case studies with differential diagnoses and clinical rationale.' },
  { icon: '📚', name: 'Annotated Bibliographies', desc: 'Peer-reviewed, APA-formatted annotated bibliographies on any nursing topic.' },
  { icon: '🌍', name: 'Community Health Assessments', desc: 'Windshield surveys, community needs assessments, and population health analyses.' },
  { icon: '💊', name: 'Dosage Calculation Exams', desc: 'Expert help with dosage calculations, IV drip rates, and pharmacology math.' },
  { icon: '🏆', name: 'Capsim Simulations', desc: 'Strategic management of Capsim simulation rounds with maximized performance.' },
]

export default function WritingHelpPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> › <Link href="/services">Services</Link> › AI-Free Nursing Writing Assignment Help
          </nav>
          <h1>AI-Free | Zero Plagiarism — Nursing Writing Assignment Help</h1>
          <p>Every paper, project, and assignment written by a certified nursing human expert. 100% original, AI-free, plagiarism-free, and guaranteed to earn an A or B.</p>
          <div style={{display:'flex',gap:'14px',flexWrap:'wrap',marginTop:'24px'}}>
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 Get Help Now</a>
            <Link href="/order" className="btn btn-primary btn-lg">🎯 Free Quote</Link>
          </div>
        </div>
      </div>

      <section style={{padding:'64px 0',background:'var(--white)'}}>
        <div className="container">

          {/* Why AI-free matters */}
          <div style={{background:'linear-gradient(135deg,var(--jungle-xlight),var(--gold-pale))',borderRadius:'var(--radius-lg)',padding:'40px',marginBottom:'56px',border:'1.5px solid rgba(0,148,143,0.15)'}}>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'32px',alignItems:'center'}}>
              <div>
                <span className="section-label">Why It Matters</span>
                <h2 className="section-title">Why <span>AI-Free</span> Matters for Nursing Assignments</h2>
                <p style={{color:'var(--text-light)',lineHeight:'1.8',marginBottom:'16px'}}>
                  AI-generated nursing content fails at clinical accuracy. Nursing instructors now use advanced AI detection tools — Turnitin AI, GPTZero, Copyleaks — and AI-written submissions are instantly flagged.
                </p>
                <p style={{color:'var(--text-light)',lineHeight:'1.8'}}>
                  Every assignment we write is crafted by a credentialed nursing human expert using real clinical knowledge, peer-reviewed literature, and authentic professional writing — indistinguishable from a seasoned nurse.
                </p>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:'14px'}}>
                {[
                  {check:'✅',text:'Written by certified nursing professionals'},
                  {check:'✅',text:'Passes Turnitin, GPTZero, Copyleaks'},
                  {check:'✅',text:'0% plagiarism — plagiarism report included'},
                  {check:'✅',text:'Proper APA 7th edition formatting'},
                  {check:'✅',text:'Peer-reviewed references only'},
                  {check:'✅',text:'Unlimited free revisions'},
                  {check:'✅',text:'Delivered before your deadline'},
                ].map((item,i) => (
                  <div key={i} style={{display:'flex',gap:'10px',alignItems:'center',fontSize:'15px',fontWeight:600,color:'var(--jungle-dark)'}}>
                    <span style={{fontSize:'18px'}}>{item.check}</span>{item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Writing types */}
          <h2 className="section-title text-center">Writing Services <span>We Offer</span></h2>
          <p className="section-sub text-center">Every type of nursing assignment, written by experts who have been there.</p>
          <div className="writing-grid">
            {writingTypes.map(w => (
              <div key={w.name} className="writing-card">
                <span className="writing-icon">{w.icon}</span>
                <h3>{w.name}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>

          {/* All subpages */}
          <div className="related-box" style={{marginTop:'56px'}}>
            <h3>✍️ All AI-Free Nursing Writing Assignment Help Pages</h3>
            <p style={{color:'var(--text-light)',fontSize:'14px',marginBottom:'20px'}}>
              Click any service below for a dedicated page with specific details, examples, and expert matching.
            </p>
            <div className="related-links">
              {writingSubpages.map(p => (
                <Link key={p.slug} href={`/services/ai-free-nursing-writing-assignment-help/${p.slug}`}>{p.label}</Link>
              ))}
            </div>
          </div>

          {/* Pricing guide */}
          <div style={{background:'var(--off-white)',borderRadius:'var(--radius-lg)',padding:'36px',marginTop:'40px',border:'1.5px solid var(--border)'}}>
            <h3 style={{fontFamily:'var(--font-heading)',color:'var(--jungle-dark)',fontSize:'22px',marginBottom:'20px'}}>💡 Writing Assignment Pricing Guide (USD)</h3>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'16px'}}>
              {[
                {type:'Short Paper (1–5 pages)',range:'$20 – $60'},
                {type:'Medium Paper (6–15 pages)',range:'$60 – $150'},
                {type:'Research Paper / Thesis',range:'$150 – $350'},
                {type:'DNP Capstone / Dissertation',range:'$350+'},
              ].map(p => (
                <div key={p.type} style={{background:'var(--white)',borderRadius:'var(--radius)',padding:'18px',border:'1.5px solid var(--border)'}}>
                  <div style={{fontSize:'13px',color:'var(--text-light)',marginBottom:'6px'}}>{p.type}</div>
                  <div style={{fontFamily:'var(--font-heading)',fontSize:'20px',fontWeight:700,color:'var(--jungle-dark)'}}>{p.range}</div>
                </div>
              ))}
            </div>
            <p style={{marginTop:'16px',fontSize:'13px',color:'var(--text-light)'}}>* Final price depends on length, complexity, number of sources, and deadline. Get a free quote for your specific assignment.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Get Your AI-Free Nursing Assignment Written Today</h2>
          <p>Human experts, guaranteed grades, zero plagiarism. Delivered before your deadline.</p>
          <div className="cta-buttons">
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 WhatsApp Now</a>
            <Link href="/order" className="btn btn-primary btn-lg">🎯 Get Free Quote</Link>
            <a href="mailto:instanthelp24hr@gmail.com" className="btn btn-outline btn-lg">📧 Email Us</a>
          </div>
        </div>
      </section>

      <style>{`
        .writing-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:20px; margin-top:36px; }
        .writing-card { background:var(--white); border:1.5px solid var(--border); border-radius:var(--radius); padding:24px; transition:all 0.2s; }
        .writing-card:hover { border-color:var(--jungle-green); box-shadow:var(--shadow-sm); transform:translateY(-3px); }
        .writing-icon { font-size:30px; display:block; margin-bottom:10px; }
        .writing-card h3 { font-family:var(--font-heading); font-size:16px; color:var(--jungle-dark); margin-bottom:6px; }
        .writing-card p { font-size:13px; color:var(--text-light); line-height:1.6; }
      `}</style>
    </>
  )
}
