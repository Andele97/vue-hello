const { createApp } = Vue;

createApp({
  data(){
    return{
      nome: '',
      cognome: '',
      path: './assets/img/',
      imgName: '',
    }
  },

  methods: {
    changeImg(newImg){
      this.imgName = newImg
    }

  }

}).mount('#app');