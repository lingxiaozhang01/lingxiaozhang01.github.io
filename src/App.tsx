import { useEffect, useRef, useState } from 'react';
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import HowItWorks from '@/components/ui/how-it-works';
import DesignGallery from '@/components/DesignGallery';
import { profile, projects, type Project } from '@/data';

export default function App() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const savedScroll = useRef(0);
  const reduceMotion = useReducedMotion();

  function selectProject(project: Project, element: HTMLButtonElement) {
    const rect = element.getBoundingClientRect();
    triggerRef.current = element;
    savedScroll.current = window.scrollY;
    setOrigin({ x: (rect.left + rect.width / 2) / innerWidth * 100, y: (rect.top + rect.height / 2) / innerHeight * 100 });
    setSelected(project);
  }

  useEffect(() => {
    if (selected) {
      dialogRef.current?.showModal();
      document.body.classList.add('project-is-open');
    }
  }, [selected]);

  function closeProject() {
    dialogRef.current?.close();
    document.body.classList.remove('project-is-open');
    setSelected(null);
    triggerRef.current?.focus({ preventScroll: true });
    window.scrollTo({ top: savedScroll.current, behavior: 'instant' });
  }

  return <>
    <a className="skip-link" href="#projects">跳到项目</a>
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="返回首页">好奇发生处<span className="brand-star" aria-hidden="true">✳</span></a>
      <nav aria-label="主导航"><a href="#projects">我的项目</a><a href="#about">关于我</a><a href="#contact">联系我 <ArrowUpRight size={14} /></a></nav>
    </header>
    <main>
      <section id="home" className="hero" aria-labelledby="hero-title">
        <div className="hero-ghost" aria-hidden="true">Stay Curious<br /><span>& Human.</span></div>
        <figure className="hero-photo hero-photo-personal"><img src="/assets/hero-personal.jpg" alt="张灵霄的影像记录：多台屏幕中呈现的自己" fetchPriority="high" width="1214" height="988" /></figure>
        <div className="hero-copy">
          <p className="hello">你好，我是 <span className="name-placeholder">{profile.name}</span></p>
          <h1 id="hero-title"><span>接近具体的人，</span><br /><span>让好奇发生。</span></h1>
          <p className="hero-intro">理解他们的真实困境，<br />再用内容、活动或产品作出回应。</p>
          <a className="primary-link" href="#projects">看看我做过的事 <ArrowDownRight size={20} /></a>
        </div>
        <div className="hero-caption"><span>内容 / 活动 / 产品</span><span>一些实践，一条仍在延伸的线。</span></div>
      </section>
      <section id="projects" className="projects-section" aria-labelledby="projects-title">
        <DesignGallery />
        <div className="section-intro"><p className="section-kicker">我的探索轨迹</p><h2 id="projects-title">好奇心，把这些事连在一起。</h2><p>点开一个节点，走进当时发生的故事。</p></div>
        <HowItWorks features={projects} onSelect={selectProject} />
        <div className="journey-end"><span className="line-end" aria-hidden="true" /><p>下一次探索，还在发生。</p></div>
      </section>
      <section id="about" className="about-section" aria-labelledby="about-title">
        <div className="about-heading"><div className="about-identity"><img className="about-avatar" src="/assets/about-avatar.png" alt="张灵霄的个人头像" loading="lazy" width="1254" height="1254" /><p className="section-kicker">关于我</p></div><h2 id="about-title">对世界好奇，<br />也对人好奇。</h2></div>
        <div className="about-copy"><p>{profile.about}</p><p className="profile-background">{profile.background}</p><div className="interests"><span>快速学习新领域</span><span>与陌生人建立连接</span><span>把想法做出来</span></div></div>
      </section>
      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <div><p className="section-kicker">联系我</p><h2 id="contact-title">从一次交谈开始。</h2><p>期待工作机会、项目合作，也欢迎同行交流。</p></div>
        <div className="contact-details"><span className="contact-email">{profile.email}</span><span className="contact-wechat">微信：{profile.wechat}</span></div>
      </section>
    </main>
    <footer><a href="#home">好奇发生处 <span aria-hidden="true">↗</span></a><span>保持好奇，继续靠近。</span></footer>
    <dialog className={`project-dialog ${selected ? `theme-${selected.theme}` : ''}`} ref={dialogRef} aria-labelledby="detail-title" onCancel={e => { e.preventDefault(); closeProject(); }}>
      <AnimatePresence>{selected && <motion.div key={selected.id} className="detail-page"
        initial={reduceMotion ? false : { opacity: 0, scale: .88, clipPath: `circle(0% at ${origin.x}% ${origin.y}%)` }}
        animate={{ opacity: 1, scale: 1, clipPath: `circle(150% at ${origin.x}% ${origin.y}%)` }}
        transition={{ duration: reduceMotion ? 0 : .5, ease: [.22, 1, .36, 1] }}>
        <div className="detail-toolbar"><button onClick={closeProject} autoFocus><ArrowLeft size={18} /> 返回宇宙线</button><button className="close-detail" aria-label="关闭项目详情" onClick={closeProject}><X size={22} /></button></div>
        <div className="detail-layout"><div className="detail-story"><p className="project-category">{selected.category}</p><h2 id="detail-title">{selected.title}</h2><p className="detail-description">{selected.description}</p><ul className="detail-facts">{selected.facts.map(fact => <li key={fact}>{fact}</li>)}</ul>{selected.sections.map(section => <section key={section.title} className={section.placeholder ? 'detail-section is-placeholder' : 'detail-section'}><h3>{section.title}</h3><p>{section.text}</p>{section.links && <div className="detail-resource-links">{section.links.map(link => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}<ArrowUpRight size={15} /></a>)}</div>}{section.images?.map(image => <figure className="detail-record-photo" key={image.src}><img src={image.src} alt={image.alt} loading="lazy" /><figcaption>{image.caption}</figcaption></figure>)}</section>)}<button className="detail-return" onClick={closeProject}>继续探索其他项目 <ArrowRight size={18} /></button></div>
          <div className="detail-visual">{selected.image ? <img src={selected.image} alt={selected.imageAlt} /> : selected.works ? <section className="selected-works" aria-labelledby="works-title"><h3 id="works-title">代表作品</h3>{selected.works.map(work => <a className="work-link" key={work.url} href={work.url} target="_blank" rel="noopener noreferrer"><span className="work-publication">{work.publication}</span><h4>{work.title}</h4><p>{work.description}</p><span className="work-meta"><span>{work.metric}</span><span>阅读原文 <ArrowUpRight size={15} /></span></span></a>)}{selected.portfolio && <div className="detail-resource-links"><a href={selected.portfolio.url} target="_blank" rel="noopener noreferrer">{selected.portfolio.label}<ArrowUpRight size={15} /></a></div>}</section> : <div className="article-placeholder"><span>采访与内容</span><p>具体的人，<br />具体的故事。</p><small>代表作品待补充</small></div>}</div>
        </div>
      </motion.div>}</AnimatePresence>
    </dialog>
  </>;
}

