document.addEventListener("DOMContentLoaded", () => {
  
  // ===========================
  // Inisialisasi Umum
  // ===========================
  const hamburger = document.getElementById("hamburger");
  const mainNav = document.getElementById("main-nav");
  const navLinks = mainNav.querySelectorAll("a");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const closeIcon = document.getElementById("close-icon");

  // ===========================
  // Loading Screen & Animasi Pembuka
  // ===========================
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.style.opacity = "0";
      document.body.classList.add('loaded'); 
      setTimeout(() => (loadingScreen.style.display = "none"), 500);
    }, 500);
  }

  // ===========================
  // Navigasi Responsif (Hamburger & Close Icon)
  // ===========================
  const toggleMenu = () => {
    mainNav.classList.toggle("active");
    document.body.classList.toggle("nav-open");
    
    const isActive = mainNav.classList.contains('active');
    hamburgerIcon.classList.toggle('hidden', isActive);
    closeIcon.classList.toggle('hidden', !isActive);
  };

  if (hamburger && mainNav) {
    hamburger.addEventListener("click", toggleMenu);
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (mainNav.classList.contains("active")) {
          toggleMenu();
        }
      });
    });
  }

  // ===========================
  // Efek Mengetik (Typing Effect)
  // ===========================
  const typingElement = document.querySelector(".typing-effect");
  if (typingElement) {
    const typingWords = ["In Progress", "and a Designer", "and a Programmer"];
    let wordIndex = 0, charIndex = 0, isDeleting = false;

    function typeEffect() {
      const currentWord = typingWords[wordIndex];
      let displayText = currentWord.substring(0, charIndex);
      typingElement.textContent = displayText;

      if (!isDeleting && charIndex < currentWord.length) { charIndex++; setTimeout(typeEffect, 120); } 
      else if (isDeleting && charIndex > 0) { charIndex--; setTimeout(typeEffect, 80); } 
      else {
        isDeleting = !isDeleting;
        if (!isDeleting) { wordIndex = (wordIndex + 1) % typingWords.length; }
        setTimeout(typeEffect, isDeleting ? 1200 : 500);
      }
    }
    typeEffect();
  }

  // ===========================
  // Efek Parallax Hero
  // ===========================
  const heroBg = document.querySelector('.hero-bg-parallax');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      heroBg.style.transform = `translateY(${window.scrollY * 0.4}px)`;
    });
  }

  // ===========================
  // Project Card 3D Tilt Effect
  // ===========================
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (y / rect.height) * -10;
      const rotateY = (x / rect.width) * 10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
  });

  // ===========================
  // Animasi Muncul saat Scroll (Reveal)
  // ===========================
  const revealElements = document.querySelectorAll(".reveal");
  if (revealElements.length > 0) {
      function revealOnScroll() {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
          if (el.getBoundingClientRect().top < windowHeight - 70) {
            el.classList.add("visible");
          }
        });
      }
      window.addEventListener("scroll", revealOnScroll);
      revealOnScroll();
  }

  // ===========================
  // Modal Proyek
  // ===========================
  const modal = document.getElementById("project-modal");
  if (modal) {
    const openModal = (card) => {
      const { title, description, image, link } = card.dataset;
      modal.innerHTML = `
        <div class="modal-content bg-card-light dark:bg-card-dark rounded-xl max-w-xl w-full p-8 relative animate-scale-in">
          <span class="close-modal absolute top-4 right-6 text-3xl font-bold cursor-pointer text-text-light dark:text-text-dark">&times;</span>
          <img src="${image}" alt="Gambar Proyek ${title}" class="w-full h-72 object-cover rounded-lg mb-6" />
          <div class="flex justify-between items-center gap-4 mb-4">
            <h3 class="text-3xl font-bold text-primary">${title}</h3>
            <a href="${link}" class="btn-jln inline-block px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors" target="_blank" rel="noopener noreferrer">Jalankan</a>
          </div>
          <p class="leading-relaxed">${description}</p>
        </div>`;
      modal.classList.remove("hidden");
      modal.classList.add("flex", "items-center", "justify-center");
      document.body.classList.add("modal-open");
    };
    
    const closeModal = () => {
      modal.classList.add("hidden");
      modal.classList.remove("flex", "items-center", "justify-center");
      document.body.classList.remove("modal-open");
      modal.innerHTML = "";
    };

    document.querySelectorAll(".project-card").forEach(card => {
      card.addEventListener("click", e => {
        if (e.target.closest(".btn-jln")) {
            window.open(card.dataset.link, "_blank"); return;
        }
        openModal(card);
      });
    });

    modal.addEventListener("click", e => {
      if (e.target === modal || e.target.classList.contains('close-modal')) { closeModal(); }
    });
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
    });
  }

  // ===========================
  // Dark Mode Toggle (Kontrol Penuh via JS)
  // ===========================
  const darkToggle = document.getElementById("dark-mode-toggle");
  const darkModeSlider = document.getElementById("dark-mode-slider");
  const darkModeLabel = document.getElementById("dark-mode-label");
  
  if (darkToggle && darkModeSlider && darkModeLabel) {
    const setDarkMode = (isDark) => {
      document.documentElement.classList.toggle("dark", isDark);
      darkToggle.checked = isDark;
      localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
      
      // ## PERBAIKAN 2: Kontrol manual animasi slider dan background ##
      if (isDark) {
        darkModeSlider.classList.add("translate-x-[24px]");
        darkModeLabel.classList.add("bg-primary");
        darkModeLabel.classList.remove("bg-text-light/50");
      } else {
        darkModeSlider.classList.remove("translate-x-[24px]");
        darkModeLabel.classList.remove("bg-primary");
        darkModeLabel.classList.add("bg-text-light/50");
      }
    };

    const currentMode = localStorage.getItem("darkMode");
    setDarkMode(currentMode ? currentMode === "enabled" : window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    darkToggle.addEventListener("change", () => setDarkMode(darkToggle.checked));
  }

  // ===========================
  // Navigasi Aktif saat Scroll (Scrollspy)
  // ===========================
  const sections = document.querySelectorAll("section[id]");
  if (sections.length > 0 && document.querySelector(".main-nav")) {
      function scrollSpy() {
        const scrollY = window.pageYOffset;
        document.querySelectorAll('.main-nav a').forEach(l => l.classList.remove('active', 'text-primary', 'font-bold'));
        
        let currentSectionId = '';
        sections.forEach(current => {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 80;
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSectionId = current.getAttribute("id");
          }
        });

        const activeLink = document.querySelector(`.main-nav a[href*="${currentSectionId}"]`);
        if (activeLink) {
          activeLink.classList.add("active", "text-primary", "font-bold");
        }
      }
      window.addEventListener("scroll", scrollSpy);
      scrollSpy();
  }
});