---
layout: page
title: Introduction
group: navigation
---
{% include JB/setup %}
<p>My name is Lubomír Čuhel. I'm 23 year old IT student living in Prague and this is my personal blog and resume. My life is made of three parts: <ul><li>School - Czech technical university in Prague, faculty of IT</li><li>Work - Web development</li><li>Baseball - player, manager and coach at Tempo Titans Prague</li></ul> Every part has got it's own section on this website.</p>
<h2>New posts</h2>

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>