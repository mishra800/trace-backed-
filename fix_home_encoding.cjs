const fs = require('fs');
const path = 'src/pages/Home.jsx';
let content = fs.readFileSync(path, 'utf8');

const replacements = {
  'Ã—': '×',
  'Ã–': '×',
  'â€‘': '‑',
  'â€™': '’',
  'â†’': '→',
  'â€”': '—',
  'â€“': '–',
  'â€¢': '•',
  'â€œ': '“',
  'â€': '”'
};

for (const [bad, good] of Object.entries(replacements)) {
  content = content.replace(new RegExp(bad, 'g'), good);
}

fs.writeFileSync(path, content);
console.log('Fixed encoding in Home.jsx');
