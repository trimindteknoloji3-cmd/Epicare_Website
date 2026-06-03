const navbar = document.querySelector("#navbar");
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const revealItems = document.querySelectorAll(".reveal");
const heroStage = document.querySelector("#heroStage");

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const getNavigationType = () => {
  const navigation = performance.getEntriesByType?.("navigation")?.[0];
  return navigation?.type || "navigate";
};

const forceHeroStart = () => {
  const shouldStartAtHero = getNavigationType() === "reload" || !window.location.hash;
  if (!shouldStartAtHero) return;

  if (window.location.hash) {
    history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  }

  window.scrollTo(0, 0);
  requestAnimationFrame(() => window.scrollTo(0, 0));
  window.setTimeout(() => window.scrollTo(0, 0), 80);
  window.setTimeout(() => window.scrollTo(0, 0), 220);
};

forceHeroStart();
window.addEventListener("DOMContentLoaded", forceHeroStart);
window.addEventListener("load", forceHeroStart);
window.addEventListener("pageshow", forceHeroStart);

document.querySelectorAll("img[data-fallback]").forEach((image) => {
  image.addEventListener(
    "error",
    () => {
      const fallback = image.dataset.fallback;
      if (fallback && !image.src.includes(fallback)) image.src = fallback;
    },
    { once: true }
  );
});

const updateNavbar = () => {
  navbar.classList.toggle("scrolled", window.scrollY > 24);
};

const closeMenu = () => {
  menuToggle.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", "false");
  navLinks.classList.remove("active");
  navbar.classList.remove("menu-active");
  document.body.classList.remove("menu-open");
};

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  navLinks.classList.toggle("active", isOpen);
  navbar.classList.toggle("menu-active", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.13 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const value = entry.target;
      const target = Number(value.dataset.count || 0);
      const suffix = value.dataset.suffix || "";
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 34));
      const timer = window.setInterval(() => {
        current = Math.min(target, current + step);
        value.textContent = `${current}${suffix}`;
        if (current >= target) window.clearInterval(timer);
      }, 28);
      statObserver.unobserve(value);
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll("[data-count]").forEach((stat) => statObserver.observe(stat));

document.querySelectorAll("[data-app-screen]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-app-screen]").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".demo-screen").forEach((screen) => screen.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`#screen-${button.dataset.appScreen}`).classList.add("active");
  });
});

if (heroStage) {
  heroStage.addEventListener("mousemove", (event) => {
    if (window.innerWidth < 900) return;
    const rect = heroStage.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (event.clientY - rect.top - rect.height / 2) / rect.height;

    heroStage.querySelectorAll("[data-depth]").forEach((card) => {
      const depth = Number(card.dataset.depth);
      card.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
    });
  });

  heroStage.addEventListener("mouseleave", () => {
    heroStage.querySelectorAll("[data-depth]").forEach((card) => {
      card.style.transform = "translate(0, 0)";
    });
  });
}

window.addEventListener("scroll", () => {
  updateNavbar();
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 820) closeMenu();
});
updateNavbar();
