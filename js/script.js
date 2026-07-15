// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile Menu Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// Active Link Highlight
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// Reveal on Scroll Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Slider Arrow Buttons Logic
document.querySelectorAll('.slider-container').forEach(slider => {
  if (slider.id === 'fasilitas-slider' || slider.id === 'kegiatan-slider') {
    return;
  }

  const leftBtn = slider.parentElement.querySelector('.slider-btn-left');
  const rightBtn = slider.parentElement.querySelector('.slider-btn-right');

  if (leftBtn && rightBtn) {
    const scrollAmount = 300;
    leftBtn.addEventListener('click', () => {
      // Loop check: if at or close to the beginning, loop to the end
      if (slider.scrollLeft <= 5) {
        slider.scrollTo({ left: slider.scrollWidth - slider.clientWidth, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    });

    rightBtn.addEventListener('click', () => {
      // Loop check: if at or close to the end, loop to the beginning
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    });
  }
});

// ========== DARK / LIGHT THEME TOGGLE (IDE D) ==========
const themeToggle = document.getElementById('theme-toggle');

function setTheme(isDark) {
  if (isDark) {
    document.body.classList.add('dark-theme');
    if (themeToggle) {
      const icon = themeToggle.querySelector('i');
      if (icon) {
        icon.classList.remove('bi-moon-fill');
        icon.classList.add('bi-sun-fill');
      }
    }
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-theme');
    if (themeToggle) {
      const icon = themeToggle.querySelector('i');
      if (icon) {
        icon.classList.remove('bi-sun-fill');
        icon.classList.add('bi-moon-fill');
      }
    }
    localStorage.setItem('theme', 'light');
  }
}

// Check localStorage or system preference
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  setTheme(true);
} else {
  setTheme(false);
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-theme');
    setTheme(!isDark);
  });
}

// ========== STATS COUNT UP ANIMATION ==========
const stats = document.querySelectorAll('.stat-number');
if (stats.length > 0) {
  const animateStats = () => {
    stats.forEach(stat => {
      const target = +stat.getAttribute('data-target');
      const duration = 2000; // Animation duration in ms
      const stepTime = 15;
      const steps = duration / stepTime;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          stat.textContent = target;
          clearInterval(timer);
        } else {
          stat.textContent = Math.floor(current);
        }
      }, stepTime);
    });
  };

  // Run when stats enter viewport (using IntersectionObserver)
  const statsSection = document.querySelector('.hero-stats');
  if (statsSection) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(animateStats, 1000);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    observer.observe(statsSection);
  }
}