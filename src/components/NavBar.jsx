import { useEffect, useState } from 'react';
import { navigation, profile } from '../data/portfolio';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const ids = ['home', ...navigation.map((item) => item.href.slice(1)), 'contact'];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.15, 0.35, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Go to homepage">
        r<span>.</span>
      </a>
      <button
        className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <nav className={`main-nav ${menuOpen ? 'menu-open' : ''}`} aria-label="Main navigation">
        {navigation.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            className={active === item.href ? 'active' : ''}
            onClick={closeMenu}
          >
            <span className="nav-index">0{index + 1}.</span> {item.label}
          </a>
        ))}
        <a className="nav-contact" href="#contact" onClick={closeMenu}>
          Say hello <span aria-hidden="true">↗</span>
        </a>
      </nav>
      <div className="header-side-note">VIT VELLORE&nbsp; / &nbsp;2026—</div>
    </header>
  );
}
