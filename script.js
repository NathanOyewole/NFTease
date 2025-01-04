document
  .getElementById("contact form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for the message! We would get back to you soon.");
    this.reset();
  });

document.querySelector('a[href^="#"]').forEach((anchor) => {
  anchor.add;
  EventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrolllIntoView({
      behaviour: "smooth"
    });
  });
});
