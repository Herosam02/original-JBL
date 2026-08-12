import '../style.css'

export const IMAGES = {
  tower: 'images/tower-night.jpg',
  towerSteel: 'images/project-bts-pole.jpg',
  technician: 'images/technician-tablet.jpg',
  construction: 'images/field-team.jpg',
  site: 'images/hero-site.jpg',
  solar: 'images/solar-panels.jpg',
  team: 'images/jbl-orca-scaffold.jpg',
  survey: 'images/project-bts-site.jpg',
  power: 'images/panel-technician.jpg',
  control: 'images/project-fibre-wiring.jpg',
  cctv: 'images/cctv-camera.jpg',
  elevator: 'images/elevator.jpg',
  warehouse: 'images/jbl-orca-panel.jpg',
  meeting: 'images/network-router.jpg',
  night: 'images/tower-night.jpg',
  jblHitech: 'images/jbl-hitech-formwork.jpg',
  jblOrcaScaffold: 'images/jbl-orca-scaffold.jpg',
  jblOrcaPanel: 'images/jbl-orca-panel.jpg',
  projectBtsPole: 'images/project-bts-pole.jpg',
  projectFibreWiring: 'images/project-fibre-wiring.jpg',
  projectBtsSite: 'images/project-bts-site.jpg',
}

export const NAV = [
  { href: 'index.html', label: 'Home' },
  { href: 'about.html', label: 'About', dropdown: [
    { href: 'about.html', label: 'About Us' },
    { href: 'mission.html', label: 'Mission' },
    { href: 'values.html', label: 'Values' },
    { href: 'leadership.html', label: 'Leadership' },
    { href: 'history.html', label: 'History' },
    { href: 'certifications.html', label: 'Certifications' },
  ]},
  { href: 'services.html', label: 'Services', dropdown: [
    { href: 'services.html', label: 'All Services' },
    { href: 'alt-power.html', label: 'Alternative Power' },
    { href: 'telecoms.html', label: 'Telecommunications' },
    { href: 'fibre.html', label: 'Fibre Hub Systems' },
    { href: 'bts.html', label: 'BTS Operations' },
    { href: 'transmission.html', label: 'Transmission Links' },
    { href: 'energy.html', label: 'Energy Systems' },
    { href: 'network-access.html', label: 'Network Access' },
    { href: 'security.html', label: 'Security Systems' },
    { href: 'vertical-transport.html', label: 'Vertical Transport' },
    { href: 'products.html', label: 'Products & Supply' },
  ]},
  { href: 'projects.html', label: 'Work', dropdown: [
    { href: 'projects.html', label: 'All Projects' },
    { href: 'project-1.html', label: 'Base Station Power' },
    { href: 'project-2.html', label: 'Fibre Hub Setup' },
    { href: 'project-3.html', label: 'BTS Installation' },
    { href: 'process.html', label: 'Our Process' },
    { href: 'safety.html', label: 'Safety' },
  ]},
  { href: 'careers.html', label: 'Careers' },
  { href: 'contact.html', label: 'Contact' },
]

