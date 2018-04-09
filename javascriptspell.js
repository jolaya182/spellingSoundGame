// let buzz = require("buzz");
// let buzz = new buzz.sound("/sounds/sound",{
//     formats:['ogg' , 'mp3' ]
// });
// var buzz = new buzz.sound("sound", {
//     formats: [ "mp3"]
// });
// let buzz = new buzz();
// let buzz = new buzz.sound("sound");
// buzz.default.formats= ['ogg' , 'mp3' ]; // for audio
// buzz.default.preload = 'metadata'; // buzz.js for audio



var questions = [
    { img: 'play.png', color: '#666600', word: 'airleak', sound: 'sounds/airLeak' },
    { img: 'play.png', color: '#666600', word: 'airplantakeoff', sound: 'sounds/airPlanTakeOff' },
    { img: 'play.png', color: '#666600', word: 'amusement', sound: 'sounds/amusement' },
    { img: 'play.png', color: '#666600', word: 'anvilimpact', sound: 'sounds/anvilImpact' },
    { img: 'play.png', color: '#666600', word: 'astronaut', sound: 'sounds/astronaut' },
    { img: 'play.png', color: '#666600', word: 'axe', sound: 'sounds/axe' },
    { img: 'play.png', color: '#666600', word: 'baby', sound: 'sounds/baby' },
    { img: 'play.png', color: '#666600', word: 'ballonpop', sound: 'sounds/ballonPop' },
    { img: 'play.png', color: '#666600', word: 'bats', sound: 'sounds/bats' },
    { img: 'play.png', color: '#666600', word: 'bear', sound: 'sounds/bear' },
    { img: 'play.png', color: '#666600', word: 'beer', sound: 'sounds/beer' },
    { img: 'play.png', color: '#666600', word: 'bluejay', sound: 'sounds/blueJay' },
    { img: 'play.png', color: '#666600', word: 'bomb', sound: 'sounds/bomb' },
    { img: 'play.png', color: '#666600', word: 'boxing', sound: 'sounds/boxing' },
    { img: 'play.png', color: '#666600', word: 'campfire', sound: 'sounds/campFire' },
    { img: 'play.png', color: '#666600', word: 'canary', sound: 'sounds/canary' },
    { img: 'play.png', color: '#666600', word: 'canopener', sound: 'sounds/canOpener' },
    { img: 'play.png', color: '#666600', word: 'cardoor', sound: 'sounds/carDoor' },
    { img: 'play.png', color: '#666600', word: 'cat', sound: 'sounds/cat' },
    { img: 'play.png', color: '#666600', word: 'catMeow', sound: 'sounds/catMeow' },
    { img: 'play.png', color: '#666600', word: 'chaingsaw', sound: 'sounds/chaingSaw' },
    { img: 'play.png', color: '#666600', word: 'chicks', sound: 'sounds/chicks' },
    { img: 'play.png', color: '#666600', word: 'click', sound: 'sounds/click' },
    { img: 'play.png', color: '#666600', word: 'clothesdryer', sound: 'sounds/clothesDryer' },
    { img: 'play.png', color: '#666600', word: 'congo', sound: 'sounds/congo' },
    { img: 'play.png', color: '#666600', word: 'watch', sound: 'sounds/watch' },
    { img: 'play.png', color: '#666600', word: 'cow', sound: 'sounds/cow' },
    { img: 'play.png', color: '#666600', word: 'coyotecall', sound: 'sounds/coyoteCall' },
    { img: 'play.png', color: '#666600', word: 'crickets', sound: 'sounds/crickets' },
    { img: 'play.png', color: '#666600', word: 'crystal', sound: 'sounds/crystal' },
    { img: 'play.png', color: '#666600', word: 'deskbell', sound: 'sounds/deskBell' },
    { img: 'play.png', color: '#666600', word: 'dice', sound: 'sounds/dice' },
    { img: 'play.png', color: '#666600', word: 'djscratching', sound: 'sounds/djScratching' },
    { img: 'play.png', color: '#666600', word: 'dog', sound: 'sounds/dog' },
    { img: 'play.png', color: '#666600', word: 'dogToy', sound: 'sounds/dogToy' },
    { img: 'play.png', color: '#666600', word: 'dolphin', sound: 'sounds/dolphin' },
    { img: 'play.png', color: '#666600', word: 'doorrustysound', sound: 'sounds/doorRustySound' },
    { img: 'play.png', color: '#666600', word: 'duckMallard', sound: 'sounds/duckMallard' },
    { img: 'play.png', color: '#666600', word: 'earthquake', sound: 'sounds/earthquake' },
    { img: 'play.png', color: '#666600', word: 'elephant', sound: 'sounds/elephant' },
    { img: 'play.png', color: '#666600', word: 'elk', sound: 'sounds/elk' },
    { img: 'play.png', color: '#666600', word: 'ferrari', sound: 'sounds/ferrari' },
    { img: 'play.png', color: '#666600', word: 'firetruck', sound: 'sounds/fireTruck' },
    { img: 'play.png', color: '#666600', word: 'flock', sound: 'sounds/flock' },
    { img: 'play.png', color: '#666600', word: 'forklift', sound: 'sounds/forkLift' },
    { img: 'play.png', color: '#666600', word: 'frogs', sound: 'sounds/frogs' },
    { img: 'play.png', color: '#666600', word: 'geese', sound: 'sounds/geese' },
    { img: 'play.png', color: '#666600', word: 'glasspouring', sound: 'sounds/glassPouring' },
    { img: 'play.png', color: '#666600', word: 'goat', sound: 'sounds/goat' },
    { img: 'play.png', color: '#666600', word: 'hairdryer', sound: 'sounds/hairDryer' },
    { img: 'play.png', color: '#666600', word: 'heartbeat', sound: 'sounds/heartBeat' },
    { img: 'play.png', color: '#666600', word: 'helicopter', sound: 'sounds/helicopter' },
    { img: 'play.png', color: '#666600', word: 'hippos', sound: 'sounds/hippos' },
    { img: 'play.png', color: '#666600', word: 'horse', sound: 'sounds/horse' },
    { img: 'play.png', color: '#666600', word: 'humpbackwhale', sound: 'sounds/humpbackWhale' },
    { img: 'play.png', color: '#666600', word: 'hyenalaugh', sound: 'sounds/hyenaLaugh' },
    { img: 'play.png', color: '#666600', word: 'icecube', sound: 'sounds/iceCube' },
    { img: 'play.png', color: '#666600', word: 'iceskating', sound: 'sounds/iceSkating' },
    { img: 'play.png', color: '#666600', word: 'ilovedaddy', sound: 'sounds/iLoveDaddy' },
    { img: 'play.png', color: '#666600', word: 'jackHammer', sound: 'sounds/jackHammer' },
    { img: 'play.png', color: '#666600', word: 'jingle', sound: 'sounds/jingle' },
    { img: 'play.png', color: '#666600', word: 'kissing', sound: 'sounds/kissing' },
    { img: 'play.png', color: '#666600', word: 'lightbulb', sound: 'sounds/lightbulb' },
    { img: 'play.png', color: '#666600', word: 'lion', sound: 'sounds/lion' },
    { img: 'play.png', color: '#666600', word: 'loon', sound: 'sounds/loon' },
    { img: 'play.png', color: '#666600', word: 'microwave', sound: 'sounds/microWave' },
    { img: 'play.png', color: '#666600', word: 'orca', sound: 'sounds/orca' },
    { img: 'play.png', color: '#666600', word: 'paper', sound: 'sounds/paper' },
    { img: 'play.png', color: '#666600', word: 'pelican', sound: 'sounds/pelican' },
    { img: 'play.png', color: '#666600', word: 'pigsound', sound: 'sounds/pigSound' },
    { img: 'play.png', color: '#666600', word: 'pingpong', sound: 'sounds/pingPong' },
    { img: 'play.png', color: '#666600', word: 'policesiren', sound: 'sounds/policeSiren' },
    { img: 'play.png', color: '#666600', word: 'radio', sound: 'sounds/radio' },
    { img: 'play.png', color: '#666600', word: 'rex', sound: 'sounds/rex' },
    { img: 'play.png', color: '#666600', word: 'rolldice', sound: 'sounds/rollDice' },
    { img: 'play.png', color: '#666600', word: 'rooster', sound: 'sounds/rooster' },
    { img: 'play.png', color: '#666600', word: 'seagullcall', sound: 'sounds/seagullCall' },
    { img: 'play.png', color: '#666600', word: 'sewingmachine', sound: 'sounds/sewingMachine' },
    { img: 'play.png', color: '#666600', word: 'skorpian', sound: 'sounds/skorpian' },
    { img: 'play.png', color: '#666600', word: 'snake', sound: 'sounds/snake' },
    { img: 'play.png', color: '#666600', word: 'splat', sound: 'sounds/splat' },
    { img: 'play.png', color: '#666600', word: 'spooky', sound: 'sounds/spooky' },
    { img: 'play.png', color: '#666600', word: 'stampede', sound: 'sounds/stampede' },
    { img: 'play.png', color: '#666600', word: 'stantaclause', sound: 'sounds/stantaClause' },
    { img: 'play.png', color: '#666600', word: 'staplegun', sound: 'sounds/stapleGun' },
    { img: 'play.png', color: '#666600', word: 'thunderstorm', sound: 'sounds/thunderStorm' },
    { img: 'play.png', color: '#666600', word: 'trafficejam', sound: 'sounds/trafficeJam' },
    { img: 'play.png', color: '#666600', word: 'tundraswans', sound: 'sounds/tundraSwans' },
    { img: 'play.png', color: '#666600', word: 'turkey', sound: 'sounds/turkey' },
    { img: 'play.png', color: '#666600', word: 'whistle', sound: 'sounds/whistle' },
    { img: 'play.png', color: '#666600', word: 'wolf', sound: 'sounds/wolf' },
    { img: 'play.png', color: '#666600', word: 'woodpcker', sound: 'sounds/woodPecker' },
    { img: 'play.png', color: '#666600', word: 'wrapper', sound: 'sounds/wrapper' },
    { img: 'play.png', color: '#666600', word: 'Zebracall', sound: 'sounds/ZebraCall' },
    { img: 'play.png', color: '#666600', word: 'alligator', sound: 'sounds/alligator' },
    { img: 'play.png', color: '#666600', word: 'fish', sound: 'sounds/fish' },
    { img: 'play.png', color: '#666600', word: 'marbles', sound: 'sounds/marbles' },
    { img: 'play.png', color: '#666600', word: 'motorcycle', sound: 'sounds/motorCycle' },
    { img: 'play.png', color: '#666600', word: 'redalert', sound: 'sounds/redAlert' },
    { img: 'play.png', color: '#666600', word: 'reverse', sound: 'sounds/reverse' },
    { img: 'play.png', color: '#666600', word: 'seashorse', sound: 'sounds/seashorse' },
];
// the array for the program. //question?
var games = questions.sort(function () { return Math.random() < 0.5 ? -1 : 1 });

