const icons = document.querySelectorAll(".section-1-icons i");

let i = 1;
const l = icons.length;
setInterval(() => {
  i++;
  const icon = document.querySelector(".section-1-icons .change");
  icon.classList.remove("change");
  if (i > l) {
    icons[0].classList.add("change");
    i = 1;
  } else {
    icon.nextElementSibling.classList.add("change");
  }
}, 2000);
