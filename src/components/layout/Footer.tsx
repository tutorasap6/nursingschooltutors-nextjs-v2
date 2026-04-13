import Link from 'next/link'
import { examSubpages, classSubpages, takeMeSubpages, writingSubpages } from '@/data/navigation'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Brand col */}
            <div className="footer-brand">
              <div className="footer-logo">
                <svg width="38" height="38" viewBox="0 0 42 42" fill="none">
                  <circle cx="21" cy="21" r="21" fill="#C9A84C"/>
                  <path d="M19 15h4v4h4v4h-4v4h-4v-4h-4v-4h4z" fill="#004B49"/>
                  <circle cx="21" cy="21" r="3" fill="#C9A84C"/>
                </svg>
                <div>
                  <div className="footer-logo-title">NursingSchoolTutors</div>
                  <div className="footer-logo-sub">A's &amp; B's Guaranteed</div>
                </div>
              </div>
              <p className="footer-desc">
                The #1 trusted nursing academic help platform. Expert tutors for proctored exams, full course takeovers, and AI-free writing help — 24/7.
              </p>
              <div className="footer-contacts">
                <a href="https://wa.me/17654709090" target="_blank" rel="noopener" className="footer-contact-btn wa">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  +1 (765) 470-9090
                </a>
                <a href="mailto:instanthelp24hr@gmail.com" className="footer-contact-btn email">
                  📧 instanthelp24hr@gmail.com
                </a>
              </div>
              <div className="footer-badges">
                <span>🔒 100% Confidential</span>
                <span>🏆 Grade Guaranteed</span>
                <span>⏰ 24/7 Support</span>
              </div>
            </div>

            {/* Company */}
            <div className="footer-col">
              <h4>Company</h4>
              <Link href="/about">About Us</Link>
              <Link href="/how-it-works">How It Works</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/testimonials">Testimonials</Link>
              <Link href="/terms">Terms &amp; Conditions</Link>
              <Link href="/money-back">Money Back Policy</Link>
              <Link href="/revision-policy">Revision Policy</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/contact">Contact Us</Link>
            </div>

            {/* Proctored Exams */}
            <div className="footer-col">
              <h4>Online Proctored Exam Help</h4>
              <Link href="/services/online-proctored-exam-help">All Proctored Exams</Link>
              {examSubpages.slice(0, 10).map(p => (
                <Link key={p.slug} href={`/services/online-proctored-exam-help/${p.slug}`}>{p.label}</Link>
              ))}
              <Link href="/services/online-proctored-exam-help" className="see-all">View all exams →</Link>
            </div>

            {/* Class Help */}
            <div className="footer-col">
              <h4>Take My Online Class</h4>
              <Link href="/services/pay-someone-to-do-my-online-class">Pay For My Online Class</Link>
              <Link href="/services/take-my-class-for-me">Take My Class For Me</Link>
              {classSubpages.slice(0, 7).map(p => (
                <Link key={p.slug} href={`/services/pay-someone-to-do-my-online-class/${p.slug}`}>{p.label}</Link>
              ))}
              <h4 style={{marginTop: '16px'}}>AI-Free Writing Help</h4>
              <Link href="/services/ai-free-nursing-writing-assignment-help">All Writing Services</Link>
              {writingSubpages.slice(0, 5).map(p => (
                <Link key={p.slug} href={`/services/ai-free-nursing-writing-assignment-help/${p.slug}`}>{p.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} NursingSchoolTutors.com — All Rights Reserved. Academic assistance for reference purposes.</p>
          <div className="footer-bottom-links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/money-back">Refunds</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer { background: var(--jungle-dark); color: rgba(255,255,255,0.82); }
        .footer-top { padding: 72px 0 48px; }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr 1.5fr;
          gap: 48px;
        }
        .footer-logo { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .footer-logo-title { font-family: var(--font-heading); font-size: 17px; font-weight: 700; color: var(--white); }
        .footer-logo-sub { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--gold); }
        .footer-desc { font-size: 13.5px; line-height: 1.65; color: rgba(255,255,255,0.65); margin-bottom: 20px; }
        .footer-contacts { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }
        .footer-contact-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 16px; border-radius: 50px;
          font-size: 13px; font-weight: 700; transition: all 0.18s;
        }
        .footer-contact-btn.wa { background: #25D366; color: #fff; }
        .footer-contact-btn.wa:hover { background: #1ebe5a; }
        .footer-contact-btn.email { background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.85); border: 1px solid rgba(255,255,255,0.2); }
        .footer-contact-btn.email:hover { background: rgba(255,255,255,0.18); }
        .footer-badges { display: flex; flex-wrap: wrap; gap: 8px; }
        .footer-badges span {
          font-size: 11px; font-weight: 600; padding: 4px 10px;
          background: rgba(201,168,76,0.15); border: 1px solid rgba(201,168,76,0.3);
          border-radius: 50px; color: var(--gold-light);
        }
        .footer-col h4 {
          font-size: 11px; font-weight: 800; text-transform: uppercase;
          letter-spacing: 0.12em; color: var(--gold-light);
          margin-bottom: 14px; padding-bottom: 8px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .footer-col a {
          display: block; padding: 4px 0; font-size: 13px;
          color: rgba(255,255,255,0.62); transition: all 0.15s;
        }
        .footer-col a:hover { color: var(--gold-light); padding-left: 4px; }
        .footer-col .see-all { color: var(--gold); margin-top: 6px; font-weight: 600; }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); padding: 20px 0; }
        .footer-bottom-inner { display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; }
        .footer-bottom-inner p { font-size: 12.5px; color: rgba(255,255,255,0.45); }
        .footer-bottom-links { display: flex; gap: 20px; }
        .footer-bottom-links a { font-size: 12.5px; color: rgba(255,255,255,0.5); }
        .footer-bottom-links a:hover { color: var(--gold-light); }
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 640px) { .footer-grid { grid-template-columns: 1fr; } .footer-bottom-inner { flex-direction: column; text-align: center; } }
      `}</style>
    </footer>
  )
}
