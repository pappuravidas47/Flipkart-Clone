// Define dropdown button–menu pairs
const dropdownButtons = {
    more: {
        button: document.querySelector('.more-btn'),
        dropdown: document.querySelector('.more-btn-dropdown')
    },
    login: {
        button: document.querySelector('.login-btn'),
        dropdown: document.querySelector('.login-btn-dropdown')
    }
};

// Function to handle hover dropdowns
function handleDropdown(buttonKey) {
    const { button, dropdown } = dropdownButtons[buttonKey];
    if (!button || !dropdown) return;

    // Show dropdown when hovering on the button
    button.addEventListener('mouseenter', () => {
        dropdown.style.display = 'block';
    });

    // Keep showing when hovering on dropdown itself
    dropdown.addEventListener('mouseenter', () => {
        dropdown.style.display = 'block';
    });

    // Hide when leaving both button and dropdown
    button.addEventListener('mouseleave', (e) => {
        const toElement = e.relatedTarget;
        if (!dropdown.contains(toElement)) {
        dropdown.style.display = 'none';
        }
    });

    dropdown.addEventListener('mouseleave', () => {
        dropdown.style.display = 'none';
    });
}

// Initialize hover behavior
Object.keys(dropdownButtons).forEach(handleDropdown);