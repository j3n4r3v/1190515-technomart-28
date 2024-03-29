var loginLink = document.querySelector(".write__us-link");
var loginPopup = document.querySelector(".modal-login");
var loginClose = loginPopup.querySelector(".modal-close");
var loginForm = loginPopup.querySelector(".login-form");
var loginUser = loginPopup.querySelector(".login-user");
var loginEmail = loginPopup.querySelector(".login-email");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

loginLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	loginPopup.classList.add("modal-show");

  if (storage) {
    loginUser.value = storage;
    loginEmail.focus();
  } else {
    loginUser.focus();
  }
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  loginPopup.classList.remove("modal-error");
});

loginForm.addEventListener("submit", function (evt) {
	if (!loginUser.value || !loginEmail.value) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", loginUser.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-show");
      loginPopup.classList.remove("modal-error");
    }
  }
});

var mapLink = document.querySelector(".map-zoom");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-map-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});

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