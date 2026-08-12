import { renderShell, initShell, IMAGES } from '../layout.js'

const services = [
  ['01', 'Alternative power', 'Solar and inverter systems designed to keep critical infrastructure online.', 'alt-power.html'],
  ['02', 'Telecommunications', 'Reliable telecoms infrastructure, including FTTH and fibre deployment.', 'telecoms.html'],
  ['03', 'Fibre hub systems', 'Fibre survey, design and implementation for high-capacity connectivity.', 'fibre.html'],
  ['04', 'BTS operations', 'Maintenance, integration and support for base station infrastructure.', 'bts.html'],
  ['05', 'Transmission links', 'Installation and maintenance of transmission links across demanding sites.', 'transmission.html'],
  ['06', 'Energy systems', 'Power systems integration, maintenance and right-sized dimensioning.', 'energy.html'],
  ['07', 'Network access', 'Routine access maintenance that keeps networks safe and available.', 'network-access.html'],
  ['08', 'Security systems', 'CCTV installation and integrated site security solutions.', 'security.html'],
  ['09', 'Vertical transport', 'Installation and support for dependable elevator systems.', 'vertical-transport.html'],
  ['10', 'Products & supply', 'Electrical and mechanical products, materials and equipment integration.', 'products.html'],
]

const projects = [
  ['Telecom base station power upgrade', 'Upgraded electrical and backup power systems across multiple telecom base stations.', IMAGES.technician, 'project-1.html', 'Power systems'],
  ['Fibre hub electrical & infrastructure setup', 'Installed structured cabling, power distribution systems, UPS integration, and equipment racks for a metropolitan fibre distribution hub.', IMAGES.towerSteel, 'project-2.html', 'Fibre infrastructure'],
  ['New BTS site electrical installation', 'Executed full electrical installations for newly constructed telecom tower sites, including generator systems, battery banks, shelter wiring and earthing systems.', IMAGES.construction, 'project-3.html', 'Telecoms installation'],
]

const html = `
  <section class="page-hero">
    <div class="hero-card">
      <video class="page-hero-video" poster="${IMAGES.tower}" preload="metadata" muted loop playsinline>
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
      <a class="button button-primary" href="services.html">Explore capabilities <span>↗</span></a>
      <a class="text-link light-link" href="about.html">Meet JBL <span>→</span></a>
    </div>
  </section>

  <section class="page-section">
    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span>Overview</div>
    <div class="grid-2">
      <div class="reveal">
        <p class="eyebrow"><span></span> About us</p>
        <h2>Infrastructure<br>with <em>intention.</em></h2>
      </div>
      <div class="reveal" style="padding-top:46px">
        <p class="body" style="font-size:22px;line-height:1.4;letter-spacing:-.03em;color:var(--ink);max-width:480px">JBL is an engineering company established in April 2007, specialising in telecommunications infrastructure installation and power system solutions.</p>
        <p class="body" style="margin-top:24px">Our core services include telecom site electrical installations, tower and base station support systems, power supply and backup solutions, equipment installation, and ongoing maintenance services.</p>
        <a class="text-link" href="about.html" style="margin-top:30px">Discover our story <span>→</span></a>
      </div>
    </div>
    <div class="stat-strip reveal">
      <div><strong data-count="17">0</strong><span>Years of experience</span></div>
      <div><strong data-count="10">0</strong><span>Core capabilities</span></div>
      <div><strong data-count="100">0</strong><span>Commitment to safety</span></div>
      <div class="stat-note">Built on partnerships.<br>Driven by precision.</div>
    </div>
  </section>

  <section class="page-section dark">
    <div class="breadcrumb" style="color:rgba(255,255,255,.5)"><a href="index.html" style="color:rgba(255,255,255,.5)">Home</a><span>/</span>Services</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:end;margin-bottom:60px">
      <div class="reveal"><p class="eyebrow light"><span></span> What we do</p><h2>One partner.<br><em>Many possibilities.</em></h2></div>
      <p class="body" style="max-width:360px">From first survey to final handover, JBL brings the technical depth and field discipline to move infrastructure forward.</p>
    </div>
    <div class="service-grid" style="border-color:rgba(255,255,255,.18)">
      ${services.map(([num, title, desc, href]) => `<a class="service-card reveal" href="${href}" style="border-color:rgba(255,255,255,.18)"><span>${num}</span><h3 style="color:#fff">${title}</h3><p style="color:#a7a7a2">${desc}</p><span style="position:absolute;right:21px;bottom:19px;color:var(--orange);font-size:22px">↗</span></a>`).join('')}
    </div>
  </section>

  <section class="page-section alt">
    <div class="breadcrumb"><a href="index.html">Home</a><span>/</span>Projects</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:end;margin-bottom:50px">
      <div class="reveal"><p class="eyebrow"><span></span> Selected work</p><h2>Proof in<br><em>the field.</em></h2></div>
      <a class="text-link" href="projects.html" style="justify-self:end">View all projects <span>→</span></a>
    </div>
    ${projects.map((p, i) => `<article class="project-card reveal" data-category="${i===0?'power':i===1?'fibre':'power'}">
      <div class="project-visual" style="background-image:url('${p[2]}')"><span>0${i+1}</span></div>
      <div class="project-copy"><p class="project-type">${p[4]}</p><h3>${p[0]}</h3><p>${p[1]}</p><a href="${p[3]}" class="text-link" style="margin-top:24px">View project <span>→</span></a></div>
    </article>`).join('')}
  </section>

  <section class="page-section" style="background:var(--yellow);text-align:center">
    <div class="reveal" style="max-width:700px;margin:0 auto">
      <p class="eyebrow"><span></span> The JBL promise</p>
      <h2 style="font-size:clamp(44px,6vw,84px)">Good engineering<br>makes progress<br><em>possible.</em></h2>
      <p class="body" style="color:#342f25;max-width:420px;margin:30px auto 38px">We provide dependable electrical and telecom infrastructure that supports seamless connectivity and long-term performance.</p>
      <a class="button button-dark" href="contact.html">Build with JBL <span>↗</span></a>
    </div>
  </section>
`

document.querySelector('#app').innerHTML = renderShell('Home', html)
initShell()
