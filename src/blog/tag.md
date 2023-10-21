---
pagination:
    data: collections.tags
    size: 1
    alias: tag
    addAllPagesToCollections: true
layout: blog-hub
permalink: /blog/tags/{{ tag | slugify}}/
eleventyComputed:
    title: "Posts tagged with '{{ tag }}'"
---
<h1>Posts tagged with '{{ tag }}'</h1>
<ul>
{% for post in collections.tags[tag] %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
  </li>
{% endfor %}
</ul>