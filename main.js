const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");

    if (mainNav.classList.contains("open")) {
      menuToggle.textContent = "✕";
      menuToggle.setAttribute("aria-label", "მენიუს დახურვა");
    } else {
      menuToggle.textContent = "☰";
      menuToggle.setAttribute("aria-label", "მენიუს გახსნა");
    }
  });
}