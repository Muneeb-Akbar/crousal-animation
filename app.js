let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let carouselList = document.querySelector(".carousel .list");
let thumbnailDom = document.querySelector(".carousel .thumbnail");

nextDom.onclick = function () {
  showSlider("next");
};
prevDom.onclick = function () {
  showSlider("prev");
};
function showSlider(type) {
  let itemSlider = document.querySelectorAll(".carousel .list .item");
  let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");
  if (type === "next") {
    carouselList.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDom.classList.add("next");
    console.log(carouselList);
  } else {
    carouselList.prepend(itemSlider[itemSlider.length - 1]);
    thumbnailDom.prepend(itemThumbnail[itemThumbnail.length - 1]);
    carouselDom.classList.add("prev");
  }
}
setInterval(() => {
    showSlider("next");
  }, 5000); 