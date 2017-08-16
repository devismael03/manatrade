new Vue({
  el:'#app',
  data: {
    nizami: 0,
    mammad :0,
    shirvan :0,
    momunaxatun : 0

  },
  methods:{
    addNizami:function(){
      this.nizami++;
    },
    addMammad:function(){
      this.mammad++;
    },
    addShirvan:function(){
      this.shirvan++;
    },
    addMomunaXatun:function(){
      this.momunaxatun++;
    },
    clear:function(){
      this.nizami=0;
      this.mammad=0;
      this.shirvan=0;
      this.momunaxatun=0;
    }
  },
  computed:{
    newManat:function(){
      var oldSum=(this.nizami * 500) + (this.mammad * 1000) + (this.shirvan * 10000) + (this.momunaxatun * 50000);
      return  oldSum / 5000;
    }
  }

});
