'use client'
import { useState, useEffect } from 'react'

const testimonials = [
  { text: 'I was failing NR-507 Advanced Pathophysiology. They turned my D into an A in 3 weeks. Absolutely incredible team.', name: 'Jessica M.', role: 'Chamberlain MSN Student', stars: 5, course: 'NR-507' },
  { text: 'They took my ATI TEAS exam prep and I passed with a 91%. No stress, no sleepless nights. Pure results.', name: 'Marcus T.', role: 'Pre-Nursing Student, Texas', stars: 5, course: 'ATI TEAS' },
  { text: 'My DNP capstone was an absolute nightmare. They delivered a flawless AI-free paper in 5 days. Worth every dollar.', name: 'Priya S.', role: 'DNP Candidate, Chamberlain', stars: 5, course: 'DNP Capstone' },
  { text: 'Used them for 3 courses now. Never got below a B. They are literally my secret weapon for nursing school.', name: 'Carlos R.', role: 'BSN Student, SNHU', stars: 5, course: 'BSN Courses' },
  { text: 'I had a proctored HESI exam in 48 hours and they helped me prep systematically. Scored 88%. Unreal service.', name: 'Aisha K.', role: 'ADN Student, Florida', stars: 5, course: 'HESI A2' },
  { text: 'The NR-603 Advanced Clinical Diagnosis course was killing me. They took over and I finished with a 94%.', name: 'Daniel W.', role: 'FNP Student, Chamberlain', stars: 5, course: 'NR-603' },
  { text: 'PICOT paper due in 2 days, I had nothing written. They delivered a perfect 10-page paper. Zero AI, zero plagiarism.', name: 'Sophia L.', role: 'MSN Student, Capella', stars: 5, course: 'PICOT Writing' },
  { text: 'Single mom, working full time, in nursing school. NursingSchoolTutors saved my semester. And my sanity.', name: 'Tracey B.', role: 'RN to BSN Student, WGU', stars: 5, course: 'RN to BSN' },
  { text: 'The NR-533 Financial Management course had me lost from week 1. Their expert handled everything perfectly.', name: 'Kevin O.', role: 'Nurse Executive Track, Chamberlain', stars: 5, course: 'NR-533' },
  { text: 'I retook the NCLEX twice. Their structured coaching and study plan got me through on the third attempt. Life-changing.', name: 'Maria G.', role: 'Registered Nurse, California', stars: 5, course: 'NCLEX' },
  { text: 'NR-581 Foundational Concepts was overwhelming. They broke every concept down and I aced the final exam.', name: 'Brittany H.', role: 'MSN Core, Chamberlain', stars: 5, course: 'NR-581' },
  { text: 'My GRE score went from 285 to 318 after 4 weeks of their targeted coaching. Exceptional preparation support.', name: 'Ahmed S.', role: 'Pre-Graduate Student', stars: 5, course: 'GRE Exam' },
  { text: 'Community health assessment paper done in 3 days, APA-perfect, fully cited. I had to double check it was mine!', name: 'Leah C.', role: 'BSN Student, Liberty University', stars: 5, course: 'Community Health' },
  { text: 'They took my entire NR-631 Nurse Executive capstone experience. Got an A. Cannot recommend highly enough.', name: 'Renee J.', role: 'Nurse Executive, Chamberlain', stars: 5, course: 'NR-631' },
  { text: 'ATI Pharmacology proctored exam felt impossible. Their expert walked me through every drug class systematically.', name: 'Tyler M.', role: 'Nursing Student, Arizona', stars: 5, course: 'ATI Pharmacology' },
  { text: 'I was about to drop out of my MSW program. They stepped in, managed 3 assignments, and saved my GPA.', name: 'Danielle F.', role: 'MSW Student, Chamberlain', stars: 5, course: 'MSW Courses' },
  { text: 'PA-618 Pediatrics Clinical Clerkship documentation was brutal. Their support made the entire rotation manageable.', name: 'Jordan P.', role: 'PA Student, Chamberlain MPAS', stars: 5, course: 'PA-618' },
  { text: 'Got a B+ in NR-706 Healthcare Informatics. Fully managed by their expert. I barely had to log in.', name: 'Sandra W.', role: 'DNP Student, Chamberlain', stars: 5, course: 'NR-706' },
  { text: 'Three MPH courses running simultaneously — they handled MPH-515 and MPH-507 for me. Both A\'s. Amazing.', name: 'Emmanuel T.', role: 'MPH Student, Chamberlain', stars: 5, course: 'MPH Courses' },
  { text: 'The Capsim simulation was destroying my grade. Their expert ran the last 4 rounds and turned it around completely.', name: 'Rachel N.', role: 'Healthcare Management Student', stars: 5, course: 'Capsim Simulation' },
]

