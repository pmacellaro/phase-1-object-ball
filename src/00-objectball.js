function gameObject() {
  const gameStats= {
    home: {
      teamName: "Brooklyn Nets",
      colors: "Black, White",
      players: {
        "Alan Anderson":{number:0, Shoe:16, Points:22, Rebound:12, Assist:12, Steals:3, Blocks:1,SlamDunks:1,},
        "Reggie Evans": {number:30, Shoe:14, Points:12, Rebound:12, Assist:12, Steals:12, Blocks:12,SlamDunks:7,},
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: "Turquoise, Purple",
      players: {
        "Jeff Adrien":{number:4, Shoe:18, Points:10, Rebound:1, Assist:1, Steals:2, Blocks:7,SlamDunks:2,},
      },
    },
  }
  return gameStats;
}

function homeTeamName() {
  return gameObject()["home"]["teamName"];
}

console.log(homeTeamName());

function numPointsScored(name) {
  return gameObject()["home"]["players"][name]["Points"];
}
console.log(numPointsScored("Alan Anderson"));

function shoeSize(name) {
  return gameObject()["home"]["players"][name]["Shoe"];
}
console.log(shoeSize("Alan Anderson"));

function teamColors(name) {
  if (name === "Brooklyn Nets") {
    return gameObject()["home"]["colors"];
  } else {
    return gameObject()["away"]["colors"];
  }
}
console.log(teamColors("Brooklyn Nets"));

function teamNames() {
  return [gameObject()["home"]["teamName"], gameObject()["away"]["teamName"]];
}
console.log(teamNames());

function playerNumbers(tName) {
  if (tName === "Brooklyn Nets") {
    return
  }
}