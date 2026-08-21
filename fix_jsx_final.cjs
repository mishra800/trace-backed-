const fs = require('fs');
const path = 'src/pages/Home.jsx';
let content = fs.readFileSync(path, 'utf8');

// Fix process-two section (around line 835)
// It has "Monitoring & Optimization" text near the end.
const processTwoMarker = '<h3 className="process-two__title">Monitoring & Optimization</h3>';
const p2Start = content.indexOf(processTwoMarker);
const p2End = content.indexOf('</section>', p2Start);

if (p2Start !== -1 && p2End !== -1) {
    const before = content.substring(0, p2Start);
    const middle = content.substring(p2Start, p2End);
    const after = content.substring(p2End);
    
    // Replace the end of process-two
    const newMiddle = middle.replace(/<\/ul>[\s\S]*$/, '</ul>\n            </div>\n');
    content = before + newMiddle + after;
}

// Fix portfolio-two section (around line 1365)
// It has "Optimize configurations for maximum security and performance."
const portfolioTwoMarker = 'Optimize configurations for maximum security and performance.';
const port2Start = content.indexOf(portfolioTwoMarker);
const port2End = content.indexOf('</section>', port2Start);

if (port2Start !== -1 && port2End !== -1) {
    const before = content.substring(0, port2Start);
    const middle = content.substring(port2Start, port2End);
    const after = content.substring(port2End);
    
    // Replace the end of portfolio-two (6 divs)
    const newMiddle = middle.replace(/<\/ul>[\s\S]*$/, '</ul>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n</div>\n');
    content = before + newMiddle + after;
}

fs.writeFileSync(path, content);
console.log("Fixed sections");
