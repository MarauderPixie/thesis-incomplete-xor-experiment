// In this file you can specify the trial data for your experiment


const trial_info = {
    simple: [
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
    xor: [
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
        },{
            question: "",
            picture: "stimuli-training/e13_1917-766.7.jpg",
            option1: "A",
            option2: "B",
            correct: "A"
        },{
            question: "",
            picture: "stimuli-training/e09_1917-233.3.jpg",
            option1: "A",
            option2: "B",
            correct: "B"
        },{
            question: "",
            picture: "stimuli-training/e07_1500-900.jpg",
            option1: "A",
            option2: "B",
            correct: "A"
        }        
    ],
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
    ]
};

training_simple = generate_trials(8, trial_info.simple)
training_xor = generate_trials(8, trial_info.xor)