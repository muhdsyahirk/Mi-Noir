const mainImg = document.querySelector(".main-img");

const observerMainImg = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("main-img-show", entry.isIntersecting);
    });
  },
  {
    threshold: 0.5,
  }
);

observerMainImg.observe(mainImg);
