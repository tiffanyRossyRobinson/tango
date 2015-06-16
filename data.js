var cities = [];

cities = [
  {
    name: "New York",
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
    name: "Los Angeles",
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
    name: "Chicago",
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
    name: "Phoenix",
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
    name: "Dallas",
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
    name: "Charleston",
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
    name: "Eugene",
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
    name: "Salt Lake City",
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
    name: "El Paso",
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
    name: "Cincinnati",
    size: "medium",
    activities: ["zooAquarium", "museums", "theater", "parks", "watersports"],
    food: "noFood",
    climate: "warmSummer",
    geography: ["hills", "river", "forest"],
    sports: "yesSports",
    shopping: "noShop",
    image: "http://www.alsglobal.com/~/media/Images/Divisions/Life%20Sciences/Environmental/Cincinnati.jpg"
  },
  {
    name: "Northfield",
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
    name: "Lebanon",
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
    name: "Hood River",
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
    name: "Port Angeles",
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
    name: "Spearfish",
    size: "small",
    activities: ["zooAquarium", "fishing", "hiking", "museums"],
    food: "noFood",
    climate: "semiArid",
    geography: ["forest", "hills", "river", "canyon"],
    sports: "noSports",
    shopping: "noShop",
    image: "http://i1277.photobucket.com/albums/y483/vremeax/Spearfish_apus_zps04e68cfb.jpg~original"
  }
]
