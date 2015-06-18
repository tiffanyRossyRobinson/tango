var cities = [];

cities = [
  {
    name: "New York, NY",
    size: "large",
    activities: ["parks", "museums", "theater", "tours", "amusementParks"],
    food: "yesFood",
    climate: "warmSummer",
    geography: ["beach", "river", "forest", "ocean"],
    sports: "yesSports",
    shopping: "yesShop",
    image: "http://media-cdn.tripadvisor.com/media/photo-s/03/9b/2d/f2/new-york-city.jpg"
  },
  {
    name: "Los Angeles, CA",
    size: "large",
    activities: ["amusementParks", "museums", "tours", "swimming", "surfing"],
    food: "yesFood",
    climate: "mediterranean",
    geography: ["beach", "mountains", "canyons", "hills", "ocean"],
    sports: "yesSports",
    shopping: "yesShop",
    image: "http://images.fineartamerica.com/images-medium-large/los-angeles-skyline-neil-kremer.jpg"
  },
  {
    name: "Chicago, IL",
    size: "large",
    activities: ["parks", "zooAquarium", "museums", "watersports", "tours"],
    food: "yesFood",
    climate: "warmSummer",
    geography: ["lake", "river", "forest", "beach"],
    sports: "yesSports",
    shopping: "yesShop",
    image: "http://www.thepinnaclelist.com/wp-content/uploads/2013/08/002-high-hopes-for-luxury-rentals-in-america-windy-city-as-chicago-expects-3600-new-rental-units-by-2014-the-pinnacle-list-tpl-1840-600x375.jpg"
  },
  {
    name: "Phoenix, AZ",
    size: "large",
    activities: ["horsebackRiding", "hiking", "museums", "tours", "theater"],
    food: "noFood",
    climate: "hotDesert",
    geography: ["desert", "mountains"],
    sports: "yesSports",
    shopping: "yesShop",
    image: "https://c1.staticflickr.com/5/4153/4844939786_17c9c8c9da_b.jpg"
  },
  {
    name: "Dallas, TX",
    size: "large",
    activities: ["museums", "tours", "zooAquarium", "parks", "watersports"],
    food: "yesFood",
    climate: "humidSubtropical",
    geography: ["plains", "lake"],
    sports: "yesSports",
    shopping: "yesShop",
    image: "http://img2.10bestmedia.com/Images/Photos/283771/Dallas-----Ultima-Gaina-iStock_54_990x660.jpg"
  },
  {
    name: "Charleston, SC",
    size: "medium",
    activities: ["swimming", "parks", "tours", "watersports", "fishing"],
    food: "yesFood",
    climate: "humidSubtropical",
    geography: ["beach", "river", "forest", "ocean"],
    sports: "noSports",
    shopping: "yesShop",
    image: "http://www.vanessak.com/CharlestonAerials/Aerial-Photography/Historic-Charleston-SC/i-85Nb4BV/0/L/DSC_3050-2-L.jpg"
  },
  {
    name: "Eugene, OR",
    size: "medium",
    activities: ["mountainBiking", "hiking", "tours", "museums", "fishing"],
    food: "yesFood",
    climate: "drySummerSubtropical",
    geography: ["river", "valleys", "mountains", "forest"],
    sports: "noSports",
    shopping: "noShop",
    image: "http://oregonbachfestival.com/uploads/images/obf-festival-main/plan%20your%20visit%20-Eugene-Skyline-by-UpShotz.jpg"
  },
  {
    name: "Salt Lake City, UT",
    size: "medium",
    activities: ["skiing", "hiking", "mountainBiking", "museums", "watersports"],
    food: "yesFood",
    climate: "drySummerContinental",
    geography: ["mountains", "lake", "canyons", "river"],
    sports: "yesSports",
    shopping: "yesShop",
    image: "http://ogdenbicyclecouncil.com/scenictour/wp-content/uploads/ISLC2259_Doug-Pulsipher.jpg"
  },
  {
    name: "El Paso, TX",
    size: "medium",
    activities: ["hiking", "mountainBiking", "zooAquarium", "museums", "climbing"],
    food: "yesFood",
    climate: "hotDesert",
    geography: ["desert", "mountains", "river"],
    sports: "noSports",
    shopping: "yesShop",
    image: "http://static.wixstatic.com/media/3b53f5_3dbf8868d019484da33de23a33a832c1.jpg"
  },
  {
    name: "Cincinnati, OH",
    size: "medium",
    activities: ["zooAquarium", "museums", "theater", "parks", "amusementParks"],
    food: "noFood",
    climate: "warmSummer",
    geography: ["hills", "river", "forest"],
    sports: "yesSports",
    shopping: "noShop",
    image: "http://www.alsglobal.com/~/media/Images/Divisions/Life%20Sciences/Environmental/Cincinnati.jpg"
  },
  {
    name: "Northfield, MN",
    size: "small",
    activities: ["mountainBiking", "museums", "fishing", "hiking"],
    food: "noFood",
    climate: "coolSummer",
    geography: ["river", "forest"],
    sports: "noSports",
    shopping: "noShop",
    image: "http://nddc.org/i/f/2010/11/Downtown_Northfield_Shopping_District.jpg"
  },
  {
    name: "Lebanon, NH",
    size: "small",
    activities: ["theater", "fishing", "hiking"],
    food: "noFood",
    climate: "coolSummer",
    geography: ["river", "forest", "hills"],
    sports: "noSports",
    shopping: "noShop",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Downtown_Lebanon_5.JPG"
  },
  {
    name: "Hood River, OR",
    size: "small",
    activities: ["hiking", "fishing", "mountainBiking", "rafting"],
    food: "noFood",
    climate: "alpine",
    geography: ["mountains", "forest", "river"],
    sports: "noSports",
    shopping: "noShop",
    image: "http://www.farmstandgorge.com/uploads/_HoodRiver_best.jpg"
  },
  {
    name: "Port Angeles, WA",
    size: "small",
    activities: ["hiking", "mountainBiking", "fishing", "rafting", "watersports"],
    food: "noFood",
    climate: "drySummerSubtropical",
    geography: ["mountains", "forest", "bay", "ocean"],
    sports: "noSports",
    shopping: "noShop",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Portangeles_washington.jpg"
  },
  {
    name: "Spearfish, SD",
    size: "small",
    activities: ["zooAquarium", "fishing", "hiking", "museums"],
    food: "noFood",
    climate: "semiArid",
    geography: ["forest", "hills", "river", "canyon"],
    sports: "noSports",
    shopping: "noShop",
    image: "http://i1277.photobucket.com/albums/y483/vremeax/Spearfish_apus_zps04e68cfb.jpg~original"
  }
];