export default function TestimonialsFlip() {
  const [page, setPage] = useState(0)
  const [flipped, setFlipped] = useState<number | null>(null)
  const perPage = 8
  const totalPages = Math.ceil(testimonials.length / perPage)
  const visible = testimonials.slice(page * perPage, page * perPage + perPage)

  useEffect(() => {
    // Auto-rotate pages every 8 seconds
    const timer = setInterval(() => setPage(p => (p + 1) % totalPages), 8000)
    return () => clearInterval(timer)
  }, [totalPages])

  return (
    <div>
      <div className="tflip-grid">
        {visible.map((t, i) => (
          <div key={page * perPage + i} className={`tflip-card${flipped === i ? ' flipped' : ''}`} onClick={() => setFlipped(flipped === i ? null : i)}>
            <div className="tflip-inner">
              {/* Front */}
              <div className="tflip-front">
                <div className="tflip-stars">{'★'.repeat(t.stars)}</div>
                <p className="tflip-text">&ldquo;{t.text}&rdquo;</p>
                <div className="tflip-meta">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
                <div className="tflip-hint">Click to see course ↗</div>
              </div>
              {/* Back */}
              <div className="tflip-back">
                <div className="tflip-course-badge">{t.course}</div>
                <p className="tflip-text" style={{marginTop:'12px'}}>&ldquo;{t.text}&rdquo;</p>
                <div className="tflip-meta">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination dots */}
      <div className="tflip-dots">
        {Array.from({length: totalPages}).map((_, i) => (
          <button key={i} className={`tflip-dot${i === page ? ' active' : ''}`} onClick={() => { setPage(i); setFlipped(null); }} aria-label={`Page ${i+1}`}/>
        ))}
      </div>
      <style>{`
        .tflip-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(270px,1fr)); gap:22px; perspective:1200px; }
        .tflip-card { height:220px; cursor:pointer; }
        .tflip-inner { position:relative; width:100%; height:100%; transition:transform 0.6s ease; transform-style:preserve-3d; }
        .tflip-card.flipped .tflip-inner { transform:rotateY(180deg); }
        .tflip-front, .tflip-back { position:absolute; inset:0; backface-visibility:hidden; border-radius:var(--radius-lg); padding:22px; display:flex; flex-direction:column; }
        .tflip-front { background:var(--white); border:1.5px solid var(--border); box-shadow:var(--shadow-sm); }
        .tflip-back { background:var(--jungle-dark); color:white; transform:rotateY(180deg); }
        .tflip-stars { color:var(--gold); font-size:18px; margin-bottom:10px; }
        .tflip-text { font-size:13.5px; font-style:italic; line-height:1.6; flex:1; color:var(--text-light); }
        .tflip-back .tflip-text { color:rgba(255,255,255,0.8); }
        .tflip-meta { margin-top:10px; }
        .tflip-meta strong { display:block; font-size:14px; color:var(--jungle-dark); }
        .tflip-back .tflip-meta strong { color:var(--gold-light); }
        .tflip-meta span { font-size:12px; color:var(--text-light); }
        .tflip-back .tflip-meta span { color:rgba(255,255,255,0.6); }
        .tflip-hint { font-size:11px; color:var(--gray-400); margin-top:8px; text-align:right; }
        .tflip-course-badge { background:var(--gold); color:var(--jungle-dark); font-weight:800; font-size:13px; padding:5px 14px; border-radius:50px; display:inline-block; }
        .tflip-dots { display:flex; gap:8px; justify-content:center; margin-top:28px; }
        .tflip-dot { width:10px; height:10px; border-radius:50%; background:var(--border); border:none; cursor:pointer; transition:all 0.2s; }
        .tflip-dot.active { background:var(--jungle-green); transform:scale(1.3); }
      `}</style>
    </div>
  )
}
