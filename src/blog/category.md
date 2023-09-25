---
pagination:
    data: collections.categories
    size: 1
    alias: category
    addAllPagesToCollections: true
layout: blog-hub
permalink: /blog/categories/{{ category | slugify}}/
eleventyComputed:
    title: "Blog | {{ category }} posts"
---

<h1>All {{ category }} posts</h1>
<ul>
{% for post in collections.categories[category] %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
  </li>
{% endfor %}
</ul>