<template>
<div class="gradient">
  <div class="row justify-content-md-center mt-3">
    <div class="col-md-6">
        
        <h1>My views </h1>
        <br>
          <div>
            Hello
          </div>
        <br>
 
   </div>       
    </div>

</div>
</template>
<script>
import { mdbSelect, mdbContainer, mdbRow, mdbView, mdbCol, mdbCard, mdbCardBody, mdbMask, mdbIcon, ViewWrapper, mdbBtn } from 'mdbvue';
import {mapGetters, mapActions,mapState,mapMutations } from 'vuex'
export default {
  layout:'default',
  components: {
    mdbSelect,
    mdbView,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbMask,
    mdbIcon,
    ViewWrapper,
    mdbBtn
  },
   data() {
      return {
        verticalWithin: 0,
        traineeList:[],
         props: ['params'],
      }
    },
    mounted(){
          //console.log("component:"+JSON.stringify(this.params))
    }, 
    computed: {
       ...mapGetters({isTraineeLoading: 'trainers/getTrainerStatus' }),
        processTrainers: function(){
            return this.trainerList
      },
         
    },
    methods: {
     ...mapActions({loadTrainees: 'trainers/loadTrainers'}),
      createTrainers() {
          let self = this
          this.loadTrainers().then(list => self.getExistingTrainerList(list)).catch(function(error){console.log(error.message)});
        },
      getExistingTrainerList(list){
        if(list){
         //console.log('Trainee:'+JSON.stringify(list)) 
         return this.trainerList = list
        }
      },
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['bg-primary', 'text-light']
        } else {
          return ['bg-light', 'text-info']
        }
      }         
    } 
};
</script>
<style scoped>
.loop-container {
  padding: 3rem;
}



@media only screen and (min-width: 600px) {
  /* For tablets: */
  .col-s-1 {width: 8.33%;}
  .col-lg-2 {width: 16.66%;}
  .col-s-3 {width: 25%;}
  .col-s-4 {width: 33.33%;}
  .col-s-5 {width: 41.66%;}
  .col-md-6 {width: 50%;}
  .col-s-7 {width: 58.33%;}
  .col-s-8 {width: 66.66%;}
  .col-s-9 {width: 75%;}
  .col-s-10 {width: 83.33%;}
  .col-s-11 {width: 91.66%;}
  .col-s-12 {width: 100%;}
}
@media only screen and (min-width: 768px) {
  /* For desktop: */
  .col-1 {width: 8.33%;}
  .col-lg-2 {width: 16.66%;}
  .col-3 {width: 25%;}
  .col-4 {width: 33.33%;}
  .col-5 {width: 41.66%;}
  .col-md-6 {width: 50%;}
  .col-7 {width: 58.33%;}
  .col-8 {width: 66.66%;}
  .col-9 {width: 75%;}
  .col-10 {width: 83.33%;}
  .col-11 {width: 91.66%;}
  .col-12 {width: 100%;}
}
</style>