var questions=[];

questions=[
  {
    name: "questionOne",
    upNext: "questionTwo",
    question: "What best describes your personality?",
    answerChoices: {
      one:{
        choice: "I love being around people!",
        value: "large",
      },
      two: {
        choice: "I sometimes like my time alone",
        value: "medium",
      },
      three: {
        choice: "Leave me alone",
        value: "small"
      }}
  },
  {
    name: "questionTwo",
    upNext:"depends",
    question: "I prefer to have weather that has:",
    answerChoices: {
      one: {
        choice: "cold winters so I can make snowmen!",
        value: "cold",
      },
      two: {
        choice: "weather that is not too hot or cold",
        value: "moderate",
      },
      three: {
        choice: "lots and lots of sunshine!",
        value: "hot"
      }}
  },
  {
    name: "moderate",
    upNext:"question3",
    question: "I would like an environment that is: ",
    answerChoices: {
      one: {
        choice: "Mediterranean",
        value: "mediterranean",
      },
      two: {
        choice: "Subtropical (Dry Summer)",
        value: "drySummerSubtropical",
      },
      three: {
        choice: "Continental (Dry Summer)",
        value: "drySummerContinental"
      }
    }
  },
  {
    name: "cold",
    upNext:"question3",
    question: "I would like an environment that is: ",
    answerChoices: {
      one: {
        choice: "Alpine",
        value: "alpine",
      },
      two: {
        choice: "Semi-Arid",
        value: "semiarid",
      },
      three: {
        choice: "Humid Continental (Cool Summer)",
        value: "coolSummer",
      }
    }
  },
  {
    name: "hot",
    upNext:"question3",
    question: "I would like an environment that is: ",
    answerChoices: {
      one: {
        choice: "Humid Continental (Warm Summer)",
        value: "warmSummer",
      },
      two: {
        choice: "A Hot Desert (It's Not That Bad!)",
        value: "hotDesert",
      },
      three: {
        choice: "Humid Subtropical",
        value: "humidSubtropical",
      }
    }
  },
  {
    name: "question3",
    upNext:"question4",
    question: "I need a place that has good food! ",
    answerChoices: {
      one: {
        choice: "Absolutely! I love to eat!",
        value: "yesFood",
      },
      two: {
        choice: "Nah! I have to watch my figure",
        value: "noFood",
      }
    }
  },
  {
    name: "question4",
    upNext:"question5",
    question: "Having good shopping nearby is very important to me!",
    answerChoices: {
      one: {
        choice: "Uh Yes! I love to shop!",
        value: "yesShop",
      },
      two: {
        choice: "No!!! I dont want to go broke!",
        value: "noShop",
      }
    }
  },
  {
    name: "question5",
    upNext:"question6",
    question: "I want a major league team in my area!",
    answerChoices: {
      one: {
        choice: "Yes! Go Team!",
        value: "yesSports",
      },
      two: {
        choice: "My wife doesn't approve...",
        value: "noSports",
      }
    }
  },
  {
    name: "question6",
    upNext:"question7",
    question: "I like water so I want to be near... (pick all that apply)",
    answerChoices: {
      one: {
        choice: "A beach",
        value: "beach",
      },
      two: {
        choice: "A river",
        value: "river",
      },
      three: {
        choice: "An ocean",
        value: "ocean",
      }
    }
  },
  {
    name: "question7",
    upNext:"question8",
    question: "I think it would be so nice to live by... (pick all that apply)",
    answerChoices: {
      one: {
        choice: "Hills",
        value: "hills",
      },
      two: {
        choice: "Mountains",
        value: "mountains",
      },
      three: {
        choice: "Canyons",
        value: "canyons",
      }
    }
  },
  {
    name: "question8",
    upNext:"question9",
    question: "Send me to a place that has... (pick all that apply)",
    answerChoices: {
      one: {
        choice: "A forest",
        value: "forest",
      },
      two: {
        choice: "A lake",
        value: "lake",
      },
      three: {
        choice: "A bay",
        value: "bay",
      }
    }
  },
  {
    name: "question9",
    upNext:"question10",
    question: "It would be cool to live in ... (pick all that apply)",
    answerChoices: {
      one: {
        choice: "A desert",
        value: "desert",
      },
      two: {
        choice: "A city in the plains",
        value: "plains",
      },
      three: {
        choice: "A place with valleys",
        value: "valleys",
      }
    }
  },
  {
    name: "question10",
    upNext:"question11",
    question: "I want to be able to go... (pick all that apply)",
    answerChoices: {
      one: {
        choice: "To parks to play!",
        value: "parks",
      },
      two: {
        choice: "To museums to see things",
        value: "museums",
      },
      three: {
        choice: "To a theater to watch musicals",
        value: "theater",
      },
      four: {
        choice: "On tours to see historic sites",
        value: "tours",
      }
    }
  },
  {
    name: "question11",
    upNext:"question12",
    question: "In my spare time I like to... (pick all that apply)",
    answerChoices: {
      one: {
        choice: "Go to amusement parks",
        value: "amusementParks",
      },
      two: {
        choice: "Go swimming",
        value: "swimming",
      },
      three: {
        choice: "Be able to surf",
        value: "surfing",
      },
      four: {
        choice: "Visit a zoo or aquarium",
        value: "zooAquarium",
      }
    }
  },
  {
    name: "question12",
    upNext:"question13",
    question: "I am very active and like to... (pick all that apply)",
    answerChoices: {
      one: {
        choice: "Play water sports or go boating",
        value: "watersports",
      },
      two: {
        choice: "Go horseback riding",
        value: "horsebackRiding",
      },
      three: {
        choice: "Go on hikes",
        value: "hiking",
      },
      four: {
        choice: "Fish",
        value: "fishing",
      }
    }
  },
  {
    name: "question13",
    upNext:"EndOfQuiz",
    question: "I am so adventurous and want to be able to go... (pick all that apply)",
    answerChoices: {
      one: {
        choice: "Mountain biking",
        value: "mountainBiking",
      },
      two: {
        choice: "Skiing",
        value: "skiing",
      },
      three: {
        choice: "Climbing",
        value: "climbing",
      },
      four: {
        choice: "Rafting",
        value: "rafting",
      }
    }
  }


];
