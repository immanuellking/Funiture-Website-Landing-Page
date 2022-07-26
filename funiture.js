const bar = document.querySelector(".bar");
const navs = document.querySelector(".navs");

bar.addEventListener("click", () => {
  changeIcon();
  navs.classList.toggle("show");
});

function changeIcon() {
  if (navs.classList.contains("show")) {
    bar.innerHTML = '<i class="fas fa-bars"></i>';
  } else {
    bar.innerHTML = '<i class="fas fa-xmark"></i>';
  }
};

window.onscroll = () => {
  if (navs.classList.contains("show")) {
    navs.classList.remove("show");
  }
  bar.innerHTML = '<i class="fas fa-bars"></i>';
};
