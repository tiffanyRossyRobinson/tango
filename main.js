$(document).ready(function(){
  page.init();
});

var page ={

  yourObject: {},
  geography: [],
  activities: [],

  yourScore: {},
  topOne: "",
  scoreOne: 0,
  topTwo: "",
  scoreTwo: 0,
  topThree: "",
  scoreThree: 0,
  questionOn: "",
  selectedAnswer: "",

  firstCity : {},
  secondCity : {},
  thirdCity : {},


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
    $('.selectAnswer').on('click', 'input[type=checkbox]', page.addChecks);
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

  addChecks: function(){

      if(page.questionOn === "question7" || page.questionOn === "question8" || page.questionOn === "question9" || page.questionOn === "question10"){
        var checked = this.value;
        console.log("checked: ", checked)

          var areYouHere = 0;
          _.each(page.geography, function(e){
              if(e === checked){
                areYouHere = 1;
              }
          });
          if(areYouHere !== 1){
              page.geography.push(this.value);
          }
          else{
            page.geography = _.without(page.geography, checked);
            console.log("geography ", page.geography);
          }
        }
        if(page.questionOn === "question11" || page.questionOn === "question12" || page.questionOn === "question13" || page.questionOn === "EndOfQuiz"){
          var checked = this.value;
          console.log("checked: ", checked)

            var areYouHere = 0;
            _.each(page.activities, function(e){
                if(e === checked){
                  areYouHere = 1;
                }
            });
            if(areYouHere !== 1){
                page.activities.push(this.value);
            }
            else{
              page.activities = _.without(page.activities, checked);
              console.log("activities ", page.activities);
            }
          }

  },

  nextQuestion: function(){
      if(page.selectedAnswer === ""){
        console.log("please select an option: ", page.selectedAnswer);
      }
      else{
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
              page.selectedAnswer = "";
            }
            else if(page.questionOn === 'question6' || page.questionOn === 'question7' || page.questionOn === 'question8' || page.questionOn === 'question9' || page.questionOn === 'question10' || page.questionOn === 'question11' || page.questionOn === 'question12' || page.questionOn === 'question13'){
                page.checkBoxOnes();
            }
            else if(page.questionOn === 'EndOfQuiz'){
              page.yourObject['activities'] = page.activities;
              page.filterCities();

            }
            else{
                page.nextOnePlease();
            }
        }

  },


  setObject: function(){
    if(page.selectedAnswer === 'small' || page.selectedAnswer ===  'medium' || page.selectedAnswer === 'large'){
      page.yourObject['size'] = page.selectedAnswer;
      page.selectedAnswer = "";

    }
    else if(page.selectedAnswer === 'warmSummer' || page.selectedAnswer ===  'hotDesert' || page.selectedAnswer === 'humidSubtropical' || page.selectedAnswer === 'drySummersubtropical' || page.selectedAnswer === 'drySummerContinental' || page.selectedAnswer === 'alpine' || page.selectedAnswer === 'semiarid' || page.selectedAnswer ===  'coolSummer'){
      page.yourObject['climate'] = page.selectedAnswer;
      page.selectedAnswer = "";
    }

    else if(page.selectedAnswer === 'yesFood' || page.selectedAnswer ===  'noFood'){
      page.yourObject['food'] = page.selectedAnswer;
      page.selectedAnswer = "";
    }
    else if(page.selectedAnswer === 'yesShop' || page.selectedAnswer ===  'noShop'){
      page.yourObject['shop'] = page.selectedAnswer;
      page.selectedAnswer = "";
    }
    else if(page.selectedAnswer === 'yesSports' || page.selectedAnswer ===  'noSports'){
      page.yourObject['sports'] = page.selectedAnswer;
      page.selectedAnswer = "done";

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

  checkBoxOnes: function(){
    var goTo= "";
    questions.map(function(value, i){
      if(value.name === page.questionOn){
        $('.what').text(value.question);
        _.each(value.answerChoices, function(e){
          page.loadTemplate("checkQuestion", e, $('.selectAnswer'));
        });
          goTo= value.upNext;
      };
    });
    page.questionOn = goTo;
    if(page.questionOn === 'question11'){
      page.yourObject['geography'] = page.geography;
      console.log(page.yourObject);
    }

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
        page.hideForm();
    },

    hideForm: function(){
      page.yourScore = {};
      page.yourObject= {};
      $('.quizPage').removeClass('active');
      page.displayResults();
    },

    displayResults: function(){


          _.map(cities, function(value){
            if(value.name === page.topOne){
              page.firstCity = {
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

              console.log(page.firstCity);

            };
          });

          _.map(cities, function(value){
            if (value.name === page.topTwo) {
              page.secondCity = {
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
              console.log(page.secondCity);
            }
          });

          _.map(cities, function(value){
            if (value.name === page.topThree) {
              page.thirdCity = {
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
              console.log(page.thirdCity);
            };

          });
            page.loadTemplate("placeMeResult", page.firstCity, $('.topOne'));
            page.loadTemplate("placeMeResult", page.secondCity, $('.topTwo'));
            page.loadTemplate("placeMeResult", page.thirdCity, $('.topThree'));
            page.createGoogleMap();
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

      var address = [page.topOne, page.topTwo, page.topThree];

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
