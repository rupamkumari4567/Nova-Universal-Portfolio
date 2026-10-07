import React,{useEffect,useMemo,useState}from"react";
import{createRoot}from"react-dom/client";
import{ArrowUpRight,Check,ChevronDown,Code2,Globe2,Github,Layers3,Linkedin,Mail,Menu,Moon,Palette,Send,Sparkles,Sun,X,Zap,Quote}from"lucide-react";
import"./styles.css";

const projects=[
{title:"Orbit Finance",type:"Web App",year:"2026",tags:["UI/UX","React","Dashboard"],text:"A polished financial dashboard concept focused on clarity, trust and fast decision making.",accent:"violet"},
{title:"Studio Folio",type:"Brand & Portfolio",year:"2026",tags:["Branding","Motion","Web"],text:"A visual portfolio experience for a creative studio with editorial layouts and fluid transitions.",accent:"cyan"},
{title:"LaunchKit",type:"SaaS Landing",year:"2025",tags:["Frontend","Product","Design"],text:"A conversion-focused product page with interactive feature storytelling and a clean responsive system.",accent:"orange"},
{title:"GreenCart",type:"E-commerce",year:"2025",tags:["E-commerce","UX","Prototype"],text:"A modern shopping interface designed around simple discovery, filtering and confident checkout.",accent:"green"}];
const skills=[
["Frontend Development","React, JavaScript, HTML, CSS"],["UI / UX Design","Figma, Design Systems, Prototyping"],
["Responsive Design","Mobile-first layouts and accessibility"],["Performance","Clean architecture and optimized assets"],
["Problem Solving","DSA, debugging and practical thinking"],["Collaboration","Git, GitHub and team workflows"]];

