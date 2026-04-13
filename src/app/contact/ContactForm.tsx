'use client'
import { useState, useRef } from 'react'

const SERVICES = [
  { value: 'Online Proctored Exam Help', budgetHint: 'Exam prep, coaching & guided support:', chips: ['$30–$80', '$80–$200', '$200–$400', '$400+'] },
  { value: 'Pay Someone to Do My Online Class', budgetHint: 'Full online class assignment management:', chips: ['$50–$100', '$100–$250', '$250–$500', '$500–$1,000+'] },
  { value: 'Take My Class For Me (Full Course)', budgetHint: 'Full course takeover — start to finish:', chips: ['$200–$400', '$400–$700', '$700–$1,200', '$1,200+'] },
  { value: 'AI-Free Writing Assignment Help', budgetHint: 'AI-free, zero-plagiarism writing:', chips: ['$20–$60', '$60–$150', '$150–$350', '$350+'] },
  { value: 'PICOT / DNP Capstone Help', budgetHint: 'Advanced nursing project writing:', chips: ['$100–$250', '$250–$500', '$500–$900', '$900+'] },
  { value: 'Other / Not Listed', budgetHint: 'Tell us your budget:', chips: ['Under $50', '$50–$200', '$200–$500', '$500+'] },
]

const ACCEPTED = '.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip,.rar,.txt'

