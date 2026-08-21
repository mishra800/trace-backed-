import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{j as t}from"./admin-Bf6hK2SM.js";var n=e(t(),1),r=()=>{(0,n.useEffect)(()=>{let e=document.querySelector(`.awards-track`);if(!e)return;let t=Array.from(e.querySelectorAll(`.award-card`));if(t.length===0)return;e.dataset.cloned||(t.forEach(t=>{let n=t.cloneNode(!0);e.appendChild(n)}),e.dataset.cloned=`true`);let n=(t[0].offsetWidth+30)*t.length,r=n/50,i=document.createElement(`style`);i.id=`awards-slider-style`,i.textContent=`
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-${n}px);
        }
      }

      .awards-track {
        animation: scroll ${r}s linear infinite;
      }

      .awards-track:hover {
        animation-play-state: paused;
      }
    `;let a=document.getElementById(`awards-slider-style`);return a&&a.remove(),document.head.appendChild(i),()=>{let e=document.getElementById(`awards-slider-style`);e&&e.remove()}},[])};export{r as t};