function App(){
const[dark,setDark]=useState(true),[menu,setMenu]=useState(false),[filter,setFilter]=useState("All"),[modal,setModal]=useState(null),[sent,setSent]=useState(false),[scrolled,setScrolled]=useState(false);
const[form,setForm]=useState({name:"",email:"",message:""});
useEffect(()=>{const f=()=>setScrolled(scrollY>30);addEventListener("scroll",f);return()=>removeEventListener("scroll",f)},[]);
useEffect(()=>{document.documentElement.dataset.theme=dark?"dark":"light"},[dark]);
const cats=useMemo(()=>["All",...new Set(projects.map(p=>p.type))],[]);
const visible=filter==="All"?projects:projects.filter(p=>p.type===filter);
const go=id=>{setMenu(false);document.getElementById(id)?.scrollIntoView({behavior:"smooth"})};
const submit=e=>{e.preventDefault();setSent(true);setTimeout(()=>setSent(false),3500);setForm({name:"",email:"",message:""})};
return <div className="site"><div className="noise"/>
<header className={scrolled?"nav scrolled":"nav"}>
<button className="brand" onClick={()=>go("home")}><span className="brand-mark"><Sparkles size={17}/></span>NOVA<span className="dot">.</span></button>
<nav className={menu?"nav-links open":"nav-links"}>{["home","about","work","services","contact"].map(x=><button key={x} onClick={()=>go(x)}>{x[0].toUpperCase()+x.slice(1)}</button>)}</nav>
<div className="nav-actions"><button className="icon-btn" onClick={()=>setDark(v=>!v)}>{dark?<Sun size={18}/>:<Moon size={18}/>}</button><button className="pill-btn nav-cta" onClick={()=>go("contact")}>Let's talk <ArrowUpRight size={16}/></button><button className="icon-btn mobile-menu" onClick={()=>setMenu(v=>!v)}>{menu?<X/>:<Menu/>}</button></div>
</header>
<main>
<section id="home" className="hero section"><div className="hero-grid"/>
<div className="hero-copy"><div className="eyebrow"><span className="status"/> Available for new projects</div>
<h1>Build a <em>memorable</em><br/>digital presence.</h1><p className="hero-sub">A premium, reusable portfolio template for developers, designers, freelancers, creators and ambitious professionals.</p>
<div className="hero-actions"><button className="primary-btn" onClick={()=>go("work")}>Explore my work <ArrowUpRight size={18}/></button><button className="text-btn" onClick={()=>go("about")}>More about me <ChevronDown size={17}/></button></div>
<div className="hero-meta"><span><Zap size={15}/> Fast & responsive</span><span><Globe2 size={15}/> Worldwide</span><span><Layers3 size={15}/> Fully customizable</span></div></div>
<div className="hero-art"><div className="orb orb-one"/><div className="orb orb-two"/>
<div className="floating-card card-a"><Sparkles size={16}/><span>Creative<br/><b>Direction</b></span></div>
<div className="profile-card"><div className="profile-top"><span>PORTFOLIO / 2026</span><span>01 — 04</span></div><div className="avatar"><div className="avatar-inner">N</div></div><div className="profile-name">Your Name</div><div className="profile-role">Creative Developer · Designer</div><div className="profile-line"><span>Based anywhere</span><span>Open to work</span></div></div>
<div className="floating-card card-b"><Code2 size={16}/><span>Crafted with<br/><b>attention</b></span></div></div></section>

<section className="marquee"><div className="marquee-track">{["Design","Development","Strategy","Motion","Experience","Innovation","Design","Development","Strategy","Motion","Experience","Innovation"].map((x,i)=><span key={i}>{x} <i>✦</i></span>)}</div></section>

<section id="about" className="section split"><div className="section-label"><span>01</span><span>About</span></div><div className="about-content"><h2>Turning ideas into <span className="gradient-text">experiences</span> people remember.</h2>
<div className="about-grid"><p className="lead">Replace this copy with your own story. Tell visitors what you do, what you care about, and why your work is different.</p><div><p>I combine thoughtful design, clean code and product thinking to create digital experiences that feel simple, distinctive and useful.</p><p>This template is intentionally flexible: change colors, content, projects and sections to make it completely yours.</p></div></div>
<div className="stats"><div><b>05+</b><span>Years experience</span></div><div><b>40+</b><span>Projects shipped</span></div><div><b>18</b><span>Happy clients</span></div><div><b>08</b><span>Countries reached</span></div></div></div></section>

<section className="section skills-section"><div className="section-label"><span>02</span><span>Capabilities</span></div><div className="skills-list">{skills.map(([a,b],i)=><div className="skill-row" key={a}><span className="skill-num">0{i+1}</span><div><h3>{a}</h3><p>{b}</p></div><ArrowUpRight size={20}/></div>)}</div></section>

<section id="work" className="section work-section"><div className="section-head"><div><div className="section-label"><span>03</span><span>Selected work</span></div><h2>Things I've <span className="gradient-text">made.</span></h2></div><p>Sample projects are placeholders. Swap them with your own case studies, GitHub links and live demos.</p></div>
<div className="filters">{cats.map(c=><button className={filter===c?"active":""} key={c} onClick={()=>setFilter(c)}>{c}</button>)}</div>
<div className="project-grid">{visible.map((p,i)=><article className="project-card" key={p.title} onClick={()=>setModal(p)}><div className={`project-visual ${p.accent}`}><div className="visual-ui"><span/><span/><span/><div className="visual-lines"/><div className="visual-block"/></div><div className="project-index">0{i+1}</div><div className="view-label">View project <ArrowUpRight size={15}/></div></div><div className="project-info"><div><span>{p.type}</span><h3>{p.title}</h3></div><span>{p.year}</span></div><div className="tag-list">{p.tags.map(t=><span key={t}>{t}</span>)}</div></article>)}</div></section>

<section id="services" className="section services"><div className="section-label"><span>04</span><span>Services</span></div><div className="service-layout"><h2>How I can help<br/><span className="gradient-text">your next idea.</span></h2><div className="service-cards">
{[["01","Web Design","Interfaces that balance personality, clarity and conversion.",Palette],["02","Development","Fast, responsive websites and web apps built for the real world.",Code2],["03","Brand & Motion","Visual systems and motion details that make products feel alive.",Sparkles]].map(([n,t,d,I])=><div className="service-card" key={n}><span>{n}</span><I size={25}/><h3>{t}</h3><p>{d}</p><ArrowUpRight size={18}/></div>)}</div></div></section>

<section className="quote-section"><Quote size={35}/><blockquote>“Great design is not just what it looks like. It's how clearly it communicates what matters.”</blockquote><span>— Your philosophy / personal quote</span></section>

<section id="contact" className="section contact"><div className="contact-intro"><div className="section-label"><span>05</span><span>Contact</span></div><h2>Have an idea?<br/><span className="gradient-text">Let's make it real.</span></h2><p>Tell me a little about your project. This demo form works locally and can be connected to Formspree, EmailJS, a backend or your preferred service.</p><div className="contact-links"><a href="mailto:hello@example.com"><Mail size={17}/> hello@example.com</a><a href="https://github.com/" target="_blank"><Github size={17}/> GitHub</a><a href="https://linkedin.com/" target="_blank"><Linkedin size={17}/> LinkedIn</a></div></div>
<form className="contact-form" onSubmit={submit}><label>Name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></label><label>Email<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></label><label>Project details<textarea required value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell me about your idea..." rows="5"/></label><button className="primary-btn" type="submit">{sent?<><Check size={18}/> Message prepared</>:<>Send message <Send size={17}/></>}</button>{sent&&<small className="success">Demo mode: your message was validated locally. Connect a form service to receive it.</small>}</form></section>
</main>
<footer className="footer"><div><span className="brand"><span className="brand-mark"><Sparkles size={15}/></span>NOVA<span className="dot">.</span></span><p>Universal portfolio template.</p></div><div className="footer-right"><span>© 2026 Your Name</span><button onClick={()=>scrollTo({top:0,behavior:"smooth"})}>Back to top ↑</button></div></footer>
{modal&&<div className="modal-backdrop" onClick={()=>setModal(null)}><div className="modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setModal(null)}><X/></button><div className={`modal-visual ${modal.accent}`}><Sparkles size={40}/></div><span className="modal-type">{modal.type} · {modal.year}</span><h2>{modal.title}</h2><p>{modal.text}</p><div className="tag-list">{modal.tags.map(t=><span key={t}>{t}</span>)}</div><button className="primary-btn" onClick={()=>setModal(null)}>Close <X size={16}/></button></div></div>}
</div>}

createRoot(document.getElementById("root")).render(<App/>);