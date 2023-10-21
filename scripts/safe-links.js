// Get all the links on the webpage
var links = document.querySelectorAll('a');

// Loop through each link and add the desired attributes to external links
links.forEach(function(link) {
  var href = link.getAttribute('href');

  if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
    link.setAttribute('rel', 'noopener noreferrer nofollow');
  }
});