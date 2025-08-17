// -------- responsive nav-bar -------
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

function toggleMenu() {
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
}

menuToggle.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);



// For the Projects page:

// Select buttons and cards
const filterButtons = document.querySelectorAll('.filter-buttons button');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add 'active' to clicked button
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');

    projectCards.forEach(card => {
      if (filterValue === "all" || card.getAttribute('data-category') === filterValue) {
        card.style.display = "block";  // Show
      } else {
        card.style.display = "none";   // Hide
      }
    });
  });
});