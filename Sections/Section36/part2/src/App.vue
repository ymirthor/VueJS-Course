<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="text-center">The Super Quiz</h1>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <transition name="flip" mode="out-in">
          <component
            :is="mode"
            @answered="answered($event)"
            @confirmed="mode = 'rud-question'"
          ></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import rudQuestion from "./components/Question.vue";
import rudAnswer from "./components/Answer.vue";

export default {
  data() {
    return {
      mode: "rud-question",
    };
  },
  methods: {
    answered(isCorrect) {
      if (isCorrect) {
        this.mode = "rud-answer";
      } else {
        this.mode = "rud-question";
        alert("Wrong, try again!");
      }
    },
  },
  components: {
    rudQuestion,
    rudAnswer,
  },
};
</script>

<style scoped>
.flip-enter-active {
  animation: flip-in 0.25s ease-out forwards;
}

.flip-leave-active {
  animation: flip-out 0.25s ease-out forwards;
}

@keyframes flip-out {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}

@keyframes flip-in {
  from {
    transform: rotateY(-90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}
</style>