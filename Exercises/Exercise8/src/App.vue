<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button class="btn btn-primary" @click="selectedComponent = 'appBlue'">
          Load Blue Template
        </button>
        <button class="btn btn-success" @click="selectedComponent = 'appGreen'">
          Load Green Template
        </button>
        <button class="btn btn-danger" @click="selectedComponent = 'appRed'">
          Load Red Template
        </button>
        <hr />
        <component :is="selectedComponent">
          <h1 slot="title">Soon May the Wellerman Come</h1>
          <h5 slot="info">This is a sea shanty from New Zealand</h5>
          <p>
            There once was a ship that put to sea <br />
            The name of the ship was the Billy of Tea <br />
            The winds blew up, her bow dipped down <br />
            O blow, my bully boys, blow
          </p>
          <p>
            She had not been two weeks from shore <br />
            When down on her a right whale bore <br />
            The captain called all hands and swore <br />
            He'd take that whale in tow
          </p>
          <p>
            Soon may the Wellerman come <br />
            To bring us sugar and tea and rum <br />
            One day, when the tonguin' is done <br />
            We'll take our leave and go
          </p>
          <p>Take our leave and go</p>
          <p>
            Soon may the Wellerman come <br />
            To bring us sugar and tea and rum <br />
            One day, when the tonguin' is done <br />
            We'll take our leave and go
          </p>
          <p>
            Before the boat had hit the water <br />
            The whale's tail came up and caught her <br />
            All hands to the side harpooned and fought her <br />
            When she dived down below
          </p>
          <p>
            She had not been two weeks from shore <br />
            When down on her a right whale bore <br />
            The captain called all hands and swore <br />
            He'd take that whale in tow
          </p>
          <p>
            Soon may the Wellerman come <br />
            To bring us sugar and tea and rum <br />
            One day, when the tonguin' is done <br />
            We'll take our leave and go
          </p>
          <p>Take our leave and go</p>
          <p>
            Soon may the Wellerman come <br />
            To bring us sugar and tea and rum <br />
            One day, when the tonguin' is done <br />
            We'll take our leave and go
          </p>
          <p>
            Soon may the Wellerman come <br />
            To bring us sugar and tea and rum <br />
            One day, when the tonguin' is done <br />
            We'll take our leave and go
          </p>
          <p>Take our leave and go</p>
          <p>Take our leave and go</p>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import appBlue from "./components/Blue.vue";
import appGreen from "./components/Green.vue";
import appRed from "./components/Red.vue";

export default {
  components: {
    appBlue,
    appGreen,
    appRed,
  },
  data() {
    return {
      selectedComponent: appBlue,
    };
  },
};
</script>

<style>
</style>
