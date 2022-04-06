<template>
  <div class="forced_choice">
    <div class="options">
      <div
        class="option"
        v-for="option in options"
        :key="option"
        :style="{ pointerEvents: compPointer }" 
        @click="onOptionClick(option); chosen = option"
      >
        <div 
          :id="option" 
          :style="{ backgroundColor: bgClick(option, correct, chosen) }"> 
            {{ option }} 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * Have the participant choose between multiple options.
 **/
export default {
  name: 'XorTraining',
  props: { 
    /**
     * The possible options to choose from
     */
    options: {
      type: Array,
      required: true
    },
    correct: {
      type: String,
      required: true
    }
  },
  data() {
      return {
        backgroundColor: '',
        pointerEvents: 'auto',
        chosen: null
      };
    },
  computed: {
    compPointer: function() {
      return this.pointerEvents;
    }
  },
  methods: {
    onOptionClick(option) {
      /**
       * Change event with the chosen option. Useful in combination with `response.sync`
       */
      this.$emit('update:response', option);
      this.pointerEvents = 'none';
      // this.backgroundColor = 'blue';
    },
    bgClick(option, correct, chosen) {
      // gelb: '#ffd633';
      // blau: '#3333ff';
      // console.log("option:", option, "\ncorrect:", correct, "\nchosen:", chosen)
      // console.log(option === chosen && chosen === correct)

      var coleur = '#1e1e1e00';

      if (chosen == null) {
        coleur == '#1e1e1e00';
      } else if (option == chosen && correct != chosen) {
        coleur = '#3333ff';
      } else if (option != chosen && correct != chosen) {
        coleur = '#ffd633';
      } else if (option == chosen && correct == chosen) {
        coleur = '#ffd633';
      }
      // old logic for testing:
      // (chosen === option ? '#ffd633' : '#1e1e1e00');

      return this.backgroundColor = coleur;
    }
  }
};
</script>

<style scoped>
.option {
  background-color: #1e1e1e10;
  border: none;
  border-radius: 2px;
  color: #1e1e1e;
  cursor: pointer;
  display: inline-block;
  font-family: 'Lato', 'Noto Sans', sans-serif;
  font-size: 40px;
  line-height: 90px;
  height: 90px;
  width: 100px;
  font-weight: 700;
  letter-spacing: 0.9px;
  margin: 0 100px;
  outline: none;
  text-transform: uppercase;
}

.option:hover {
  background-color: #1e1e1e20;
}
</style>
