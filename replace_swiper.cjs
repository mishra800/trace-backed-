const fs = require('fs');
const path = 'src/pages/Home.jsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
    /<div className="portfolio-two__carousel owl-carousel owl-theme">[\s\S]*?<div className="item">/,
    '<div className="thm-swiper__slider swiper-container" data-swiper-options=\'{"slidesPerView": 1, "loop": true, "autoplay": {"delay": 7000}}\'>\n<div className="swiper-wrapper">\n<div className="swiper-slide">'
);

content = content.replace(
    /<\/ul>\s*<\/div>\s*<\/div>\s*<div className="item">/g,
    '</ul>\n</div>\n</div>\n<div className="swiper-slide">'
);

content = content.replace(
    /<\/ul>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g,
    '</ul>\n</div>\n</div>\n</div>\n</div>\n</div>'
);

fs.writeFileSync(path, content);
console.log('Replaced owl carousel with swiper in Home.jsx');
