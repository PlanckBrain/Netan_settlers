// JavaScript File

//Global variables
var firstClick = false;
var firstNumber = null;
var currentPlayer = "Player1";
var redDone = false;
var blueDone = false;
var tileHolder;
var tileHolderInitialized = false;

//JQuerry variables
//let $("#redTurn") = $("#redTurn");
//let $("#blueTurn") = $("#blueTurn")
$("#blueTurn").addClass("faded");

$(document).ready(function(){
    $(function(){
        //Global variables
    var firstClick = false;
    var firstNumber = null;
    var currentPlayer = "Player1";
    var redDone = false;
    var blueDone = false;
    var tileHolder;
    var tileHolderInitialized = false;
    
    //JQuerry variables
    //let $("#redTurn") = $("#redTurn");
    //let $("#blueTurn") = $("#blueTurn")
    $("#blueTurn").addClass("faded");
        
        
        
        
        var tiles = {
            tileOne: {
                Player: null,
                Units: 5,
                City: true,
                CityName: "Mordor",
                Color: null,
                ID: "#1",
                ID2: "1",
                AdjacentTiles: [
                    3,
                    4
                ]
            },
            tileTwo: {
                Player: null,
                Units: 5,
                City: true,
                CityName: "Luthadel",
                Color: null,
                ID: "#2",
                ID2: "2",
                AdjacentTiles: [
                    6,
                    7
                ]
            },
            tileThree: {
                Player: null,
                Units: 3,
                City: false,
                Color: null,
                ID: "#3",
                ID2: "3",
                AdjacentTiles: [
                    1,
                    4,
                    8
                ]
            },
            tileFour: {
                Player: null,
                Units: 3,
                City: false,
                Color: null,
                ID: "#4",
                ID2: "4",
                AdjacentTiles: [
                    1,
                    3,
                    5,
                    8
                ]
            },
            tileFive: {
                Player: null,
                Units: 5,
                City: true,
                CityName: "King's Landing",
                Color: null,
                ID: "#5",
                ID2: "5",
                AdjacentTiles: [
                    4,
                    6
                ]
            },
            tileSix: {
                Player: null,
                Units: 3,
                City: false,
                Color: null,
                ID: "#6",
                ID2: "6",
                AdjacentTiles: [
                    2,
                    5,
                    7,
                    9
                ]
            },
            tileSeven: {
                Player: null,
                Units: 3,
                City: false,
                Color: null,
                ID: "#7",
                ID2: "7",
                AdjacentTiles: [
                    2,
                    6,
                    9
                ]
            },
             tileEight: {
                Player: null,
                Units: 3,
                City: false,
                Color: null,
                ID: "#8",
                ID2: "8",
                AdjacentTiles: [
                    3,
                    4,
                    10,
                    11
                ]
            },
             tileNine: {
                Player: null,
                Units: 3,
                City: false,
                Color: null,
                ID: "#9",
                ID2: "9",
                AdjacentTiles: [
                    6,
                    7,
                    12,
                    13
                ]
            },
             tileTen: {
                Player: null,
                Units: 3,
                City: false,
                Color: null,
                ID: "#10",
                ID2: "10",
                AdjacentTiles: [
                    8,
                    11,
                    14
                ]
            },
             tileEleven: {
                Player: null,
                Units: 3,
                City: false,
                Color: null,
                ID: "#11",
                ID2: "11",
                AdjacentTiles: [
                    8,
                    10,
                    14
                ]
            },
             tileTwelve: {
                Player: null,
                Units: 3,
                City: false,
                Color: null,
                ID: "#12",
                ID2: "12",
                AdjacentTiles: [
                    9,
                    13,
                    15
                ]
            },
             tileThirteen: {
                Player: null,
                Units: 3,
                City: false,
                Color: null,
                ID: "#13",
                ID2: "13",
                AdjacentTiles: [
                    9,
                    12,
                    15
                ]
            },
             tileFourteen: {
                Player: "Player1",
                Units: 5,
                City: true,
                CityName: "Gondor",
                Color: "red",
                ID: "#14",
                ID2: "14",
                AdjacentTiles: [
                    10,
                    11
                    
                ]
            },
             tileFifteen: {
                Player: "Player2",
                Units: 5,
                City: true,
                CityName: "Urithiru",
                Color: "blue",
                ID: "#15",
                ID2: "15",
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
        //ADDING COLORS ORIGINANLLY KIDS
        $("#14").parent().addClass("red");
        $("#15").parent().addClass("blue");
//      $("#blueTurn").addClass("faded");
//      $("#redTurn").removeClass("faded");
        
        function ChangingIDToTile(tileNumber) {
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
            //let valid = false;
            for (var count = 0; count < possibleTiles.length; count++) {
                if (possibleTiles[count] == checkingTile) {
                    console.log("got to true");
                    //valid = true;
                    return true;
                }
            }
            //if (valid == false) {
                 return false;
            // }
        }
        
        function moveTroops(defendingTile, attackingTile) {
            if (defendingTile.Player !== attackingTile.Player) {
                if (defendingTile.Units >= attackingTile.Units) {
                    defendingTile.Units = defendingTile.Units - attackingTile.Units;
                    attackingTile.Units = 0;
                }
                else {
                    defendingTile.Units = attackingTile.Units - defendingTile.Units;
                    attackingTile.Units = 0;
                    defendingTile.Player = attackingTile.Player;
                    $(defendingTile.ID).parent().removeClass(defendingTile.Color);
                    defendingTile.Color = attackingTile.Color;
                    $(defendingTile.ID).parent().addClass(attackingTile.Color);
                }
            }
            else {
                defendingTile.Units += attackingTile.Units;
                attackingTile.Units = 0;
            }
        }
        
        function generateTroops(tile) {
            if (tile.Player !== null) {
                if (tile.City == true) {
                    tile.Units += 3;
                    document.getElementById(tile.ID2).innerHTML = tile.Units  + "<br />" + "Units" + "<br />" + tile.CityName;
                }
                else {
                    tile.Units++;
                    document.getElementById(tile.ID2).innerHTML = tile.Units  + "<br />" + "Units";
                }
            }
            else {
                if (tile.City == true) {
                    tile.Units += 2;
                    document.getElementById(tile.ID2).innerHTML = tile.Units  + "<br />" + "Units" + "<br />" + tile.CityName;
                }
            }
        }
        
        function endRound(){
            $("#redEnd").removeClass("rEndClicked");
            $("#blueEnd").removeClass("bEndClicked");
            console.log("yay i exist");
            generateTroops(tiles.tileOne);
            generateTroops(tiles.tileTwo);
            generateTroops(tiles.tileThree);
            generateTroops(tiles.tileFour);
            generateTroops(tiles.tileFive);
            generateTroops(tiles.tileSix);
            generateTroops(tiles.tileSeven);
            generateTroops(tiles.tileEight);
            generateTroops(tiles.tileNine);
            generateTroops(tiles.tileTen);
            generateTroops(tiles.tileEleven);
            generateTroops(tiles.tileTwelve);
            generateTroops(tiles.tileThirteen);
            generateTroops(tiles.tileFourteen);
            generateTroops(tiles.tileFifteen);
            redDone = false;
            blueDone = false;
        }
        
        function displayTroops(defending, attacking, defendingTile, attackingTile) {
            document.getElementById(defending).innerHTML = defendingTile.Units  + "<br />" + "Units";
            document.getElementById(attacking).innerHTML = attackingTile.Units  + "<br />" + "Units";
            if (currentPlayer == "Player1" && blueDone == false) {
                currentPlayer = "Player2";
                $("#redTurn").addClass("faded");
                $("#blueTurn").removeClass("faded");
            }
            else if (currentPlayer == "Player2" && redDone == false) {
                currentPlayer = "Player1";
                $("#blueTurn").addClass("faded");
                $("#redTurn").removeClass("faded");
            }
        }
        
        function CheckingSelectedTile(tileClicked) {
            var selectedTile = tileClicked.target;
            var tileNumber = selectedTile.id;
            var firstTile = ChangingIDToTile(tileNumber);
            if (firstClick == false && firstTile.Units > 0 && firstTile.Player == currentPlayer) {
                firstClick = true;
                firstNumber = tileNumber;
            }
            else if (firstClick == true){
                var firstTile = ChangingIDToTile(firstNumber);
                var secondTile = ChangingIDToTile(tileNumber);
                var validMove = checkForAdjacent(tileNumber, firstTile.AdjacentTiles);
                if (validMove == true) {
                    moveTroops(secondTile, firstTile);
                    displayTroops(tileNumber, firstNumber, secondTile, firstTile);
                    tileHolder.removeClass("selected");
                    selectedTile.removeClass("selected");
                    firstClick = false;
                }
                else if (validMove == false) {
                    firstClick = false;
                    tileHolder.removeClass("selected");
                    CheckingSelectedTile(selectedTile);
                }
            }
        }
        
        $(".middleland").on("click", function(tileClicked) {
            CheckingSelectedTile(tileClicked);
            
            if (tileHolderInitialized == false)
            {
                tileHolderInitialized = true;
            } else {
                tileHolder.removeClass("selected");
            }
            tileHolder = $(this).parent();
            $(this).parent().addClass("selected");
        });
        
        $(".middleland").mouseover(function() {
           $(this).parent().addClass("highlightHex");
        });
        
        $(".middleland").mouseout(function() {
           $(this).parent().removeClass("highlightHex");
        });
        
        $("#redEnd").click(function() {
            if(redDone == false)
            {
                $(this).addClass("rEndClicked");
                $("#redTurn").addClass("faded");
                $("#blueTurn").removeClass("faded");
                redDone = true;
                currentPlayer = "Player2";
            }
            if (blueDone == true)
            {
                console.log("Red loop, fin");
                endRound();
            }
        });
        
        $("#blueEnd").click(function() {
            if(blueDone == false)
            {
                $(this).addClass("bEndClicked");
                $("#blueTurn").addClass("faded");
                $("#redTurn").removeClass("faded");
                blueDone = true;
                currentPlayer = "Player1";
            }
            if (redDone == true)
            {
                console.log("Blue loop, fin");
                endRound();
            }
        });
    });
});