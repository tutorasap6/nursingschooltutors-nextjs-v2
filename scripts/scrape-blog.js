/**
 * Blog Scraper — NursingSchoolTutors.com
 * Run: node scripts/scrape-blog.js
 * Prereqs: npm install node-fetch cheerio
 */
const fs = require('fs')
const path = require('path')

const TOTAL_PAGES = 125
const BASE_URL = 'https://nursingschooltutors.com/blog'
const OUT_DIR = path.join(__dirname, '../content/blog')
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-').replace(/-+/g,'-').slice(0,80)
}
function extractTags(str) {
  const map = {'NR 507':'NR 507','ATI TEAS':'ATI TEAS','HESI':'HESI','NCLEX':'NCLEX','Chamberlain':'Chamberlain','DNP':'DNP','PICOT':'PICOT','capstone':'Capstone','pathophysiology':'Pathophysiology','pharmacology':'Pharmacology','MSN':'MSN','FNP':'FNP','WGU':'WGU','proctored':'Proctored Exams','care plan':'Care Plans','evidence-based':'EBP'}
  const low = str.toLowerCase()
  return [...new Set(Object.entries(map).filter(([k])=>low.includes(k)).map(([,v])=>v))].slice(0,5)
}

async function scrape() {
  const {default:fetch} = await import('node-fetch')
  const {load} = await import('cheerio')
  const seen = new Set(); const posts = []
  for(let i=1; i<=TOTAL_PAGES; i++) {
    const url = i===1 ? `${BASE_URL}/` : `${BASE_URL}/page/${i}/`
    try {
      const res = await fetch(url,{headers:{'User-Agent':'Mozilla/5.0'},signal:AbortSignal.timeout(12000)})
      if(!res.ok) continue
      const $ = load(await res.text())
      $('article, .post, [class*="post-item"], [class*="blog-card"]').each((_,el)=>{
        const $el=$(el)
        const title=$el.find('h1,h2,h3').first().text().trim()
        if(!title||title.length<10) return
        const href=$el.find('a[href*="/blog/"]').first().attr('href')||''
        const excerpt=$el.find('p').first().text().trim().slice(0,200)
        const slug=slugify(title)
        if(seen.has(slug)) return; seen.add(slug)
        posts.push({title,slug,excerpt,href,date:new Date().toISOString().split('T')[0],tags:extractTags(title+' '+excerpt)})
      })
      process.stdout.write(`\rPage ${i}/${TOTAL_PAGES} — ${posts.length} posts found`)
      await new Promise(r=>setTimeout(r,700))
    } catch(e){ process.stdout.write(` [skip: ${e.message}]`) }
  }
  console.log(`\n\nWriting ${posts.length} files...`)
  for(const p of posts) {
    const fp=path.join(OUT_DIR,`${p.slug}.md`)
    if(fs.existsSync(fp)) continue
    fs.writeFileSync(fp,[
      '---',`title: "${p.title.replace(/"/g,'\\"')}"`,
      `excerpt: "${p.excerpt.replace(/"/g,'\\"')}"`,
      `date: "${p.date}"`,
      `tags: [${p.tags.map(t=>`"${t}"`).join(', ')}]`,
      '---','',`# ${p.title}`,'',p.excerpt,'',
      '---','',
      '**Need expert nursing help?** Our certified tutors are available 24/7.','',
      '👉 [Get a Free Quote](/order)','👉 [WhatsApp Us](https://wa.me/17654709090)',
    ].join('\n'))
  }
  console.log('Done! Check content/blog/')
}
scrape().catch(console.error)
