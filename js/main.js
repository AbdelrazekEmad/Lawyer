// Start Scroll to Top Btn

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Start Features Tabs
let tabs = document.querySelectorAll(".features__tabs");
let tabsArray = Array.from(tabs);
let contentBlocks = document.querySelectorAll(".features__info");
let contentBlocksArray = Array.from(contentBlocks);

tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    contentBlocksArray.forEach((block) => {
      block.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.btn).style.display = "block";
  });
});
// End Features Tabs
