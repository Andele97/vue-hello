const { createApp } = Vue;

createApp({
  data(){
    return{
      nome: '',
      cognome: '',
      myClass: 'blue',
      path: './assets/img/',
      imgName: '',
    }
  },

  methods: {
    changeImg(newImg){
      this.imgName = newImg
    },

    changeColor(color){
      this.my
    }

  }

}).mount('#app');