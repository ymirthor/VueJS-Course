new Vue({
  el: '#app',
  data: {
    playerHP: 100,
    monsterHP: 100,
    playerTurn: true,
    gameInSession: false,
    logs: []
  },
  watch: {
    playerTurn: function () {
      vm = this;
      if (!vm.playerTurn && vm.gameInSession) {
        setTimeout(function () {
          vm.dealDamage(5, 30);
        }, 500 * Math.random() + 200);
      }
    }
  },
  methods: {
    startGame: function () {
      this.gameInSession = this.playerTurn = true;
      this.playerHP = this.monsterHP = 100;
      this.logs = [];
      this.addToLogs('You have picked a fight with the monster!')
    },
    addToLogs: function (message) {
      this.logs.unshift({
        message: message,
        style: this.playerTurn ? 'player-turn' : 'monster-turn'
      });
    },
    dealDamage(min, max) {
      let damage = this.randint(min, max);
      if (this.playerTurn) {
        if (this.monsterHP - damage <= 0) {
          damage = this.monsterHP;
        }
        this.monsterHP -= damage;
      } else {
        if (this.playerHP - damage <= 0) {
          damage = this.playerHP;
        }
        this.playerHP -= damage;
      }
      this.addToLogs(`${this.playerTurn ? 'You deal' : 'Monster deals'} ${damage} HP damage!`);
      this.checkWin();
      this.playerTurn = !this.playerTurn;
    },
    attack: function () {
      if (!this.playerTurn) return;
      this.dealDamage(10, 20);
    },
    specialAttack: function () {
      if (!this.playerTurn) return;
      this.dealDamage(0, 50);
    },
    randint: function (min, max) {
      return Math.round((max - min) * Math.random() + min);
    },
    heal: function () {
      if (!this.playerTurn) return;
      heal = this.randint(0, 30);
      if (heal + this.playerHP >= 100) {
        heal = 100 - this.playerHP;
      }
      this.addToLogs(`You drink a potion, receiving ${heal} HP!`)
      this.playerHP += heal;
      this.playerTurn = false;
    },
    giveUp: function () {
      if (!this.playerTurn) return;
      this.addToLogs('You fled the scene!')
      this.gameInSession = false;
    },
    checkWin: function () {
      if (this.playerHP === 0) {
        this.addToLogs('You have lost!');
        this.gameInSession = false;
      }
      if (this.monsterHP === 0) {
        this.addToLogs('You have won!');
        this.gameInSession = false;
      }
    }
  }
});