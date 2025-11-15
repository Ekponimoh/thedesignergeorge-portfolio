"use strict";
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
const errorStatus = document.getElementById("form-error");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch("/", {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      form.reset();
      status.style.display = "block";
      errorStatus.style.display = "none";
    } else {
      status.style.display = "none";
      errorStatus.style.display = "block";
    }
  } catch (error) {
    status.style.display = "none";
    errorStatus.style.display = "block";
  }
});
