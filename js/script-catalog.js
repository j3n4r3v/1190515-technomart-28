const buyLinks = document.querySelectorAll(".buy__button");
const buyPopup = document.querySelector(".added__cart");
const buyContinue = buyPopup.querySelector(".button-checkout");
const buyClose = buyPopup.querySelector(".modal__close-cart");
const chosenProducts = document.querySelector(".cart__count");
let chosenProductsQuantity = 10;
const countBuyProducts = document.querySelector(".buy-card__count");

const addToBookmarksButtons = document.querySelectorAll(".bookmarks__button");
const chosenBookmarksProducts = document.querySelector(".bookmark__count");
const countBookmarkProducts = document.querySelector(".bookmark-card__count");
let bookmarksQuantity = 0;

const closePopup = (popup) => {
  popup.classList.remove("modal-show");
}
const putProductToCart = () => {
  countBuyProducts.textContent = chosenProductsQuantity;
}

if (countBuyProducts.textContent > 0) {
  chosenProducts.classList.add("btn-cart-not-empty");
  putProductToCart();
}

buyLinks.forEach((item) => {
  item.addEventListener("click", (evt) => {
    evt.preventDefault();
    buyPopup.classList.add("modal-show");
    chosenProductsQuantity++;
    putProductToCart();
  });
})

buyContinue.addEventListener("click", (evt) => {
  closePopup(buyPopup);
});

buyClose.addEventListener("click", (evt) => {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", (evt) => {
  if (evt.code === "Escape") {
    if (buyPopup.classList.contains("modal-show")) {
      closePopup(buyPopup);
    }
  }
});

addToBookmarksButtons.forEach((item) => {
  item.addEventListener("click", (evt) => {
    evt.preventDefault();
    bookmarksQuantity++;
    chosenBookmarksProducts.classList.add("btn-bookmark-not-empty");
    countBookmarkProducts.textContent= bookmarksQuantity;
  });
})