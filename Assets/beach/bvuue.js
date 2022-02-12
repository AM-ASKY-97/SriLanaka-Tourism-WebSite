new Vue({
    el: '#app',
    data: {
        message:'',
        place:[]
    },

    methods: {
    Add1: function(){
        console.log(this.message);
        this.place.push(this.message);
        this.message =null;
        this.message=focus();
    }
  },
});