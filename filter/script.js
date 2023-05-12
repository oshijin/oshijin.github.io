const image = document.querySelector(".image");

const blurFilter = document.querySelector("#blurFilter");
const blurValue = document.querySelector("#blurValue");
blurFilter.addEventListener("mousemove", () => {
  image.style.filter = `blur(${blurFilter.value}px)`;
  blurValue.innerText = `${blurFilter.value}px`;
});

const brightnessFilter = document.querySelector("#brightnessFilter");
const brightnessValue = document.querySelector("#brightnessValue");
brightnessFilter.addEventListener("mousemove", () => {
  image.style.filter = `brightness(${brightnessFilter.value}%)`;
  brightnessValue.innerText = `${brightnessFilter.value}%`;
});

const contrastFilter = document.querySelector("#contrastFilter");
const contrastValue = document.querySelector("#contrastValue");
contrastFilter.addEventListener("mousemove", () => {
  image.style.filter = `contrast(${contrastFilter.value}%)`;
  contrastValue.innerText = `${contrastFilter.value}%`;
});

const grayscaleFilter = document.querySelector("#grayscaleFilter");
const grayscaleValue = document.querySelector("#grayscaleValue");
grayscaleFilter.addEventListener("mousemove", () => {
  image.style.filter = `grayscale(${grayscaleFilter.value}%)`;
  grayscaleValue.innerText = `${grayscaleFilter.value}%`;
});

const hueRotateFilter = document.querySelector("#hueRotateFilter");
const hueRotateValue = document.querySelector("#hueRotateValue");
hueRotateFilter.addEventListener("mousemove", () => {
  image.style.filter = `hue-rotate(${hueRotateFilter.value}deg)`;
  hueRotateValue.innerText = `${hueRotateFilter.value}deg`;
});

const invertFilter = document.querySelector("#invertFilter");
const invertValue = document.querySelector("#invertValue");
invertFilter.addEventListener("mousemove", () => {
  image.style.filter = `invert(${invertFilter.value}%)`;
  invertValue.innerText = `${invertFilter.value}%`;
});

const opacityFilter = document.querySelector("#opacityFilter");
const opacityValue = document.querySelector("#opacityValue");
opacityFilter.addEventListener("mousemove", () => {
  image.style.filter = `opacity(${opacityFilter.value}%)`;
  opacityValue.innerText = `${opacityFilter.value}%`;
});

const saturateFilter = document.querySelector("#saturateFilter");
const saturateValue = document.querySelector("#saturateValue");
saturateFilter.addEventListener("mousemove", () => {
  image.style.filter = `saturate(${saturateFilter.value}%)`;
  saturateValue.innerText = `${saturateFilter.value}%`;
});

const sepiaFilter = document.querySelector("#sepiaFilter");
const sepiaValue = document.querySelector("#sepiaValue");
sepiaFilter.addEventListener("mousemove", () => {
  image.style.filter = `sepia(${sepiaFilter.value}%)`;
  sepiaValue.innerText = `${sepiaFilter.value}%`;
});