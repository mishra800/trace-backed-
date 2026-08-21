const fs = require('fs');
const path = 'src/pages/Partners.jsx';
let content = fs.readFileSync(path, 'utf8');

const emojiMap = {
  '🏆': '<i className="fas fa-trophy"></i>',
  '🖥': '<i className="fas fa-desktop"></i>',
  '💼': '<i className="fas fa-briefcase"></i>',
  '🗄': '<i className="fas fa-archive"></i>',
  '🚚': '<i className="fas fa-truck"></i>',
  '🎬': '<i className="fas fa-film"></i>',
  '🏗': '<i className="fas fa-building"></i>',
  '🔗': '<i className="fas fa-link"></i>',
  '💬': '<i className="fas fa-comment-dots"></i>',
  '🏅': '<i className="fas fa-medal"></i>',
  '💎': '<i className="fas fa-gem"></i>',
  '👥': '<i className="fas fa-users"></i>',
  '🎖': '<i className="fas fa-award"></i>',
  '🌍': '<i className="fas fa-globe-americas"></i>',
  '🔥': '<i className="fas fa-fire"></i>',
  '📧': '<i className="fas fa-envelope"></i>',
  '🔐': '<i className="fas fa-user-lock"></i>',
  '🕐': '<i className="fas fa-clock"></i>',
  '🎉': '<i className="fas fa-glass-cheers"></i>',
  '🏨': '<i className="fas fa-hotel"></i>',
  '🧪': '<i className="fas fa-flask"></i>',
  '⛏': '<i className="fas fa-hammer"></i>',
  '📞': '<i className="fas fa-phone-alt"></i>',
  '🎫': '<i className="fas fa-ticket-alt"></i>',
  '🎥': '<i className="fas fa-video"></i>',
  '📹': '<i className="fas fa-video"></i>',
  '🏠': '<i className="fas fa-home"></i>',
  '🔎': '<i className="fas fa-search"></i>',
  '👤': '<i className="fas fa-user"></i>',
  '🔌': '<i className="fas fa-plug"></i>',
  '🧵': '<i className="fas fa-cut"></i>',
  '🌾': '<i className="fas fa-seedling"></i>',
  '🦠': '<i className="fas fa-bug"></i>',
  '🍎': '<i className="fas fa-apple-alt"></i>',
  '🎨': '<i className="fas fa-palette"></i>',
  '📣': '<i className="fas fa-bullhorn"></i>',
  '📡': '<i className="fas fa-satellite-dish"></i>',
  '📠': '<i className="fas fa-fax"></i>',
  '🔔': '<i className="fas fa-bell"></i>',
  '🎧': '<i className="fas fa-headphones"></i>',
  '🎙': '<i className="fas fa-microphone"></i>',
  '⚙️': '<i className="fas fa-cog"></i>'
};

for (const [emoji, icon] of Object.entries(emojiMap)) {
  const regex = new RegExp(emoji, 'g');
  content = content.replace(regex, icon);
}

// Ensure proper spacing when the icon is directly attached to a word
content = content.replace(/(<i className="fas fa-[^"]+"><\/i>)([A-Za-z])/g, '$1 $2');

fs.writeFileSync(path, content, 'utf8');
console.log("Replaced additional emojis with FontAwesome icons.");
