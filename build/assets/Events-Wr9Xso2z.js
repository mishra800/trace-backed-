import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{C as t,g as n,j as r,p as i,v as a}from"./admin-Bf6hK2SM.js";import{t as o}from"./seoConfig-9AD7vkwN.js";var s=e(r(),1),c=n(),l=`https://trace-backed-1.onrender.com/api`,u=l.startsWith(`http`)?l.replace(/\/api$/,``):``;function d(e){return e.image?e.image.startsWith(`http`)||e.image.startsWith(`data:`)?e.image:`${u}${e.image}`:null}function f(e){if(!e)return``;let t=document.createElement(`div`);return t.innerHTML=e,t.textContent||t.innerText||``}function p(){let e=o(`events`),[n,r]=(0,s.useState)([]),[l,u]=(0,s.useState)(!0),[p,m]=(0,s.useState)(``),[h,g]=(0,s.useState)(1);(0,s.useEffect)(()=>{(async()=>{try{u(!0);let e=await a.getAll();r(Array.isArray(e)?e:[])}catch(e){console.error(`Error fetching events:`,e),r([])}finally{u(!1)}})()},[]);let _=(0,s.useMemo)(()=>p?n.filter(e=>e.title.toLowerCase().includes(p.toLowerCase())||e.description&&e.description.toLowerCase().includes(p.toLowerCase())):n,[n,p]),v=h*8,y=v-8,b=_.slice(y,v),x=Math.ceil(_.length/8),S=e=>{g(e),window.scrollTo({top:0,behavior:`smooth`})};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:e.title,description:e.description,keywords:e.keywords,ogImage:e.ogImage,canonical:e.canonical,structuredData:e.structuredData}),(0,c.jsxs)(`section`,{className:`page-header`,children:[(0,c.jsx)(`div`,{className:`page-header__bg`,style:{backgroundImage:`url(/assets/images/backgrounds/page-header-bg.jpg)`}}),(0,c.jsx)(`div`,{className:`container`,children:(0,c.jsxs)(`div`,{className:`page-header__inner`,children:[(0,c.jsx)(`h2`,{children:`Events`}),(0,c.jsx)(`div`,{className:`thm-breadcrumb__box`,children:(0,c.jsxs)(`ul`,{className:`thm-breadcrumb list-unstyled`,children:[(0,c.jsx)(`li`,{children:(0,c.jsxs)(t,{to:`/`,children:[(0,c.jsx)(`i`,{className:`fas fa-home`}),`Home`]})}),(0,c.jsx)(`li`,{children:(0,c.jsx)(`span`,{className:`icon-right-arrow-1`})}),(0,c.jsx)(`li`,{children:`Events`})]})})]})})]}),(0,c.jsx)(`div`,{style:{background:`#1a1a2e`,padding:`60px 20px`},children:(0,c.jsxs)(`div`,{style:{maxWidth:`1200px`,margin:`0 auto`},children:[(0,c.jsx)(`div`,{className:`section-title text-center`,children:(0,c.jsxs)(`h2`,{className:`section-title__title`,style:{color:`#fff`,marginBottom:`40px`},children:[`All `,(0,c.jsx)(`span`,{children:`Events`})]})}),(0,c.jsxs)(`div`,{style:{maxWidth:`600px`,margin:`0 auto 40px`,display:`flex`,gap:`10px`},children:[(0,c.jsx)(`input`,{type:`text`,placeholder:`Search events by title or description...`,value:p,onChange:e=>{m(e.target.value),g(1)},style:{flex:1,padding:`12px 20px`,fontSize:`16px`,border:`2px solid #ff7a00`,borderRadius:`25px`,outline:`none`,backgroundColor:`rgba(255,255,255,0.9)`,color:`#333`}}),p&&(0,c.jsx)(`button`,{onClick:()=>m(``),style:{padding:`12px 24px`,background:`#ff7a00`,color:`#fff`,border:`none`,borderRadius:`25px`,cursor:`pointer`,fontSize:`16px`,fontWeight:`bold`},children:`Clear`})]}),l?(0,c.jsxs)(`div`,{style:{textAlign:`center`,padding:`60px`,color:`#fff`},children:[(0,c.jsx)(`div`,{style:{border:`4px solid rgba(255,255,255,0.1)`,borderTop:`4px solid #ff7a00`,borderRadius:`50%`,width:`50px`,height:`50px`,animation:`spin 1s linear infinite`,margin:`0 auto`}}),(0,c.jsx)(`p`,{style:{marginTop:`20px`},children:`Loading events...`})]}):(0,c.jsxs)(c.Fragment,{children:[_.length>0&&(0,c.jsx)(`p`,{style:{textAlign:`center`,color:`#ccc`,marginBottom:`30px`,fontSize:`14px`},children:_.length===n.length?`Showing all ${n.length} event${n.length===1?``:`s`}`:`Found ${_.length} event${_.length===1?``:`s`} matching "${p}"`}),b.length>0?(0,c.jsx)(`div`,{className:`event-grid`,children:b.map(e=>(0,c.jsxs)(`div`,{className:`event-card`,children:[d(e)&&(0,c.jsx)(`img`,{loading:`lazy`,src:d(e),alt:e.title,onError:e=>{e.target.style.display=`none`}}),(0,c.jsx)(`h3`,{children:e.title}),e.event_date&&(0,c.jsxs)(`p`,{style:{color:`#aaa`,fontSize:`0.85rem`,margin:`4px 0 8px`},children:[(0,c.jsx)(`i`,{className:`fas fa-calendar-alt`,style:{marginRight:`6px`,color:`#ff7a00`}}),new Date(e.event_date).toLocaleDateString()]}),e.description&&(0,c.jsxs)(`p`,{style:{color:`#ccc`,fontSize:`0.9rem`,margin:`0 0 10px`},children:[f(e.description).substring(0,100),`...`]}),(0,c.jsx)(t,{to:`/view-event/${e.slug||e.id}`,children:`Read More`})]},e.id))}):(0,c.jsx)(`div`,{style:{textAlign:`center`,padding:`60px`,color:`#ccc`},children:(0,c.jsx)(`p`,{style:{fontSize:`18px`},children:p?`No events found matching "${p}"`:`No events available yet. Check back soon!`})}),_.length>8&&(0,c.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`,gap:`10px`,marginTop:`50px`,flexWrap:`wrap`},children:[(0,c.jsx)(`button`,{onClick:()=>S(h-1),disabled:h===1,style:{padding:`10px 20px`,background:h===1?`#333`:`#ff7a00`,color:`#fff`,border:`none`,borderRadius:`25px`,cursor:h===1?`not-allowed`:`pointer`,fontSize:`14px`,fontWeight:`bold`},children:`Previous`}),[...Array(x)].map((e,t)=>(0,c.jsx)(`button`,{onClick:()=>S(t+1),style:{width:`40px`,height:`40px`,display:`flex`,alignItems:`center`,justifyContent:`center`,background:h===t+1?`#ff7a00`:`transparent`,color:`#fff`,border:h===t+1?`none`:`2px solid #555`,borderRadius:`50%`,cursor:`pointer`,fontSize:`14px`,fontWeight:`bold`},children:t+1},t+1)),(0,c.jsx)(`button`,{onClick:()=>S(h+1),disabled:h===x,style:{padding:`10px 20px`,background:h===x?`#333`:`#ff7a00`,color:`#fff`,border:`none`,borderRadius:`25px`,cursor:h===x?`not-allowed`:`pointer`,fontSize:`14px`,fontWeight:`bold`},children:`Next`})]})]})]})}),(0,c.jsx)(`style`,{children:`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .event-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 20px;
                    padding: 0 10px;
                }
                @media (min-width: 600px) {
                    .event-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (min-width: 900px) {
                    .event-grid { grid-template-columns: repeat(3, 1fr); }
                }
                @media (min-width: 1200px) {
                    .event-grid { grid-template-columns: repeat(4, 1fr); }
                }
                .event-card {
                    border: 1px solid #ddd;
                    border-radius: 12px;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.06);
                    padding: 16px;
                    text-align: center;
                    transition: transform 0.2s ease-in-out;
                }
                .event-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 6px 14px rgba(0,0,0,0.1);
                }
                .event-card img {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    border-radius: 8px;
                    margin-bottom: 12px;
                }
                .event-card h3 {
                    font-size: 1.2rem;
                    color: white;
                    margin-bottom: 10px;
                }
                .event-card a {
                    display: inline-block;
                    margin-top: 10px;
                    padding: 8px 16px;
                    background-color: #d44a00;
                    color: #fff;
                    text-decoration: none;
                    border-radius: 6px;
                    font-size: 0.95rem;
                    transition: background-color 0.2s ease;
                }
                .event-card a:hover {
                    background-color: #c94600;
                }
                @media (max-width: 400px) {
                    .event-grid { padding: 0 5px; }
                    .event-card { padding: 12px; }
                    .event-card h3 { font-size: 1rem; }
                    .event-card a { padding: 6px 12px; font-size: 0.85rem; }
                }
            `})]})}export{p as default};