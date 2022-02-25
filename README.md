# About

This experiment tries to replicate and expand on the results of Kurtz (2013) and Conaway & Kurtz (2017).  
Therefore, it uses the stimuli available on the repository of the original paper - [which can be found here](https://github.com/nolanbconaway/xor-pbr-2017).


## Classic Category Learning Experiment

This repository contains a prototypical, binary cl-experiment - implemented in _magpie.

Basically, it's an adaptation of _magpie's default "2-alternatives forced-choice" template with the following changes:

- trials won't continue automatically, but a 'next' button will show after a choice has been made
- after choosing, the choice will be 'locked in'; that is, participants won't be able to change their decision
- a feedback message will inform participants if their choice was correct and choice-buttons get colored respectively


## Try it yourself

You can either [follow this link](https://cal-catlearn-protoype.netlify.app/) to an online version of the experiment or, to run (and eventually customize) it locally, follow these steps - assuming you already have `npm` installed:

1. clone the repo
2. open a terminal in the folder you cloned it to
3. run `npm install` 
4. open `index.html` in your browser