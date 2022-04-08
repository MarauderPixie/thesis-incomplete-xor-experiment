<template>
  <Experiment title="Universität Osnabrück - IKW"
              :image-assets="pictures">

    <ConnectInteractiveScreen :title="'Just a second, please.'">
      <p>We are preparing the last few steps to carry out the Experiment.</p>
      <br />
      <div class="bouncy"></div>
      <br />
      <p>Thanks for your patience!</p>
      
    </ConnectInteractiveScreen> 
    
    <!-- <Screen>
      <p>Dropping in to see what condition this condition is in:
      <br />
      <b>Variant-Nr.: {{ thisCond() }}</b></p>

      <p>Chain-Maker, Space Lord, Mother, Mother:
      <br />
      <b>Chain-Nr.: {{ thisChain() }}</b></p>

      <p>
          <label
            >Gender
            <DropdownInput
              :options="['', 'male', 'female', 'other']"
              :response.sync="$magpie.measurements.gender"
            />
          </label>
        </p>
      
      <button @click="$magpie.saveAndNextScreen();">
        Next
      </button>
    </Screen> -->
    

    <!-- INSTRUCTIONS -->
    <InstructionScreen :title="'Welcome'">
      Welcome and thank you a lot for taking part in our research!
      <br /> <br />
      We like to remind you that your participation is completely anonymous and voluntary. You may choose to quit the experiment at any moment - simply close the browser tab/window in that case. No data will be stored if you do so. Data storage and submission will only happen at the end of the experiment.
      <br /> <br />
      This study aims to add to and improve upon the understanding of how humans learn and perform classification tasks. The whole experiment will take approximately 10 minutes to complete. 
      <button @click="fsEnter()">Please enable fullscreen mode by clicking this button.</button>
      
      On the next screen you will receive instructions for the experiment. Once again, thanks a lot!
      <br /> <br />
      To proceed, click the 'Next' button:
    </InstructionScreen> 

    <InstructionScreen :title="'Introduction'"> 
      <!-- no rule-related language -->
      <div v-if="thisCond() == 1 || thisCond() == 2">
          <p>In this experiment, you will be shown examples of geometric images.
          Your job is to learn to tell whether each example belongs to the <b>A</b> or <b>B</b> category.</p>
          
          <p>As you are shown each example, you will be asked to make a category judgment and then you will recieve feedback.
          At first you will have to guess, but you will gain experience as you go along. </p>
          
          <p>After you have completed your training, we will ask you a series of test questions about what you have learned.</p>
      </div>

      <!-- rule-related language -->
      <div v-else>
          <p>In this experiment, you will be shown examples of geometric images.
          Your job is to learn a rule that allows you to tell whether each example belongs to the <b>A</b> or <b>B</b> category.</p>

          <p>As you are shown each example, you will be asked to make a category judgment and then you will recieve feedback.
          At first you will have to guess, but you will gain experience as you go along. </p>
          
          <p>Try your best to gain mastery of the A and B categories.</p>
      </div>
    </InstructionScreen>


    <!-- TRAINING TRIALS -->
    <Screen 
      v-for="(trial, i) in (thisCond() == 1 || thisCond() == 3 ? train_random : train_sorted)"
      :key="i">

        <Record :data="trial" />  
        <Record :data="grpIdent(coin)" :global=true />
        <img :src="trial.image" /> 
              
        <!-- evtl. muss ich mir "einfach" (haha) eigene buttons bauen -->
        <XorTraining
            :response.sync= "$magpie.measurements.response"
            :options="['A', 'B']"
            :correct="(coin === 'heads' ? trial.correct1 : trial.correct2)"
            :feedbackTime=-1 /> 
            
        <p v-if="$magpie.measurements.response">
            <span v-if="$magpie.measurements.response === (coin === 'heads' ? trial.correct1 : trial.correct2)"><b>Correct!</b></span> 
            <span v-else><b>Wrong!</b></span>
            <button @click= "$magpie.saveAndNextScreen();">Next</button>
        </p>
    </Screen>
    

    <InstructionScreen>
      <!-- no rule-related language -->
      <div v-if="thisCond() == 1 || thisCond() == 2">
          <p>For this part of the study, you will again choose the category you think each example belongs to. <br />
          This time you will not receive feedback.</p>
      </div>

      <!-- rule-related language -->
      <div v-else>
          <p>For this part of the study, you will again apply the rule you learned to choose the category you think each example belongs to. <br />
          This time you will not receive feedback.</p>
      </div>
    </InstructionScreen>


    <!-- GENERALIZATION TRIALS -->
    <Screen 
      v-for="(trial, i) in generalization"
      :key="i">

        <Record :data="trial" />
        <img :src="trial.image" /> 

        <XorGeneralization
            :response.sync= "$magpie.measurements.response"
            :options="['A', 'B']"
            :feedbackTime=-1 /> 

        <p v-if="$magpie.measurements.response">
            <button @click= "$magpie.saveAndNextScreen();">Next</button>
        </p>
    </Screen>

    <!-- Demographics & result submission -->
    <Demographics :education=false :gender=false />

    <SubmitResultsScreen />

  </Experiment>
</template>


<script>
  import _ from 'lodash'
  import XorTraining from './XorTraining'
  import XorGeneralization from './XorGeneralization'
  import Demographics from './Demographics'
  import raw_training_random from '../trials/training-full.csv'
  import raw_training_sorted from '../trials/training-simple.csv'
  import raw_generalization from '../trials/generalization.csv'

  
  // properly shuffled full-random data
  var rnd = []
  for (let i = 0; i < 12; i++) {
    rnd[i] = _.shuffle(raw_training_random);
  }
  const training_order_0 = rnd.flat()

  // properly shuffled simple-rule-first data
  var ord_start = []
  var ord_end = []
  for (let i = 0; i < 4; i++) {
    ord_start[i] = _.shuffle(raw_training_sorted);
  }
  for (let i = 0; i < 10; i++) {
    ord_end[i] = _.shuffle(raw_training_random);
  }

  const training_order_1 = [ord_start.flat(), ord_end.flat()].flat()
  

  /* debugging & validation area */
  /* for (let i in repeated) {
    console.log("image nr.", i, "name:", repeated[i].image);
  } */

  export default {
    name: 'App',
    components: { XorTraining, XorGeneralization, Demographics },
    data() {
      return {
        pictures: raw_generalization.map(task => task.image),
        train_random: training_order_0,
        train_sorted: training_order_1,
        generalization: _.shuffle(raw_generalization),
        coin: _.sample(['heads', 'tails'])
      }
    },
    methods: {
      thisChain: function() {
        var chain = this.$magpie.socket.chain
        return chain
      },
      thisCond: function() {
        var condition = this.$magpie.socket.variant
        // console.log("This condition:", condition)
        return condition
      },
      grpIdent: function(coin) {
        const arr = {
          condition: this.$magpie.socket.variant,
          assignment: (coin === 'heads' ? 'correct1' : 'correct2')
        };
        const obj = Object.assign({}, arr);
        return obj
      },
      fsEnter: function() {
        document.documentElement.requestFullscreen();
      }
    }
  };
</script>
<style scoped>
.bouncy {
  width: 20px;
  height: 20px;
  background-color: yellow;
  position: relative;
  animation-name: moove;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
}

@keyframes moove {
  0%    {background-color:#5187ba; left:168px;}
  50%   {background-color:#2696ff; left:668px; transform: rotate(300deg);}
  100%  {background-color:#5187ba; left:168px;}
}
</style>