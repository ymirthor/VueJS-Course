new Vue({
  el: '#exercise',
  data: {
    myName: 'Ýmir Þórleifsson',
    myAge: 21,
    epicLion: 'https://wallpapercave.com/wp/wp2382903.jpg',
  },
  methods: {
    randomProp: function () {
      return Math.random();
    }
  }
})