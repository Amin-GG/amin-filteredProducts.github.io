const $ = document;
const btns = $.querySelector(".buttons").children;
const images = $.querySelector(".images").children;

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    for (let a = 0; a < btns.length; a++) {
      btns[a].classList.add("text-white");
      btns[a].classList.remove("text-blue-500");
    }
    this.classList.remove("text-white");
    this.classList.add("text-blue-500");

    const target = this.getAttribute("data-target");

    for (let g = 0; g < images.length; g++) {
      images[g].style.transform = "translate(0 ,-100%";
      setTimeout(() => {
        images[g].style.opacity = "0";
        images[g].style.display = "none";
      }, 100);
      if (target == images[g].getAttribute("data-id")) {
        images[g].style.transform = "translate(0 , 0";
        setTimeout(() => {
          images[g].style.opacity = "1";
          images[g].style.display = "block";
        }, 200);
      }
      if (target == images[g].getAttribute("data-all")) {
        images[g].style.transform = "translate(0 , -100%";
        setTimeout(() => {
          images[g].style.transform = "translate(0 , 0";
          images[g].style.opacity = "1";
          images[g].style.display = "block";
        }, 200);
      }
    }
  });
}
