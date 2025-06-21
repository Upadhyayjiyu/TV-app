document.getElementById("volumeBtn").addEventListener("click", function () {
  this.textContent = this.textContent === "🔊" ? "🔇" : "🔊";
});

document.getElementById("ccBtn").addEventListener("click", function () {
  this.classList.toggle("active");
  this.textContent = this.classList.contains("active") ? "CC ON" : "CC";
});

document.getElementById("langSelect").addEventListener("change", function () {
  alert(`Language changed to: ${this.value}`);
});
