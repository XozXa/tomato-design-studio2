import { projects } from '../data';
import './Projects.css';

interface ProjectsProps {
  onHoverStart: (type: 'project' | 'other') => void;
  onHoverEnd: () => void;
}

const groovyDescription = {
  title: 'GROOVY Home Brand Identity',
  subtitle: 'GROOVY 家居品牌全案',
  brandPositioning: '品牌定位',
  tags: ['Memphis', 'Dopamine', 'Playful', 'Retro'],
  tagsCn: '孟菲斯 · 多巴胺 · 趣味 · 复古',
  intro: `GROOVY is a Memphis-inspired home collection brand built on the idea of "Break the Rules, Play with Life." Through bold color clashes, whimsical design, and a commitment to sustainability, it redefines home aesthetics for the young generation. The brand slogan "GROOVY—Add Some Drama to Life!" captures its "Life is Theater" ethos, encouraging users to express individuality through design and escape aesthetic fatigue.`,
  introCn: 'GROOVY 是以孟菲斯风格为基调的家居集合品牌，主张"打破常规、玩转生活"。通过大胆的色彩碰撞、趣味化设计与环保理念，为年轻群体重新定义家居美学。品牌口号"GROOVY，给生活加点戏！"传递"生活即剧场"的态度，鼓励用户用家居表达个性，逃离千篇一律的审美疲劳。',
  visual: `We abandoned perfect industrial lines in favor of thick silhouette sketches that preserve the raw texture of hand-drawn drafts, conveying a sense of "design in progress." Two contrasting stripe patterns were developed as core secondary graphics for packaging, posters, and e-commerce layouts, ensuring visual consistency across all touchpoints.`,
  visualCn: '设计上放弃工业设计的完美线条，以粗线条剪影勾勒家居形态，保留手绘草稿的原始质感，传递"设计正在发生"的参与感；同时开发两种撞色条纹图形，作为包装、海报与电商页面的核心辅助元素，构建统一的视觉体系。',
  logo: `The logotype features an intentionally unpolished, hand-drawn letterform that communicates effortless playfulness. The six letters of "G-R-O-O-V-Y" are deconstructed into individual color blocks (red, yellow, blue, green, brown, purple), enabling modular, free-form arrangements that adapt to any communication scenario.`,
  logoCn: 'Logo 采用手写拙感字体，传递轻松趣味。将"G-R-O-O-V-Y"六个字母拆解为独立色块（红、黄、蓝、绿、咖、紫），支持模块化自由排列，灵活适配不同应用场景。',
  color: `Six high-saturation primary colors form a deliberately dissonant palette, creating intentional chromatic conflict for maximum visual impact. All packaging uses recycled kraft paper; the naked brown substrate contrasts sharply with brand colors, balancing natural tactility with trendy energy and turning sustainability into a tangible user experience.`,
  colorCn: '大胆采用六种高饱和主色，以非和谐配色方案制造色彩冲突，强化视觉记忆。全线包装使用再生牛皮纸，裸色基底与品牌色彩形成对比，平衡自然质感与潮流张力，将环保理念转化为可感知的体验。',
};

const biteDescription = {
  title: 'THE BITE — American Fast Food Brand Identity',
  subtitle: 'THE BITE 美式快餐品牌全案',
  brandPositioning: '品牌定位',
  tags: ['Dopamine', 'Warm', 'Playful'],
  tagsCn: '多巴胺 · 温暖 · 趣味',
  insight: `We replaced the cold industrial feel of traditional fast food with "delicious joy"—a visual and emotional experience that goes beyond taste.`,
  insightCn: '我们摒弃传统快餐的工业化冰冷感，拥抱"可口的愉悦感"——不仅是味觉满足，更是视觉与情感的双重体验。',
  slogan: `"One Bite to Energize" / "Bite Back at Boring."`,
  sloganCn: '"一口激活年轻能量" / "向无聊宣战"',
  visual: `A dopamine-charged palette keeps the brand bright, warm, and emotionally uplifting. The golden retriever chef IP brings innate friendliness and happiness to every touchpoint, turning scattered consumer moments into a warm, cohesive brand story.`,
  visualCn: '多巴胺配色让品牌明亮温暖，触发积极情绪。小金毛厨师IP以友好快乐的形象串联各个消费触点，将零散场景转化为有温度的品牌叙事。',
  goal: `Every color choice and character movement invites customers to step in and activate their own joy. THE BITE delivers a tangible, interactive, and shareable experience—not just a tagline.`,
  goalCn: '每一个色彩选择与IP动作都在邀请顾客亲身"进入"并激活属于自己的快乐。THE BITE 不只是口号，更是一种可感知、可互动、可分享的完整体验。',
};

const tactDescription = {
  title: 'TactEase — Sock Brand Identity',
  subtitle: 'TactEase 潮流袜子品牌全案',
  brandPositioning: '品牌定位',
  tags: ['Trendy', 'Dopamine', 'Comfort'],
  tagsCn: '潮流 · 多巴胺 · 舒适',
  symbol: `A winding, repeating "S" curve inspired by the natural folds of socks wrapping around the ankle and the continuous softness of yarn. Dynamic and elastic, it visually conveys softness, a perfect fit, and unrestricted comfort.`,
  symbolCn: '以字母"S"的蜿蜒重复为核心，灵感源自袜子包裹脚踝的自然褶皱与纱线的柔软绵延。充满动感与弹性，视觉上传递柔软、贴合、无拘束的舒适感。',
  color: `Bold contrasting colors balance the gentleness of comfort with the energy of streetwear. Kraft paper packaging naturally extends the brand's tactile philosophy.`,
  colorCn: '大胆对比色平衡"舒适"的温和感与"潮流"的活力感；牛皮纸包装则是"触感"理念的自然延伸。',
  philosophy: `Built from "touch" and "comfort," this system creates a recognizable brand image that resonates with young consumers—more than just visuals, it's the tangible expression of the brand core.`,
  philosophyCn: '从"触感"与"舒适"出发，通过独特的超级符号、巧思配色与天然材质，塑造兼具舒适度与活力感的潮流形象，与年轻消费者建立深刻情感共鸣。',
};

