// In this file you can specify the trial data for your experiment


const training_trials = {
    t1: [
        // CATEGORY A
        {
            picture: "stimuli-training/e13_1917-766.7.jpg",
            question: "",
            option1: 'A',
            option2: 'B',
            correct: 'A'
        },{
            picture: "stimuli-training/e07_1500-900.jpg",
            question: "",
            option1: 'A',
            option2: 'B',
            correct: 'A'
        },
        // CATEGORY B
        {
            question: "",
            picture: "stimuli-training/e41_3583-766.7.jpg",
            option1: "A",
            option2: "B",
            correct: "B"
        },{
            question: "",
            picture: "stimuli-training/e49_4000-900.jpg",
            option1: "A",
            option2: "B",
            correct: "B"
        }
    ],
    t2: [
        // CATEGORY A
        {
            question: "",
            picture: "stimuli-training/e13_1917-766.7.jpg",
            option1: 'A',
            option2: 'B',
            correct: 'A',
        },{
            question: "",
            picture: "stimuli-training/e07_1500-900.jpg",
            option1: 'A',
            option2: 'B',
            correct: 'A',
        },{
            question: "",
            picture: "stimuli-training/e13_1917-766.7.jpg",
            option1: 'A',
            option2: 'B',
            correct: 'A',
        },{
            question: "",
            picture: "stimuli-training/e07_1500-900.jpg",
            option1: 'A',
            option2: 'B',
            correct: 'A',
        },
        // CATEGORY B
        {
            question: "",
            picture: "stimuli-training/e41_3583-766.7.jpg",
            option1: 'A',
            option2: 'B',
            correct: 'B',
        },{
            question: "",
            picture: "stimuli-training/e49_4000-900.jpg",
            option1: 'A',
            option2: 'B',
            correct: 'B',
        },
        {
            question: "",
            picture: "stimuli-training/e01_1500-100.jpg",
            option1: "A",
            option2: "B",
            correct: "B"
        },
        {
            question: "",
            picture: "stimuli-training/e09_1917-233.3.jpg",
            option1: "A",
            option2: "B",
            correct: "B"
        }
    ] /*,
    sliders: [
        {
            // QUD: "Wie sehr haben Sie Ihre Entscheidungen von bestimmten Eigenschaften abhängig gemacht?",
            QUD: `<b>Custom Sliders Showcase</b><br><br>Wir würden nun noch gerne wissen, wie wichtig jede Objekteigenschaft für Sie war, um sich für eine Kategorie zu entscheiden. Bitte verschieben sie die Schieberegler, um anzugeben, wie viel Aufmerksamkeit Sie der jeweiligen Eigenschaft dafür geschenkt haben.`,
            vorher: "Bevor sich die Kategorien geändert haben:",
            nachher: "Nachdem sich die Kategorien geändert haben:",
            prop1: "Farbe (schwarz / weiß)",
            prop2: "Größe (groß / klein)",
            prop3: "Form (Quadrat / Kreis)",
            optionLeft: "unwichtig",
            optionRight: "wichtig"
        }
    ] */
};


// UNORDERED
train_order_0 = generate_blocks(12, training_trials.t2)


// ORDERED
ord1 = generate_blocks(4, training_trials.t1)
ord2 = generate_blocks(10, training_trials.t2)
train_order_1 = _.concat(ord1, ord2)


// testing
// console.log("unordered: ", train_order_0)



// Experimental trials - hard & hand coded...
const experimental_trials = {
    all: [
        {
            picture: "stimuli-full/e01_1500-100.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e02_1500-233.3.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e03_1500-366.7.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e04_1500-500.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e05_1500-633.3.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e06_1500-766.7.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e07_1500-900.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e08_1917-100.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e09_1917-233.3.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e10_1917-366.7.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e11_1917-500.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e12_1917-633.3.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e13_1917-766.7.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e14_1917-900.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e15_2333-100.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e16_2333-233.3.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e17_2333-366.7.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e18_2333-500.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e19_2333-633.3.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e20_2333-766.7.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e21_2333-900.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e22_2750-100.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e23_2750-233.3.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e24_2750-366.7.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e25_2750-500.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e26_2750-633.3.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e27_2750-766.7.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e28_2750-900.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e29_3167-100.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e30_3167-233.3.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e31_3167-366.7.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e32_3167-500.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e33_3167-633.3.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e34_3167-766.7.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e35_3167-900.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e36_3583-100.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e37_3583-233.3.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e38_3583-366.7.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e39_3583-500.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e40_3583-633.3.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e41_3583-766.7.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e42_3583-900.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e43_4000-100.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e44_4000-233.3.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e45_4000-366.7.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e46_4000-500.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e47_4000-633.3.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e48_4000-766.7.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        },{
            picture: "stimuli-full/e49_4000-900.jpg",
            question: "",
            option1: 'A',
            option2: 'B'
        }
    ]
}

shuffled_experimental_trials = _.shuffle(experimental_trials.all)