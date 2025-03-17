// This will work fine on GitHub Pages as it's standard client-side JavaScript
// No changes needed
document.addEventListener('DOMContentLoaded', function () {
    // Create navigation elements
    const blogNav = document.createElement('div');
    blogNav.className = 'blog-nav';

    // Create back to blog link
    const backLink = document.createElement('a');
    backLink.href = '../blog.html';
    backLink.innerHTML = '<span class="back-icon">←</span><span class="back-text">Back to Blog</span>';

    // Create home link
    const homeLink = document.createElement('a');
    homeLink.href = '../index.html';
    homeLink.textContent = 'Home';

    // Assemble navigation bar
    blogNav.appendChild(backLink);
    blogNav.appendChild(homeLink);

    // Insert navigation at the beginning of the body
    document.body.insertBefore(blogNav, document.body.firstChild);

    console.log('Blog navigation added successfully');
});