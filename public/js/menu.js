(() => {
  const refs = {
    openModalBtn: document.querySelector("[menu-mobile-open]"),
    closeModalBtn: document.querySelector("[menu-mobile-close]"),
    closeModalBtn1: document.querySelector("[menu-mobile-close-one]"),
    closeModalBtn2: document.querySelector("[menu-mobile-close-two]"),
    closeModalBtn3: document.querySelector("[menu-mobile-close-three]"),
    modal: document.querySelector("[menu-mobile]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn1.addEventListener("click", toggleModal);
  refs.closeModalBtn2.addEventListener("click", toggleModal);
  refs.closeModalBtn3.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }
})();






