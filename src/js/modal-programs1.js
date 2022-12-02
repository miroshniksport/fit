(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-programs1-open]'),
    closeModalBtn: document.querySelector('[data-modal-programs1-close]'),
    modal: document.querySelector('[data-modal-programs1]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();