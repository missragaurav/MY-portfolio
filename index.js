// index.js

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const message = this.querySelector("textarea").value;

  alert(`Thank you, ${name}! Your message has been received.`);

  this.reset();
});
