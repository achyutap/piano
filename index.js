var audiod = new Audio('d.mp3');
var audios = new Audio('s.mp3');
var audioa = new Audio('a.mp3');
var audio9 = new Audio('9.mp3');
var audio8 = new Audio('8.mp3');
var audio7 = new Audio('7.mp3');
var audio6 = new Audio('6.mp3');
var audio5 = new Audio('5.mp3');
var audio4 = new Audio('4.mp3');
var audio3 = new Audio('3.mp3');
var audio2 = new Audio('2.mp3');
var audio1 = new Audio('1.mp3');

Vue.config.keyCodes = {
  a:65,
  s:83,
  d:68,
  k1:91,
  k1:98,
  k1:99,
  k1:100,
  k1:101,
  k1:102,
  k1:103,
  k1:104,
  k9:105,
}

const app = new Vue({
  el: "#main",
  // data: {
  //
  // },
  methods: {
    k1: function() {
      audio1.play();
    },

    k2: function() {
      audio2.play();
    },

    k3: function() {
      audio3.play();
    },

    k4: function() {
      audio4.play();
    },

    k5: function() {
      audio5.play();
    },

    k6: function() {
      audio6.play();
    },

    k7: function() {
      audio7.play();
    },

    k8: function() {
      audio8.play();
    },

    k9: function() {
      audio9.play();
    },

    ka: function() {
      audioa.play();
    },

    kd: function() {
      audiod.play();
    },

    ks: function() {
      audios.play();
    },

  },
  computed: {

  },
});
