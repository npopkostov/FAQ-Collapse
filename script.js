const toggleBtn = document.querySelectorAll(".faq-toggle");

toggleBtn.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentNode.classList.toggle("active");
  });
});

console.log(toggleBtn);
