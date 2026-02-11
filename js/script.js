const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
    
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    document.body.classList.toggle('nav-open');
    navToggle.textContent = expanded ? '☰' : '✕';
  });
      
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && 
        !mainNav.contains(e.target) &&
        document.body.classList.contains('nav-open')) {
      document.body.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.textContent = '☰';
    }
  });
}
    
document.getElementById('year').textContent = new Date().getFullYear();
    
const slides = Array.from(document.querySelectorAll('.slide'));
let currentSlide = 0;
let slideInterval;
    
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
      
  const indicators = document.querySelectorAll('.indicator');
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
      
  currentSlide = index;
}
    
function nextSlide() {
  showSlide((currentSlide + 1) % slides.length);
}
    
function prevSlide() {
  showSlide((currentSlide - 1 + slides.length) % slides.length);
}
    
function startSlider() {
  slideInterval = setInterval(nextSlide, 5000);
}
    
function stopSlider() {
  clearInterval(slideInterval);
}
    
const sliderIndicators = document.getElementById('sliderIndicators');
if (sliderIndicators && slides.length > 0) {
  sliderIndicators.innerHTML = '';
  slides.forEach((_, i) => {
    const indicator = document.createElement('div');
    indicator.className = 'indicator';
    if (i === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => showSlide(i));
    sliderIndicators.appendChild(indicator);
  });
}
    
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const slider = document.querySelector('.slider');
    
if (nextBtn) nextBtn.addEventListener('click', nextSlide);
if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
if (slider) {
  slider.addEventListener('mouseenter', stopSlider);
  slider.addEventListener('mouseleave', startSlider);
}
    
startSlider();
    
const wisataList = [
  { 
    title: 'Makam Sunan Giri', 
    desc: 'Kompleks makam salah satu wali songo yang menjadi pusat ziarah religi.' 
  },
  { 
    title: 'Pulau Bawean', 
    desc: 'Pulau eksotis dengan pantai indah, danau, dan satwa endemik rusa Bawean.' 
  },
  { 
    title: 'Masjid Jami’ Gresik', 
    desc: 'Masjid bersejarah peninggalan Walisongo dengan arsitektur kuno yang megah.' 
  },
  { 
    title: 'Selo Tirto Giri (Setigi)', 
    desc: 'Wisata alam dan buatan di Desa Sekapuk dengan pemandangan kota Gresik.' 
  },
  { 
    title: 'Pantai Delegan', 
    desc: 'Pantai pasir putih dengan pemandangan sunset yang menakjubkan.' 
  },
  { 
    title: 'Museum Sunan Giri', 
    desc: 'Museum yang menyimpan peninggalan sejarah dan budaya Gresik.' 
  }
];
    
const wisataGrid = document.getElementById('wisataGrid');
if (wisataGrid) {
   wisataList.forEach(item => {
    const tile = document.createElement('article');
    tile.className = 'tile';
    tile.innerHTML = `
      <header><h3>${item.title}</h3></header>
      <p>${item.desc}</p>
    `;
    wisataGrid.appendChild(tile);
  });
}
    
const kulinerList = [
  { 
    title: 'Pudak', 
    desc: 'Kue tradisional berbahan tepung beras dan gula merah dengan taburan kelapa.' 
  },
  { 
    title: 'Otak-otak Bandeng', 
    desc: 'Olahan ikan bandeng berbumbu khas yang dibungkus daun pisang.' 
  },
  { 
    title: 'Jubung', 
    desc: 'Kue tradisional manis yang menjadi salah satu oleh-oleh khas Gresik.' 
  },
  { 
    title: 'Legen Penceng', 
    desc: 'Minuman segar dari buah siwalan yang memiliki rasa asam manis khas.' 
  }
];
    
const kulinerGrid = document.getElementById('kulinerGrid');
if (kulinerGrid) {
  kulinerList.forEach(item => {
    const tile = document.createElement('article');
    tile.className = 'tile';
    tile.innerHTML = `
      <header><h3>${item.title}</h3></header>
      <p>${item.desc}</p>
    `;
    kulinerGrid.appendChild(tile);
  });
}
    
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
        
    if (targetId === '#') return;
        
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      if (document.body.classList.contains('nav-open')) {
        document.body.classList.remove('nav-open');
        if (navToggle) {
          navToggle.setAttribute('aria-expanded', 'false');
          navToggle.textContent = '☰';
        }
      }
          
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});