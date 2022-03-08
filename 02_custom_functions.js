// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // You can determine global (random) parameters here
// Declare your variables here
const group_rules = _.sample([0, 1]);
const group_order = _.sample([0, 1])

// console.log("rule-related language: ", group_rules)
// console.log("non-random trials: ", group_order)

// Instructions
// 0: taken from Conayway & Kurtz, 2017
training_instructions_0 = "In this experiment, you will be shown examples of geometric images. Your job is to learn to tell whether each example belongs to the Alpha or Beta category. As you are shown each example, you will be asked to make a category judgment and then you will recieve feedback. At first you will have to guess, but you will gain experience as you go along. After you have completed your training, we will ask you a series of test questions about what you have learned."

generalization_instructions_0 = "For this part of the study, you will again choose the category you think each example belongs to. This time you will not receive feedback."

// 1: taken from Kurtz et al, 2013
training_instructions_1 = "In this experiment, you will be shown examples of geometric images. Your job is to learn a rule that allows you to tell whether each example belongs in the Alpha or Beta category. As you are shown each example, you will be asked to make a category judgment and then you will receive feedback. At first you will have to guess, but you will gain experience as you go along. Try your best to gain mastery of the Alpha and Beta categories."

// 1: original phrasing
generalization_instructions_1 = "For this part of the study, you will again apply the rule you learned to choose the category you think each example belongs to. This time you will not receive feedback."



/* Helper functions
*
*
*/

/* For generating multiple blocks of training trials */
const generate_blocks = function(blocks, ruleset) {
    cloner = function() {
        rnd_trials = _.shuffle(ruleset)
        return _.clone(rnd_trials)
    }

    trials   = _.times(blocks, cloner)
    // console.log("generate_blocks.trials: ", trials)
    flatnd    = _.flatten(trials)
    // shuffled = _.shuffle(flatd)

    return flatnd
};

/* for generating the 7x7 grid of experimental trials 
...or not
require('fs');
PFADE = fs.readdirSync('./stimuli-full/');

console.log(PFADE)

const generate_exp_trials = function() {
    const experimental_trials = {
        t1: [
            // CATEGORY A
            {
                picture: "stimuli-training/e13_1917-766.7.jpg",
                question: "",
                option1: 'A',
                option2: 'B',
                correct: 'A'
            }
        ]
    }
}
*/


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
hook_training = function(data, next) {
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

// lock response button of experimental trials
hook_experiment = function(data, next) {
    $('input[name=answer]').one('change', function(e) {

        const btn1 = document.querySelector('label[for="o1"]');
        const btn2 = document.querySelector('label[for="o2"]');
        const o1c = document.querySelector("#o1");
        const o2c = document.querySelector("#o2");

        if (e.target.id === "o1") {
            btn1.style.backgroundColor = "#1e1e1e40"; 
        } else {
            btn2.style.backgroundColor = "#1e1e1e40"; 
        }
        // console.log(e.target.value === data.correct && e.target.id === "o1")

        btn1.style.pointerEvents = "none";
        btn2.style.pointerEvents = "none";
    })
}

// Declare your hooks here


/* Generators for custom view templates, answer container elements and enable response functions
*
*
*/