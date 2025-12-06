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

const memberTitle = document.querySelector(".member-title");

const observerMemberTitle = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("member-title-show", entry.isIntersecting);
    });
  },
  {
    threshold: 0.5,
  }
);

observerMemberTitle.observe(memberTitle);

const ctfTitle = document.querySelector(".ctfs-title");

const observerCtfTitle = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("ctfs-title-show", entry.isIntersecting);
    });
  },
  {
    threshold: 0.5,
  }
);

observerCtfTitle.observe(ctfTitle);
