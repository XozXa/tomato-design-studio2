import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { team, services, processSteps } from './data';
import './App.css';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverType, setHoverType] = useState<'project' | 'other' | null>(null);
  const cursorText = isHovering ? (hoverType === 'project' ? 'VIEW' : '＋') : '';

  useEffect(() => {
    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const handleHoverStart = (type: 'project' | 'other') => {
    setIsHovering(true);
    setHoverType(type);
  };

  const handleHoverEnd = () => {
    setIsHovering(false);
    setHoverType(null);
  };

  return (
    <div className="app">
      {/* Custom Cursor */}
      <div
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        style={{ left: cursorPos.x, top: cursorPos.y }}
      >
        {cursorText}
      </div>

      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-slogan">
            Design as Juicy<br />as a <span>Tomato.</span>
          </h1>
          <p className="hero-manifesto">
            "拒绝平庸，拥抱有温度的设计。" 我们致力于通过深度洞察与前瞻创意，为品牌提供视觉赋能。拒绝模板化，我们坚持为每个品牌定制"生长公式"，用视觉逻辑重构消费心智。
          </p>
          <a href="#works" className="explore-btn" onMouseEnter={() => handleHoverStart('other')} onMouseLeave={handleHoverEnd}>
            Explore Works
          </a>
        </div>
      </section>

      {/* Works Section */}
      <section id="works">
        <div className="section-label">Selected Works / 作品案例</div>
        <Projects onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd} />
      </section>

      {/* Scope Section */}
      <section id="scope">
        <div className="section-label">Our Scope / 业务范围</div>
        <div className="scope-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className="scope-card"
              onMouseEnter={() => handleHoverStart('other')}
              onMouseLeave={handleHoverEnd}
            >
              <h3>{service.title}</h3>
              <div className="en-sub">{service.titleEn}</div>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section id="process">
        <div className="section-label">The Process / 合作流程</div>
        <div className="process-container">
          {processSteps.map((step) => (
            <div key={step.num} className="process-row">
              <div className="process-num">{step.num}</div>
              <div className="process-meta">
                <h3>{step.title}</h3>
                <div className="en-sub">{step.titleEn}</div>
              </div>
              <div className="process-det">{step.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section id="team">
        <div className="section-label">Our Team / 团队成员</div>
        <div className="team-grid">
          {team.map((member) => (
            <div
              key={member.id}
              className="member-card"
              onMouseEnter={() => handleHoverStart('other')}
              onMouseLeave={handleHoverEnd}
            >
              <div className="member-name">{member.name}</div>
              <div className="member-role">{member.roleEn} / {member.role}</div>
              <div className="member-bio">{member.bio}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd} />
    </div>
  );
}

export default App;
