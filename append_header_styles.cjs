const fs = require('fs');
const path = 'src/components/Header.css';
let content = fs.readFileSync(path, 'utf8');

const activityStyles = `
/* Active nav link with gradient + shimmer effect */
.main-menu__list > li.activity > a {
    color: #fff !important;
    background: linear-gradient(90deg, #d44a00, #ff7f32);
    padding: 8px 16px;
    border-radius: 30px;
    box-shadow: 0 0 15px rgba(212, 74, 0, 0.7);
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    transform: scale(1.05);
    animation: glowPulse 1.5s infinite alternate;
}

/* Shimmer effect */
.main-menu__list > li.activity > a::before {
    content: "";
    position: absolute;
    top: 0;
    left: -75%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.2) 0%,
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0.2) 100%
    );
    transform: skewX(-20deg);
    animation: shimmer 3s infinite;
}

/* Glow animation */
@keyframes glowPulse {
    0% {
        box-shadow: 0 0 8px rgba(212, 74, 0, 0.6);
        transform: scale(1.05);
    }
    100% {
        box-shadow: 0 0 20px rgba(212, 74, 0, 0.9);
        transform: scale(1.08);
    }
}

/* Shimmer animation */
@keyframes shimmer {
    0% {
        left: -75%;
    }
    100% {
        left: 125%;
    }
}

/* button-styles.css */
.btn-get-started {
  display: inline-flex;
  align-items: center;
  background-color: #ffffff;
  color: #000;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 50px;
  text-decoration: none;
  font-size: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.btn-get-started:hover {
  background-color: #D44A00;
  color: #fff;
}

.btn-get-started span {
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
}

.btn-arrow {
  order: 2;
  background-color: #D44A00;
  color: #fff;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin-left: 12px;
  transition: all 0.3s ease;
  display: inline-flex;
}

.btn-arrow::before {
  content: "↗";
  transition: all 0.3s ease;
}

.btn-text {
  order: 1;
  transition: all 0.3s ease;
}

.btn-get-started:hover .btn-arrow {
  background-color: #fff;
  color: #D44A00;
  margin-right: 12px;
  margin-left: 0;
  order: 1;
}

.btn-get-started:hover .btn-text {
  order: 2;
}

.btn-get-started:hover .btn-arrow::before {
  content: "➔";
}
`;

content += '\n' + activityStyles;
fs.writeFileSync(path, content);
console.log('Appended styles to Header.css');
