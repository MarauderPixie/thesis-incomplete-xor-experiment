// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // You can determine global (random) parameters here
// Declare your variables here



/* Helper functions
*
*
*/

/* For generating multiple blocks of trials */
const generate_trials = function(n, ruleset) {
    cloner = function() {
        rnd_trials = _.shuffle(ruleset)
        return _.clone(rnd_trials)
    }

    n_blocks = n / ruleset.length

    trials   = _.times(n_blocks, cloner)
    console.log(trials)
    flatd    = _.flatten(trials)
    shuffled = _.shuffle(flatd)

    return shuffled
};


/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};
// Declare your helper functions here



/* Hooks  
*
*
*/

// Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};

// compares the chosen answer to the value of `option1`
check_category_response = function(data, next) {
    $('input[name=answer]').one('change', function(e) {

        const btn1 = document.querySelector('label[for="o1"]');
        const btn2 = document.querySelector('label[for="o2"]');
        const o1c = document.querySelector("#o1");
        const o2c = document.querySelector("#o2");

        // wenn richtig kategorisiert: färbe knopf gelb
        // wenn falsch: färbe blau und anderen knopf gelb
        if (e.target.value === data.correct && e.target.id === "o1") {
            btn1.style.backgroundColor = "#ffd633"; // gelb 
        } else if (e.target.value === data.correct && e.target.id === "o2") {
            btn2.style.backgroundColor = "#ffd633";
        } else if (e.target.value != data.correct && e.target.id === "o1") {
            btn1.style.backgroundColor = "#3333ff"; 
            btn2.style.backgroundColor = "#ffd633";
        } else {
            btn2.style.backgroundColor = "#3333ff"; // blau
            btn1.style.backgroundColor = "#ffd633";
        }

        // console.log(e.target.value === data.correct && e.target.id === "o1")

        if (e.target.value === data.correct) {
            $(".magpie-view-answer-container").append(`<b style="font-size:x-large;">Korrekt!</b>`);
        } else {
            $(".magpie-view-answer-container").append(`<b style="font-size:x-large;">Falsch!</b>`);
        };  

        btn1.style.pointerEvents = "none";
        btn2.style.pointerEvents = "none";
    })
}


// Declare your hooks here


/* Generators for custom view templates, answer container elements and enable response functions
*
*
*/