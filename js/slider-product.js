const productContainer = [document.querySelector(".product-container")];
const nxtBtn = [document.querySelector(".nxt-btn")];
const preBtn = [document.querySelector(".pre-btn")];

productContainer.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
