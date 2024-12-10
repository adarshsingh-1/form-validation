const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const signupSection = document.getElementById('signupSection');
const loginSection = document.getElementById('loginSection');
const showLogin = document.getElementById('showLogin');
const showSignup = document.getElementById('showSignup');
const togglePassword = document.getElementById('togglePassword');
const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
const toggleLoginPassword = document.getElementById('toggleLoginPassword');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const loginPasswordInput = document.getElementById('loginPassword');

// Toggle between Sign-Up and Login forms
showLogin.addEventListener('click', () => {
  signupSection.style.display = 'none';
  loginSection.style.display = 'block';
});

showSignup.addEventListener('click', () => {
  loginSection.style.display = 'none';
  signupSection.style.display = 'block';
});

// Toggle password visibility
togglePassword.addEventListener('click', () => toggleVisibility(passwordInput, togglePassword));
toggleConfirmPassword.addEventListener('click', () => toggleVisibility(confirmPasswordInput, toggleConfirmPassword));
toggleLoginPassword.addEventListener('click', () => toggleVisibility(loginPasswordInput, toggleLoginPassword));

// Handle Sign-Up Form Submission
signupForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();
  const address = document.getElementById('address').value.trim();
  const pin = document.getElementById('pin').value.trim();

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  // Save user data to localStorage
  localStorage.setItem('user', JSON.stringify({ name, email, password, address, pin }));
  alert('Sign-Up Successful! Please Login.');
  signupSection.style.display = 'none';
  loginSection.style.display = 'block';
});

// Handle Login Form Submission
loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.email === email && user.password === password) {
    alert(`Welcome, ${user.name}!`);
  } else {
    alert('Invalid email or password!');
  }
});

function toggleVisibility(input, toggleIcon) {
  const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
  input.setAttribute('type', type);
  toggleIcon.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
}
