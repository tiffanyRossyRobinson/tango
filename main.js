
$(document).ready(function(){
  page.init();
});

var page ={

  yourObject: {},

  yourScore: {},
  topOne: "",
  scoreOne: 0,
  topTwo: "",
  scoreTwo: 0,
  topThree: "",
  scoreThree: 0,


  init:function(arguments){
    page.initStyling();
    page.initEvents();
  },

  initStyling: function(arguments){


  },

  initEvents: function(arguments){
    $('#beginButton').on('click', page.openQuiz);
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
    $('.mygeography input:checked').each(function() {
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

    page.filterCities();

  },

  filterCities: function(){
    var score = cities.map(function(value){
      page.yourScore[value.name]= 0;
      _.each(value, function(e, i){
        if(i === 'size'){
          if(e === page.yourObject.size){
            page.yourScore[value.name] += 1;
          }
        }
        if(i === 'activities'){
          _.each(page.yourObject.activities, function(e){
            _.each(value.activities, function(el){
                if(e === el){
                  page.yourScore[value.name] += 1;
                };
            });
          });
        }
        if(i === 'food'){
          if(e === page.yourObject.food){
            page.yourScore[value.name] += 1;
          }
        }
        if(i === 'climate'){
          if(e === page.yourObject.climate){
            page.yourScore[value.name] += 1;
          }
        }

        if( i === 'geography'){
          _.each(page.yourObject.geography, function(e){
            _.each(value.geography, function(el){
                if(e === el){
                  page.yourScore[value.name] += 1;
                };
            });
          });
        }
        if( i === 'sports'){
          if(e === page.yourObject.sports){
            page.yourScore[value.name] += 1;
          };
        };
        if( i === 'shopping'){
          if(e === page.yourObject.shopping){
            page.yourScore[value.name] += 1;
          };
        };

      });

    });
    console.log('this is your score: ', page.yourScore);
    page.topOne();
  },

  topOne: function(){
    _.each(page.yourScore, function(e, i){
          if(e > page.scoreOne){
            page.topOne = i;
            page.scoreOne = e;
          }
      });
      console.log("this is the highest city: ", page.topOne);
      delete page.yourScore[page.topOne];
      $('.results').addClass('active');
      $('.topOne').text("First Result: " + page.topOne);
      page.second();
    },

    second: function(){
      _.each(page.yourScore, function(e, i){
            if(e > page.scoreTwo){
              page.topTwo = i;
              page.scoreTwo = e;
            }
        });
        console.log("this is the second highest city: ", page.topTwo);
        delete page.yourScore[page.topTwo];
        $('.topTwo').text("Second Result: " + page.topTwo);
        page.third();
    },

    third: function(){
      _.each(page.yourScore, function(e, i){
            if(e > page.scoreThree){
              page.topThree = i;
              page.scoreThree = e;
            }
        });
        console.log("this is the third highest city: ", page.topThree);
        delete page.yourScore[page.topThree];
        $('.topThree').text("Third Result: " + page.topThree);
        page.hideForm();
    },

    hideForm: function(){
      page.yourScore = {};
      page.yourObject= {};
      $('.quizPage').removeClass('active');
    },

    displayResults: function(){
          _.map(cities, function(value){
            if(value.name === page.topOne){
              var firstCity = {};
              firstCity = {
                name : value.name,
                score : page.scoreOne,
                size : value.size,
                activities : value.activities,
                food : value.food,
                climate : value.climate,
                geography : value.geography,
                sports : value.sports,
                shopping : value.shopping,
                image : value.image
              };
              console.log(firstCity);
            };
            _.template("placeMeResult", firstCity, $('.topOne'))

            if (value.name === page.second) {
              var secondCity = {};
              secondCity = {
                name : value.name,
                score : page.scoreTwo,
                size : value.size,
                activities : value.activities,
                food : value.food,
                climate : value.climate,
                geography : value.geography,
                sports : value.sports,
                shopping : value.shopping,
                image : value.image
              };
            };
            _.template("placeMeResult", secondCity, $('.second'))

            if (value.name === page.third) {
              var thirdCity = {};
              thirdCity = {
                name : value.name,
                score : page.scoreThree,
                size : value.size,
                activities : value.activities,
                food : value.food,
                climate : value.climate,
                geography : value.geography,
                sports : value.sports,
                shopping : value.shopping,
                image : value.image
              };
            };
            _.template("placeMeResult", thirdCity, $('.third'))
          })
       },

    loadTemplate: function (tmplName, data, $target) {
      var compiledTmpl = _.template(page.getTemplate(tmplName));
      $target.append(compiledTmpl(data));
    },

    getTemplate: function (name) {
      return templates[name];
    }

};
