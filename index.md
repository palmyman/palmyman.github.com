---
layout: page
title: Introduction
group: navigation
---
{% include JB/setup %}
<p id="hiding">My name is Lubomír Čuhel. I'm 23 year old IT student living in Prague and this is my personal blog and resume. My life is made of three parts:   
    School - <a href="http://fit.cvut.cz/en" target="_blank">Czech technical university in Prague, faluty of IT</a>,
    Work - Web development and
    Baseball - player, team captain, board member and coach at <a href="http://titans.cz" target="_blank">Tempo Titans Prague</a>.  
</p>
<h2>New posts</h2>

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>