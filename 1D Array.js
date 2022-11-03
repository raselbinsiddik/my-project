console.clear();

/*1DArray

function highestScore() {
    var max = scores[0];
    for (x = 1; x < scores.length; x++){
        if (max < scores[x]) {
            max = scores[x]; 
        }
    }
    return max;
}
var scores = [21, 34, 44, 66, 88,];
var maxScore=highestScore(scores);
console.log(maxScore);*/

//2D array
function highestRunScorer(playersInfo) {
    var highestScorer = playersInfo[0][0];
    var highestScore = playersInfo[0][1];
    
    for (var x = 1; x < playersInfo.length; x++){
        if (highestScore < playersInfo[x][1]) {
            highestScore = playersInfo[x][1];
            highestScorer = playersInfo[x][0];
        }
    }
    return highestScorer;
}
var playersInfo = [
    ["ashraful", 99],
    ["najmul", 77],
    ["rajib", 666],
    ["fran", 55]
];

var name = highestRunScorer(playersInfo);
console.log(name);