// Get all the links on the webpage
var links = document.querySelectorAll('a');

// Add attributes to each link
links.forEach(function(link) {
  var href = link.getAttribute('href');

  if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
    link.setAttribute('rel', 'noopener noreferrer nofollow');
  }
});
