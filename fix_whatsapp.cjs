const fs = require('fs');

const files = [
  'src/components/Header.jsx',
  'src/pages/Cybersecurityy.jsx',
  'src/components/StickySocial.jsx',
  'src/components/WhatsAppFloat.jsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/919876543210/g, '919000314411');
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
