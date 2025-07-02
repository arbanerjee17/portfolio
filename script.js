document.addEventListener("DOMContentLoaded", () => {
  // Scroll reveal animation
  const elementsToAnimate = document.querySelectorAll(
    ".hero, .card, .skill-box, .project-card, .contact-box, .skill-logo.hidden"
  );

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.animationPlayState = "running";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elementsToAnimate.forEach((el) => scrollObserver.observe(el));

  // Hamburger logic
  const hamburger = document.querySelector(".hamburger");
  const dropdownMenu = document.getElementById("dropdownMenu");

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // So click doesn't bubble to document
    dropdownMenu.classList.toggle("show");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!dropdownMenu.contains(e.target) && !hamburger.contains(e.target)) {
      dropdownMenu.classList.remove("show");
    }
  });

  // Smooth scroll to sections
  const menuLinks = dropdownMenu.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        dropdownMenu.classList.remove("show");
      }
    });
  });
  // Typewriter Effect for Hero Section
    function typeWriter(element, text, speed = 50, callback) {
    let i = 0;
    function type() {
        if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
        } else if (callback) {
        callback();
        }
    }
    type();
    }

    const h1 = document.getElementById("hero-h1");
    const h2 = document.getElementById("hero-h2");
    const p1 = document.getElementById("hero-p1");
    const p2 = document.getElementById("hero-p2");

    if (h1 && h2 && p1 && p2) {
    const textH1 = h1.textContent;
    const textH2 = h2.textContent;
    const textP1 = p1.textContent;
    const textP2 = p2.textContent;

    h1.textContent = "";
    h2.textContent = "";
    p1.textContent = "";
    p2.textContent = "";

    typeWriter(h1, textH1, 60, () => {
        typeWriter(h2, textH2, 60, () => {
        typeWriter(p1, textP1, 40, () => {
            typeWriter(p2, textP2, 40);
        });
        });
    });
        // Typewriter effect for other sections
    const aboutH2 = document.getElementById("about-h2");
    const skillsH2 = document.getElementById("skills-h2");
    const projectsH2 = document.getElementById("projects-h2");
    const contactH2 = document.getElementById("contact-h2");
    const contactH3 = document.getElementById("contact-h3");

    const elementsToType = [
      { element: aboutH2, text: aboutH2?.textContent, speed: 50 },
      { element: skillsH2, text: skillsH2?.textContent, speed: 50 },
      { element: projectsH2, text: projectsH2?.textContent, speed: 50 },
      { element: contactH2, text: contactH2?.textContent, speed: 50 },
      { element: contactH3, text: contactH3?.textContent, speed: 50 }
    ];

    elementsToType.forEach(({ element, text, speed }) => {
      if (element && text) {
        element.textContent = "";
        typeWriter(element, text, speed);
      }
    });


}

});
