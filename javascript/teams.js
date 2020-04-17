// var friends = ["Aneki", "Quell", "Clarity", "Sleepy", "Roghar", "DM Crimson"];

// // We need 2 teams - team1 and team2
// var team1 = new Array();
// var team2 = new Array();

// for (var i = 0; i < friends.length; i++) {
//     if (i % 2 == 0) {
//         // if the index is even, add the person to team 1 
//         team1.unshift(friends[i]);
//     } else {
//         // otherwise add them to team 2
//         team2.unshift(friends[i]);
//     }
// }

// // console.log(team1);
// // console.log(team2);

// // // var person = team1.shift();
// // var person = team1.pop();

// // console.log(team1);
// // console.log(team2);
// // console.log(person);

// console.log(team1.slice(0, 2));
var nums = [0,1,20];
console.log(Math.max(...nums));