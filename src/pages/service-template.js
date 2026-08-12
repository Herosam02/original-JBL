import { renderShell, initShell, IMAGES } from '../layout.js'

export { IMAGES }

export function servicePage({ title, eyebrow, hero, lede, intro, capabilities, image, next }) {
  const html = `
    <section class="page-hero">
      <div class="hero-card">
        <video class="page-hero-video" poster="${hero}" preload="metadata" muted loop playsinline>
          <source src="../videos/hero.mp4" type="video/mp4">
        </video>
        <div class="hero-video-controls">
          <button class="hero-play-btn" aria-label="Play video">
            <svg class="icon-play" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><polygon points="8,5 19,12 8,19"/></svg>
            <svg class="icon-pause" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style="display:none"><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg>
          </button>
          <div class="hero-volume-controls">
            <button class="hero-mute-btn muted" aria-label="Unmute">
              <svg class="icon-muted" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
              <svg class="icon-unmuted" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none"><polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            </button>
            <input class="hero-volume-slider" type="range" min="0" max="1" step="0.1" value="0" aria-label="Volume">
          </div>
        </div>
      </div>
      <div class="hero-buttons">
        <a class="button button-primary" href="contact.html">Start a conversation <span>↗</span></a>
      </div>
    </section>

    <section class="page-section">
      <div class="breadcrumb"><a href="index.html">Home</a><span>/</span><a href="services.html">Services</a><span>/</span>${title.replace(/<br>/g,' ').replace(/<[^>]+>/g,'').trim()}</div>
      <div class="grid-2">
        <div class="reveal"><p class="eyebrow"><span></span> Overview</p><h2>${intro.heading}</h2></div>
        <div class="reveal" style="padding-top:20px">
          <p class="body" style="font-size:20px;line-height:1.45;letter-spacing:-.03em;color:var(--ink);max-width:500px">${intro.lead}</p>
          ${intro.paragraphs.map(p => `<p class="body" style="margin-top:22px">${p}</p>`).join('')}
        </div>
      </div>
    </section>

    <section class="page-section alt">
      <div class="breadcrumb"><a href="index.html">Home</a><span>/</span><a href="services.html">Services</a><span>/</span>${title.replace(/<br>/g,' ').replace(/<[^>]+>/g,'').trim()}</div>
      <div class="reveal" style="margin-bottom:50px">
        <p class="eyebrow"><span></span> What we deliver</p>
        <h2>Capability <em>breakdown.</em></h2>
      </div>
      <div class="grid-3">
        ${capabilities.map(([num, title, desc]) => `<div class="card reveal"><span class="num">${num}</span><h3>${title}</h3><p>${desc}</p></div>`).join('')}
      </div>
    </section>

    <section class="page-section">
      <div class="breadcrumb"><a href="index.html">Home</a><span>/</span><a href="services.html">Services</a><span>/</span>${title.replace(/<br>/g,' ').replace(/<[^>]+>/g,'').trim()}</div>
      <div class="grid-2" style="align-items:center">
        <div class="image-block reveal" style="background-image:url('${image}')"></div>
        <div class="reveal">
          <p class="eyebrow"><span></span> Next step</p>
          <h2>Let's talk<br>about your <em>project.</em></h2>
          <p class="body" style="margin-top:24px">Have a site that needs this capability? Our team is ready to understand your requirements and plan a safe, dependable delivery.</p>
          <a class="button button-primary" href="contact.html" style="margin-top:30px">Start a conversation <span>↗</span></a>
          ${next ? `<a class="text-link" href="${next.href}" style="margin-top:30px;margin-left:30px">Next: ${next.label} <span>→</span></a>` : ''}
        </div>
      </div>
    </section>
  `
  document.querySelector('#app').innerHTML = renderShell(eyebrow, html)
  initShell()
}
