const gridBtn = document.querySelector("#gridView");
const listBtn = document.querySelector("#listView");
const view = document.querySelector(".container");

listBtn.addEventListener("click", function () {
  view.classList.add("listView");
});

gridBtn.addEventListener("click", function () {
  view.classList.remove("listView");
});
