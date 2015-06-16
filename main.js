
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
    $('#beginButton').on('click', page.openQuiz);
    // $('.findMatch').on('click', 'button', page.captureData);

  },

  openQuiz: function(){
    $('.landingPage').removeClass('active');
    $('.landingPage').addClass('hide');
    $('.quizPage').addClass('active');

  },
  // captureData: function(){
  //   console.log('you want to submit your data');
  // }


};
