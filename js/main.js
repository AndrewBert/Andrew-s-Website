// Main JavaScript file for the blog

document.addEventListener('DOMContentLoaded', function () {
    // Add any dynamic functionality here
    console.log('Website loaded successfully');

    // Example: Add current year to footer
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        footerYear.innerHTML = footerYear.innerHTML.replace(/\d{4}/, currentYear);
    }

    // Check if we're in a blog post and log status
    if (window.location.pathname.includes('/blog/')) {
        console.log('Blog post page detected - navigation script should be active');
    }
});