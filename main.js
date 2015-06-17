
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
  questionOn: "",
  selectedAnswer: "",


  init:function(arguments){
    page.initStyling();
    page.initEvents();
  },

  initStyling: function(arguments){


  },

  initEvents: function(arguments){
    $('#beginButton').on('click', page.openQuiz);
    $('.submit').on('click', page.captureData);
    $('.next').on('click', page.nextQuestion);
    $('.selectAnswer').on('click', 'input[type=radio]', page.selectChoice);
    // $('.submit').on('click', page.createGoogleMap);
  },

  openQuiz: function(){
    $('.landingPage').removeClass('active');
    $('.landingPage').addClass('hide');
    $('.quizPage').addClass('active');
    $('.yourInfo').addClass('active');

  },

  captureData: function(){
    var name= $('.name').val();
    var city= $('.city').val().toLowerCase();
    page.yourObject= {
      name: name,
      city: city,
    };
    console.log("this is your object so far: ", page.yourObject);
    $('.yourInfo').removeClass('active');
    page.loadFirstQ();
  },

  loadFirstQ: function(){
    questions.map(function(value, i){
      if(value.name === 'questionOne'){
        $('.what').addClass('active');
        $('.selectAnswer').addClass('active');
        $('.next').addClass('active');
        $('.what').text(value.question);
        _.each(value.answerChoices, function(e){
          page.loadTemplate("radioQuestion", e, $('.selectAnswer'));
        });
        page.questionOn = value.upNext;
      };
    });
  },


  selectChoice: function(){
    page.selectedAnswer= $(this).attr('value');

  },

  nextQuestion: function(){
      page.setObject();
      $('.selectAnswer').empty();
      if(page.questionOn === 'questionTwo'){
        questions.map(function(value, i){
          if(value.name === 'questionTwo'){
            $('.what').text(value.question);
            _.each(value.answerChoices, function(e){
              page.loadTemplate("radioQuestion", e, $('.selectAnswer'));
            });
            page.questionOn = value.upNext;
          };
        });
      }
      else if(page.questionOn === 'depends'){
        questions.map(function(value, i){
          if(value.name === page.selectedAnswer){
            $('.what').text(value.question);
            _.each(value.answerChoices, function(e){
              page.loadTemplate("radioQuestion", e, $('.selectAnswer'));
            });
            page.questionOn = value.upNext;
          };
        });
      }
      else{
          page.nextOnePlease();
      }

  },


  setObject: function(){
    if(page.selectedAnswer === 'small' || page.selectedAnswer ===  'medium' || page.selectedAnswer === 'large'){
      page.yourObject['size'] = page.selectedAnswer;
      console.log(page.yourObject);
    }
    else if(page.selectedAnswer === 'warmSummer' || page.selectedAnswer ===  'hotDesert' || page.selectedAnswer === 'humidSubtropical' || page.selectedAnswer === 'drySummersubtropical' || page.selectedAnswer === 'drySummerContinental' || page.selectedAnswer === 'alpine' || page.selectedAnswer === 'semiArid'){
      page.yourObject['climate'] = page.selectedAnswer;
      console.log(page.yourObject);
    }
    else if(page.selectedAnswer === 'yesFood' || page.selectedAnswer ===  'noFood'){
      page.yourObject['food'] = page.selectedAnswer;
      console.log(page.yourObject);
    }
    else if(page.selectedAnswer === 'yesShop' || page.selectedAnswer ===  'noShop'){
      page.yourObject['shop'] = page.selectedAnswer;
      console.log(page.yourObject);
    }


  },
  nextOnePlease: function(){
    var goTo= "";
    questions.map(function(value, i){
      if(value.name === page.questionOn){
        $('.what').text(value.question);
        _.each(value.answerChoices, function(e){
          page.loadTemplate("radioQuestion", e, $('.selectAnswer'));
        });
          goTo= value.upNext;
      };
    });
    page.questionOn = goTo;
  },


  //
  // filterCities: function(){
  //   var score = cities.map(function(value){
  //     page.yourScore[value.name]= 0;
  //     _.each(value, function(e, i){
  //       if(i === 'size'){
  //         if(e === page.yourObject.size){
  //           page.yourScore[value.name] += 1;
  //         }
  //       }
  //       if(i === 'activities'){
  //         _.each(page.yourObject.activities, function(e){
  //           _.each(value.activities, function(el){
  //               if(e === el){
  //                 page.yourScore[value.name] += 1;
  //               };
  //           });
  //         });
  //       }
  //       if(i === 'food'){
  //         if(e === page.yourObject.food){
  //           page.yourScore[value.name] += 1;
  //         }
  //       }
  //       if(i === 'climate'){
  //         if(e === page.yourObject.climate){
  //           page.yourScore[value.name] += 1;
  //         }
  //       }
  //
  //       if( i === 'geography'){
  //         _.each(page.yourObject.geography, function(e){
  //           _.each(value.geography, function(el){
  //               if(e === el){
  //                 page.yourScore[value.name] += 1;
  //               };
  //           });
  //         });
  //       }
  //       if( i === 'sports'){
  //         if(e === page.yourObject.sports){
  //           page.yourScore[value.name] += 1;
  //         };
  //       };
  //       if( i === 'shopping'){
  //         if(e === page.yourObject.shopping){
  //           page.yourScore[value.name] += 1;
  //         };
  //       };
  //
  //     });
  //
  //   });
  //   console.log('this is your score: ', page.yourScore);
  //   page.topOne();
  // },
  //
  // topOne: function(){
  //   _.each(page.yourScore, function(e, i){
  //         if(e > page.scoreOne){
  //           page.topOne = i;
  //           page.scoreOne = e;
  //         }
  //     });
  //     console.log("this is the highest city: ", page.topOne);
  //     delete page.yourScore[page.topOne];
  //     $('.results').addClass('active');
  //     $('.topOne').text("First Result: " + page.topOne);
  //     page.second();
  //   },
  //
  //   second: function(){
  //     _.each(page.yourScore, function(e, i){
  //           if(e > page.scoreTwo){
  //             page.topTwo = i;
  //             page.scoreTwo = e;
  //           }
  //       });
  //       console.log("this is the second highest city: ", page.topTwo);
  //       delete page.yourScore[page.topTwo];
  //       $('.topTwo').text("Second Result: " + page.topTwo);
  //       page.third();
  //   },
  //
  //   third: function(){
  //     _.each(page.yourScore, function(e, i){
  //           if(e > page.scoreThree){
  //             page.topThree = i;
  //             page.scoreThree = e;
  //           }
  //       });
  //       console.log("this is the third highest city: ", page.topThree);
  //       delete page.yourScore[page.topThree];
  //       $('.topThree').text("Third Result: " + page.topThree);
  //       page.hideForm();
  //   },

    hideForm: function(){
      page.yourScore = {};
      page.yourObject= {};
      $('.quizPage').removeClass('active');
      page.results();
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
    },

    createGoogleMap: function () {
      console.log("I work");
      var mapCanvas = document.getElementById('mapCanvas');
      var mapOptions = {
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      var bounds = new google.maps.LatLngBounds();

      var address = [$('.topOne').text(), $('.topTwo').text(), $('.topThree').text()];

      var map = new google.maps.Map(mapCanvas, mapOptions);

    for (var i = 0; i < address.length; i++) {
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({
        'address': address[i]
        },
      function(results, status){
        if(status == google.maps.GeocoderStatus.OK){
          var marker = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
          });
          bounds.extend(results[0].geometry.location);
          map.setCenter(bounds.getCenter());
          map.fitBounds(bounds);
        }
      });
      }
    }

};
