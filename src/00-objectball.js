function gameObject() {
  const gameStats= {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson":{number:0, Shoe:16, Points:22, Rebound:12, Assist:12, Steals:3, Blocks:1,SlamDunks:1,},
        "Reggie Evans": {number:30, Shoe:14, Points:12, Rebound:12, Assist:12, Steals:12, Blocks:12,SlamDunks:7,},
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien":{number:4, Shoe:18, Points:10, Rebound:1, Assist:1, Steals:2, Blocks:7,SlamDunks:2,},
      },
    },
  }
  return gameStats;
}



function numPointsScored(name) {
  const hora = checkHOrA(name);
  let homeOrAway = "away";
  if (hora === true) {
    homeOrAway = "home";
  }
  return gameObject()[homeOrAway]["players"][name]["Points"];
}
console.log(numPointsScored("Jeff Adrien"));



function shoeSize(name) {
  const hora = checkHOrA(name);
  let homeOrAway = "away";
  if (hora === true) {
    homeOrAway = "home";
  }
  return gameObject()[homeOrAway]["players"][name]["Shoe"];
}
console.log(shoeSize("Alan Anderson"));



function teamColors(name) {
  if (name === gameObject()["home"]["teamName"]) {
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



function playerNumbers(name) {
  let hora = "away";
  if (name === gameObject()["home"]["teamName"]) {
    hora = "home";
  }
  const players = Object.keys(gameObject()[hora]["players"]);
  let playerNums = [];
  for (p in players) {
    playerNums.push(gameObject()[hora]["players"][players[p]]["number"]);
  }
  return playerNums;
}
console.log(playerNumbers("Brooklyn Nets"));



function playerStats(name) {
  const hora = checkHOrA(name);
  let homeOrAway = "away";
  if (hora === true) {
    homeOrAway = "home";
  }
  return gameObject()[homeOrAway]["players"][name];
}
console.log(playerStats("Alan Anderson"));



function checkHOrA (name) {
  const homePlayers = Object.keys(gameObject()["home"]["players"]);
  for (let i = 0; i < homePlayers.length; i++) {
    if (homePlayers[i] === name) {
      return true;
    }
  }
  return false;
}