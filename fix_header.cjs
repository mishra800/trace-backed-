const fs = require('fs');

const path = 'src/components/Header.jsx';
let content = fs.readFileSync(path, 'utf8');

// The mobile menu actually looks like this:
// <a href="/partners?partner=xyz" onClick={closeMenu}><img ... /></a>
// We need to replace it first so it doesn't get partially matched by the desktop regex
content = content.replace(/<a href="\/partners\?partner=([a-z0-9]+)" onClick=\{closeMenu\}>(.*?)<\/a>/g, (match, partner, inner) => {
  return `<Link to="/partners?partner=${partner}" onClick={closeMenu} replace={location.pathname === '/partners'}>${inner}</Link>`;
});

// The desktop menu looks like this:
// <a href="/partners?partner=xyz"><img ... /></a>
content = content.replace(/<a href="\/partners\?partner=([a-z0-9]+)">(.*?)<\/a>/g, (match, partner, inner) => {
  return `<Link to="/partners?partner=${partner}" replace={location.pathname === '/partners'}>${inner}</Link>`;
});

fs.writeFileSync(path, content);
console.log('Replaced a tags with Link');
