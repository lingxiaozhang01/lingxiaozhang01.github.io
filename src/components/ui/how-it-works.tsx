"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Pin } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { Project } from '@/data';

export interface HowItWorksProps {
  features: Project[];
  onSelect: (project: Project, element: HTMLButtonElement) => void;
}

// Adapted from the supplied HowItWorks reference: staggered notes and a curved path.
// The supplied account/investment sample copy is replaced with actual project data.
export default function HowItWorks({ features, onSelect }: HowItWorksProps) {
  const reduceMotion = useReducedMotion();
  return (
    <LazyMotion features={domAnimation}>
      <div className="journey" aria-label="沿宇宙线浏览项目">
        <svg className="journey-line" viewBox="0 0 1000 1390" preserveAspectRatio="none" aria-hidden="true">
          <path d="M 280 0 L 280 72 C 280 210 720 170 720 392 S 280 580 280 712 S 720 920 720 1032 C 720 1215 500 1250 500 1390" fill="none" stroke="var(--line)" strokeWidth="2" strokeDasharray="5 7" vectorEffect="non-scaling-stroke" />
        </svg>
        {features.map((project, index) => (
          <m.article key={project.id} className={`project-stop stop-${index + 1} theme-${project.theme}`}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }}
            transition={{ duration: .45 }} style={{ '--tilt': `${index % 2 ? 3 : -3}deg` } as CSSProperties}>
            <button className="project-node" aria-label={`打开${project.title}`} aria-haspopup="dialog"
              onClick={e => onSelect(project, e.currentTarget)}><span /></button>
            <button className="project-card" aria-haspopup="dialog" onClick={e => onSelect(project, e.currentTarget)}>
              <span className="card-pin"><Pin size={20} strokeWidth={1.6} /></span>
              {project.image ? <span className="project-image"><img src={project.image} alt={project.imageAlt} loading="lazy" width="400" height="220" /></span>
                : <span className="story-art" aria-hidden="true"><span>每一个人，<br />都是一个<br /><em>入口。</em></span></span>}
              <span className="card-content">
                <span className="project-category">{project.category}</span>
                <span className="project-title">{project.title}</span>
                <span className="project-subtitle">{project.subtitle}</span>
                <span className="card-end"><span>{project.facts[0]}</span><ArrowUpRight size={20} /></span>
              </span>
            </button>
          </m.article>
        ))}
      </div>
    </LazyMotion>
  );
}