export function Projects({ onHoverStart, onHoverEnd }: ProjectsProps) {
  return (
    <div className="projects-grid">
      {/* GROOVY with description (image left, desc right) */}
      <div className="project-detail-container">
        <a
          href="#"
          className="project-card card-left"
          onMouseEnter={() => onHoverStart('project')}
          onMouseLeave={onHoverEnd}
        >
          <div className="img-wrapper">
            <img src={projects[0].image} alt={projects[0].title} />
          </div>
          <div className="project-info">
            <div className="project-title">{projects[0].title}</div>
            <div className="project-category">{projects[0].category}</div>
          </div>
        </a>
        <div className="project-desc">
          <h2>{groovyDescription.title}</h2>
          <h3>{groovyDescription.subtitle}</h3>

          <div className="desc-section">
            <div className="desc-label">{groovyDescription.brandPositioning}</div>
            <div className="desc-tags">
              {groovyDescription.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="desc-tags-cn">{groovyDescription.tagsCn}</div>
          </div>

          <div className="desc-section">
            <div className="desc-label">Brand Story</div>
            <p className="desc-text">{groovyDescription.intro}</p>
            <p className="desc-text desc-text-cn">{groovyDescription.introCn}</p>
          </div>

          <div className="desc-section">
            <div className="desc-label">Visual Language</div>
            <p className="desc-text">{groovyDescription.visual}</p>
            <p className="desc-text desc-text-cn">{groovyDescription.visualCn}</p>
          </div>

          <div className="desc-section">
            <div className="desc-label">Logo System</div>
            <p className="desc-text">{groovyDescription.logo}</p>
            <p className="desc-text desc-text-cn">{groovyDescription.logoCn}</p>
          </div>

          <div className="desc-section">
            <div className="desc-label">Color & Materiality</div>
            <p className="desc-text">{groovyDescription.color}</p>
            <p className="desc-text desc-text-cn">{groovyDescription.colorCn}</p>
          </div>
        </div>
      </div>

      {/* THE BITE with description (desc left, image right) */}
      <div className="project-detail-container">
        <div className="project-desc">
          <h2>{biteDescription.title}</h2>
          <h3>{biteDescription.subtitle}</h3>

          <div className="desc-section">
            <div className="desc-label">{biteDescription.brandPositioning}</div>
            <div className="desc-tags">
              {biteDescription.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="desc-tags-cn">{biteDescription.tagsCn}</div>
          </div>

          <div className="desc-section">
            <div className="desc-label">Core Insight</div>
            <p className="desc-text">{biteDescription.insight}</p>
            <p className="desc-text desc-text-cn">{biteDescription.insightCn}</p>
          </div>

          <div className="desc-section">
            <div className="desc-label">Brand Slogan</div>
            <p className="desc-text">{biteDescription.slogan}</p>
            <p className="desc-text desc-text-cn">{biteDescription.sloganCn}</p>
          </div>

          <div className="desc-section">
            <div className="desc-label">Visual System</div>
            <p className="desc-text">{biteDescription.visual}</p>
            <p className="desc-text desc-text-cn">{biteDescription.visualCn}</p>
          </div>

          <div className="desc-section">
            <div className="desc-label">Design Goal</div>
            <p className="desc-text">{biteDescription.goal}</p>
            <p className="desc-text desc-text-cn">{biteDescription.goalCn}</p>
          </div>
        </div>
        <a
          href="#"
          className="project-card card-right"
          onMouseEnter={() => onHoverStart('project')}
          onMouseLeave={onHoverEnd}
        >
          <div className="img-wrapper">
            <img src={projects[1].image} alt={projects[1].title} />
          </div>
          <div className="project-info">
            <div className="project-title">{projects[1].title}</div>
            <div className="project-category">{projects[1].category}</div>
          </div>
        </a>
      </div>

      {/* TACT EASE with description (image left, desc right) */}
      <div className="project-detail-container">
        <a
          href="#"
          className="project-card card-left"
          onMouseEnter={() => onHoverStart('project')}
          onMouseLeave={onHoverEnd}
        >
          <div className="img-wrapper">
            <img src={projects[2].image} alt={projects[2].title} />
          </div>
          <div className="project-info">
            <div className="project-title">{projects[2].title}</div>
            <div className="project-category">{projects[2].category}</div>
          </div>
        </a>
        <div className="project-desc">
          <h2>{tactDescription.title}</h2>
          <h3>{tactDescription.subtitle}</h3>

          <div className="desc-section">
            <div className="desc-label">{tactDescription.brandPositioning}</div>
            <div className="desc-tags">
              {tactDescription.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="desc-tags-cn">{tactDescription.tagsCn}</div>
          </div>

          <div className="desc-section">
            <div className="desc-label">The "S" Super-Symbol</div>
            <p className="desc-text">{tactDescription.symbol}</p>
            <p className="desc-text desc-text-cn">{tactDescription.symbolCn}</p>
          </div>

          <div className="desc-section">
            <div className="desc-label">Color & Material</div>
            <p className="desc-text">{tactDescription.color}</p>
            <p className="desc-text desc-text-cn">{tactDescription.colorCn}</p>
          </div>

          <div className="desc-section">
            <div className="desc-label">Design Philosophy</div>
            <p className="desc-text">{tactDescription.philosophy}</p>
            <p className="desc-text desc-text-cn">{tactDescription.philosophyCn}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