export function renderShell(pageId, contentHtml) {
  const current = (typeof window !== 'undefined' ? window.location.pathname.split('/').pop() : '') || 'index.html'

  const navHtml = NAV.map(item => {
    if (item.dropdown) {
      const dropdownHtml = item.dropdown.map(sub => {
        const active = current === sub.href ? 'active' : ''
        return `<a class="dropdown-link ${active}" href="${sub.href}">${sub.label}</a>`
      }).join('')
      const parentActive = item.dropdown.some(sub => sub.href === current) ? 'active' : ''
      return `
        <div class="nav-item has-dropdown ${parentActive}">
          <a href="${item.href}" class="nav-link">${item.label}</a>
          <span class="dropdown-arrow" aria-hidden="true">▾</span>
          <div class="dropdown">${dropdownHtml}</div>
        </div>`
    }
    const active = current === item.href ? 'active' : ''
    return `<div class="nav-item"><a class="nav-link ${active}" href="${item.href}">${item.label}</a></div>`
  }).join('')

  const navbar = `
    <header class="navbar" id="navbar">
      <a class="brand" href="index.html" aria-label="JBL Engineering home">
        <span class="brand-mark">JBL</span>
        <span class="brand-copy"><strong>JBL</strong><small>ENGINEERING</small></span>
      </a>
      <nav class="nav-menu" aria-label="Main navigation">${navHtml}</nav>
      <a class="nav-cta" href="contact.html">Get in touch <span>↗</span></a>
      <button class="hamburger" aria-label="Open menu"><span></span><span></span><span></span></button>
    </header>
    <div class="mobile-menu" id="mobileMenu"></div>`

  const footer = `
    <footer class="site-footer">
      <div class="footer-grid">
        <div class="footer-brand">
          <a class="brand" href="index.html"><span class="brand-mark">JBL</span><span class="brand-copy"><strong>JBL</strong><small>ENGINEERING</small></span></a>
          <p class="footer-tag">Electrical · Telecoms · Infrastructure</p>
        </div>
        <div class="footer-col">
          <p class="footer-col-title">Company</p>
          <a href="about.html">About Us</a>
          <a href="mission.html">Mission</a>
          <a href="values.html">Values</a>
          <a href="leadership.html">Leadership</a>
          <a href="history.html">History</a>
          <a href="certifications.html">Certifications</a>
        </div>
        <div class="footer-col">
          <p class="footer-col-title">Services</p>
          <a href="services.html">All Services</a>
          <a href="alt-power.html">Alternative Power</a>
          <a href="telecoms.html">Telecommunications</a>
          <a href="fibre.html">Fibre Hub Systems</a>
          <a href="bts.html">BTS Operations</a>
          <a href="transmission.html">Transmission Links</a>
          <a href="energy.html">Energy Systems</a>
          <a href="network-access.html">Network Access</a>
          <a href="security.html">Security Systems</a>
          <a href="vertical-transport.html">Vertical Transport</a>
          <a href="products.html">Products & Supply</a>
        </div>
        <div class="footer-col">
          <p class="footer-col-title">Work</p>
          <a href="projects.html">All Projects</a>
          <a href="project-1.html">Base Station Power</a>
          <a href="project-2.html">Fibre Hub Setup</a>
          <a href="project-3.html">BTS Installation</a>
          <a href="process.html">Our Process</a>
          <a href="safety.html">Safety</a>
          <a href="careers.html">Careers</a>
        </div>
        <div class="footer-contact">
          <p class="footer-col-title">Contact</p>
          <a href="mailto:jblengineering1@gmail.com">jblengineering1@gmail.com</a>
          <a href="tel:0704440562">0704 440 562</a>
          <a href="contact.html">Send an enquiry →</a>
          <span>5, Road 2, Oluode Estate,<br>Oluyole Extension, Ibadan</span>
        </div>
      </div>
      <p class="footer-bottom">© 2024 JBL Engineering. Built for progress.</p>
    </footer>`

  return `<div class="site-shell">${navbar}<main class="page-content">${contentHtml}</main>${footer}</div>`
}