var winsound = new buzz.sound('sounds/winsound', {
    formats: ["mp3"]
}),
    errorSound = new buzz.sound('sounds/error', {
        formats: ["mp3"]
    }),
    alphabetSounds = {},
    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''),
    scoreKK = 0, // this variable for scoreing
    ez = true,// this is the variable used to dertemine the level -- easy or hard
    scoreK, // varible for scoring
    gameSound;
    
    var NumOfQues = games.length; // variable for the number of spelling words 
var scoreTotal = NumOfQues * 10;// variable for raw score. each answer is worth 10 point
var PercentTotal;// variable for determine the percent score.

for (var i in alphabet) {
    var letter = alphabet[i];
    alphabetSounds[letter] = new buzz.sound('sounds/kid/' + letter, {
        formats: ["mp3"]
    });// this loads the alphabet array into the letter variable
}
var idx = 0,
        $container = $('#container'), // this creates the variablea for the div in the index.html file
        $picture = $('#picture'),
        $models = $('#models'),
        $letters = $('#letters');
$(function () {
    if (!buzz.isSupported()) { // this line determines if buzz is supported by browser.
        $('warning').show();
    }
    

    $('#next').click(function () {
        NumOfQues = NumOfQues - 1;
        PercentTotal = (scoreKK / scoreTotal) * 100;
        document.getElementById("score").innerHTML = "Score = " + scoreKK + " | Percent Correct = " + PercentTotal + " % | remaining questions = " + NumOfQues;
        refreshGame();
        buildGame(++idx);

    });

    $(' #previous').click(function () {
        refreshGame();
        buildGame(--idx);

    });
    $('#level').click(function () {
        if ($(this).text() == 'easy') {
            console.log("easy")
            $(this).text('hard');
            $(".letFont").addClass('hard');
            ez = false;
        } else {
            console.log("hard")
            $(this).text('easy');
            $(".letFont").removeClass('hard');
            ez = true;
            //refreshGame();
            //buildGame ( idx );

        }

    });

    function refreshGame() {
        gameSound.stop();
        $('#models').html('');
        $('#letters').html('');
    }

    function buildGame(x) {
        console.log("index is:",x)

        if (x > games.length - 1) {
            idx = 0;
        }
        if (x < 0) {
            idx = games.length - 1;
        }
        var game = games[idx],
            scoreK = 0;


        gameSound = new buzz.sound(game.sound, {
            formats: ["mp3"]
        });
        gameSound.load().play();


        $('body').stop().animate({
            backgroundColor: game.color
        }, 1000);
        $('#header a').stop().animate({
            color: game.color
        }, 1000);
        // updates the score
        PercentTotal = (scoreKK / scoreTotal) * 100;
        document.getElementById("score").innerHTML = "Score = " + scoreKK + " | Percent Correct = " + PercentTotal+" | Remaining questions = " + NumOfQues;
        //reinsert the image beacuse winGame fuction removes it
        document.getElementById("sent").innerHTML = '<img id = "picture" src="play.png">';

        var modelLetters = game.word.split('');

        for (var i in modelLetters) {
            var letter = modelLetters[i];
            $models.append('<li  class="inLet"><div class="letFont">' + letter + '</div></li>');
        }

        // Set the letterwidth variable to the outwidth of the models combine
        // var letterWidth = $models.find('li').outerWidth(true);
        // centers the models and the letter in the approximate middle of the web page.
        // $models.width(letterWidth * $models.find('li').length + 19);

        // build shuffled letters
        var letters = game.word.split('');
        // this add extra letter if the game is set to hard using the most letters
        if (ez == false) {
            letters.push('a', 'e', 'i', 's', 'h', 'o', 'u');

        }
        //shuffles the letters in a random pile
        var shuffled = letters.sort(function () { return Math.random() < 0.5 ? -1 : 1 });
        // places the letters into the pile
        for (var i in shuffled) {
            $letters.append('<li class="draggable letPlace ">' + shuffled[i] + '</li>');
        }
        // assigns values to the variables top and left
        $letters.find('li').each(function (i) {
            //the variable ez is equal to false and if it is , it assigns the variables.
            //     if (ez == false) {
            //         var top = ( $models.position().top ) + ( Math.random() * 20 ) + 80,
            //             left =( $models.offset() .left - $container.offset().left - 10) + (Math.random() * 10 ) + ( i * letterWidth),
            //             //This line divides by two because of the extra letters added to the more difficult class
            //             angle = ( Math.random() * 30 ) -10;
            // }

            //places the letters on the web page
            // $( this ). css({
            //     top: top + 'px' ,
            //     left: left + 'px'
            // });
            // rotates the letters so they look randomly placed.
            // rotate( this, angle );
            // if you click on the letter it identifies the letter with audio using alphabetSound array and letter.
            $(this).mousedown(function () {
                gameSound.stop(); // stop any sound.
                var letter = $(this).text(); //assings the letter variable based on the letter that the user clicks.
                if (alphabetSounds[letter]) {
                    alphabetSounds[letter].play(); // play audio.
                }
            });

        });
        // if the user clicks the picture it plays the audio attached to the gamesound variable.
        $('#picture').click(function () {
            gameSound.stop();// stops any sound playing
            gameSound.load().play(); //loads and plays the sound.
        });
        // Identifies that all the letters are draggable
        $letters.find('li.draggable').draggable({
            // zIndex: 9999,
            // stack: '#letters li'
            snap:".ui-droppable",
            snapMode:"inner"
        });
        // Identifies that all the models are dropable
        $models.find('li').droppable({
            accept: '.draggable',
            hoverClass: 'hover',
            drop: function (e, ui) {// Identifies what to do if dropped onto
                var modelLetter = $(this).text(),// sets the modelLetter variable to letter that has been dropped
                    droppedLetter = ui.helper.text();// identifies the letter being dropped
                if (modelLetter == droppedLetter) { // check to see if the two variable or letter are a match and if the letter continues on.
                    ui.draggable.draggable('disable');
                    ui.draggable.draggable( 'option', 'revert', false )
                    
                    // ui.draggable.animated( { //drops the letter and removes the ability to drag it.
                    //     top:    $( this ).position().top,
                    //     left:    $( this ). position().left
                    // } ) .removesClass( 'draggable' ).draggable( 'option' , 'disable', true );
                    // // rotates the letter so that it is straight
                    // rotate( ui.draggable, 0 );

                    scoreK++; //adds one scorekk ++ variable
                    // // checks to see if scorek variable is equal to the modelLetters variable length.
                    if (scoreK == modelLetters.length) {
                        winGame(); // run the wingame function
                    }
                } else { // if it doesnt match do this.
                     ui.draggable.draggable( 'option', 'revert', true ); //send a letter back to original position
                    // scoreKK = scoreKK - 10;
                    // PercentTotal = (scoreKK / scoreTotal) * 100; // set the percent score
                    // // adds the changes to the document
                    // document.getElementById( "score" ) .innnerHTML = "Score = " + scoreKK + " | percent Correct = " + percent
                    // toFixed(2) + "% | Remaining question = " + NumOfQues; errorSound.play();
                    // // Plays the error boing sound
                    errorSound.play();
                }
            }
        });
    }
    // this function plays when all the letters match.
    function winGame() {
        winsound.play(); // Play the win sound which is cris hardwick saying points.
        if (ez == false) {
            scoreKK = scoreKK + 20; //if it was to difficult it adds 20 points to your score
        } else {
            scoreKK = scoreKK + 10; // if it was easy it adds 10 points
        }

        NumOfQues = NumOfQues - 1;// subtract one from total number of question.
        // ask if the number of question is greater that 1 it set score.
        if (NumOfQues < 1) {

            console.log("less than 1");
            PercentTotal = (scoreKK / scoreTotal) * 100;
            document.getElementById("score").innerHTML = "Score = " + scoreKK + " | Percent Correct = " + PercentTotal+ " %  | Remaining questions = " + NumOfQues;
            document.getElementById("sent").style.textAlign = "center";
            document.getElementById("sent").innerHTML = '<font style="color:#00ff00; font-size:lem;"></br>Percent Correct</br></br>' + PercentTotal + '%</font>';
            document.getElementById("previous").innerHTML = "";
            document.getElementById("next").innerHTML = "";
        } else { // if the number of question is not greater that one do this.
            PercentTotal = (scoreKK / scoreTotal) * 100;
            console.log("greater or equal than 1 scoreKK:", scoreKK, "scoreTotal", scoreTotal, " PercentTotal",PercentTotal);
            document.getElementById("score").innerHTML = "Score = " + scoreKK + " | Percent Correct = " + PercentTotal+ "% | Remaining questions = " + NumOfQues;
            document.getElementById("sent").style.textAlign = "center";
            document.getElementById("sent").innerHTML = '<font styles ="color:#00ff00; font-size:lem:"></br>Correct +10<font';
            // drops all the letter down way from model frames
            // $('#letters li').each(function (i) {
            //     var $$ = $(this);
            //     setTimeout(function () {
            //         $$.animate({
            //             top: ' +=60px'
            //         });
            //     }, i * 300);
            // });
            // this is a timeout fuction for generating the next set of letters--set to three seconds
            setTimeout(function () {
                refreshGame();
                buildGame(++idx);
            }, 3000);

        }
    }

    // this fuction rotates that is called previously

    function rotate(el, angle) {
        $(el).css({
            '-webkit-transform': 'rotate (' + angle + 'deg) ',
            '-moz-transform': 'rotate (' + angle + 'deg) ',
            '-ms-transform': 'rotate (' + angle + 'deg) ',
            '-o-transform': 'rotate (' + angle + 'deg) ',
            'transform': 'rotate (' + angle + 'deg) '

        });
    }

    buildGame(idx);

});

















