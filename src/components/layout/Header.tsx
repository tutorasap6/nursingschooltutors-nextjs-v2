'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { examSubpages, classSubpages, takeMeSubpages, writingSubpages } from '@/data/navigation'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const megaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mega menu on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-inner">
        {/* Logo */}
        <Link href="/" className="logo-link" aria-label="Nursing School Tutors Home">
          <svg width="44" height="44" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="21" cy="21" r="21" fill="#004B49"/>
            <rect x="15" y="9" width="12" height="24" rx="3" fill="#C9A84C"/>
            <rect x="9" y="15" width="24" height="12" rx="3" fill="#C9A84C"/>
            <circle cx="21" cy="21" r="4" fill="#004B49"/>
          </svg>
          <div className="logo-text">
            <span className="logo-title">NursingSchoolTutors</span>
            <span className="logo-sub">A&apos;s &amp; B&apos;s Guaranteed</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/" className="nav-link">Home</Link>

          {/* Services — click only, no hover */}
          <div className="dropdown" ref={megaRef}>
            <button
              className={`nav-link nav-btn${megaOpen ? ' active' : ''}`}
              aria-haspopup="true"
              aria-expanded={megaOpen}
              onClick={() => setMegaOpen(v => !v)}
            >
              Services <span className="chevron">{megaOpen ? '▴' : '▾'}</span>
            </button>
            <div className={`mega-menu${megaOpen ? ' open' : ''}`} role="menu">
              <div className="mega-col">
                <h4>🏛️ Online Proctored Exam Help</h4>
                <Link href="/services/online-proctored-exam-help" className="mega-main-link" onClick={() => setMegaOpen(false)}>→ View All Proctored Exams</Link>
                {examSubpages.slice(0, 14).map(p => (
                  <Link key={p.slug} href={`/services/online-proctored-exam-help/${p.slug}`} onClick={() => setMegaOpen(false)}>{p.label}</Link>
                ))}
              </div>
              <div className="mega-col">
                <h4>💻 Pay Someone For My Online Class</h4>
                <Link href="/services/pay-someone-to-do-my-online-class" className="mega-main-link" onClick={() => setMegaOpen(false)}>→ All Online Class Help</Link>
                {classSubpages.slice(0, 8).map(p => (
                  <Link key={p.slug} href={`/services/pay-someone-to-do-my-online-class/${p.slug}`} onClick={() => setMegaOpen(false)}>{p.label}</Link>
                ))}
                <h4 style={{marginTop:'18px'}}>📚 Take My Class For Me</h4>
                <Link href="/services/take-my-class-for-me" className="mega-main-link" onClick={() => setMegaOpen(false)}>→ Full Course Takeover</Link>
                {takeMeSubpages.slice(0, 6).map(p => (
                  <Link key={p.slug} href={`/services/take-my-class-for-me/${p.slug}`} onClick={() => setMegaOpen(false)}>{p.label}</Link>
                ))}
              </div>
              <div className="mega-col">
                <h4>✍️ AI-Free Writing Assignment Help</h4>
                <Link href="/services/ai-free-nursing-writing-assignment-help" className="mega-main-link" onClick={() => setMegaOpen(false)}>→ All Writing Services</Link>
                {writingSubpages.map(p => (
                  <Link key={p.slug} href={`/services/ai-free-nursing-writing-assignment-help/${p.slug}`} onClick={() => setMegaOpen(false)}>{p.label}</Link>
                ))}
                <div className="mega-cta-box">
                  <p>Need help now?</p>
                  <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="btn btn-whatsapp btn-sm" onClick={() => setMegaOpen(false)}>💬 WhatsApp Us</a>
                  <Link href="/order" className="btn btn-primary btn-sm" onClick={() => setMegaOpen(false)}>🎯 Free Quote</Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          <Link href="/order" className="btn btn-primary btn-sm nav-cta">
            🎯 Free Quote — Order Now
          </Link>
        </nav>

        {/* Mobile burger */}
        <button className="mobile-toggle" aria-label="Toggle menu" onClick={() => setMobileOpen(!mobileOpen)}>
          <span/><span/><span/>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="mobile-nav">
          <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <details>
            <summary>Services ▾</summary>
            <div className="mobile-submenu">
              <Link href="/services/online-proctored-exam-help" onClick={() => setMobileOpen(false)}>🏛️ Online Proctored Exam Help</Link>
              <Link href="/services/pay-someone-to-do-my-online-class" onClick={() => setMobileOpen(false)}>💻 Pay Someone For My Online Class</Link>
              <Link href="/services/take-my-class-for-me" onClick={() => setMobileOpen(false)}>📚 Take My Class For Me</Link>
              <Link href="/services/ai-free-nursing-writing-assignment-help" onClick={() => setMobileOpen(false)}>✍️ AI-Free Writing Help</Link>
            </div>
          </details>
          <Link href="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          <Link href="/order" className="btn btn-primary" style={{textAlign:'center',justifyContent:'center'}} onClick={() => setMobileOpen(false)}>🎯 Free Quote — Order Now</Link>
        </nav>
      )}

      <style>{`
        .site-header { position: sticky; top: 0; z-index: 900; background: rgba(255,255,255,0.97); backdrop-filter: blur(12px); border-bottom: 1.5px solid var(--border); transition: box-shadow 0.25s; }
        .site-header.scrolled { box-shadow: 0 4px 24px rgba(0,75,73,0.12); }
        .header-inner { display: flex; align-items: center; justify-content: space-between; height: var(--header-h); gap: 24px; }
        .logo-link { display: flex; align-items: center; gap: 13px; flex-shrink: 0; }
        .logo-text { display: flex; flex-direction: column; line-height: 1.2; }
        .logo-title { font-family: var(--font-heading); font-size: 20px; font-weight: 700; color: var(--jungle-dark); }
        .logo-sub { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--gold); }
        .desktop-nav { display: flex; align-items: center; gap: 4px; }
        .nav-link { padding: 9px 15px; font-size: 15px; font-weight: 600; color: var(--text); border-radius: 8px; transition: all 0.18s; display: flex; align-items: center; gap: 5px; }
        .nav-link:hover, .nav-link.active { color: var(--jungle-green); background: var(--jungle-xlight); }
        .nav-btn { background: none; border: none; font-family: var(--font-body); cursor: pointer; font-size: 15px; }
        .nav-cta { background: var(--gold) !important; color: var(--jungle-dark) !important; margin-left: 8px; box-shadow: 0 3px 14px rgba(201,168,76,0.3); border-radius: 50px !important; }
        .nav-cta:hover { background: var(--gold-light) !important; transform: translateY(-1px); }
        .chevron { font-size: 11px; }
        .mega-main-link { font-weight: 800 !important; color: var(--jungle-green) !important; font-size: 13px !important; margin-bottom: 8px; padding: 4px 0 !important; }
        .mega-cta-box { margin-top: 20px; padding: 16px; background: var(--jungle-xlight); border-radius: var(--radius); display: flex; flex-direction: column; gap: 8px; }
        .mega-cta-box p { font-size: 13px; font-weight: 700; color: var(--jungle-dark); margin: 0 0 4px; }
        .mobile-toggle { display: none; flex-direction: column; gap: 5px; padding: 8px; }
        .mobile-toggle span { display: block; width: 26px; height: 2px; background: var(--jungle-dark); border-radius: 2px; transition: all 0.2s; }
        .mobile-nav { display: flex; flex-direction: column; padding: 16px 24px 24px; background: var(--white); border-top: 1px solid var(--border); gap: 4px; }
        .mobile-nav a, .mobile-nav summary { padding: 13px 16px; font-weight: 600; font-size: 16px; color: var(--text); border-radius: var(--radius); cursor: pointer; list-style: none; display: block; }
        .mobile-nav a:hover { background: var(--jungle-xlight); color: var(--jungle-green); }
        .mobile-submenu { display: flex; flex-direction: column; padding-left: 16px; }
        .mobile-submenu a { font-size: 15px; padding: 9px 14px; }
        @media (max-width: 960px) { .desktop-nav { display: none; } .mobile-toggle { display: flex; } }
      `}</style>
    </header>
  )
}
