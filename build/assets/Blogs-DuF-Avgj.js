import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{C as t,_ as n,g as r,j as i,p as a}from"./admin-Bf6hK2SM.js";import{t as o}from"./seoConfig-9AD7vkwN.js";var s=e(i(),1),c=r(),l=`https://trace-backed-1.onrender.com/api`,u=l.startsWith(`http`)?l.replace(/\/api$/,``):``;function d(e){return e.image1?e.image1.startsWith(`http`)||e.image1.startsWith(`data:`)?e.image1:`${u}${e.image1}`:e.image1_url?e.image1_url:e.hero_image_link?e.hero_image_link:null}function f(e){if(!e)return``;let t=document.createElement(`div`);return t.innerHTML=e,t.textContent||t.innerText||``}function p(){let e=o(`blogs`),[r,i]=(0,s.useState)([]),[l,u]=(0,s.useState)(!0),[p,m]=(0,s.useState)(``),[h,g]=(0,s.useState)(1);(0,s.useEffect)(()=>{(async()=>{try{u(!0);let e=await n.getAll();i(Array.isArray(e)?e:[])}catch(e){console.error(`Error fetching blogs:`,e),i([])}finally{u(!1)}})()},[]);let _=(0,s.useMemo)(()=>p?r.filter(e=>e.title.toLowerCase().includes(p.toLowerCase())||e.content.toLowerCase().includes(p.toLowerCase())):r,[r,p]),v=h*6,y=v-6,b=_.slice(y,v),x=Math.ceil(_.length/6),S=e=>{g(e),window.scrollTo({top:0,behavior:`smooth`})};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:e.title,description:e.description,keywords:e.keywords,ogImage:e.ogImage,canonical:e.canonical,structuredData:e.structuredData}),(0,c.jsxs)(`section`,{className:`page-header`,children:[(0,c.jsx)(`div`,{className:`page-header__bg`,style:{backgroundImage:`url(/assets/images/backgrounds/page-header-bg.jpg)`}}),(0,c.jsx)(`div`,{className:`container`,children:(0,c.jsxs)(`div`,{className:`page-header__inner`,children:[(0,c.jsx)(`h2`,{children:`Blogs`}),(0,c.jsx)(`div`,{className:`thm-breadcrumb__box`,children:(0,c.jsxs)(`ul`,{className:`thm-breadcrumb list-unstyled`,children:[(0,c.jsx)(`li`,{children:(0,c.jsxs)(t,{to:`/`,children:[(0,c.jsx)(`i`,{className:`fas fa-home`}),`Home`]})}),(0,c.jsx)(`li`,{children:(0,c.jsx)(`span`,{className:`icon-right-arrow-1`})}),(0,c.jsx)(`li`,{children:`Blogs`})]})})]})})]}),(0,c.jsx)(`div`,{style:{background:`#1a1a2e`,padding:`60px 20px`},children:(0,c.jsxs)(`div`,{style:{maxWidth:`1200px`,margin:`0 auto`},children:[(0,c.jsx)(`div`,{className:`section-title text-center`,children:(0,c.jsxs)(`h2`,{className:`section-title__title`,style:{color:`#fff`,marginBottom:`40px`},children:[`All `,(0,c.jsx)(`span`,{children:`Blogs`})]})}),(0,c.jsxs)(`div`,{style:{maxWidth:`600px`,margin:`0 auto 40px`,display:`flex`,gap:`10px`},children:[(0,c.jsx)(`input`,{type:`text`,placeholder:`Search blogs by title or content...`,value:p,onChange:e=>{m(e.target.value),g(1)},style:{flex:1,padding:`12px 20px`,fontSize:`16px`,border:`2px solid #ff7a00`,borderRadius:`25px`,outline:`none`,backgroundColor:`rgba(255,255,255,0.9)`,color:`#333`}}),p&&(0,c.jsx)(`button`,{onClick:()=>m(``),style:{padding:`12px 24px`,background:`#ff7a00`,color:`#fff`,border:`none`,borderRadius:`25px`,cursor:`pointer`,fontSize:`16px`,fontWeight:`bold`},children:`Clear`})]}),l?(0,c.jsxs)(`div`,{style:{textAlign:`center`,padding:`60px`,color:`#fff`},children:[(0,c.jsx)(`div`,{style:{border:`4px solid rgba(255,255,255,0.1)`,borderTop:`4px solid #ff7a00`,borderRadius:`50%`,width:`50px`,height:`50px`,animation:`spin 1s linear infinite`,margin:`0 auto`}}),(0,c.jsx)(`p`,{style:{marginTop:`20px`},children:`Loading blogs...`})]}):(0,c.jsxs)(c.Fragment,{children:[_.length>0&&(0,c.jsx)(`p`,{style:{textAlign:`center`,color:`#ccc`,marginBottom:`30px`,fontSize:`14px`},children:_.length===r.length?`Showing all ${r.length} blog${r.length===1?``:`s`}`:`Found ${_.length} blog${_.length===1?``:`s`} matching "${p}"`}),(0,c.jsx)(`div`,{className:`card-container`,children:b.length>0?b.map(e=>(0,c.jsxs)(`div`,{className:`card`,children:[d(e)&&(0,c.jsx)(`img`,{loading:`lazy`,src:d(e),alt:e.title,onError:e=>{e.target.style.display=`none`}}),(0,c.jsx)(`h3`,{children:e.title}),(0,c.jsxs)(`p`,{children:[f(e.content).substring(0,120),`...`]}),(0,c.jsx)(t,{className:`btn`,to:`/view-blog/${e.slug||e.id}`,children:`Read More`})]},e.id)):(0,c.jsx)(`div`,{style:{textAlign:`center`,padding:`60px`,color:`#ccc`,width:`100%`},children:(0,c.jsx)(`p`,{style:{fontSize:`18px`},children:p?`No blogs found matching "${p}"`:`No blogs available yet. Check back soon!`})})}),_.length>6&&(0,c.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`,gap:`10px`,marginTop:`50px`,flexWrap:`wrap`},children:[(0,c.jsx)(`button`,{onClick:()=>S(h-1),disabled:h===1,style:{padding:`10px 20px`,background:h===1?`#333`:`#ff7a00`,color:`#fff`,border:`none`,borderRadius:`25px`,cursor:h===1?`not-allowed`:`pointer`,fontSize:`14px`,fontWeight:`bold`},children:`Previous`}),[...Array(x)].map((e,t)=>(0,c.jsx)(`button`,{onClick:()=>S(t+1),style:{width:`40px`,height:`40px`,display:`flex`,alignItems:`center`,justifyContent:`center`,background:h===t+1?`#ff7a00`:`transparent`,color:`#fff`,border:h===t+1?`none`:`2px solid #555`,borderRadius:`50%`,cursor:`pointer`,fontSize:`14px`,fontWeight:`bold`},children:t+1},t+1)),(0,c.jsx)(`button`,{onClick:()=>S(h+1),disabled:h===x,style:{padding:`10px 20px`,background:h===x?`#333`:`#ff7a00`,color:`#fff`,border:`none`,borderRadius:`25px`,cursor:h===x?`not-allowed`:`pointer`,fontSize:`14px`,fontWeight:`bold`},children:`Next`})]})]})]})}),(0,c.jsx)(`style`,{children:`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .card-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 20px;
                    padding: 20px;
                }
                .card {
                    border-radius: 8px;
                    overflow: hidden;
                    width: 400px;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    transition: transform 0.2s;
                    background: #fff;
                }
                .card:hover {
                    transform: translateY(-5px);
                }
                .card img {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                }
                .card h3 {
                    margin: 10px;
                    font-size: 1.2em;
                    color: #d44a00 !important;
                }
                .card p {
                    margin: 10px;
                    color: #555;
                    font-size: 0.95em;
                }
                .card a.btn {
                    display: inline-block;
                    background: #d44a00;
                    color: white;
                    padding: 10px 15px;
                    text-decoration: none;
                    border-radius: 15px;
                    margin: 15px;
                }
                @media (max-width: 1200px) { .card { width: 300px; } }
                @media (max-width: 992px) { .card-container { gap: 15px; } .card { width: 280px; } }
                @media (max-width: 768px) { .card-container { flex-direction: column; align-items: center; padding: 10px; } .card { width: 90%; max-width: 400px; } }
                @media (max-width: 480px) { .card { width: 95%; } }
            `})]})}export{p as default};