//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(name,age,team,trophies){
  let newManager =[name,age,team,trophies]
  return newManager;
}



// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(form){
  if(form.length<4 && form.length>0){
  return {
    defender:form[0],
    midfield:form[1],
    forward:form[2],
  }
}
  // else if(form.length>=3){
  else {
    return null;
  }

}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}


//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){

 let filtered = players.filter(e=>{
  return e.debut===parseInt(year);
 })
 return filtered;
}
// console.log(filterByDebut(2007))

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  let positoned = players.filter(e=>{
    return e.position===position;
  })
  return positoned
}


//Progression 5 - Filter players that have won ______ award
function filterByAward(awardname){
  let playerReward = [];
  for(let i=0;i<players.length;i++){
    for(let j=0;j<players[i].awards.length;j++){
      if(players[i].awards[j].name===awardname){
        playerReward.push(players[i]) 
        break
      }
    }
  }
  // console.log(playerReward)
  return playerReward
}


//Progression 6 - Filter players that won ______ award ____ times


function filterByAwardxTimes(awardName, noOfTimes){
  let temporary =[];
  for(let i=0;i<players.length;i++){
    let tempNum = 0;
    for(let j=0;j<players[i].awards.length;j++){
      if(players[i].awards[j].name===awardName){
        ++tempNum;
      }
    }
    if(tempNum==noOfTimes){
      temporary.push(players[i])
    }
  }
  // console.log(temporary)
  return temporary
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, country){
  let temp=[];
  for(let i=0;i<players.length;i++){
    for(let j=0;j<players[i].awards.length;j++){
      if(players[i].awards[j].name===awardName && players[i].country===country){
        temp.push(players[i])
        break
      }
    }
  }
  return temp
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  let tempPlayer =[];
  for(let i=0;i<players.length;i++){
    let tempAge=players[i].age;
    let tempTeam = players[i].team;
    let tempAwards = players[i].awards.length;
    // console.log(tempAge,tempAwards,tempTeam)
    if( tempAwards>=noOfAwards && tempTeam === team && tempAge<age )
    tempPlayer.push(players[i])
  }
  return tempPlayer
}
//Progression 9 - Sort players in descending order of their age

function SortByAge(){
  let temp =players.slice().sort((a,b)=> b['age']-a['age'])
  console.log(players)
  return temp
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function FilterByTeamxSortByNoOfAwards(team){   // not working
  let temp = []
  for(let i=0;i<players.length;i++){
    if(team===players[i].team){
      temp.push(players[i])
    }
  }
  temp.sort((a,b)=> b.awards.length - a.awards.length)
  return temp
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

function SortByNamexAwardxTimes(awardName, noOfTimes, country){
  temp=[];
  for(let i=0;i<players.length;i++){
    let count=0
    for(let j=0;j<players[i].awards.length;j++){
      if(awardName==players[i].awards[j].name){
        count++
      }
    }
    if(count==noOfTimes && country==players[i].country){
      temp.push(players[i])
    }
  }
  temp.sort((a,b)=> a.name.localeCompare(b.name))
  return temp
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

function SortByNamexOlderThan(age){
  let temp = players.filter(e => e.age >= age);

  let out =  temp.sort((a,b)=> a.name.localeCompare(b.name));
  
  out.forEach(player =>{
    player.awards.sort((a,b)=> b.year - a.year)
  })
  
  return out
}