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
    { img: 'play.png', color: '#666600', word: 'airleak', sound: 'sounds/airLeak' , wordSound: "words/airLeak"},
    { img: 'play.png', color: '#666600', word: 'airplantakeoff', sound: 'sounds/airPlanTakeOff' ,wordSound: "words/airPlanTakeOff"},
    { img: 'play.png', color: '#666600', word: 'amusement', sound: 'sounds/amusement' ,wordSound: "words/amusement"},
    { img: 'play.png', color: '#666600', word: 'anvilimpact', sound: 'sounds/anvilImpact' ,wordSound: "words/anvilImpact"},
    { img: 'play.png', color: '#666600', word: 'astronaut', sound: 'sounds/astronaut' ,wordSound: "words/astronaut"},
    { img: 'play.png', color: '#666600', word: 'axe', sound: 'sounds/axe' ,wordSound: "words/axe"},
    { img: 'play.png', color: '#666600', word: 'baby', sound: 'sounds/baby' ,wordSound: "words/baby"},
    { img: 'play.png', color: '#666600', word: 'ballonpop', sound: 'sounds/ballonPop' ,wordSound: "words/ballonPop"},
    { img: 'play.png', color: '#666600', word: 'bats', sound: 'sounds/bats' ,wordSound: "words/bats"},
    { img: 'play.png', color: '#666600', word: 'bear', sound: 'sounds/bear' ,wordSound: "words/bear"},
    { img: 'play.png', color: '#666600', word: 'beer', sound: 'sounds/beer' ,wordSound: "words/beer"},
    { img: 'play.png', color: '#666600', word: 'bluejay', sound: 'sounds/blueJay' ,wordSound: "words/blueJay"},
    { img: 'play.png', color: '#666600', word: 'bomb', sound: 'sounds/bomb' ,wordSound: "words/bomb"},
    { img: 'play.png', color: '#666600', word: 'boxing', sound: 'sounds/boxing' ,wordSound: "words/boxing"},
    { img: 'play.png', color: '#666600', word: 'campfire', sound: 'sounds/campFire' , wordSound: "words/campFire"},
    { img: 'play.png', color: '#666600', word: 'canary', sound: 'sounds/canary' , wordSound: "words/canary"},
    { img: 'play.png', color: '#666600', word: 'canopener', sound: 'sounds/canOpener' , wordSound: "words/canOpener"},
    { img: 'play.png', color: '#666600', word: 'cardoor', sound: 'sounds/carDoor' , wordSound: "words/carDoor"},
    { img: 'play.png', color: '#666600', word: 'cat', sound: 'sounds/cat', wordSound: "words/cat" },
    { img: 'play.png', color: '#666600', word: 'catMeow', sound: 'sounds/catMeow' , wordSound: "words/catMeow"},
    { img: 'play.png', color: '#666600', word: 'chainsaw', sound: 'sounds/chainSaw' , wordSound: "words/chainSaw"},
    { img: 'play.png', color: '#666600', word: 'chicks', sound: 'sounds/chicks' , wordSound: "words/chicks"},
    { img: 'play.png', color: '#666600', word: 'click', sound: 'sounds/click' , wordSound: "words/click"},
    { img: 'play.png', color: '#666600', word: 'clothesdryer', sound: 'sounds/clothesDryer' , wordSound: "words/clothesDryer"},
    { img: 'play.png', color: '#666600', word: 'congo', sound: 'sounds/congo' , wordSound: "words/congo"},
    { img: 'play.png', color: '#666600', word: 'watch', sound: 'sounds/watch' , wordSound: "words/watch"},
    { img: 'play.png', color: '#666600', word: 'cow', sound: 'sounds/cow' , wordSound: "words/cow"},
    { img: 'play.png', color: '#666600', word: 'coyotecall', sound: 'sounds/coyoteCall' , wordSound: "words/coyoteCall"},
    { img: 'play.png', color: '#666600', word: 'crickets', sound: 'sounds/crickets' , wordSound: "words/crickets"},
    { img: 'play.png', color: '#666600', word: 'crystal', sound: 'sounds/crystal' , wordSound: "words/crystal"},
    { img: 'play.png', color: '#666600', word: 'deskbell', sound: 'sounds/deskBell' , wordSound: "words/deskBell"},
    { img: 'play.png', color: '#666600', word: 'dice', sound: 'sounds/dice' , wordSound: "words/dice"},
    { img: 'play.png', color: '#666600', word: 'djscratching', sound: 'sounds/djScratching' , wordSound: "words/djScratching"},
    { img: 'play.png', color: '#666600', word: 'dog', sound: 'sounds/dog' , wordSound: "words/dog"},
    { img: 'play.png', color: '#666600', word: 'dogToy', sound: 'sounds/dogToy' , wordSound: "words/dogToy"},
    { img: 'play.png', color: '#666600', word: 'dolphin', sound: 'sounds/dolphin' , wordSound: "words/dolphin"},
    { img: 'play.png', color: '#666600', word: 'doorrustysound', sound: 'sounds/doorRustySound' , wordSound: "words/doorRustySound"},
    { img: 'play.png', color: '#666600', word: 'duckMallard', sound: 'sounds/duckMallard' , wordSound: "words/duckMallard"},
    { img: 'play.png', color: '#666600', word: 'earthquake', sound: 'sounds/earthquake' , wordSound: "words/earthquake"},
    { img: 'play.png', color: '#666600', word: 'elephant', sound: 'sounds/elephant' , wordSound: "words/elephant"},
    { img: 'play.png', color: '#666600', word: 'elk', sound: 'sounds/elk' , wordSound: "words/elk"},
    { img: 'play.png', color: '#666600', word: 'ferrari', sound: 'sounds/ferrari' , wordSound: "words/ferrari"},
    { img: 'play.png', color: '#666600', word: 'firetruck', sound: 'sounds/fireTruck', wordSound: "words/fireTruck" },
    { img: 'play.png', color: '#666600', word: 'flock', sound: 'sounds/flock', wordSound: "words/flock" },
    { img: 'play.png', color: '#666600', word: 'forklift', sound: 'sounds/forkLift' , wordSound: "words/forkLift"},
    { img: 'play.png', color: '#666600', word: 'frogs', sound: 'sounds/frogs', wordSound: "words/frogs" },
    { img: 'play.png', color: '#666600', word: 'geese', sound: 'sounds/geese' , wordSound: "words/geese"},
    { img: 'play.png', color: '#666600', word: 'glasspouring', sound: 'sounds/glassPouring' , wordSound: "words/glassPouring"},
    { img: 'play.png', color: '#666600', word: 'goat', sound: 'sounds/goat' , wordSound: "words/goat"},
    { img: 'play.png', color: '#666600', word: 'hairdryer', sound: 'sounds/hairDryer', wordSound: "words/hairDryer" },
    { img: 'play.png', color: '#666600', word: 'heartbeat', sound: 'sounds/heartBeat', wordSound: "words/heartBeat" },
    { img: 'play.png', color: '#666600', word: 'helicopter', sound: 'sounds/helicopter' , wordSound: "words/helicopter"},
    { img: 'play.png', color: '#666600', word: 'hippos', sound: 'sounds/hippos' , wordSound: "words/hippos"},
    { img: 'play.png', color: '#666600', word: 'horse', sound: 'sounds/horse' , wordSound: "words/horse"},
    { img: 'play.png', color: '#666600', word: 'humpbackwhale', sound: 'sounds/humpbackWhale' , wordSound: "words/humpbackWhale"},
    { img: 'play.png', color: '#666600', word: 'hyenalaugh', sound: 'sounds/hyenaLaugh' , wordSound: "words/hyenaLaugh"},
    { img: 'play.png', color: '#666600', word: 'icecube', sound: 'sounds/iceCube' , wordSound: "words/iceCube"},
    { img: 'play.png', color: '#666600', word: 'iceskating', sound: 'sounds/iceSkating' , wordSound: "words/iceSkating"},
    { img: 'play.png', color: '#666600', word: 'ilovedaddy', sound: 'sounds/iLoveDaddy' , wordSound: "words/iLoveDaddy"},
    { img: 'play.png', color: '#666600', word: 'jackHammer', sound: 'sounds/jackHammer' , wordSound: "words/jackHammer"},
    { img: 'play.png', color: '#666600', word: 'jingle', sound: 'sounds/jingle' , wordSound: "words/jingle"},
    { img: 'play.png', color: '#666600', word: 'kissing', sound: 'sounds/kissing' , wordSound: "words/kissing"},
    { img: 'play.png', color: '#666600', word: 'lightbulb', sound: 'sounds/lightbulb' , wordSound: "words/lightbulb"},
    { img: 'play.png', color: '#666600', word: 'lion', sound: 'sounds/lion' , wordSound: "words/lion"},
    { img: 'play.png', color: '#666600', word: 'loon', sound: 'sounds/loon' , wordSound: "words/loon"},
    { img: 'play.png', color: '#666600', word: 'microwave', sound: 'sounds/microWave' , wordSound: "words/microWave"},
    { img: 'play.png', color: '#666600', word: 'orca', sound: 'sounds/orca' , wordSound: "words/orca"},
    { img: 'play.png', color: '#666600', word: 'paper', sound: 'sounds/paper' , wordSound: "words/paper"},
    { img: 'play.png', color: '#666600', word: 'pelican', sound: 'sounds/pelican' , wordSound: "words/pelican"},
    { img: 'play.png', color: '#666600', word: 'pigsound', sound: 'sounds/pigSound' , wordSound: "words/pigSound"},
    { img: 'play.png', color: '#666600', word: 'pingpong', sound: 'sounds/pingPong' , wordSound: "words/pingPong"},
    { img: 'play.png', color: '#666600', word: 'policesiren', sound: 'sounds/policeSiren' , wordSound: "words/policeSiren"},
    { img: 'play.png', color: '#666600', word: 'radio', sound: 'sounds/radio' , wordSound: "words/radio"},
    { img: 'play.png', color: '#666600', word: 'rex', sound: 'sounds/rex' , wordSound: "words/rex"},
    { img: 'play.png', color: '#666600', word: 'rolldice', sound: 'sounds/rollDice' , wordSound: "words/rollDice"},
    { img: 'play.png', color: '#666600', word: 'rooster', sound: 'sounds/rooster' , wordSound: "words/rooster"},
    { img: 'play.png', color: '#666600', word: 'seagullcall', sound: 'sounds/seagullCall' , wordSound: "words/seagullCall"},
    { img: 'play.png', color: '#666600', word: 'sewingmachine', sound: 'sounds/sewingMachine' , wordSound: "words/sewingMachine"},
    { img: 'play.png', color: '#666600', word: 'skorpian', sound: 'sounds/skorpian' , wordSound: "words/skorpian"},
    { img: 'play.png', color: '#666600', word: 'snake', sound: 'sounds/snake' , wordSound: "words/snake"},
    { img: 'play.png', color: '#666600', word: 'splat', sound: 'sounds/splat' , wordSound: "words/splat"},
    { img: 'play.png', color: '#666600', word: 'spooky', sound: 'sounds/spooky' , wordSound: "words/spooky"},
    { img: 'play.png', color: '#666600', word: 'stampede', sound: 'sounds/stampede' , wordSound: "words/stampede"},
    { img: 'play.png', color: '#666600', word: 'stantaclause', sound: 'sounds/stantaClause' , wordSound: "words/stantaClause"},
    { img: 'play.png', color: '#666600', word: 'staplegun', sound: 'sounds/stapleGun' , wordSound: "words/stapleGun"},
    { img: 'play.png', color: '#666600', word: 'thunderstorm', sound: 'sounds/thunderStorm' , wordSound: "words/thunderStorm"},
    { img: 'play.png', color: '#666600', word: 'trafficejam', sound: 'sounds/trafficeJam' , wordSound: "words/trafficeJam"},
    { img: 'play.png', color: '#666600', word: 'tundraswans', sound: 'sounds/tundraSwans' , wordSound: "words/tundraSwans"},
    { img: 'play.png', color: '#666600', word: 'turkey', sound: 'sounds/turkey' , wordSound: "words/turkey"},
    { img: 'play.png', color: '#666600', word: 'whistle', sound: 'sounds/whistle' , wordSound: "words/whistle"},
    { img: 'play.png', color: '#666600', word: 'wolf', sound: 'sounds/wolf' , wordSound: "words/wolf"},
    { img: 'play.png', color: '#666600', word: 'woodpcker', sound: 'sounds/woodPecker' , wordSound: "words/woodPecker"},
    { img: 'play.png', color: '#666600', word: 'wrapper', sound: 'sounds/wrapper' , wordSound: "words/wrapper"},
    { img: 'play.png', color: '#666600', word: 'Zebracall', sound: 'sounds/ZebraCall' , wordSound: "words/ZebraCall"},
    { img: 'play.png', color: '#666600', word: 'alligator', sound: 'sounds/alligator' , wordSound: "words/alligator"},
    { img: 'play.png', color: '#666600', word: 'fish', sound: 'sounds/fish' , wordSound: "words/fish"},
    { img: 'play.png', color: '#666600', word: 'marbles', sound: 'sounds/marbles', wordSound: "words/marbles" },
    { img: 'play.png', color: '#666600', word: 'motorcycle', sound: 'sounds/motorCycle' , wordSound: "words/motorCycle"},
    { img: 'play.png', color: '#666600', word: 'redalert', sound: 'sounds/redAlert' , wordSound: "words/redAlert"},
    { img: 'play.png', color: '#666600', word: 'reverse', sound: 'sounds/reverse' , wordSound: "words/reverse"},
    { img: 'play.png', color: '#666600', word: 'seashorse', sound: 'sounds/seashorse' , wordSound: "words/seashorse"},
];
// the array for the program. //question?
var games = questions.sort(function () { return Math.random() < 0.5 ? -1 : 1 });

