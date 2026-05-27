import { useState } from 'react';
import './Footer.css';

const TOAST_DURATION_MS = 2000;

interface FooterProps {
  onHoverStart: (type: 'project' | 'other') => void;
  onHoverEnd: () => void;
}

export function Footer({ onHoverStart, onHoverEnd }: FooterProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (text: string, label: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(label);
      setTimeout(() => setCopied(null), TOAST_DURATION_MS);
    } catch {
      // Silently fail: no toast on error
    }
  };

  return (
    <footer id="contact">
      <div className="footer-cta">Let's create something bold together.</div>

      <div className="contact-grid">
        <div className="contact-item">
          <h4>Email</h4>
          <p>
            <button
              className="copy-btn"
              onClick={() => handleCopy('tomatodesign2025@163.com', 'email')}
              onMouseEnter={() => onHoverStart('other')}
              onMouseLeave={onHoverEnd}
            >
              tomatodesign2025@163.com
            </button>
          </p>
        </div>
        <div className="contact-item">
          <h4>WeChat</h4>
          <p>
            <button
              className="copy-btn"
              onClick={() => handleCopy('Tomato9467', 'wechat')}
              onMouseEnter={() => onHoverStart('other')}
              onMouseLeave={onHoverEnd}
            >
              Tomato9467
            </button>
          </p>
        </div>
        <div className="contact-item">
          <h4>RED (小红书)</h4>
          <p>
            <a
              href="https://www.xiaohongshu.com/user/profile/673f253d000000001c019c4d?xsec_token=ABoKjHX7oOVNorNGxELAgmp6zBimewLEGoqez11GXrKKA%3D&xsec_source=pc_search"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => onHoverStart('other')}
              onMouseLeave={onHoverEnd}
            >
              Tomato Design
            </a>
          </p>
        </div>
        <div className="contact-item">
          <h4>Location</h4>
          <p>中国 · 成都 (Chengdu)</p>
        </div>
      </div>

      {copied && (
        <div className="copy-toast">复制成功</div>
      )}

      <div className="footer-bottom">
        <div>© 2026 TOMATO DESIGN. Independent Design Studio.</div>
        <div>Design as Juicy as a Tomato.</div>
      </div>
    </footer>
  );
}
