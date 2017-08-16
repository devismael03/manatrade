new Vue({
  el:'#app',
  data: {
    nizami: 0,
    mammad :0,
    shirvan :0,
    momunaxatun : 0

  },
  
  computed:{
    newManat:function(){
      var oldSum=(this.nizami * 500) + (this.mammad * 1000) + (this.shirvan * 10000) + (this.momunaxatun * 50000);
      return  oldSum / 5000;
    }
  }

});