var winsound = new buzz.sound('sounds/winsound', {
    formats: ["mp3"]
}).setVolume(0.95),
    errorSound = new buzz.sound('sounds/error', {
        formats: ["mp3"]
    }),
    alphabetSounds = {},
    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''),
    scoreKK = 0, // this variable for scoreing
    ez = true,// this is the variable used to dertemine the level -- easy or hard
    scoreK, // varible for scoring
    gameSound,
    gameWord;
    
    var NumOfQues = games.length; // variable for the number of spelling words 
var scoreTotal = NumOfQues * 10;// variable for raw score. each answer is worth 10 point
var PercentTotal;// variable for determine the percent score.

for (var i in alphabet) {
    var letter = alphabet[i];
    alphabetSounds[letter] = new buzz.sound('sounds/kid/' + letter, {
        formats: ["mp3"]
    }).setVolume(0.95);// this loads the alphabet array into the letter variable
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
        gameWord = new buzz.sound(game.wordSound,{
            formats:["mp3"]
        })


        gameSound.setVolume(0.9);
        gameWord.setVolume(100);
        gameWord.bind("ended", function(){
            gameSound.load().play(); 
        })

        gameWord.load().play();
        // gameSound.load().play();
        // setTimeout
        // setTimeout(function(){
        //     gameSound.load().play();
        // }, gameWord.getDuration() *10000);


        // while( ! gameSound.isEnded() ){
        // }

        // if( gameSound.isEnded() ){
        //      console.log("sound has ended") 
        //     }else{ console.log("it has not ended")}

        // let myG = new buzz.group([gameWord, gameSound]);
        // buzz.all().play();

        // setTimeout(() => {
        //      gameSound.load().play()
        // }, 3000);

        // let p = new Promise(function(resolve , reject){
            
        //     setTimeout(()=>{gameWord.load().play()}, 3000)
        //         resolve();
        //     });
        //     p.then(function(){
        //             gameSound.load().play();
        //         })
                
        // play();
        // async function play(){
        //     await gameWord.load().play();
        //     await gameSound.load().play()
        // }
        
        

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
        let toShow = ez?"":"hard";
        for (var i in modelLetters) {
            var letter = modelLetters[i];
            $models.append('<li  class="inLet"><div class="letFont '+toShow+' ">' + letter + '</div></li>');
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
            $letters.append('<li class="draggable letPlace  ">' + shuffled[i] + '</li>');
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

















