const menuItems = document.querySelectorAll(".App-menu__item");
const slides = document.querySelectorAll(".slide");
const nexts = document.querySelectorAll(".next");
const prevs = document.querySelectorAll(".prev");

const itemContainer = document.querySelector(".row");

const dataContainer = datas
  .map((data) => {
    const { img, time, title, source, description, viewer, date } = data;
    return `
  <div class="col l-3">
  <div class="container__main-item">
    <a href="" class="container__main-img">
      <img
        src="${img}"
        class="item-img"
      />
      <span class="video-time">${time}</span>
    </a>
    <h1 class="item-name">
      ${title}
    </h1>
    <span class="item-source">${source}</span></br>
    <span class="item-description"
      >${description}
    </span>
    <div class="item-footer">
      <span class="item-view"> ${viewer} </span>
      <span class="item-time"> ${date} </span>
    </div>
  </div>
</div>
  `;
  })
  .join("");
itemContainer.innerHTML = dataContainer;
//slide

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let count = 0;
nexts.forEach(function (next) {
  next.onclick = function () {
    count++;
    carousel();
  };
});
prevs.forEach(function (prev) {
  prev.onclick = function () {
    count--;
    carousel();
  };
});

function carousel() {
  if (count === slides.length) {
    count = 0;
  }
  if (count < 0) {
    count = slides.length - 1;
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
}
console.log(slides.length);

//Menu

menuItems.forEach(function (menuItem) {
  menuItem.onclick = function (e) {
    e.preventDefault();
    document.querySelector(".active").classList.remove("active");
    this.classList.add("active");
  };
});

//light-mode
var toggle = 1;
let changeMode = function (mode) {
  if (toggle == 1) {
    document.documentElement.classList.toggle("light-theme");
  }
};
