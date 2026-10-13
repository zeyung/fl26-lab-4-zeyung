// ===================================
// LAB 4: DARK MODE 
// ===================================

// INSTRUCTIONS:
// 1. Select the necessary DOM elements
// 2. Add an event listener to the toggle button
// 3. Implement the toggleDarkMode function
// 4. Update the icon when switching modes
// 5. BONUS: Save the preference to localStorage

// ===================================
// STEP 1: Select DOM Elements
// ===================================
// Select the theme toggle button (id: 'themeToggle')
const themeToggleBtn = document.getElementById('themeToggle');

// Select the theme icon element (id: 'themeIcon')
const themeIcon = document.getElementById('themeIcon');

// Get the <body> element
const body = document.body;


// ===================================
// STEP 2: Add Event Listener
// ===================================
// Call toggleDarkMode whenever the button is clicked.
themeToggleBtn.addEventListener('click', toggleDarkMode);


// ===================================
// STEP 3: Toggle Dark Mode Function
// ===================================
function toggleDarkMode() {
    // Toggle the dark theme, then check which theme is active.
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');

    // Update the icon and accessible button label.
    updateIcon(isDarkMode);
    
    // Remember the preference so it is restored on the next visit.
    localStorage.setItem('lab4-theme', isDarkMode ? 'dark' : 'light');
}


// ===================================
// STEP 4: Update Icon Function
// ===================================
function updateIcon(isDarkMode) {
    // A sun indicates that clicking will return the page to light mode.
    themeIcon.textContent = isDarkMode ? '☀️' : '🌙';
    themeToggleBtn.setAttribute(
        'aria-label',
        isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
    );
}


// ===================================
// Optional: Load Saved Preference
// ===================================
// This function runs when the page loads
// It checks if there's a saved preference in localStorage
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('lab4-theme');
    const isDarkMode = savedTheme === 'dark';

    if (isDarkMode) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }

    updateIcon(isDarkMode);
}

// Restore the saved preference when the page loads.
loadSavedTheme();


// ===================================
// HELPFUL REMINDERS:
// ===================================
// DOM Selection:
//   - document.getElementById('id')
//   - document.querySelector('#id')
//   - document.body

// Class Manipulation:
//   - element.classList.add('class-name')
//   - element.classList.remove('class-name')
//   - element.classList.toggle('class-name')
//   - element.classList.contains('class-name')

// Event Listeners:
//   - element.addEventListener('event', function)
//   - Common events: 'click', 'mouseover', 'keydown'

// Changing Content:
//   - element.textContent = 'new text'
//   - element.innerHTML = '<span>html</span>'

// localStorage (BONUS):
//   - localStorage.setItem('key', 'value')
//   - localStorage.getItem('key')
//   - localStorage.removeItem('key')
// ===================================
