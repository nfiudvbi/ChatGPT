const translations = {
  ru: {
    logo: "BARCON",
    nav: {
      home: "Главная",
      services: "Услуги",
      portfolio: "Портфолио",
      contacts: "Контакты",
    },
    theme: { default: "Основная", bw: "Ч/Б", pastel: "Пастель" },
    hero: {
      title: "BARCON — Barkanov Construction",
      subtitle: "Архитектурное бюро будущего",
    },
    buttons: { contact: "Связаться" },
    services: {
      title: "Услуги",
      architecture: {
        title: "Архитектурные решения",
        brief: "Современные и эргономичные здания",
        description:
          "Разработка концепции, планировочных решений и фасадов с учётом ваших пожеланий.",
        example: "https://source.unsplash.com/800x600?modern-building",
        price: "от 1500$/м²",
      },
      structure: {
        title: "Конструктивные решения",
        brief: "Надежные конструкции",
        description:
          "Проектирование несущих элементов здания и расчёт нагрузок.",
        example: "https://source.unsplash.com/800x600?structure",
        price: "от 1200$/м²",
      },
      visualization: {
        title: "Визуализация экстерьера",
        brief: "Фотореалистичные изображения",
        description:
          "3D-визуализации проекта для представления конечного результата.",
        example: "https://source.unsplash.com/800x600?3d,render",
        price: "от 20$/м²",
      },
      measurement: {
        title: "Обмерные работы",
        brief: "Точные замеры объектов",
        description:
          "Выезд на объект и создание точных чертежей существующих зданий.",
        example: "https://source.unsplash.com/800x600?surveying",
        price: "от 5$/м²",
      },
      supervision: {
        title: "Авторский надзор",
        brief: "Контроль реализации проекта",
        description:
          "Сопровождение строительства и контроль соответствия проекту.",
        example: "https://source.unsplash.com/800x600?site,supervision",
        price: "индивидуально",
      },
    },
    portfolio: {
      title: "Портфолио",
      residential: { title: "Жилые объекты" },
      commercial: { title: "Коммерческие объекты" },
    },
    contacts: {
      title: "Контакты",
      slogan: "Свяжитесь с нами через Telegram",
      bot: "Telegram бот",
      channel: "Telegram канал",
    },
  },
  en: {
    logo: "BARCON",
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      contacts: "Contacts",
    },
    theme: { default: "Default", bw: "B/W", pastel: "Pastel" },
    hero: {
      title: "BARCON — Barkanov Construction",
      subtitle: "Architecture bureau of the future",
    },
    buttons: { contact: "Contact us" },
    services: {
      title: "Services",
      architecture: {
        title: "Architectural solutions",
        brief: "Modern and ergonomic buildings",
        description:
          "Development of concept, layout and facades tailored to your wishes.",
        example: "https://source.unsplash.com/800x600?modern-building",
        price: "from $1500/m²",
      },
      structure: {
        title: "Structural design",
        brief: "Reliable constructions",
        description: "Design of load-bearing elements and load calculations.",
        example: "https://source.unsplash.com/800x600?structure",
        price: "from $1200/m²",
      },
      visualization: {
        title: "Exterior visualization",
        brief: "Photorealistic images",
        description: "3D renderings to present the final result.",
        example: "https://source.unsplash.com/800x600?3d,render",
        price: "from $20/m²",
      },
      measurement: {
        title: "Measurement works",
        brief: "Accurate object measurements",
        description:
          "Site visit and creation of precise drawings of existing buildings.",
        example: "https://source.unsplash.com/800x600?surveying",
        price: "from $5/m²",
      },
      supervision: {
        title: "Author supervision",
        brief: "Project implementation control",
        description: "Construction support and compliance control.",
        example: "https://source.unsplash.com/800x600?site,supervision",
        price: "custom",
      },
    },
    portfolio: {
      title: "Portfolio",
      residential: { title: "Residential projects" },
      commercial: { title: "Commercial projects" },
    },
    contacts: {
      title: "Contacts",
      slogan: "Contact us via Telegram",
      bot: "Telegram bot",
      channel: "Telegram channel",
    },
  },
};

let currentLang = "ru";

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const keys = el.dataset.i18n.split(".");
    let value = translations[lang];
    keys.forEach((k) => (value = value[k]));
    if (value) el.textContent = value;
  });
}

const languageSwitch = document.getElementById("language-switch");
languageSwitch.addEventListener("change", (e) => setLanguage(e.target.value));
setLanguage("ru");

const themeSwitch = document.getElementById("theme-switch");
themeSwitch.addEventListener("change", (e) => {
  document.body.className = `theme-${e.target.value}`;
});

const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");
burger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const modal = document.getElementById("modal");
const modalBody = modal.querySelector(".modal-body");
const modalClose = document.getElementById("modal-close");

function openModal(html) {
  modalBody.innerHTML = html;
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

function serviceHTML(key) {
  const data = translations[currentLang].services[key];
  return `<h3>${data.title}</h3><p>${data.description}</p><img src="${data.example}" alt="${data.title}"><p>${data.price}</p><a class="btn contact-btn" href="https://t.me/barcon_bot" target="_blank">${translations[currentLang].buttons.contact}</a>`;
}

document.querySelectorAll("[data-service]").forEach((card) => {
  card.addEventListener("click", () => {
    openModal(serviceHTML(card.dataset.service));
  });
});

const portfolioDetails = {
  residential: [
    "https://source.unsplash.com/800x600?house,1",
    "https://source.unsplash.com/800x600?house,2",
    "https://source.unsplash.com/800x600?house,3",
  ],
  commercial: [
    "https://source.unsplash.com/800x600?office,1",
    "https://source.unsplash.com/800x600?office,2",
    "https://source.unsplash.com/800x600?office,3",
  ],
};

function portfolioHTML(key) {
  const images = portfolioDetails[key]
    .map((src) => `<img src="${src}" alt="${key}">`)
    .join("");
  return `<h3>${translations[currentLang].portfolio[key].title}</h3>${images}`;
}

document.querySelectorAll("[data-portfolio]").forEach((card) => {
  card.addEventListener("click", () => {
    openModal(portfolioHTML(card.dataset.portfolio));
  });
});
