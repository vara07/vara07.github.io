
<script>
  function openModal040825() {
    document.getElementById("modal040825").style.display = "block";
    document.getElementById("modalImage040825").src =
      document.querySelector(".blog-img-040825-candy").src;
  }

  function closeModal040825() {
    document.getElementById("modal040825").style.display = "none";
  }
</script>

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.note').forEach(note => {
    note.addEventListener('click', () => {
      note.classList.toggle('flipped');
    });
  });
});
