const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

let activeCurrent = 1;

const lengthCircles = circles.length;

next.addEventListener("click", () => {
  if (activeCurrent < lengthCircles) activeCurrent++;
  console.log(activeCurrent);
  update();
});

prev.addEventListener("click", () => {
  if (activeCurrent > 1) activeCurrent--;
  console.log(activeCurrent);
  update();
});

function update() {
  if (activeCurrent === 1) {
    prev.disabled = true;
  } else if (activeCurrent === lengthCircles) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }

  circles.forEach((circle, index) => {
    if (index < activeCurrent) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  progress.style.width =
    ((activeCurrent - 1) / (lengthCircles - 1)) * 100 + "%";
}
