const fs = require('fs');

const path = 'src/pages/Partners.jsx';
let content = fs.readFileSync(path, 'utf8');

const replacements = {
  'ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â ': '-', // em dash
  'ÃƒÂ¢Ã…â€œÃ¢â‚¬Å“': '✓', // check mark
  'ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢': '→', // right arrow
  'ÃƒÂ¯Ã‚Â¸Ã‚Â ': '', // variation selector
  'ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“': '-', // en dash
  'ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢': '•', // bullet
  'Ãƒâ€šÃ‚Â·': '·', // middle dot
  'ÃƒÂ¢Ã¢â‚¬â€œÃ‚Â¶': '▶', // right triangle
  'Ã¢â‚¬Â\x9D': '"', // quote?
  'ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ': '"', // left double quote
  'ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ': '"' // right double quote
};

for (const [bad, good] of Object.entries(replacements)) {
  content = content.replace(new RegExp(bad, 'g'), good);
}

// Any remaining 'Ã' ?
const lines = content.split('\n');
const garbledLines = lines.filter(line => line.includes('Ã'));
console.log('Remaining garbled lines: ' + garbledLines.length);
if (garbledLines.length > 0) {
  fs.writeFileSync('garbled_remaining.txt', garbledLines.join('\n'));
}

fs.writeFileSync(path, content);
console.log('Done replacing mangled characters.');
