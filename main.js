
$(document).ready(function(){
  page.init();
});

var page ={

  yourObject: {},

  init:function(arguments){
    page.initStyling();
    page.initEvents();
  },

  initStyling: function(arguments){


  },

  initEvents: function(arguments){
    $('#beginButton').on('click', page.openQuiz);
  },
  function(arguments){
    $('.submit').on('click', page.captureData);
  },

  openQuiz: function(){
    $('.landingPage').removeClass('active');
    $('.landingPage').addClass('hide');
    $('.quizPage').addClass('active');

  },
  captureData: function(){
    var name= $('.name').val();
    var city= $('.city').val().toLowerCase();
    var mysize= $('.mySize').val();
    var climate= $('.myClimate').val();
    var food= $('.myFood').val();
    var shop = $('.myShop').val();
    var sports= $('.mySports').val();
    var geography= [];
    var activities= [];
    $('.findMatch input:checked').each(function() {
      geography.push(this.value);
    });


    $('.myActivities input:checked').each(function() {
        activities.push(this.value);
    });

    page.yourObject= {
      name: name,
      city: city,
      size: mysize,
      activities: activities,
      food: food,
      climate: climate,
      geography: geography,
      sports: sports,
      shopping: shop
    };

    console.log(page.yourObject);

  }


};
