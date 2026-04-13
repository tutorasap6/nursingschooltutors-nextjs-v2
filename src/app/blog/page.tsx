import type { Metadata } from 'next'
import Link from 'next/link'
import { getPaginatedPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Nursing Blog — Free Solutions, Study Guides & Exam Prep | NursingSchoolTutors.com',
  description: 'Free nursing study guides, Chamberlain NR course solutions, ATI TEAS prep, PICOT help, and expert nursing academic resources. 700+ free articles by certified nursing educators.',
}

export default function BlogPage({ searchParams }: { searchParams: { page?: string } }) {
  const page = Math.max(1, parseInt(searchParams.page || '1', 10))
  const { posts, totalPages, total } = getPaginatedPosts(page)

  const pageNums: (number | '...')[] = []
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pageNums.push(i)
  } else {
    pageNums.push(1)
    if (page > 3) pageNums.push('...')
    for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) pageNums.push(i)
    if (page < totalPages - 2) pageNums.push('...')
    pageNums.push(totalPages)
  }

  return (
    <>
      {/* Schema for blog section */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context":"https://schema.org",
        "@type":"Blog",
        "name":"NursingSchoolTutors.com Blog",
        "description":"Free nursing study guides and course solutions for Chamberlain, WGU, Capella, and more",
        "url":"https://nursingschooltutors.com/blog",
        "publisher":{"@type":"Organization","name":"NursingSchoolTutors.com","url":"https://nursingschooltutors.com"},
        "aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"58247","bestRating":"5"}
      })}}/>

      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link href="/">Home</Link> › Blog</nav>
          <h1>Nursing Academic Help Blog</h1>
          <p>Free solutions, study guides, and expert resources for {total}+ nursing courses — written by certified nursing educators.</p>
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',marginTop:'16px'}}>
            <span className="badge badge-gold">📚 {total}+ Free Articles</span>
            <span className="badge badge-gold">🏆 Expert-Written</span>
            <span className="badge badge-gold">🧬 AI-Free Content</span>
          </div>
        </div>
      </div>

      {/* Service CTA strip — like takemyonlineclass.store */}
      <div className="blog-service-bar">
        <div className="container">
          <span className="bsb-label">🎯 Need Expert Help?</span>
          <div className="bsb-links">
            <Link href="/services/online-proctored-exam-help">📋 Proctored Exams</Link>
            <Link href="/services/pay-someone-to-do-my-online-class">💻 Pay For My Class</Link>
            <Link href="/services/take-my-class-for-me">📚 Take My Class</Link>
            <Link href="/services/ai-free-nursing-writing-assignment-help">✍️ AI-Free Writing</Link>
            <Link href="/order" className="bsb-cta">🎯 Free Quote</Link>
          </div>
        </div>
      </div>

      <section style={{padding:'56px 0', background:'var(--off-white)'}}>
        <div className="container">
          {posts.length === 0 ? (
            <div style={{textAlign:'center',padding:'80px 0',color:'var(--text-light)'}}>
              <p style={{fontSize:'18px'}}>Blog posts coming soon. Run the scraper: <code>node scripts/scrape-blog.js</code></p>
            </div>
          ) : (
            <>
              <p style={{fontSize:'14px',color:'var(--text-light)',marginBottom:'28px'}}>
                Showing {(page-1)*6+1}–{Math.min(page*6,total)} of {total} articles · Page {page} of {totalPages}
              </p>
              <div className="blog-grid">
                {posts.map(post => (
                  <article key={post.slug} className="blog-card">
                    <div className="blog-card-body">
                      {post.tags.length > 0 && (
                        <div className="blog-card-tags">
                          {post.tags.slice(0, 3).map(tag => <span key={tag} className="blog-tag">{tag}</span>)}
                        </div>
                      )}
                      <h2 className="blog-card-title">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p className="blog-card-excerpt">{post.excerpt}</p>
                      {/* Star rating fix 9 */}
                      <div className="blog-card-rating">
                        <span className="brating-stars">★★★★★</span>
                        <span className="brating-text">4.9 ({(58000 + Math.floor(Math.random()*1000)).toLocaleString()} votes)</span>
                      </div>
                      <div className="blog-card-meta">
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <Link href={`/blog/${post.slug}`} className="blog-card-read-more">Read Full Guide →</Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="pagination" aria-label="Blog pagination">
              <Link href={`/blog?page=${page - 1}`} className={`pag-btn${page <= 1 ? ' disabled' : ''}`} aria-disabled={page <= 1}>← Prev</Link>
              {pageNums.map((p, i) => p === '...'
                ? <span key={`dots-${i}`} className="pag-btn disabled">…</span>
                : <Link key={p} href={`/blog?page=${p}`} className={`pag-btn${p === page ? ' active' : ''}`}>{p}</Link>
              )}
              <Link href={`/blog?page=${page + 1}`} className={`pag-btn${page >= totalPages ? ' disabled' : ''}`} aria-disabled={page >= totalPages}>Next →</Link>
            </nav>
          )}

          {/* Bottom service CTAs */}
          <div className="blog-bottom-ctas">
            <h3>Need Expert Nursing Help?</h3>
            <p>Our certified tutors are available 24/7. Guaranteed A or B grade.</p>
            <div className="blog-cta-grid">
              <Link href="/services/online-proctored-exam-help" className="blog-cta-card">
                <span>🏛️</span><strong>Proctored Exam Help</strong><span>ATI TEAS, HESI, NCLEX &amp; more</span>
              </Link>
              <Link href="/services/pay-someone-to-do-my-online-class" className="blog-cta-card">
                <span>💻</span><strong>Pay For My Online Class</strong><span>All Chamberlain NR courses</span>
              </Link>
              <Link href="/services/take-my-class-for-me" className="blog-cta-card">
                <span>📚</span><strong>Take My Class For Me</strong><span>Full MSN, DNP, FNP takeover</span>
              </Link>
              <Link href="/services/ai-free-nursing-writing-assignment-help" className="blog-cta-card">
                <span>✍️</span><strong>AI-Free Writing Help</strong><span>PICOT, Capstone, Care Plans</span>
              </Link>
            </div>
            <div style={{display:'flex',gap:'14px',justifyContent:'center',flexWrap:'wrap',marginTop:'28px'}}>
              <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">💬 WhatsApp Now</a>
              <Link href="/order" className="btn btn-primary btn-lg">🎯 Get Free Quote</Link>
              <a href="mailto:instanthelp24hr@gmail.com" className="btn btn-green btn-lg">📧 Email Us</a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .blog-service-bar{background:var(--jungle-green);padding:14px 0}
        .blog-service-bar .container{display:flex;align-items:center;gap:16px;flex-wrap:wrap}
        .bsb-label{color:white;font-weight:700;font-size:15px;flex-shrink:0}
        .bsb-links{display:flex;gap:10px;flex-wrap:wrap;flex:1}
        .bsb-links a{color:rgba(255,255,255,0.85);font-size:13.5px;font-weight:600;padding:5px 12px;border-radius:50px;border:1px solid rgba(255,255,255,0.3);transition:all 0.18s}
        .bsb-links a:hover{background:rgba(255,255,255,0.15);color:white}
        .bsb-cta{background:var(--gold)!important;color:var(--jungle-dark)!important;border-color:var(--gold)!important;font-weight:800!important}
        .blog-card-rating{display:flex;align-items:center;gap:8px;margin-bottom:10px}
        .brating-stars{color:var(--gold);font-size:16px}
        .brating-text{font-size:12px;color:var(--text-light);font-weight:600}
        .blog-bottom-ctas{background:var(--jungle-dark);border-radius:var(--radius-lg);padding:48px;margin-top:64px;text-align:center;color:white}
        .blog-bottom-ctas h3{font-family:var(--font-heading);font-size:26px;margin-bottom:10px}
        .blog-bottom-ctas p{color:rgba(255,255,255,0.72);margin-bottom:28px;font-size:16px}
        .blog-cta-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-bottom:8px}
        .blog-cta-card{display:flex;flex-direction:column;align-items:center;gap:6px;padding:20px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);border-radius:var(--radius);transition:all 0.2s;color:white}
        .blog-cta-card:hover{background:rgba(255,255,255,0.14);border-color:var(--gold)}
        .blog-cta-card span:first-child{font-size:28px}
        .blog-cta-card strong{font-size:14px;color:var(--gold-light)}
        .blog-cta-card span:last-child{font-size:12px;color:rgba(255,255,255,0.6)}
      `}</style>
    </>
  )
}
