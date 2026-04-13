import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_DIR = path.join(process.cwd(), 'content/blog')
const POSTS_PER_PAGE = 6

export interface Post {
  slug: string
  title: string
  description: string
  excerpt: string
  date: string
  tags: string[]
  content?: string
  schema?: { type: string; rating: number; ratingCount: number }
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'))
  return files.map(file => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8')
    const { data, content } = matter(raw)
    return {
      slug: file.replace('.md', ''),
      title: data.title || 'Untitled',
      description: data.description || data.excerpt || '',
      excerpt: data.excerpt || content.slice(0, 200).replace(/[#*\[\]]/g, '').trim() + '...',
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      tags: data.tags || [],
      schema: data.schema || { type: 'MedicalWebPage', rating: 4.9, ratingCount: 58247 },
    }
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPaginatedPosts(page: number) {
  const all = getAllPosts()
  const total = all.length
  const totalPages = Math.max(1, Math.ceil(total / POSTS_PER_PAGE))
  const safePage = Math.min(Math.max(1, page), totalPages)
  const start = (safePage - 1) * POSTS_PER_PAGE
  return { posts: all.slice(start, start + POSTS_PER_PAGE), total, totalPages, page: safePage }
}

export function getPost(slug: string): Post | null {
  const file = path.join(POSTS_DIR, `${slug}.md`)
  if (!fs.existsSync(file)) return null
  const raw = fs.readFileSync(file, 'utf-8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title || 'Untitled',
    description: data.description || data.excerpt || '',
    excerpt: data.excerpt || '',
    date: data.date ? new Date(data.date).toISOString() : '',
    tags: data.tags || [],
    content,
    schema: data.schema || { type: 'MedicalWebPage', rating: 4.9, ratingCount: 58247 },
  }
}
