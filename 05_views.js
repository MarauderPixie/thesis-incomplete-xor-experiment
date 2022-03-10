// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  title: 'Willkommen!',
  text: `<b>Dies ist nur ein Prototyp!</b>
  <br />
  <br />
  Auf der nächsten Seite folgen einige Instruktionen, danach folgen einige Beispiel-Trials und am Ende werden noch demographische Daten abgefragt. 
  <br />
  <br />
  Ein einsatzbereites Experiment würde zB eine Einwilligungserklärung enthalten und/oder eine Auswahlmöglichkeit für deutsche/englische Sprache und/oder ähnliche weitere Dinge.`,
  buttonText: 'zu den Anweisungen'
});

// training instructions
const instructions_training_bla = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions-training',
  title: 'Einleitung',
  text: instructions_training,
  /* `In dieser Studie werden Ihnen verschiedene Objekte präsentiert. Jedes Objekt gehört zu einer von zwei möglichen Kategorien, <b>A</b> oder <b>B</b>. Ihre Aufgabe in dieser Studie ist es, zu lernen, zu welcher Kategorie die Objekte gehören. Dies wird in mehreren Durchgängen passieren. In jedem Durchgang wird eines der Objekte angezeigt, und Sie wählen eine der zwei Kategorien, <b>A</b> oder <b>B</b>, durch einen Klick auf das entsprechende Antwortfeld. Nach jeder Antwort bekommen Sie eine Rückmeldung darüber, ob Ihre Wahl richtig oder falsch war. Am Anfang müssen Sie raten, letztendlich aber werden Sie lernen, wie man die Objekte richtig kategorisiert.
  <br />
  <br />
  Es gibt insgesamt 8 Objekte, die jeweils drei Eigenschaften mit jeweils zwei Ausprägungen haben. Diese Eigenschaften sind:
  <br />- <b>Form</b> (<i>Quadrat</i> oder <i>Kreis</i>)
  <br />- <b>Farbe</b> (<i>weiß</i> oder <i>schwarz</i>) und
  <br />- <b>Größe</b> (<i>groß</i> oder <i>klein</i>)
  <br />  
  <br />
  In einem "fertigen" Experiment würde nun zunächst jedes Objekt einmal kurz angezeigt - in dieser Version fangen wir jedoch direkt mit der Kategorisierung an.`, */
  buttonText: 'mit dem Experiment beginnen'
});

const instructions_generalization_bla = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions-generalization',
  title: 'idk yet',
  text: instructions_generalization,
  buttonText: 'Fortfahren'
});


// demographics
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Zusätzliche Informationen',
  text: 'Die Beantwortung der folgenden Fragen ist zwar vollkommen optional, hilft uns aber bei der Analyse der Daten.',

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  age_question: 'Alter',
  gender_question: 'Geschlecht',
  gender_male: 'männlich',
  gender_female: 'weiblich',
  gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  comments_question: 'Weitere Anmerkungen',

  buttonText: 'Daten speichern und <br>Experiment beenden'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Vielen Dank für die Teilnahme an diesem Experiment!',
  prolificConfirmText: 'Press the button'
});



/** trial (magpie's Trial Type Views) below */
if (group_order == 0) {
  training_structure = train_order_0;
  train_view_name = "training - random";
} else {
  training_structure = train_order_1;
  train_view_name = "training - ordered";
}


// initialize training and generalization views
const train_view = magpieViews.view_generator("forced_choice", {
  trials: 12, // train_order_1.length,
  name: train_view_name,
  data: training_structure,
  hook: {
    after_response_enabled: hook_training
  }
}, {
  // custom generator functions
  // stimulus_container_generator: stimulus_container_generators.basic_stimulus,
  answer_container_generator: custom_answer_generator.categorisation,
  handle_response_function: custom_response_handlers.categorisation
});


const experiment_view = magpieViews.view_generator("forced_choice", {
  trials: 16, // shuffled_experimental_trials.length,
  name: 'experiment',
  data: shuffled_experimental_trials,
  hook: {
    after_response_enabled: hook_experiment
  }
}, {
  // custom generator functions
  // stimulus_container_generator: stimulus_container_generators.basic_stimulus,
  answer_container_generator: custom_answer_generator.categorisation,
  handle_response_function: custom_response_handlers.categorisation
});





/*
These are from prior versions; rule2 is old naming - should probably to experimental pahse

const rule2 = magpieViews.view_generator("forced_choice", {
  trials: training_xor.length,
  // name should be identical to the variable name
  name: 'xor',
  data: training_xor,
  // you can add custom functions at different stages through a view's life cycle
  hook: {
    after_response_enabled: check_category_response
  }
}, {
  // custom generator functions
  // stimulus_container_generator: stimulus_container_generators.basic_stimulus,
  answer_container_generator: custom_answer_generator.categorisation,
  handle_response_function: custom_response_handlers.categorisation
});


const slider_ratings = magpieViews.view_generator("slider_rating", {
  trials: trial_info.sliders.length,
  // name should be identical to the variable name
  name: 'slider_ratings',
  data: trial_info.sliders
  // hook: {}
},{
  stimulus_container_generator: function(config, CT) {return `<div class='magpie-view'></div>`;},
  answer_container_generator: custom_answer_generator.slider_ratings,
  handle_response_function: custom_response_handlers.slider_ratings
});
*/