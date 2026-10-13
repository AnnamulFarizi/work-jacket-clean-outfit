document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  // Each lookbook card has its own Bootstrap carousel; they do not share a carousel instance.
  document.querySelectorAll(".look-carousel").forEach((element) => {
    bootstrap.Carousel.getOrCreateInstance(element, { interval: false, ride: false, touch: true, wrap: true });
  });

  const form = document.getElementById("newsletterForm");
  const emailInput = document.getElementById("newsletterEmail");
  const message = document.getElementById("newsletterMessage");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!emailInput.checkValidity()) {
      emailInput.reportValidity();
      return;
    }
    message.textContent = "Terima kasih! Form demo berhasil diisi. Integrasikan layanan email untuk menyimpan pelanggan.";
    form.reset();
  });

  // Close the mobile navigation after selecting an anchor.
  document.querySelectorAll("#mainNav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const nav = document.getElementById("mainNav");
      if (nav.classList.contains("show")) bootstrap.Collapse.getOrCreateInstance(nav).hide();
    });
  });
});
