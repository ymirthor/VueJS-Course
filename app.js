new Vue({
  el: '#app',
  data: {
    title: 'VueJS Course',
    links: {
      'Section 23': {
        'Hello World!': 'Section23/part1/index.html'
      },
      'Section 24': {
        'Using variables, functions & template': 'Section24/part1/index.html',
        'Exercise 1': 'Exercises/Exercise1/index.html',
        'Events & updating the DOM': 'Section24/part2/index.html',
        'Exercise 2': 'Exercises/Exercise2/index.html',
        'Updating variables with input field': 'Section24/part3/index.html',
        'Computed & watched variables': 'Section24/part4/index.html',
        'Shorter syntax for v-on: & v-bind:': 'Section24/part5/index.html',
        'Exercise 3': 'Exercises/Exercise3/index.html',
        'Styling': 'Section24/part6/index.html',
        'Exercise 4': 'Exercises/Exercise4/index.html'
      },
      'Section 25': {
        'if, else & show': 'Section25/part1/index.html',
        'Displaying arrays and objects': 'Section25/part2/index.html',
        'Exercise 5': 'Exercises/Exercise5/index.html'
      },
      'Section 26': {
        'Monster Slayer': 'Section26/index.html'
      },
      'Section 27': {
        'Understanding lifespan of a vue instance': 'Section27/index.html'
      },
      'Section 28': {
        'Using development server': 'Section28/index.html'
      },
      'Section 29': {
        'Using components': 'Section29/part1/index.html',
        'Why components use functions for data': 'Section29/part2/index.html'
      }
    }
  }
});