export default function ContactForm() {
  const [service, setService] = useState('')
  const [selectedChip, setSelectedChip] = useState('')
  const [budget, setBudget] = useState('')
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')
  const [files, setFiles] = useState<FileList | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const currentService = SERVICES.find(s => s.value === service)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append('budget_selected', selectedChip)
    formData.append('budget_custom', budget)
    if (files) {
      Array.from(files).forEach(f => formData.append('attachments', f))
    }
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: formData })
      if (res.ok) { setStatus('sent'); form.reset(); setService(''); setBudget(''); setSelectedChip(''); setFiles(null) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <div className="contact-form-wrap">
      <h2>Get Your Free Quote</h2>
      <p className="form-sub">Fill out all fields — we&apos;ll match you with the right expert within 30 minutes.</p>
      {status === 'sent' && <div className="form-success">✅ Message received! We&apos;ll contact you within 30 minutes via WhatsApp or email.</div>}
      {status === 'error' && <div className="form-error">❌ Something went wrong. Please WhatsApp us at +1(765)470-9090.</div>}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name <span className="req">*</span></label>
            <input id="name" name="name" type="text" required placeholder="Your full name" autoComplete="name"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address <span className="req">*</span></label>
            <input id="email" name="email" type="email" required placeholder="your@email.com" autoComplete="email"/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">WhatsApp / Phone</label>
            <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000"/>
          </div>
          <div className="form-group">
            <label htmlFor="university">University / School</label>
            <input id="university" name="university" type="text" placeholder="e.g. Chamberlain, WGU, Capella..."/>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="service">Service Needed <span className="req">*</span></label>
          <select id="service" name="service" required value={service} onChange={e => { setService(e.target.value); setSelectedChip(''); setBudget(''); }}>
            <option value="">-- Select a Service --</option>
            {SERVICES.map(s => <option key={s.value} value={s.value}>{s.value}</option>)}
          </select>
        </div>

        {currentService && (
          <div className="budget-box">
            <div className="budget-header">
              <span>💵</span>
              <div>
                <label>Your Budget (USD $) <span className="req">*</span></label>
                <p className="budget-hint">{currentService.budgetHint}</p>
              </div>
            </div>
            <div className="budget-chips">
              {currentService.chips.map(c => (
                <button key={c} type="button" className={`budget-chip${selectedChip===c?' selected':''}`}
                  onClick={() => { setSelectedChip(c); const nums = c.match(/\d+/g); if(nums && nums.length>=2) setBudget(String(Math.round((+nums[0]+ +nums[1])/2))); else if(nums) setBudget(nums[0]); }}>
                  <span className="chip-range">{c}</span>
                </button>
              ))}
            </div>
            <div className="form-group" style={{marginTop:'12px',marginBottom:0}}>
              <label htmlFor="budget_custom">Or enter your exact budget (USD $)</label>
              <div className="dollar-wrap">
                <span className="dollar-sign">$</span>
                <input id="budget_custom" name="budget_custom" type="number" min="0" step="1" placeholder="e.g. 150" value={budget} onChange={e=>setBudget(e.target.value)} required/>
              </div>
            </div>
          </div>
        )}

        <div className="form-group">
          <label htmlFor="message">Tell Us About Your Class / Exam / Assignment <span className="req">*</span></label>
          <textarea id="message" name="message" required placeholder="e.g. I need help with NR-507 Advanced Pathophysiology at Chamberlain. 8-week course, weekly discussions, midterm and final. Deadline in 5 days..."/>
        </div>

        {/* File attachment — Fix 7 */}
        <div className="form-group">
          <label htmlFor="attachments">Attach Files (Optional)</label>
          <div className="file-upload-box" onClick={() => fileRef.current?.click()}>
            <input
              ref={fileRef}
              id="attachments"
              name="attachments"
              type="file"
              accept={ACCEPTED}
              multiple
              onChange={e => setFiles(e.target.files)}
              style={{display:'none'}}
            />
            <div className="file-upload-inner">
              <span className="file-icon">📎</span>
              <div>
                <strong>Click to attach files</strong>
                <p>PDF, Word, Excel, PowerPoint, ZIP — up to 10MB each</p>
              </div>
            </div>
            {files && files.length > 0 && (
              <div className="file-list">
                {Array.from(files).map((f, i) => (
                  <span key={i} className="file-item">✅ {f.name} ({(f.size/1024).toFixed(0)}KB)</span>
                ))}
              </div>
            )}
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-lg" style={{width:'100%',justifyContent:'center'}} disabled={status==='sending'}>
          {status==='sending' ? '⏳ Sending...' : '📩 Send Request — Get Free Quote'}
        </button>
      </form>

      <a href="https://wa.me/17654709090?text=Hi%20NursingSchoolTutors!%20I%20need%20help%20with%20my%20nursing%20class%20or%20exam." target="_blank" rel="noopener"
         className="btn btn-whatsapp btn-lg" style={{width:'100%',justifyContent:'center',marginTop:'12px',display:'flex'}}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Quick Chat on WhatsApp — +1 (765) 470-9090
      </a>

      <style>{`
        .contact-form-wrap{background:var(--white);border-radius:var(--radius-lg);padding:40px;border:1.5px solid var(--border);box-shadow:var(--shadow-sm)}
        .contact-form-wrap h2{font-family:var(--font-heading);color:var(--jungle-dark);font-size:26px;margin-bottom:6px}
        .form-sub{color:var(--text-light);font-size:15px;margin-bottom:28px}
        .form-success{background:#d4edda;border:1px solid #b8dfc8;border-radius:10px;padding:16px;margin-bottom:20px;color:#155724;font-weight:600}
        .form-error{background:#fde8e8;border:1px solid #f5c6cb;border-radius:10px;padding:16px;margin-bottom:20px;color:#721c24;font-weight:600}
        .form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px}
        .budget-box{background:var(--off-white);border:2px solid var(--border);border-radius:14px;padding:20px;margin-bottom:20px}
        .budget-header{display:flex;align-items:flex-start;gap:12px;margin-bottom:14px;font-size:22px}
        .budget-header label{display:block;font-weight:700;font-size:15px;color:var(--text);margin-bottom:2px}
        .budget-hint{font-size:13px;color:var(--text-light)}
        .budget-chips{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}
        .budget-chip{border:2px solid var(--border);border-radius:10px;background:var(--white);padding:10px 14px;cursor:pointer;transition:all 0.18s}
        .budget-chip:hover{border-color:var(--jungle-green)}
        .budget-chip.selected{border-color:var(--gold);background:var(--gold-pale);box-shadow:0 0 0 2px var(--gold)}
        .chip-range{display:block;font-size:16px;font-weight:800;color:var(--jungle-dark)}
        .dollar-wrap{display:flex;align-items:center;border:2px solid var(--border);border-radius:var(--radius);overflow:hidden;background:var(--white)}
        .dollar-wrap:focus-within{border-color:var(--jungle-green);box-shadow:0 0 0 3px rgba(0,75,73,0.10)}
        .dollar-sign{background:var(--jungle-green);color:white;padding:14px;font-weight:700;font-size:16px;flex-shrink:0}
        .dollar-wrap input{border:none!important;border-radius:0!important;box-shadow:none!important;flex:1;font-size:16px;font-weight:700}
        .dollar-wrap input:focus{box-shadow:none!important}
        .file-upload-box{border:2px dashed var(--border);border-radius:var(--radius);padding:20px;cursor:pointer;transition:all 0.2s;background:var(--off-white)}
        .file-upload-box:hover{border-color:var(--jungle-green);background:var(--jungle-xlight)}
        .file-upload-inner{display:flex;align-items:center;gap:14px}
        .file-icon{font-size:28px;flex-shrink:0}
        .file-upload-inner strong{display:block;color:var(--jungle-dark);font-size:15px;margin-bottom:3px}
        .file-upload-inner p{font-size:13px;color:var(--text-light);margin:0}
        .file-list{margin-top:12px;display:flex;flex-direction:column;gap:6px}
        .file-item{font-size:13px;font-weight:600;color:var(--jungle-green);background:var(--jungle-xlight);padding:4px 10px;border-radius:6px}
        @media(max-width:600px){.form-row{grid-template-columns:1fr}.budget-chips{grid-template-columns:1fr 1fr}}
      `}</style>
    </div>
  )
}
