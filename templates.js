
var templates = {};

templates.placeMeResult = [
"<div class='resultHeader col-md-12'>",
"<h2><%= name %></h2>",
"<h2><%= score %></h2>",
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
].join("");

templates.radioQuestion= [
  "<div class='Option'><input type='radio' class='answerChoice' name = 'myChoice' value='<%= value %>'>&nbsp;&nbsp;&nbsp;<%= choice %></div>",
].join();

templates.checkQuestion= [
  "<div class='Option'><input type='checkbox' class='answerChoice' name='myChecks' value='<%= value %>'><%= choice %></div>",
].join();


// Which best describes your personality?
//
// -I love being around people  value="largeCity"
// -I enjoy people company but like time alone  value = "mediumCity"
// -I a loner value = "smallCity"
// -I dont really care value= ""
