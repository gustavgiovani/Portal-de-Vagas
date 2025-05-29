// Abre o modal
function showModal() {
  document.getElementById('modal').style.display = 'block';
}

// Fecha o modal
function hideModal() {
  document.getElementById('modal').style.display = 'none';
}

// Fecha se clicar fora do conteúdo
function outsideClick(event) {
  if (event.target.id === 'modal') {
    hideModal();
  }
}

// Mensagem de sucesso e reset do form
document
  .getElementById('candidatura')
  .addEventListener('submit', function (e) {
    e.preventDefault();
    const msg = document.getElementById('successMessage');
    msg.style.display = 'block';
    setTimeout(() => {
      hideModal();
      msg.style.display = 'none';
      this.reset();
    }, 3000);
  });
