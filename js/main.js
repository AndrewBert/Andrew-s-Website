
// Main JavaScript file for the blog

document.addEventListener('DOMContentLoaded', function () {
    // Add any dynamic functionality here
    console.log('Website loaded successfully');

    // Example: Add current year to footer
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        footerYear.innerHTML = footerYear.innerHTML.replace('2023', currentYear);
    }
});