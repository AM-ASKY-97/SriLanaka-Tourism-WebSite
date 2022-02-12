var app = new Vue({
    el:"#app",

    data:{
        message: '',
        place:[],
    },

    methods: {
      Add: function(){
          console.log(this.message);
          this.place.push(this.message);
          this.message =null;
          this.message=focus();
      },
      remove: function (index) {
        this.place.splice(index, 1);
      },
    },
});