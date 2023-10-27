let toggler = document.querySelector(".toggle");
let topBar = document.querySelector(".top-bar");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggler.onclick = function () {
  toggler.classList.toggle("active");
  topBar.classList.toggle("active");
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

function toggleMenu() {
  let topBar = document.querySelector(".top-bar");
  let main = document.querySelector(".main");

  navigation.classList.remove('active');
  main.classList.remove('active');
}
