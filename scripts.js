
function openModal040825() {
  var modal = document.getElementById("modal040825");
  var img = document.querySelector(".blog-img-040825");
  var modalImg = document.getElementById("modalImage040825");
  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal040825() {
  document.getElementById("modal040825").style.display = "none";
}



document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.note').forEach(note => {
    note.addEventListener('click', () => {
      note.classList.toggle('flipped');
    });
  });
});
