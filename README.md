# Andrew's Blog

This is a personal blog website created using HTML, CSS, and JavaScript, hosted with GitHub Pages.

## Structure

- `index.html` - Homepage
- `blog.html` - Blog listing page
- `about.html` - About me page
- `css/styles.css` - Stylesheet
- `js/main.js` - JavaScript functionality
- `js/blog-nav.js` - Blog navigation functionality
- `blog/` - Directory containing individual blog posts

## GitHub Pages Setup Instructions

1. Push this repository to GitHub
2. Go to your repository settings on GitHub
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select the branch you want to deploy (usually `main`)
5. Click "Save"
6. Your site will be published at `https://[username].github.io/[repository-name]/`

**Important:** All paths in HTML, CSS, and JavaScript files are relative paths, which ensures they will work correctly when deployed to GitHub Pages. For example:
- `../css/styles.css` rather than absolute paths
- `../js/blog-nav.js` for JavaScript files
- `../blog.html` for navigation links

## Adding New Blog Posts

To add a new blog post:

1. Create a new HTML file in the `blog/` directory
2. Include the following at the minimum:
