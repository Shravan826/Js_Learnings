let name = "raj";
let id = 1;
let birthdate = 3/07/1999;

const collection = {
  "2548": {
    "album": "Slippery when wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let it rock",
      "You give love a bad name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert palmer",
    "tracks": []
  },
  "5439": {
    "album": "Abba Gold"
  }
}

function happyBirthDay() {
  if (birthdate == new Date().getDate().toString()) {
    console.log("Happy Birthday");
  }
  else {
    console.log(new Date().getDate().toString());
    console.log("Today is normal day");
  }
}

function createNestedObject() {
  var myObj = [
    {
    "artist": "Raj",
      "title": "7 AM",
        "release year": "2020",
          "formats": [
            "online",
            "offline"
          ],
            "gold": "true"
  },
  {
    "artist": "Ram",
      "title": "4AM",
        "release year": "2021",
          "formats": [
            "online",
            "offline"
          ],
            "gold": "true"
  }
  ]
  
  //console.log(myObj[1].formats[1])
}

function updateCollection(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }

  return collection;

  
}

console.log(updateCollection("5439", "tracks", "test"));

