---

layout		: blog_layout

---


<div id="blog">
	<div id="blog-list">
		{% for post in paginator.posts %}
			{% include post_excerpt.html %}
		{% endfor %}
	</div>

	{% include blog_paginator.html%}

</div>



