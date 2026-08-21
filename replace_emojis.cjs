const fs = require('fs');
const path = 'src/pages/Partners.jsx';
let content = fs.readFileSync(path, 'utf8');

const emojiMap = {
  '💰': '<i className="fas fa-money-bill-wave"></i>',
  '🖱️': '<i className="fas fa-mouse-pointer"></i>',
  '🔄': '<i className="fas fa-sync-alt"></i>',
  '🤖': '<i className="fas fa-robot"></i>',
  '🔓': '<i className="fas fa-unlock-alt"></i>',
  '🎓': '<i className="fas fa-graduation-cap"></i>',
  '☁️': '<i className="fas fa-cloud"></i>',
  '🏭': '<i className="fas fa-industry"></i>',
  '🏢': '<i className="fas fa-building"></i>',
  '🎁': '<i className="fas fa-gift"></i>',
  '🛡️': '<i className="fas fa-shield-alt"></i>',
  '💾': '<i className="fas fa-save"></i>',
  '🏛️': '<i className="fas fa-university"></i>',
  '🔒': '<i className="fas fa-lock"></i>',
  '🔑': '<i className="fas fa-key"></i>',
  '👁️': '<i className="fas fa-eye"></i>',
  '🏦': '<i className="fas fa-university"></i>',
  '🏥': '<i className="fas fa-hospital"></i>',
  '💻': '<i className="fas fa-laptop"></i>',
  '🛒': '<i className="fas fa-shopping-cart"></i>',
  '🚀': '<i className="fas fa-rocket"></i>',
  '⚡': '<i className="fas fa-bolt"></i>',
  '⭐': '<i className="fas fa-star"></i>',
  '✅': '<i className="fas fa-check-circle"></i>',
  '⚠️': '<i className="fas fa-exclamation-triangle"></i>',
  '🔧': '<i className="fas fa-wrench"></i>',
  '📈': '<i className="fas fa-chart-line"></i>',
  '💪': '<i className="fas fa-dumbbell"></i>',
  '🌐': '<i className="fas fa-globe"></i>',
  '💡': '<i className="fas fa-lightbulb"></i>',
  '🔍': '<i className="fas fa-search"></i>',
  '🛠️': '<i className="fas fa-tools"></i>',
  '🚨': '<i className="fas fa-bell"></i>',
  '📱': '<i className="fas fa-mobile-alt"></i>',
  '📦': '<i className="fas fa-box"></i>',
  '🎯': '<i className="fas fa-bullseye"></i>',
  '🤝': '<i className="fas fa-handshake"></i>',
  '🧑‍💻': '<i className="fas fa-laptop-code"></i>',
  '🛡': '<i className="fas fa-shield-alt"></i>',
  '⚙️': '<i className="fas fa-cog"></i>',
  '⚙': '<i className="fas fa-cog"></i>',
  '📊': '<i className="fas fa-chart-bar"></i>',
  '📝': '<i className="fas fa-file-alt"></i>',
  '📋': '<i className="fas fa-clipboard-list"></i>',
  '👨‍💻': '<i className="fas fa-user-tie"></i>',
  '🩺': '<i className="fas fa-stethoscope"></i>',
  '💊': '<i className="fas fa-pills"></i>',
  '✈️': '<i className="fas fa-plane"></i>'
};

for (const [emoji, icon] of Object.entries(emojiMap)) {
  const regex = new RegExp(emoji, 'g');
  content = content.replace(regex, icon);
}

// Ensure proper spacing when the icon is directly attached to a word
content = content.replace(/(<i className="fas fa-[^"]+"><\/i>)([A-Za-z])/g, '$1 $2');

fs.writeFileSync(path, content, 'utf8');
console.log("Replaced emojis with FontAwesome icons.");