export function initShell() {
  const navbar = document.querySelector('.navbar')
  const hamburger = document.querySelector('.hamburger')
  const mobileMenu = document.querySelector('.mobile-menu')

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40)
  }, { passive: true })

  // Desktop dropdown: open on hover, keep open when moving into dropdown
  document.querySelectorAll('.has-dropdown').forEach((item) => {
    let timer
    item.addEventListener('mouseenter', () => {
      clearTimeout(timer)
      item.classList.add('open')
    })
    item.addEventListener('mouseleave', () => {
      timer = setTimeout(() => item.classList.remove('open'), 120)
    })
    // Click on small screens / touch
    item.querySelector('.dropdown-arrow')?.addEventListener('click', (e) => {
      e.preventDefault()
      item.classList.toggle('open')
    })
  })

  // Mobile menu
  const buildMobileMenu = () => NAV.map(item => {
    if (item.dropdown) {
      const subs = item.dropdown.map(sub => `<a href="${sub.href}">${sub.label}</a>`).join('')
      return `<div class="mobile-nav-group"><button class="mobile-nav-toggle">${item.label} <span>+</span></button><div class="mobile-nav-subs">${subs}</div></div>`
    }
    return `<a class="mobile-nav-link" href="${item.href}">${item.label}</a>`
  }).join('')

  hamburger?.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open')
    hamburger.classList.toggle('open', isOpen)
    if (isOpen && !mobileMenu.innerHTML) {
      mobileMenu.innerHTML = buildMobileMenu()
      mobileMenu.querySelectorAll('.mobile-nav-toggle').forEach((btn) => {
        btn.addEventListener('click', () => {
          const subs = btn.nextElementSibling
          const open = subs.classList.toggle('open')
          btn.querySelector('span').textContent = open ? '−' : '+'
        })
      })
    })
    document.body.style.overflow = isOpen ? 'hidden' : ''
  })

  // Close mobile menu on navigation
  mobileMenu?.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      mobileMenu.classList.remove('open')
      hamburger.classList.remove('open')
      document.body.style.overflow = ''
    }
  })

  // Reveal animations
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible')
  }), { threshold: 0.12 })
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

  // Counters
  const counters = document.querySelectorAll('[data-count]')
  if (counters.length) {
    const countObserver = new IntersectionObserver((entries, obs) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      const el = entry.target
      const target = Number(el.dataset.count)
      let current = 0
      const step = Math.max(1, Math.ceil(target / 35))
      const timer = setInterval(() => {
        current = Math.min(target, current + step)
        el.textContent = current
        if (current === target) clearInterval(timer)
      }, 35)
      obs.unobserve(el)
    }), { threshold: 0.8 })
    counters.forEach((el) => countObserver.observe(el))
  }

  // Contact form
  const form = document.querySelector('.contact-form')
  form?.addEventListener('submit', (e) => {
    e.preventDefault()
    const msg = form.querySelector('.form-message')
    if (msg) msg.textContent = 'Thanks — your enquiry is ready for the JBL team.'
    form.reset()
  })

  // Project filters
  const filters = document.querySelectorAll('.filter')
  filters.forEach((btn) => btn.addEventListener('click', () => {
    filters.forEach((b) => b.classList.remove('active'))
    btn.classList.add('active')
    const filter = btn.dataset.filter
    document.querySelectorAll('.project-card').forEach((card) => {
      card.style.display = filter === 'all' || card.dataset.category === filter ? 'grid' : 'none'
    })
  }))

  // Hero video controls
  document.querySelectorAll('.page-hero-video').forEach((video) => {
    const controls = video.parentElement
    const playBtn = controls.querySelector('.hero-play-btn')
    const muteBtn = controls.querySelector('.hero-mute-btn')
    const volumeSlider = controls.querySelector('.hero-volume-slider')

    playBtn?.addEventListener('click', () => {
      if (video.paused) {
        video.play()
        playBtn.classList.add('playing')
        playBtn.setAttribute('aria-label', 'Pause video')
      } else {
        video.pause()
        playBtn.classList.remove('playing')
        playBtn.setAttribute('aria-label', 'Play video')
      }
    })

    const updateMuteState = () => {
      if (video.muted || video.volume === 0) {
        muteBtn?.classList.add('muted')
        muteBtn?.setAttribute('aria-label', 'Unmute')
        if (volumeSlider) volumeSlider.value = 0
      } else {
        muteBtn?.classList.remove('muted')
        muteBtn?.setAttribute('aria-label', 'Mute')
        if (volumeSlider) volumeSlider.value = video.volume
      }
    }

    muteBtn?.addEventListener('click', () => {
      video.muted = !video.muted
      if (!video.muted && video.volume === 0) {
        video.volume = 1
      }
      updateMuteState()
    })

    volumeSlider?.addEventListener('input', () => {
      const vol = parseFloat(volumeSlider.value)
      video.volume = vol
      video.muted = vol === 0
      updateMuteState()
    })

    video.addEventListener('volumechange', updateMuteState)
  })
}
