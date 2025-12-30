/** @format */

// ===============================
// FORM & MESSAGE
// ===============================

const form = document.querySelector('#contactForm');
const messageBox = document.querySelector('#formMessage');

// ===============================
// ALL INPUTS
// ===============================

const inputs = document.querySelectorAll(
  '#contactForm input, #contactForm textarea'
);

// ===============================
// EMAIL VALIDATION (IMPROVED)
// ===============================

function isEmailValid(email) {
  // Simple but acceptable regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ===============================
// MESSAGE HANDLER
// ===============================

function showMessage(text, type) {
  messageBox.textContent = text;
  messageBox.className = ''; // purani class remove
  messageBox.classList.add(type); // error / success / loading
}

// ===============================
// FORM VALIDATION
// ===============================

function validateForm() {
  for (let field of inputs) {
    const value = field.value.trim();
    const label = field.dataset.label;

    if (field.dataset.required === 'true' && value === '') {
      showMessage(`${label} is required`, 'error');
      return false;
    }

    if (field.dataset.type === 'email' && !isEmailValid(value)) {
      showMessage('Invalid email address', 'error');
      return false;
    }
  }
  return true;
}

// ===============================
// SUBMIT HANDLER
// ===============================

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (!validateForm()) return;

  showMessage('Sending...', 'loading');

  // Fake async (future fetch API)
  setTimeout(() => {
    showMessage('Form submitted successfully', 'success');
    form.reset();
  }, 1500);
});
