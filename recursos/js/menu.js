document.getElementById('open-sidebar').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('main-menu').classList.toggle('hidden');
    document.getElementById('sidebar1').classList.toggle('open');
  });
  