const logoImages = document.querySelectorAll(".logo img, .footer-brand img");

logoImages.forEach((image) => {
  image.addEventListener("error", () => {
    image.src = "https://via.placeholder.com/150x50?text=StockClaro";
  });
});

const slides = document.querySelectorAll(".carousel-slide");
const tabs = document.querySelectorAll(".carousel-tab");
const previousButton = document.querySelector(".carousel-arrow.prev");
const nextButton = document.querySelector(".carousel-arrow.next");

let currentSlide = 0;

function showSlide(index) {
  if (!slides.length) return;

  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === currentSlide);
  });

  tabs.forEach((tab, tabIndex) => {
    tab.classList.toggle("active", tabIndex === currentSlide);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const slideIndex = Number(tab.dataset.slide);
    showSlide(slideIndex);
  });
});

previousButton?.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

nextButton?.addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

const planCards = document.querySelectorAll(".plan-card");

planCards.forEach((card) => {
  card.addEventListener("click", () => {
    planCards.forEach((plan) => {
      plan.classList.remove("selected");
    });

    card.classList.add("selected");
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.click();
    }
  });
});
