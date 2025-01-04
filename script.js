document
  .getElementById("contact form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for the message! We would get back to you soon.");
    this.reset();
  });

document.querySelector('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behaviour: "smooth"
    });
  });
});
