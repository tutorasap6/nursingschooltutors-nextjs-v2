import type { Metadata } from 'next'
import Link from 'next/link'
import { getPost, getAllPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | NursingSchoolTutors.com`,
    description: post.description || post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description || post.excerpt,
      type: 'article',
      siteName: 'NursingSchoolTutors.com',
      url: `https://nursingschooltutors.com/blog/${params.slug}`,
    },
    robots: { index: true, follow: true },
  }
}

function getCourseTags(post: { title: string; tags: string[]; slug: string }): string[] {
  const existing = [...post.tags]
  // Extract NR/PA codes
  const codes = (post.title + ' ' + post.slug).match(/\b(NR[-\s]?\d{3,4}[A-Z]?|PA[-\s]?\d{3,4}|MPH[-\s]?\d{3,4}|MSW[-\s]?\d{3,4})\b/gi) || []
  codes.forEach(c => { const u = c.toUpperCase().replace(' ','-'); if (!existing.includes(u)) existing.push(u) })
  // University
  if (!existing.includes('Chamberlain College of Nursing') && (post.title.match(/NR[-\s]?\d/i) || post.slug.includes('nr-'))) existing.push('Chamberlain College of Nursing')
  // Trending
  const trending = ['NursingSchoolTutors.com','Online Nursing Help','Proctored Exam Help','A or B Guaranteed','AI-Free Nursing Writing','Nursing School 2025','Take My Online Class']
  trending.forEach(t => { if (!existing.includes(t)) existing.push(t) })
  return [...new Set(existing)].slice(0, 15)
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()
  const related = getAllPosts().filter(p => p.slug !== post.slug && p.tags.some(t => post.tags.includes(t))).slice(0, 3)
  const allPosts = getAllPosts()
  const recentFallback = allPosts.filter(p => p.slug !== post.slug).slice(0, 3)
  const relatedPosts = related.length > 0 ? related : recentFallback
  const allTags = getCourseTags(post)
  const ratingCount = (post.schema?.ratingCount || 58247).toLocaleString()

  // JSON-LD schema with star rating (Fix 9)
  const schema = {
    "@context": "https://schema.org",
    "@type": post.schema?.type || "MedicalWebPage",
    "name": post.title,
    "description": post.description || post.excerpt,
    "url": `https://nursingschooltutors.com/blog/${post.slug}`,
    "datePublished": post.date,
    "publisher": { "@type": "Organization", "name": "NursingSchoolTutors.com", "url": "https://nursingschooltutors.com" },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": post.schema?.rating || 4.9,
      "reviewCount": post.schema?.ratingCount || 58247,
      "bestRating": 5,
      "worstRating": 1
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nursingschooltutors.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://nursingschooltutors.com/blog" },
        { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://nursingschooltutors.com/blog/${post.slug}` }
      ]
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>

      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link href="/">Home</Link> › <Link href="/blog">Blog</Link> › {post.title.slice(0, 55)}{post.title.length > 55 ? '...' : ''}</nav>
          <h1>{post.title}</h1>
          {/* Star rating display (Fix 9) */}
          <div style={{display:'flex',alignItems:'center',gap:'12px',marginTop:'14px',flexWrap:'wrap'}}>
            <div style={{display:'flex',alignItems:'center',gap:'6px'}}>
              <span style={{color:'var(--gold-light)',fontSize:'20px'}}>★★★★★</span>
              <span style={{color:'rgba(255,255,255,0.8)',fontSize:'14px',fontWeight:600}}>
                {post.schema?.rating || 4.9} ({ratingCount} ratings)
              </span>
            </div>
            <span style={{color:'rgba(255,255,255,0.5)',fontSize:'13px'}}>
              Published {new Date(post.date).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})}
            </span>
          </div>
          <p style={{marginTop:'10px',color:'rgba(255,255,255,0.72)',fontSize:'16px',maxWidth:'700px'}}>{post.description}</p>
        </div>
      </div>

      {/* Service bar */}
      <div style={{background:'var(--jungle-green)',padding:'12px 0'}}>
        <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'12px',flexWrap:'wrap'}}>
          <span style={{color:'white',fontWeight:600,fontSize:'14px'}}>💬 Need expert help with this topic? Tutors available 24/7.</span>
          <div style={{display:'flex',gap:'8px',flexWrap:'wrap'}}>
            <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-sm">WhatsApp Now</a>
            <Link href="/order" className="btn btn-primary btn-sm">Free Quote</Link>
            <Link href="/contact" className="btn btn-sm" style={{background:'rgba(255,255,255,0.15)',color:'white',borderColor:'rgba(255,255,255,0.3)'}}>Contact Us</Link>
          </div>
        </div>
      </div>

      <article style={{padding:'56px 0',background:'var(--off-white)'}}>
        <div className="container">
          <div className="blog-layout">
            {/* Main content */}
            <div>
              <div className="page-content-wrap blog-content prose" dangerouslySetInnerHTML={{__html: post.content || `<p>${post.excerpt}</p>`}}/>

              {/* Exam Practice Panel (Fix 8) */}
              <div className="exam-practice-panel">
                <div className="epp-header">
                  <span className="epp-icon">🎯</span>
                  <div>
                    <h3>Practice in Exam Mode</h3>
                    <p>Test your knowledge with timed practice questions on this topic</p>
                  </div>
                </div>
                <div className="epp-actions">
                  <a href="https://wa.me/17654709090?text=Hi!%20I%20want%20exam%20practice%20questions%20for%20this%20topic." target="_blank" rel="noopener" className="btn btn-primary">
                    🧪 Get Practice Questions
                  </a>
                  <Link href="/order" className="btn btn-green">📝 Get Expert Tutoring</Link>
                  <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp">💬 WhatsApp Tutor</a>
                </div>
              </div>

              {/* Tags (Fix 5: course code, name, university, trending) */}
              <div style={{background:'var(--white)',border:'1.5px solid var(--border)',borderRadius:'var(--radius)',padding:'24px',marginTop:'24px'}}>
                <h4 style={{fontSize:'12px',fontWeight:800,textTransform:'uppercase',letterSpacing:'0.1em',color:'var(--gold)',marginBottom:'14px',paddingBottom:'8px',borderBottom:'1px solid var(--border)'}}>
                  📌 Course Tags &amp; Related Topics
                </h4>
                <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
                  {allTags.map(tag => <span key={tag} className="sidebar-tag">{tag}</span>)}
                </div>
              </div>

              {/* Bottom CTA */}
              <div style={{background:'var(--jungle-dark)',borderRadius:'var(--radius-lg)',padding:'40px',marginTop:'28px',textAlign:'center'}}>
                <h3 style={{fontFamily:'var(--font-heading)',color:'var(--white)',fontSize:'24px',marginBottom:'10px'}}>Need Expert Nursing Help Right Now?</h3>
                <p style={{color:'rgba(255,255,255,0.72)',marginBottom:'24px',fontSize:'16px'}}>
                  Our certified nursing tutors are available 24/7. Guaranteed A or B — or full refund.
                </p>
                <div style={{display:'flex',gap:'12px',justifyContent:'center',flexWrap:'wrap'}}>
                  <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 WhatsApp Us</a>
                  <Link href="/order" className="btn btn-primary btn-lg">🎯 Free Quote</Link>
                  <a href="mailto:instanthelp24hr@gmail.com" className="btn btn-outline btn-lg" style={{borderColor:'rgba(255,255,255,0.4)',color:'white'}}>📧 Email Us</a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              <div className="sidebar-box">
                <h3>🎯 Get Expert Help</h3>
                <p>Certified nursing tutors 24/7. Guaranteed A or B.</p>
                <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp" style={{width:'100%',justifyContent:'center',marginBottom:'10px',display:'flex'}}>💬 WhatsApp Now</a>
                <Link href="/order" className="btn btn-primary" style={{width:'100%',justifyContent:'center',display:'flex',marginBottom:'10px'}}>🎯 Free Quote</Link>
                <a href="mailto:instanthelp24hr@gmail.com" className="btn btn-green btn-sm" style={{width:'100%',justifyContent:'center',display:'flex'}}>📧 Email Us</a>
              </div>
              <div className="sidebar-box">
                <h4>Our Services</h4>
                <Link href="/services/online-proctored-exam-help">📋 Proctored Exam Help</Link>
                <Link href="/services/pay-someone-to-do-my-online-class">💻 Pay For My Class</Link>
                <Link href="/services/take-my-class-for-me">📚 Take My Class For Me</Link>
                <Link href="/services/ai-free-nursing-writing-assignment-help">✍️ AI-Free Writing</Link>
                <Link href="/contact">📞 Contact Us</Link>
                <Link href="/faq">❓ FAQ</Link>
              </div>
              <div className="sidebar-box">
                <h4>Popular Exams</h4>
                <Link href="/services/online-proctored-exam-help/ati-teas-proctored-exam-help">ATI TEAS Exam Help</Link>
                <Link href="/services/online-proctored-exam-help/hesi-proctored-exam-help">HESI A2 Exam Help</Link>
                <Link href="/services/online-proctored-exam-help/nclex-exam-help">NCLEX Exam Help</Link>
                <Link href="/services/online-proctored-exam-help/nr-507-advanced-pathophysiology">NR-507 Pathophysiology</Link>
                <Link href="/services/online-proctored-exam-help/wgu-proctored-exam-help">WGU Proctored Exams</Link>
                <Link href="/services/online-proctored-exam-help/gre-proctored-exam-help">GRE Exam Help</Link>
              </div>
              <div className="sidebar-box">
                <h4>Writing Help</h4>
                <Link href="/services/ai-free-nursing-writing-assignment-help/picot-nursing-assignment-help">PICOT Writing</Link>
                <Link href="/services/ai-free-nursing-writing-assignment-help/dnp-capstone-writing-help">DNP Capstone</Link>
                <Link href="/services/ai-free-nursing-writing-assignment-help/nursing-care-plans-writing-help">Care Plans</Link>
                <Link href="/services/ai-free-nursing-writing-assignment-help/nursing-dissertation-writing-help">Dissertations</Link>
                <Link href="/services/ai-free-nursing-writing-assignment-help/evidence-based-practice-projects">EBP Projects</Link>
              </div>
              {/* Star ratings sidebar */}
              <div className="sidebar-box" style={{textAlign:'center'}}>
                <h4>Student Ratings</h4>
                <div style={{fontSize:'28px',color:'var(--gold)',margin:'8px 0'}}>★★★★★</div>
                <div style={{fontFamily:'var(--font-heading)',fontSize:'32px',fontWeight:900,color:'var(--jungle-dark)'}}>4.9/5</div>
                <p style={{fontSize:'12px',color:'var(--text-light)',margin:'4px 0 0'}}>{ratingCount} verified student ratings</p>
              </div>
              <div className="sidebar-box">
                <h4>Course Tags</h4>
                <div className="sidebar-tags">
                  {allTags.slice(0, 10).map(t => <span key={t} className="sidebar-tag">{t}</span>)}
                </div>
              </div>
              <div className="sidebar-box" style={{background:'var(--jungle-dark)',border:'none'}}>
                <h4 style={{color:'var(--gold-light)'}}>Quick Contact</h4>
                <a href="https://wa.me/17654709090" target="_blank" rel="noopener" style={{color:'#25D366',fontWeight:700,display:'block',marginBottom:'8px'}}>💬 +1 (765) 470-9090</a>
                <a href="mailto:instanthelp24hr@gmail.com" style={{color:'var(--gold-light)',fontWeight:700,fontSize:'13px'}}>📧 instanthelp24hr@gmail.com</a>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section style={{padding:'56px 0',background:'var(--white)'}}>
          <div className="container">
            <h2 className="section-title">Related <span>Articles</span></h2>
            <div className="blog-grid">
              {relatedPosts.map(p => (
                <article key={p.slug} className="blog-card">
                  <div className="blog-card-body">
                    <div className="blog-card-tags">{p.tags.slice(0,2).map(t=><span key={t} className="blog-tag">{t}</span>)}</div>
                    <h3 className="blog-card-title"><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
                    <p className="blog-card-excerpt">{p.excerpt}</p>
                    <div className="blog-card-meta">
                      <span style={{color:'var(--gold)',fontSize:'13px'}}>★★★★★ 4.9</span>
                      <Link href={`/blog/${p.slug}`} className="blog-card-read-more">Read More →</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        .exam-practice-panel{background:linear-gradient(135deg,var(--jungle-dark),var(--jungle-green));border-radius:var(--radius-lg);padding:32px;margin-top:28px}
        .epp-header{display:flex;align-items:flex-start;gap:16px;margin-bottom:20px}
        .epp-icon{font-size:32px;flex-shrink:0}
        .epp-header h3{font-family:var(--font-heading);color:white;font-size:20px;margin-bottom:6px}
        .epp-header p{color:rgba(255,255,255,0.72);font-size:14px}
        .epp-actions{display:flex;gap:12px;flex-wrap:wrap}
      `}</style>
    </>
  )
}
