
var templates = {};

templates.placeMeResult = [
"<div class='resultHeader col-md-12'>",
"<h2><%= name %></h2>",
"</div>",
"<div class='resultsContent col-md-12'>",
"<div id='resultsImage'class='col-md-7'>",
"<img src=<%= image %> alt='' />",
"</div>",
"<div id='resultsText'class='col-md-5'>",
"<ul>",
"<li class='name'><%= name %></li>",
"<li class='size'><%= size %></li>",
"<li class='activities'><%= activities %></li>",
"<li class='food'><%= food %></li>",
"<li class='climate'><%= climate %></li>",
"<li class='geography'><%= geography %></li>",
"<li class='sports'><%= sports %></li>",
"<li class='shopping'><%= shopping %></li>",
"</ul>",
"</div>",
"</div>"
].join();
