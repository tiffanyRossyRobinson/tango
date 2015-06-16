
$(document).ready(function(){
  page.init();
});

var page ={

  init:function(arguments){
    page.initStyling();
    page.initEvents();
  },

  initStyling: function(arguments){


  },

  initEvents: function(arguments){
    $('#beginButton').on('click', 'a', page.openQuiz);

  },

  openQuiz: function(){
    $('.landingPage').removeClass('active');
    $('.landingPage').addClass('hide');
    $('.quizPage').addClass('active');
  }


};
