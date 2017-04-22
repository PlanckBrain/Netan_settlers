// JavaScript File
$(document).ready(function(){
    $(function(){
        var tiles = {
            tileOne: {
                Player: null,
                Units: 5,
                City: "Yeah dude",
                AdjacentTiles: [
                    3,
                    4
                ]
            },
            tileTwo: {
                Player: null,
                Units: 5,
                City: "Yeah dude",
                AdjacentTiles: [
                    6,
                    7
                ]
            },
            tileThree: {
                Player: null,
                Units: 2,
                City: "Nah man",
                AdjacentTiles: [
                    1,
                    4,
                    8
                ]
            },
            tileFour: {
                Player: null,
                Units: 2,
                City: "Nah man",
                AdjacentTiles: [
                    1,
                    3,
                    5,
                    8
                ]
            },
            tileFive: {
                Player: null,
                Units: 2,
                City: "Yeah dude",
                AdjacentTiles: [
                    4,
                    6
                ]
            },
            tileSix: {
                Player: null,
                Units: 2,
                City: "Nah man",
                AdjacentTiles: [
                    2,
                    5,
                    7,
                    9
                ]
            },
            tileSeven: {
                Player: null,
                Units: 2,
                City: "Nah man",
                AdjacentTiles: [
                    2,
                    6,
                    9
                ]
            },
             tileEight: {
                Player: null,
                Units: 2,
                AdjacentTiles: [
                    3,
                    4,
                    10,
                    11
                ]
            },
             tileNine: {
                Player: null,
                Units: 2,
                City: "Nah man",
                AdjacentTiles: [
                    6,
                    7,
                    12,
                    13
                ]
            },
             tileTen: {
                Player: null,
                Units: 2,
                City: "Nah man",
                AdjacentTiles: [
                    8,
                    11,
                    14
                ]
            },
             tileEleven: {
                Player: null,
                Units: 2,
                City: "Nah man",
                AdjacentTiles: [
                    8,
                    10,
                    14
                ]
            },
             tileTwelve: {
                Player: null,
                Units: 2,
                AdjacentTiles: [
                    9,
                    13,
                    15
                ]
            },
             tileThirteen: {
                Player: null,
                Units: 2,
                City: "Nah man",
                AdjacentTiles: [
                    9,
                    12,
                    15
                ]
            },
             tileFourteen: {
                Player: null,
                Units: 2,
                City: "Yeah dude",
                AdjacentTiles: [
                    10,
                    11
                    
                ]
            },
             tileFifteen: {
                Player: null,
                Units: 2,
                City: "Yeah dude",
                AdjacentTiles: [
                    12,
                    13
                ]
            },
        };
        //Showing initial troops
        document.getElementById(1).innerHTML = tiles.tileOne.Units  + "<br />" + "Units" + "<br />" + "Mordor";
        document.getElementById(2).innerHTML = tiles.tileTwo.Units  + "<br />" + "Units" + "<br />" + "Luthadel";
        document.getElementById(3).innerHTML = tiles.tileThree.Units  + "<br />" + "Units";
        document.getElementById(4).innerHTML = tiles.tileFour.Units  + "<br />" + "Units";
        document.getElementById(5).innerHTML = tiles.tileFive.Units  + "<br />" + "Units" + "<br />" + "King's Landing";
        document.getElementById(6).innerHTML = tiles.tileSix.Units  + "<br />" + "Units";
        document.getElementById(7).innerHTML = tiles.tileSeven.Units  + "<br />" + "Units";
        document.getElementById(8).innerHTML = tiles.tileEight.Units  + "<br />" + "Units";
        document.getElementById(9).innerHTML = tiles.tileNine.Units  + "<br />" + "Units";
        document.getElementById(10).innerHTML = tiles.tileTen.Units  + "<br />" + "Units";
        document.getElementById(11).innerHTML = tiles.tileEleven.Units  + "<br />" + "Units";
        document.getElementById(12).innerHTML = tiles.tileTwelve.Units  + "<br />" + "Units";
        document.getElementById(13).innerHTML = tiles.tileThirteen.Units  + "<br />" + "Units";
        document.getElementById(14).innerHTML = tiles.tileFourteen.Units  + "<br />" + "Units" + "<br />" + "Gondor";
        document.getElementById(15).innerHTML = tiles.tileFifteen.Units  + "<br />" + "Units" + "<br />" + "Urithiru";
        //Global variables
        var firstClick = false;
        var firstNumber = null;
        var currentPlayer = "Player1";
        
        function lotsOfCodeThatProbablyIsntNeeded(tileNumber) {
            if (tileNumber == 1) {
                return tiles.tileOne;
            }
            if (tileNumber == 2) {
                return tiles.tileTwo;
            }
            if (tileNumber == 3) {
                return tiles.tileThree;
            }
            if (tileNumber == 4) {
                return tiles.tileFour;
            }
            if (tileNumber == 5) {
                return tiles.tileFive;
            }
            if (tileNumber == 6) {
                return tiles.tileSix;
            }
            if (tileNumber == 7) {
                return tiles.tileSeven;
            }
            if (tileNumber == 8) {
                return tiles.tileEight;
            }
            if (tileNumber == 9) {
                return tiles.tileNine;
            }
            if (tileNumber == 10) {
                return tiles.tileTen;
            }
            if (tileNumber == 11) {
                return tiles.tileEleven;
            }
            if (tileNumber == 12) {
                return tiles.tileTwelve;
            }
            if (tileNumber == 13) {
                return tiles.tileThirteen;
            }
            if (tileNumber == 14) {
                return tiles.tileFourteen;
            }
            if (tileNumber == 15) {
                return tiles.tileFifteen;
            }
        }
        
        function checkForAdjacent(checkingTile, possibleTiles) {
            for (var count = 0; count < possibleTiles.length; count++) {
                if (possibleTiles[count] == checkingTile) {
                    return true;
                }
            }
        }
        
        function moveTroops(defendingTile, attackingTile) {
            if (defendingTile.Units >= attackingTile.Units) {
                defendingTile.Units = defendingTile.Units - attackingTile.Units;
                attackingTile.Units = 0;
            }
            else {
                defendingTile.Units = attackingTile.Units - defendingTile.Units;
                attackingTile.Units = 0;
                defendingTile.Player = attackingTile.Player;
            }
        }
        
        function generatinator(tile) {
            ti
        }
        
        function generateTroops() {
            tiles.tileOne;
            tiles.tileTwo;
            tiles.tileThree;
            tiles.tileFour;
            tiles.tileFive;
            tiles.tileSix;
            tiles.tileSeven;
            tiles.tileEight;
            tiles.tileNine;
            tiles.tileTen;
            tiles.tileEleven;
            tiles.tileTwelve;
            tiles.tileThirteen;
            tiles.tileFourteen;
            tiles.tileFifteen;
            }
        }
        
        function displayTroops(defending, attacking, defendingTile, attackingTile) {
            document.getElementById(defending).innerHTML = defendingTile.Units  + "<br />" + "Units";
            document.getElementById(attacking).innerHTML = attackingTile.Units  + "<br />" + "Units";
            if (currentPlayer == "Player1") {
                currentPlayer = "Player2";
            }
            else if (currentPlayer == "Player2") {
                currentPlayer = "Player1";
            }
        }
        
        $(document).click(function(tileClicked) {
            var tile = tileClicked.target;
            if (tile.className == "middleland"){
                var tileNumber = tile.id;
                var firstTile = lotsOfCodeThatProbablyIsntNeeded(tileNumber);
                if (firstClick == false && firstTile.Units > 0 && firstTile.Player == currentPlayer) {
                    firstClick = true;
                    firstNumber = tileNumber;
                }
                else if (firstClick == true){
                    var firstTile = lotsOfCodeThatProbablyIsntNeeded(firstNumber);
                    var secondTile = lotsOfCodeThatProbablyIsntNeeded(tileNumber);
                    var validMove = checkForAdjacent(tileNumber, firstTile.AdjacentTiles);
                    if (validMove == true) {
                        moveTroops(secondTile, firstTile);
                        generateTroops();
                        displayTroops(tileNumber, firstNumber, secondTile, firstTile);
                        firstClick = false;
                    }
                }
            }
            
            tileClicked.target.addClass("selected");
        });
        
        $(".middleland").mouseover(function() {
           $(this).parent().addClass("highlightHex");
        });
        
        $(".middleland").mouseout(function() {
           $(this).parent().removeClass("highlightHex");
        });
    });
});

function DarkenThis(tileHovered){
    let tileId = toString(tileHovered);
    $()
};