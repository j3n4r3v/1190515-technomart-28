var isIndex = document.body.classList.contains("js-index");

var buyLinks = document.querySelectorAll(".buy__button");

var buyPopup = document.querySelector(".added__cart");
var buyContinue = buyPopup.querySelector(".button-checkout");
var buyClose = buyPopup.querySelector(".modal__close-cart");

var chosenProducts = document.querySelector(".cart__count");
var chosenProductsQuantity = 0;

function closePopup (popup) {

  popup.classList.remove("modal-show");
}

if(!isIndex) {
  chosenProductsQuantity = 10;
  putProductToCart();
}

function putProductToCart () {
  chosenProducts.classList.add("btn-cart-not-empty");
  chosenProducts.innerHTML = "Корзина: " + chosenProductsQuantity;
}

for (i = 0; i < buyLinks.length; i++) {
  buyLinks[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.add("modal-show");

    chosenProductsQuantity++;
    putProductToCart();
  });
}

buyContinue.addEventListener("click", function (evt) {
  closePopup(buyPopup);
});

buyClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (buyPopup.classList.contains("modal-show")) {
      closePopup(buyPopup);
    }
  }
});

var bookmarks = document.querySelector(".bookmark__count");
var addToBookmarksButtons = document.querySelectorAll(".bookmarks__button");
var bookmarksQuantity = 0;

for (i = 0; i < addToBookmarksButtons.length; i++) {
  addToBookmarksButtons[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    bookmarksQuantity++;
    bookmarks.classList.add("btn-bookmark-not-empty");
    bookmarks.innerHTML = "Закладки: " + bookmarksQuantity;
  });
}