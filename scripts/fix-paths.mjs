// Replace ~ with - in output filenames for GitHub Pages compatibility
import { readdirSync, renameSync, readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'

const OUT_DIR = 'out'

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(full)
    } else if (entry.name.includes('~')) {
      const newName = entry.name.replace(/~/g, '-')
      const newPath = join(dir, newName)
      renameSync(full, newPath)
      console.log(`  ${entry.name} → ${newName}`)
      updateRefs(entry.name, newName)
    }
  }
}

function updateRefs(oldName, newName) {
  for (const file of findFiles(OUT_DIR)) {
    let content = readFileSync(file, 'utf8')
    if (content.includes(oldName)) {
      content = content.replaceAll(oldName, newName)
      writeFileSync(file, content, 'utf8')
    }
  }
}

function findFiles(dir) {
  let results = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) results = results.concat(findFiles(full))
    else if (/\.(html|js|css|txt)$/.test(entry.name)) results.push(full)
  }
  return results
}

console.log('Fixing ~ in filenames for GitHub Pages...')
walk(OUT_DIR)
// Ensure .nojekyll exists for GitHub Pages
const nojekyll = join(OUT_DIR, '.nojekyll')
if (!existsSync(nojekyll)) {
  writeFileSync(nojekyll, '')
  console.log('  Created .nojekyll')
}

console.log('Done!')
