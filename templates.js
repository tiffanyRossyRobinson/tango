
var templates = {};

templates.placeMeResult = [
"<div class='resultHeader col-md-12'>",
"<h2><%= name %></h2>",
"<h2>  score: <%= score %></h2>",
"</div>",
"<div class='resultsContent col-md-12'>",
"<div id='resultsImage'class='col-md-7'>",
"<img src=<%= image %> alt='' />",
"</div>",
"<div id='resultsText'class='col-md-5'>",
"<p class='name'><%= name %></p>",
"<p class='size'><%= size %></p>",
"<p class='activities'><%= activities %></p>",
"<p class='food'><%= food %></p>",
"<p class='climate'><%= climate %></p>",
"<p class='geography'><%= geography %></p>",
"<p class='sports'><%= sports %></p>",
"<p class='shopping'><%= shopping %></p>",
"</div>"
].join("");

templates.radioQuestion= [
  "<div class='Option'><input type='radio' class='answerChoice' name = 'myChoice' value='<%= value %>'>&nbsp;&nbsp;&nbsp;<%= choice %></div>",
].join();

templates.checkQuestion= [
  "<div class='Option'><input type='checkbox' class='answerChoice' name='myChecks' value='<%= value %>'>&nbsp;&nbsp;&nbsp;<%= choice %></div>",
].join();


// Which best describes your personality?
//
// -I love being around people  value="largeCity"
// -I enjoy people company but like time alone  value = "mediumCity"
// -I a loner value = "smallCity"
// -I dont really care value= ""
