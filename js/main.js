const modal = document.querySelector(".modal-container");
const close = modal.querySelector(".modal-close-button");

close.addEventListener("click", () => {
  modal.classList.add("modal-hide");
})
