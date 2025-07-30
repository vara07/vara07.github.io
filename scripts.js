document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.note').forEach(note => {
    note.addEventListener('click', () => {
      note.classList.toggle('flipped');
    });
  });
});
