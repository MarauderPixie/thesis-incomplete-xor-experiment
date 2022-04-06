<template>
  <Screen v-bind="$attrs" title="Additional information">
    <Slide>
      <p>
        Answering the following questions is optional, but your answers will
        help us analyze our results.
      </p>
      <div style="text-align: left; width: 400px; margin: 0 auto">
        <p v-if="age">
          <label>
            Your Age: 
            <input
              v-model="$magpie.measurements.age"
              type="number"
              max="110"
              min="18" />
          </label>
        </p>
        <p v-if="gender">
          <label>
            Gender: <DropdownInput
                      :options="['', 'male', 'female', 'other']"
                      :response.sync="$magpie.measurements.gender" />
          </label>
        </p>
        <p v-if="education">
          <label
            >Level of Education
            <DropdownInput
              :options="[
                '',
                'Graduated High-school',
                'Graduated College',
                'Higher degree'
              ]"
              :response.sync="$magpie.measurements.education"
            />
          </label>
        </p>
        <p v-if="languages">
          <label>
            Native languages:
            <input
              v-model="$magpie.measurements.languages"
              type="text"
              placeholder="Java, C++, ..."
            />
          </label>
        </p>
        <p>
          <label>
            Did you participate in a similar experiment before?
            <DropdownInput
              :options="['', 'yes', 'no']"
              :response.sync="$magpie.measurements.familiar" />
          </label>
        </p>
        <!-- @slot You can add additional questions here, storing data in measurements
           @binding {object} measurements a temporary object to store your responses before adding them to the results
           -->
        <slot :measurements="$magpie.measurements" />
        <p>
          Please try to tell us how you categorized the shapes:
          <TextareaInput
            :response.sync="$magpie.measurements.strategy"
          />
        </p>
        <hr>
        <p>
          If you have any furter comments, feel free to tell us:
          <TextareaInput
            :response.sync="$magpie.measurements.comments"
          />
        </p>
      </div>

      <p>
        By clicking this button, you will exit fullscreen mode and submit your results. 
        <button
          @click="
            $magpie.addExpData($magpie.measurements);
            $magpie.nextScreen();
            fsExit();
          "
        >
          Finish Experiment
        </button>
      </p>
    </Slide>
  </Screen>
</template>

<script>
export default {
  name: 'Demographics',
  props: {
    /**
     * Whether to ask for participant age
     */
    age: {
      type: Boolean,
      default: true
    },
    /**
     * Whether to ask for participant gender
     */
    gender: {
      type: Boolean,
      default: true
    },
    /**
     * Whether to ask for participant education
     */
    education: {
      type: Boolean,
      default: true
    },
    /**
     * Whether to ask for participant mother tongues
     */
    languages: {
      type: Boolean,
      default: true
    },
    /**
     * Whether to ask for comments
     */
    comments: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    fsExit: function() {
      document.exitFullscreen();
    }
  }
};
</script>
<style>
  textarea {
    width: 400px;
    height: 72px;
    border-radius: 2px !important;
    padding: 7px 10px !important;
  }
</style>
