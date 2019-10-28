var link = document.querySelector(".button-write-us");

var popup = document.querySelector(".modal-reviews");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var name = popup.querySelector("[name=write-name]");
var email = popup.querySelector("[name=write-email]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    name.value = storage;
  } else {
    name.focus();
    }
  });

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

form.addEventListener("post", function (evt) {
  if (!name.value || !email.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport){
      localStorage.setItem("name", name.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
